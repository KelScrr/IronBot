const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
    const amount = parseInt(args[0]);
    const result = Math.floor(Math.random() * 10);
    const balance = db.get(`account.${message.author.id}.balance`);

    if (!amount) return message.channel.send("**Por favor, insira o valor**");
    if (isNaN(amount)) return message.channel.send("**Isso não é um número**");
    if (amount > balance || !balance || balance === 0) return message.channel.send("**Você não tem essa quantia**");
    
    // Optional:
    if (amount < 200) return message.channel.send("Você não tem coins para jogar! o mínimo é **200**.");

    let cooldown = 15000; // 15 Seconds.
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastGamble = await db.get(`lastGamble.${message.author.id}`);

    if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastGamble));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        return message.channel.send(`**Wooo muito rapido! você precisa eserar **${second}** segundos para jogar novamente.**`);
    }

    // 50:50
    if (result < 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.subtract(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`**Ahh, que pena :/ você perdeu $${amount}. Boa sorte na próxima**`);
    } else if (result > 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.add(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`**Woohoo! Você ganhou $${amount}!**`);
    }
}

exports.help = {
    name: "jogar",
    aliases: [],
    category: "Economia",
    description: "",
    }