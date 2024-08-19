const Discord = require("discord.js");
const User = require("../../database/Schemas/User.js");

exports.run =  async (xerphos, message, args) => {

console.log(`Comando anc - used adm ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    

User.findOne({_id: message.author.id}, function (erro, usuario) {
    if(message.member.hasPermission("ADMINISTRATOR"))   {

if(!args[0]) {
    return message.channel.send({embed: {
        description: `**${message.author},** Desculpe, você não **escreveu** nada`,
        color:  0x36393e
    }}).then(msg => msg.delete(5000));
}


var sayMessage = args.join(" ");


const embed = new Discord.MessageEmbed()

.setTitle('<a:sininho:780511757898743868>**ANÚNCIO**<a:sininho:780511757898743868>')
.setDescription(sayMessage)
.setColor('#FFFF00')
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setImage('https://media.discordapp.net/attachments/780418104605540392/781151913404137482/teste_1.png')

message.channel.send(embed).then(async msg => {
    
            })
        } else {
            const embed = new Discord.MessageEmbed()
    
            .setColor("#FFFF00")
            .setDescription(`| ${message.author}, você não tem **permissão** para executar esse **comando**`)
            message.channel.send(embed);
        }
    })
}

exports.help = {
    name: "anuncio",
    aliases: [],
    category: "Mod",
    description: "Comando para banir outro membro",
  };