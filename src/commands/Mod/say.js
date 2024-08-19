const Discord = require('discord.js');





exports.run = async (client, message, args, prefix) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`**Você não tem permissão para usar este comando, bobinho. >< hihi**`);
  
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};


exports.help = {
  name: "say",
  aliases: [],
  category: "Mod",
  description: "",
  }