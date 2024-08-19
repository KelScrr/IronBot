const Guild = require("../../database/Schemas/Guild.js"); // COMO O PREFIXO É UM COMANDO DE GUILD, VOCÊ DEVE IMPORTAR O ARQUIVO Guild.js

exports.run = async (client, message, args, prefix) => {
  // EM TODOS OS COMANDOS USE EXATAMENTE NESSA ORDEM OS IMPORTS.
  Guild.findOne({ id: message.guild.id }, async function (err, server) {
    // COLOCA A PARTE DE PERMISSÃO DEPOIS PRA QUEM NÂO FOR ADMIN DO SERVER NÃO CONSEGUIR USAR O COMANDO

    const prefixos = args[1];
    if (!prefixos) {
      return message.channel.send(
        `${message.author}, meu prefixo atual no seu servidor é **\`${prefix}\`**, caso deseje alterar ele use **${prefix}prefix set <PREFIXO>**`
      ); // CASO QUEIRA PEGAR A INFO DO PREFIXO PARA MANDAR NA MENSAGEM BASTA USAR ${prefix}, NÃO SE ESQUEÇA DO IMPORT NO exports.run
    }
    if (args[0] == "set") {
      if (prefixos.length > 5) {
        // ISSO AQUI NÃO DEIXA INSERIR UM PREFIXO COM MAIS DE 5 LETRAS/NÚMEROS/SÍMBOLOS
        return message.channel.send(
          `${message.author}, o prefixo inserido é muito grande, o máximo de caracteres são 5.`
        );
      } else if (prefixos === server.prefix) {
        return message.channel.send(
          `${message.author}, o prefixo inserido é o mesmo setado atualmente escolha outro.`
        );
      } else {
        message.channel.send(
          `${message.author}, meu prefixo em seu servidor foi alterado para **\`${prefixos}\`** com sucesso!`
        );
        await Guild.findOneAndUpdate(
          { id: message.guild.id },
          { $set: { prefix: prefixos } }
        ); // ESSA PARTE FAZ ATUALIZAR NA DATABASE, EXEMPLO DE COMO SERIA O DO USER ->
        /* await User.findOneAndUpdate(
          { idU: message.author.id, idS: message.guild.id },
          { $set: { xp: xp } }
        ); */
      }
    }
  });
};

exports.help = {
  name: "prefix",
  aliases: [],
  category: "Mod",
  description: "Comando para ver seu avatar ou de outro membro",
}; // VOCÊ DEVE COLOCAR ISSO NO FINAL DE TODOS OS SEUS COMANDOS, ALTERANDO A CATEGORY PRO NOME DA PASTA E O NAME PRO NOME DO COMANDO, CASO QUEIRA COLOCAR ALIASES PODE COLOCAR QUE FUNCIONA
// CASO QUERIA CRIAR MAIS UMA PASTA TIPO, DIVERSÃO, VOCÊ DEVE ADICIONAR ELA NA index.js TAMBÉM
