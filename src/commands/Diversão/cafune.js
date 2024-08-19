const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {

var list = [
  'https://imgur.com/p29IAp1.gif',
  'https://imgur.com/vbXWL99.gif',
  'https://imgur.com/7xRSZCP.gif',
  'https://imgur.com/nph5ojV.gif',
  'https://imgur.com/r9nI55n.gif',
  'https://imgur.com/tjUfYST.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) 
 return message.channel.send({embed: {
  description: ` <a:inv_b:781889585029709834> | ${message.author}, lembre-se de mencionar um usuário válido para fazer cafune`,
  color: 0xF8F8FF,
  
}})

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('cafune <a:cafune:781938932052131860>')
        .setColor('#F8F8FF')
        .setDescription(`${message.author} acaba de fazer cafune ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('q lindos :3 ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
  name: "cafune",
  aliases: [],
  category: "Diversão",
  description: "",
  }