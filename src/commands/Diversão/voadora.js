const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {


var list = [
  'https://tenso.blog.br/wp-content/2012/11/segunda1.gif',
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar uma voadora');
}
/*
message.channel.send(`${message.author.username} **acaba de dar um tapa em** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('voadora')
        .setColor('#000000')
        .setDescription(`${message.author} **acaba de dar uma voadora em** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Machucou ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}


exports.help = {
  name: "voadora",
  aliases: [],
  category: "Diversão",
  description: "",
  }