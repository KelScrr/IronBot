const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args, prefix) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
        new MessageEmbed()
        .setDescription("Você não tem permissão para executar esse comando ex: i.lock #canal.")
    )
    if(!message.mentions.channels.first()) return message.channel.send(
        new MessageEmbed()
        .setDescription("Você não especificou um canal para fechar.")
    )

   await message.mentions.channels.forEach(async channel => {

        if(channel.permissionsFor(message.guild.id).has("SEND_MESSAGES") === false) return message.channel.send("Esse canal já está fechado.");
        try {
         await channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        });
        message.channel.send(`<#${channel.id}> o canal foi fechado com sucesso.`)
        } catch(err) {
            console.log(err);
        }
    });
}

exports.help = {
    name: "lock",
    aliases: [],
    category: "Diversão",
    description: "",
    }