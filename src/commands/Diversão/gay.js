exports.run = async (client, message, args, prefix) => {
  const user = message.mentions.members.first();
  const GAY = Math.round(Math.random() * 100);

  if (!user) {
    return message.channel.send(`**:rainbow: | eu acho que você é ${GAY}% gay! | :rainbow:**`);
  } else {
    message.channel.send(`**:rainbow: | eu acho que o ${user} é ${GAY}% gay! | :rainbow:**`);
  }
};

exports.help = {
  name: "gay",
  aliases: [],
  category: "Diversão",
  description: "",
  }