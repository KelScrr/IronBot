const { MessageEmbed, Permissions } = require('discord.js');

exports.run = async (client, message, args, prefix) => {

        // code começa aqui
        try {
            const roleName = message.guild.roles.cache.find(r => (r.name === args.toString()) || (r.id === args.toString()))
            console.log(roleName)
            const perms = new Permissions(roleName.permissions.bitfield).toArray()

            const embed = new MessageEmbed()
                .setColor(roleName.color)
                .setTitle(roleName.name)
                .addFields(
                    {
                        name: 'Id do cargo: ',
                        value: roleName.id,
                        inline: true
                    },
                    {
                        name: 'Nome do cargo: ',
                        value: roleName.name,
                        inline: true
                    },
                    {
                        name: 'Mencionavel: ',
                        value: roleName.mentionable ? 'Yes' : 'No',
                        inline: true
                    },
                    {
                        name: 'Permissões do cargo: ',
                        value: perms.join(', ')
                    }
                )

            await message.channel.send(embed)

        } catch (e) {
            return message.channel.send('Esse cargo não existe, ou você colocou alguma letra errada (maiusculo, minusculo)').then(() => console.log(e))
        }

    }
    exports.help = {
        name: "cargo",
        aliases: [],
        category: "Info",
        description: "",
        };