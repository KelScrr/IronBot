

    const Discord = require("discord.js");


    exports.run = async (bot, message, args) => {
    
     
        
        
        let replies = [
          "Sim",
          "Não",
          "Talvez",
          "Quem sabe?",
          "Isso é um mistério",
          "Não posso te contar",
          "Meu informante disse que não",
          "Provavelmente",
          "Me pergunte mais tarde!",
          "Claro que não!",
          "Não conte comigo para isso",
          "Dúvido muito",
          "Provavelmente sim",
          "Provavelmente nao",
          "Minha opnião não importa, siga seu coração",
          "Você sabe a resposta"
      
    
    
        ];
    
        let result = Math.floor((Math.random() * replies.length));
        
    
        let embed = new Discord.MessageEmbed()
        .setTitle("**Vidente**")
        .setColor("#F8F8FF")
        
        .addField("Resposta:", replies[result])
        .setFooter(``);
    
        message.channel.send({embed});
    }
    exports.help = {
        name: "vidente",
        aliases: [],
        category: "Diversão",
        description: "",
        }
      