const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {
let convite = new Discord.MessageEmbed()

.setAuthor("IronBot")
.setFooter(`IronBot - 2020`)
.addField("• Meu Convite:", `[[Convite]](https://discordapp.com/oauth2/authorize?=&client_id=777696873679028244&scope=bot&permissions=8)`)
.addField("• Meu Servidor de Suporte:", `***MANUTENÇÃO***`)
.addField("•  Meu site", "***EM BREVE***")
.setColor("#36393e")
message.channel.send(convite)
}

exports.help = {
    name: "invite",
    aliases: [],
    category: "Info",
    description: "",
    };