
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args, prefix) => {

    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("Você não tem permissão!");
      
    
    if(!args.length) {
      return message.channel.send("You're not Write The Message Yet!")
    }
    
    let embed = new MessageEmbed()
    .setColor(`#000000`)
    .setDescription(args.join(" "))
    .setTimestamp()
    
    message.channel.send(embed)
  }

  exports.help = {
    name: "embed",
    aliases: [],
    category: "Mod",
    description: "",
    }



