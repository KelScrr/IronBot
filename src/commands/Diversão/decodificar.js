const { MessageEmbed } = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, args, prefix) => {

        const url = `http://some-random-api.ml/binary?decode=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send({embed: {
                description: ` <a:carregando:781139321251430431> | ${message.author}, coloque o código binário para mim decodificar! `,
                color: 0xF8F8FF,
                
              }})
        }

        const embed = new MessageEmbed()
            .setTitle('Decodificando o código binário <a:binario1:781920324483809290> ')
            .setDescription(data.text)
            .setTimestamp()
            .setColor('#F8F8FF')
            .setImage('https://media.discordapp.net/attachments/780418103020486656/781164803447586886/teste_2.png')
            .setThumbnail(message.author.displayAvatarURL({ format: "png" }))
             message.delete().catch(O_o => {});

        await message.channel.send(embed)
    }

    exports.help = {
        name: "decodificar",
        aliases: [],
        category: "Diversão",
        description: "",
        }
