const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {

let reason = args.slice(0).join(' ');

if (reason.length < 1){
  return message.channel.send({embed: {
      description: ` ${message.author}, Diga o nick da **\`Skin\`**`,
      color: 0x36393e
  }}).then(msg => msg.delete(5000));
}
  let embed = new Discord.MessageEmbed()


.setImage(`https://mc-heads.net/body/${args[0]}`)
.setFooter(`Pedido por: ${message.author.tag} `,message.author.avatarURL )
.setTimestamp()
.setDescription(` | Nick: **${args[0]}**`)
.setColor("#a32aff")
  message.channel.send(embed)
}


exports.help = {
  name: "mcbody",
  aliases: [],
  category: "Diversão",
  description: "",
  }