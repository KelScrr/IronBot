const math = require('mathjs');

const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {

        if(!args[0]) return message.channel.send('**Por favor, escreva a questão**');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('escreva uma questão **valida** ')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculador')
        .addField('Pergunta', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resposta', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }

    exports.help = {
        name: "calcular",
        aliases: [],
        category: "Info",
        description: "",
        };