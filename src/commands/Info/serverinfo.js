const Discord = require('discord.js');
const moment = require('moment');
moment.updateLocale('pt-BR');

exports.run = async (client, message, args, prefix) => {
        let membros = message.guild.members.cache
        let emojis = message.guild.emojis.cache
        let texto = message.guild.channels.cache.filter(ch => ch.type === 'text')
        let voz = message.guild.channels.cache.filter(bh => bh.type === 'voice')

        const embed = new Discord.MessageEmbed()
        .setTitle(`<a:raio:781165961272754216>Informações - ${message.guild.name}<a:raio:781165961272754216>`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField(`<a:type:781139083190730763> **Nome:**`, `${message.guild.name}`)
        .addField(`<:file:781139404855967744> **ID:**`, `${message.guild.id}`)
        .addField(`<:people:781138084762091530> **Membros:**`, `${message.guild.memberCount}`)
        .addField(`<:relogio:781139035208024085> **Criação:**`, `${moment(message.guild.createdTimestamp).format('ll')}`)
        .addField(`<a:sininho:780511757898743868> **Emojis:**`, `${emojis.size}`)
        .addField(`<a:texto:781163251345522698> **Canais de Texto:**`, `${texto.size}`)
        .addField(`<:mic:781164001778073641> **Canais de Voz:**`, `${voz.size}`)
        .setColor('#F8F8FF')
        .setImage('https://media.discordapp.net/attachments/780418103020486656/781164803447586886/teste_2.png')

        message.channel.send(embed)
    }

    exports.help = {
        name: "serverinfo",
        aliases: [],
        category: "Info",
        description: "",
        };