exports.run = async (client, message, args, prefix) => {
  const m = await message.channel.send('ping?');

  m.edit(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};

exports.help = {
  name: "ping",
  aliases: [],
  category: "Info",
  description: "",
  };