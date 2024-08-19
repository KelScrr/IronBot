const discord = require("discord.js")
const weather = require("weather-js") //npm i weather-js

exports.run = async (client, message, args, prefix) => {

    weather.find({search: args.slice(0).join(" "), degreeType: "C" }, function (error, result) {
      //C is celicius
      if(error) return console.log(error)
      if(!args[0]) return message.channel.send("Por favor, escreva um local para ver o tempo")
      
      if(result === undefined || result.length === 0) return message.channel.send("Local invalido")
      
      const current = result[0].current;
      const location = result[0].location;
      
      let weatherembed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${current.skytext}`)
      .setAuthor(`Tempo em ${current.observationpoint}`)
      .setThumbnail(current.imageURL)
      .addField(`Tipo de grau` , `Celcius`)
      .addField(`Temperatura` , `${current.temperature}`) // Spelling mistake sorry
      .addField(`Humidade` , `${current.humidity}%`)
      .addField(`Sensação térmica` , `${current.feelslike}°`)
      
      message.channel.send(weatherembed)
    })
    
  }

  exports.help = {
    name: "clima",
    aliases: [],
    category: "Info",
    description: "",
    };
 