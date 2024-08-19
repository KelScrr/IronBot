const { MessageEmbed } = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, args, prefix) => {

        const url = `http://some-random-api.ml/binary?text=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send({embed: {
                description: ` <a:carregando:781139321251430431> | ${message.author}, Escreva o texto que você quer transformar em código binario`,
                color: 0xF8F8FF,
                
            }})
        }

        const embed = new MessageEmbed()
            .setTitle('<a:binario1:781920324483809290> Texto em código binário <a:binario1:781920324483809290> ')
            .setDescription(data.binary)
            .setColor('#F8F8FF')
            .setFooter(` ${message.author.tag} `)
            .setTimestamp()
            .setImage('https://media.discordapp.net/attachments/780418103020486656/781164803447586886/teste_2.png')
            .setThumbnail(message.author.displayAvatarURL({ format: "png" }))
            
             
            message.delete().catch(O_o => {});


        await message.channel.send(embed)
    }
    exports.help = {
        name: "binario",
        aliases: [],
        category: "Diversão",
        description: "",
        }