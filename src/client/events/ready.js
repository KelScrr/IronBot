module.exports = async (client, message, args, prefix) => {

  let activities = [
    `Utilize i.help para obter ajuda`,
    `${client.guilds.cache.size} servidores!`,
  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "WATCHING"
  }), 1000 * 60);
  client.user
    .setStatus("dnd")
    .catch(console.error);
  console.log("Estou Online!")

  
  // var content = " :heart: **Se você leu, seu cu é meu** :heart: ";
  //var channel = client.guilds.cache
    //.get("762078805731835944")  
    //.channels.cache.get("772658993512185867"); 
  //setInterval(function() {
   // channel.send(content); 
  //}, 1000 * 60 * 60 * 1); 
  //channel.send(content);
  //console.log("Teste 1."); 
  

}