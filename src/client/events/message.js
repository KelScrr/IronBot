const Guild = require("../../database/Schemas/Guild.js");
const User = require("../../database/Schemas/User.js");

module.exports = async (client, message) => {
    Guild.findOne({ id: message.guild.id }, async function (error, server) {
        User.findOne({ idU: message.author.id, idS: message.guild.id }, async function (error, user) {

            if (message.author.bot == true) return;

            if (server) {
                if (user) {
                    
                } else {
                    User.create({ idU: message.author.id, idS: message.guild.id });
                    console.log(`Usuário: ${message.author.tag} teve seu documento criado com sucesso!`)
                }
            } else {
                Guild.create({ id: message.guild.id });
                console.log(`Guilda: ${message.guild.name} teve seu documento criado com sucesso!`)
            }

            if (message.content === `<@!${client.user.id}>`)
                message.channel.send(
                    '**Roi, Utilize o comando i.help para saber meus comandos! e i.botinfo para saber mais sobre mim! espero que goste :heart: hihi**'
                );


         
            var prefix;
            prefix = server.prefix;

            if (message.content.indexOf(prefix) !== 0) return;
            let messageArray = message.content.split(" ");
            let cmd = messageArray[0];
            let args = messageArray.slice(1);
            let cmdFile =
              client.commands.get(cmd.slice(prefix.length)) ||
              client.commands.get(
                client.aliases.get(cmd.slice(prefix.length))
              );
            if (cmdFile) {
              return cmdFile.run(client, message, args, prefix);
            }
        })
    })
}