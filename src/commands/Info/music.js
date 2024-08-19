const Discord = require("discord.js");

exports.run = async (client, message, args, prefix) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`🎉 minha lista de comandos de musica 🎉`)
    .setColor("#7c00eb")
    .setDescription(`
    **COMANDOS**
      
      __** > EM BREVE < **__
    
    **i.play** - para tocar uma musica
    **i.p** - para tocar uma musica
    **i.stop** - para parar de tocar as musicas e limpar a lista
    **i.skip** - para pular uma musica pra a proxima da fila`)

  message.channel.send(embed);
};

exports.help = {
  name: "music",
  aliases: [],
  category: "Info",
  description: "",
  };