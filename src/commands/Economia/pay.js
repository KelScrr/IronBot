const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    }

    let balance = db.get(`account.${message.author.id}.balance`);

    if (!user) return message.channel.send("**Por favor, mensione um usuário, ou use o id dele.**");
    if (user.bot || user === client.user) return message.channel.send("**Esse usuário é um bot, portanto não pode receber coins**");
    if (user.id === message.author.id || user === message.author) return message.channel.send("**Quer enviar coins pra si mesmo? esquizofrenico**");

    let amount = parseInt(args[1]);
    if (!amount) return message.channel.send("**Coloque a quantia de coins a serem transferidas**");
    if (isNaN(amount)) return message.channel.send("**Coloque um número válido**");
    // isNaN = is Not a Number.

    if (!balance || balance == 0) return message.channel.send("**Você não tem nem para você,e quer dar pros outros?**");
    if (amount > balance) return message.channel.send("**Você não tem essa quantia.**");
    if (amount === 0) return message.channel.send("**Você quer pagar nada? mão de vaca**.");

    await db.add(`account.${user.id}.balance`, amount);
    await db.subtract(`account.${message.author.id}.balance`, amount);

    return message.channel.send(`**Você acaba de mandar $${amount} para (${user.tag})!**`);
}


exports.help = {
    name: "pay",
    aliases: [],
    category: "Economia",
    description: "",
    }