const { MessageEmbed } = require("discord.js");
const ms = require("ms");


exports.run = async (client, message, args, prefix) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
        new MessageEmbed()
        .setDescription("Você não tem permissão para usar esse comando, bobinho. hihi")
    )
    if (!args[0]) return message.channel.send(`**Você não especificou o tempo! (ex : 1m, 1h, 1d)** `);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `**Você não usou o comando corretamente**`
      );
    if (isNaN(args[0][0])) return message.channel.send(`**Isso nã é um número!**`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `** Você não especificou o canal que irá acontecer o sorteio**!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`**Nenhum prêmio específicado!**`);
    message.channel.send(`**Sorteio criado em ${channel}**`);
    let Embed = new MessageEmbed()
      .setTitle(`**Novo sorteio!**`)
      .setDescription(
        `O admin ${message.author} abriu um sorteio valendo **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setFooter('fim do sorteio')
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reações: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `**Ninguém reagiu, então não tiveram ganhadores!**`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `** O ganhador do prêmio **${prize}** foi... 🎉🎉 ${winner} 🎉🎉** __**Parabéns!**__`
      );
    }, ms(args[0]));
  }

  exports.help = {
    name: "sorteio",
    aliases: [],
    category: "Mod",
    description: "",
  };