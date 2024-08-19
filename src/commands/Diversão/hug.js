const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {

var list = [
  'https://imgur.com/mQZgE6A.gif',
  'https://imgur.com/hGBRbhh.gif',
  'https://imgur.com/HkAxiNx.gif',
  'https://imgur.com/HkAxiNx.gif',
  'https://imgur.com/mfUHWlL.gif',
  'https://imgur.com/epcPPIN.gif',
  'https://imgur.com/hbGUkBL.gif',
  'https://imgur.com/BACItzP.gif',
  'https://imgur.com/DdsTIQJ.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if(!args[0])  return message.channel.send({embed: {
  description: ` <a:Loading:780511763938279427> | ${message.author}, Mensione, ou coloque o id do usuário que você quer abraçar!`,
  color: 0xF8F8FF,
  
}})
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('abraço')
        .setColor('#F8F8FF')
        .setDescription(`${message.author} acaba de abraçar ${user} <a:heart:781958892858900501> `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Ainn, que fofo :3')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
  name: "hug",
  aliases: [],
  category: "Diversão",
  description: "",
  }