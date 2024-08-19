const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args, prefix) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
        new MessageEmbed()
        .setDescription("Você não tem permissão para usar esse comando, bobinho. hihi")
    )
    if(!message.mentions.channels.first()) return message.channel.send(
        new MessageEmbed()
        .setDescription("**Você não especificou um canal para fechar ex: i.unlock #canal.**")
    )

   await message.mentions.channels.forEach(async channel => {

        if(channel.permissionsFor(message.guild.id).has("SEND_MESSAGES") === true) return message.channel.send("O canal foi aberto.");
        try {
         await channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: true
        });
        message.channel.send(`**<#${channel.id}> canal aberto com sucesso!**`)
        } catch(err) {
            console.log(err);
        }
    });
}

exports.help = {
    name: "unlock",
    aliases: [],
    category: "Mod",
    description: "",
  };