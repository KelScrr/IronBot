const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const fs = require("fs");

const modules = ["Mod", "Info", "Diversão", "Owner", "Economia"]; // ESSA PARTE TEM QUE TER TODOS OS NOMES DE PASTAS QUE VOCÊ TEM, CASO NÃO TENHA O NOME DELA AQUI OU DÁ ERRO OU NÃO IMPORTA OS COMANDOS, NÃO LEMBRO :)
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const dbIndex = require("./src/database/index.js"); // IMPORT DA DATABASE.jS
dbIndex.start(); // Da start na conexão com a DataBase

modules.forEach((c) => {
  fs.readdir(`./src/commands/${c}/`, (err, files) => {
    if (err) return console.log(err);
    console.log(
      `COMANDOS: Foram carregados ${files.length} comando(s) na pasta ${c}`
    );

    files.forEach((f) => {
      const props = require(`./src/commands/${c}/${f}`);
      client.commands.set(props.help.name, props);
      props.help.aliases.forEach((alias) => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });
});

fs.readdir("./src/client/events", (err, files) => {
  if (err) return console.log(err);
  files.forEach((file) => {
    const event = require(`./src/client/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./src/client/events/${file}`)];
    console.log(`EVENTOS: ${eventName} foi carregado`);
  });
});


client.login("Nzc3Njk2ODczNjc5MDI4MjQ0.X7HMpw.2oVjcpRyeq-jjICjyhE9_qaLVsM");
