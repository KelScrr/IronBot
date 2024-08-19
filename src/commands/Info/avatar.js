const Discord = require("discord.js");

exports.run = async (client, message, args, prefix) => {
  let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    message.author;

  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed()
    .setColor(`#4cd8b2`)
    .setTitle(`Avatar de ${user.username}`)
    .setImage(avatar)
    .setFooter(
      `• Pedido por: ${message.author.tag}`,
      message.author.displayAvatarURL({ format: "png" })
    );
  message.channel.send(embed);
};

exports.help = { 
  name: "avatar",
  aliases: [],
  category: "Info",
  description: "Comando para ver seu avatar ou de outro membro",
};
