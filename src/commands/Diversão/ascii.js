const figlet = require('figlet');

exports.run = async (client, message, args, prefix) => {
    
    if(!args[0])  return message.channel.send({embed: {
        description: ` <a:Loading:780511763938279427> | ${message.author}, Escreva o texto que você quer que eu faça ascii`,
        color: 0xF8F8FF,
        
    }})

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 580 ) return message.channel.send({embed: {
                description: ` <a:errado:781886240223789078> | O maximo de caracteres permitidos por ascii são 15, ${message.author}.
                `,
                color: 0xF8F8FF,
            }})

            message.channel.send('```' + data + '```')
        })
    }

exports.help = {
name: "ascii",
aliases: [],
category: "Diversão",
description: "",
}