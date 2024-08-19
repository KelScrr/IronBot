const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args, prefix) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Você é fraco, lhe falta permissão!**').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('**Por favor, coloque o id do usuário a ser desbanido!**').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('**Usuário invalido!**').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : '**sem razão**';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`**Você desbaniu ${user.user.tag} com sucesso!**`)
                    .setColor('#00ff00')
                    .addField('ID do usuário', user.user.id, true)
                    .addField('Nick do usuário', user.user.tag, true)
                    .addField('Motivo do banimento', user.reason != null ? user.reason : 'Sem razão')
                    .addField('Motivo do unban', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`**O(a) ${member.tag} não está banido!**`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('An error has occurred!')
        });

    }

    exports.help = {
        name: "unban",
        aliases: [],
        category: "Mod",
        description: "",
      };
