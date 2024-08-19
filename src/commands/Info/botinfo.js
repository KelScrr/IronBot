const { MessageEmbed } = require('discord.js')
const os = require('os')

exports.run = async (client, message, args, prefix) => {

        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Informações sobre mim')
            .setColor('RANDOM')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Dentro de ${client.guilds.cache.size} servidores.`,
                    inline: true
                },
                {
                    name: '📺 Canais',
                    value: `Em ${client.channels.cache.size} canais.`,
                    inline: true
                },
                {
                    name: '👥 Server Membros',
                    value: `E com ${client.users.cache.size} users.`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: false
                },
                {
                    name: '⏳ Data que fui criada',
                    value: 'Eu fui criada oficialmente, dia 15/11/2020',
                    inline: false
                },
                {
                    name: 'Minha Dev',
                    value: `**Fui desenvolvida e criada pela IronScarlett#6666! :heart:**`,
                    inline: true
                }
            )
            .setFooter(`pedido por: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }


    exports.help = {
        name: "botinfo",
        aliases: [],
        category: "Info",
        description: "",
        };