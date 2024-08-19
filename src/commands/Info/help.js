 const Discord = require(`discord.js`);



 exports.run = async (client, message, args, prefix) => {

        let embed = new Discord.MessageEmbed()
        .setColor(`GOLD`)
        .setTitle(`Ajuda - ${message.member.guild.name}`)
        .setDescription(`Reaja com 🛡 para ver comandos de moderação.
        Reaja com 🎉 para ver meus comandos de diversão.
        Reaja com  🛠 para ver meus comandos de utilidades.
        Reaja com 🎵 para ver meus comandos de musíca.
         Reaja com 💵 para ver meus comandos de economia.`)
        
        message.channel.send(message.author, embed).then(msg => { //quando enviar a mensagem...
            msg.react(`⬅️`).then(() => { //quando reagir o primeiro emoji...
            msg.react(`🛡`);
            msg.react(`🎉`);
            msg.react(`🛠`);
            msg.react(`🎵`);
            msg.react(`💵`)
            })


            const moderacao = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🛡` && user.id == message.author.id, {time: 60000})//time: tempo, 1000 = 1sec, 10000 = 10sec

            const utilitarios  = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🛠` && user.id == message.author.id, {time: 60000})

           const economia  = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `💵` && user.id == message.author.id, {time: 60000})
            
            const musica  = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🎵` && user.id == message.author.id, {time: 60000})

             const diversao = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🎉` && user.id == message.author.id, {time: 60000})

            const voltar = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `⬅️` && user.id == message.author.id, {time: 60000})
            moderacao.on(`collect`, r =>{  //quando coletar

                let embed_two = new Discord.MessageEmbed()
                .setColor(`GOLD`)
                .setTitle(`Moderações - ${message.member.guild.name}`)
                .setDescription(`Seja bem-vindo aos comandos de moderação!
                
                **(i.clear)** : Limpa de 1 a 99 mensagens;
                **(i.mute)** : Muta o usuário;
                **(i.unmute)** : Retira o mute do usuário;
                **(i.ban)** : Bane o usuário específicado;
                **(i.slowmode)** : Define tempo de fala no chat;
                **(i.lock)** : bloqueia um chat;
                **(i.unlock)** : Desbloqueia um chat;
                **(i.say)** : O bot repete as mesmas coisas que você digitou;
                **(i.banlist)** : te manda no privado a lista de todos os usuários banidos nesse servidor.

                
                `)
                msg.edit(embed_two)
        r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
            })
           diversao.on(`collect`, r =>{
             let diversao = new Discord.MessageEmbed()
             .setColor(`GOLD`)
             .setTitle(`Diversão - ${message.member.guild.name}`)
             .setDescription(`
             Seja bem-vindo aos comandos de diversão
             
             **(i.cafune <user>)** : Faz carinho no usuário
             **(i.vidente)** : Faça 1 pergunta e o bot vai te responder
             **(i.avatar <user>)** : Mostre a foto de perfil de algum membro
             **(i.avatar)** : Mostra a sua foto de perfil
             **(i.hug <user>)** : Você abraça o usuário!
             **(i.kiss <user>)** : Você beija um membro!!Hmmmm granola, hihi.
             **(i.slap <user>)** : Você da um tapa em um membro. Que feio, dando tapa!
             **(i.coinflip)** : você joga cara ou coroa, e o bot randomiza um dos 2, fazendo assim você ganhar, ou perder
             **(i.gay <user>)** : Mostra de 0 a 100% o quão tal user é gay
             **(i.gay)** : Mostra de 0 a 100% o quão gay você é 
             **(i.kill <user>)** : Mata o usuário que você marcar
             **(i.ship <user> <user>)** mostra o nível de ship entre 2 usuários, de 0 a 100%
             **(i.voadora <user>)** : da uma voadora no usuário específicado 
             **(i.emoji <nome-do-emoji>)** : copia e usa o emoji que você escreveu, mesmo se for gif (só pode ser gif do servidor em que você digitar o comando)
             
             `)
             msg.edit(diversao)
             r.users.remove(message.author.id)
           })

           economia.on(`collect`, r =>{
             let economia = new Discord.MessageEmbed()
             .setColor(`GOLD`)
             .setTitle(`Economia - ${message.member.guild.name}`)
             .setDescription(`
             Seja bem-vindo aos comandos de economia
             
             __**EM BREVE**__
             
             `)
             msg.edit(economia)
             r.users.remove(message.author.id)
           })

           utilitarios.on(`collect`, r =>{
             let utilitarios = new Discord.MessageEmbed()
             .setColor(`GOLD`)
             .setTitle(`Utilitários - ${message.member.guild.name}`)
             .setDescription(`
             Seja bem-vindo aos comandos de utilidades
            
             **(i.convite)** : Mando o link para me adicionar ao seu servidor!
             **(i.uptime)** : Veja a quanto tempo estou online!
             **(i.ping)** : Veja seu ping
             **(i.botinfo)** : Mostra informações sobre o bot
             **(i.userinfo)** : Mostra informações sobre Você
             **(i.userinfo <user>)** : Mostra informações sobre o usuário citado
             **(i.serverinfo)** : Mostra informações sobre o servidor
             **(i.help)** : Mostra todos os meus comandos, e a explicação de cada um ><
             **(i.sorteio <tempo> <canal> <prêmio>) Cria um sorteio no canal específicado, tendo um ganhador do mesmo. (Ex : i.sorteio 1m #chat nitro)
             
             
             `)
             msg.edit(utilitarios)
             r.users.remove(message.author.id)
           })

           musica.on(`collect`, r =>{
             let musica = new Discord.MessageEmbed()
             .setColor(`GOLD`)
             .setTitle(`Musíca - ${message.member.guild.name}`)
             .setDescription(`Seja bem-vindo aos comandos de musíca
             
             **(i.music)** : Mostra todos os comandos de música
             
             `)
             msg.edit(musica)
             r.users.remove(message.author.id)
           })

            voltar.on(`collect`, r =>{ //quando coletar
                let embed_three = new Discord.MessageEmbed()
        .setColor(`GOLD`)
        .setTitle(`Ajuda - ${message.member.guild.name}`)
        .setDescription(`Reaja com 🛡 para ver comandos de moderação.
        Reaja com 🎉 para ver meus comandos de diversão.
        Reaja com 🛠  para ver meus comandos de utilidades.
        Reaja com 💵 para ver meus comandos de economia.
        Reaja com 🎵 para ver meus comandos de musíca.`)
        msg.edit(embed_three)
        r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
            })
        })
    }

    exports.help = {
      name: "help",
      aliases: [],
      category: "Info",
      description: "",
      };