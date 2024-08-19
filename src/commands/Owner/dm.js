
  exports.run = async (client, message, args, prefix) => {
    if (message.author.id !== '390537203350241290')  
     if (message.author.id !== '401384330527637524') {
        return message.channel.send(`__**Apenas minha dona pode usar esse comando!**__`)
      }
      
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `**Você não mensionou o usuário, ou colocou um ID inválido**`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("Você tem que específicar uma mensagem**");
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("**Esse usuário não pode receber mensagens minhas!**"))
      .then(() => message.channel.send(`**Enviei a mensagem para ${user.user.tag}**`));
  }

exports.help = {
name: "dm",
aliases: [],
category: "Owner",
description: "",
}
