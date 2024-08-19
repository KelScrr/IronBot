const Discord = require("discord.js")

exports.run = async (client, message, args, prefix) => {
  var array1 = ["cara", "coroa"];

  var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) 
  return message.channel.send({embed: {
    description: ` <a:carregando:781139321251430431> | ${message.author}, escolha __**cara**__ ou __**coroa**__, e coloque-o na frente do comando`,
    color: 0xF8F8FF,
    
  }})
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send("<a:giveway:781139501853835314> Deu __**" + array1[rand] + "**__ , você ganhou dessa vez! parabéns hihi <a:giveway:781139501853835314>");
  } 
else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send("Deu __**" + array1[rand] + "**__, você perdeu <a:sadmummy:781943191489478668>.. mas não chore, tente novamente! <:fofoa:781939111455621120>"
    );
  }
};

exports.help = {
  name: "coinflip",
  aliases: [],
  category: "Diversão",
  description: "",
  }