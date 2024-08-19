exports.run = async (client, message, args, prefix) => {
    if (!args[0]) return message.reply("Por favor, especificar o bug. Exemplo:\n `i.say Não está funcionando, acontece tal, tal e tal erro`");
    if (args[0] === "bug") return message.reply("Por favor, especificar o bug. \n  `**Exemplo:** i.say Não está funcionando, acontece tal, tal e tal erro`");
    args = args.join(" ");
    message.reply("**Obrigada por reportar, logo iremos olhar seu report! :)** ");
    const content = `\`\`\`**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID:  **${message.guild.id}**\`\`\``;
    client.channels.cache.get('777905207941791785').send(content)
}
exports.help = {
  name: "bug",
  description: "report a bug ",
  usage: "d!bug <bug>",
  example: "d!bug createrole command not work"
}
exports.conf = {
  aliases: [""],
  cooldown: 5
}

exports.help = {
  name: "bug",
  aliases: [],
  category: "Info",
  description: "",
  };