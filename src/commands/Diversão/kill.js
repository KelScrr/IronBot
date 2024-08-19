const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {

var list = [
  'https://i.imgur.com/m8ZtlNO.gif',
  'https://i.imgur.com/3uMLnPC.gif',
  'https://i.imgur.com/kVSTKPb.gif',
  'https://i.imgur.com/duiXoPW.gif',
  'https://i.imgur.com/HshuBMF.gif',
  'https://i.imgur.com/b7cFfKJ.gif',
  'https://i.imgur.com/NWEGNSx.gif',
  'https://i.imgur.com/myXc2FS.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para matar!');
}
/*
message.channel.send(`${message.author.username} **acaba de matar** ${user.username}! `, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('kill')
        .setColor('#F8F8FF')
        .setDescription(`${message.author} acabou de matar ${user} `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('matou')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
  name: "kill",
  aliases: [],
  category: "Diversão",
  description: "",
  }