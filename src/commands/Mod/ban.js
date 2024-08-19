const discord = require("discord.js");


exports.run = async (client, message, args, prefix) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Vc nao tem permisao para banir`)
    }
    

    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Por favor mencione um usuario valido`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, Você não pode se banir!`)
    }
    
   
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Por favor colocar uma razao`)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Banimento")
    .setDescription(`Banido ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banido por ${message.author.tag}`);
    
    message.channel.send(embed);
    message.guild.member(target).ban(target);
    
    
    
  }

  exports.help = {
    name: "ban",
    aliases: [],
    category: "Mod",
    description: "Comando para banir outro membro",
  };