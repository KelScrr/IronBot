const Discord = require("discord.js");


exports.run = async (bot, message, args) => {

 
    
    
    let replies = [
        'Sua mãe é tão gorda que ela entalou no buraco negro .' ,
	    'Sua mãe é tão gorda que se ela jogasse a calcinha dela  para cima aconteceria  um eclipse solar.' ,
	    'Sua mãe é tão gorda que ela usa o empire states  como vibrador.' ,
	    "Sua mãe é tão gorda que ela usa o empire states  como vibrador." ,
    	"sua mãe é tão gorda que ela faz parkour com os planetas." ,
	    "Sua mãe é tão gorda que os centimetros dela são medidos em anos luz ." ,
    	'Sua mãe é tão gorda que se ela usar uma roupa com" H" escrito nela, helicópteros pousariam nela.' ,
    	'Sua mãe é tão gorda que se ela morrer o planeta perde o seu equilibrio natural .' ,
    	'Sua mãe é tão gorda que ela varre o chão da casa dela com uma arvore .' ,
      

    	'Sua mãe é tão gorda que quando o godzilla estava saindo do mar, ele olhou para ela e disse"  volta que deu merda" .' ,
    	'Sua mãe é tão gorda que se um dêmonio possuise o corpo dela ele iria precisar de um GPS para achar a saida. ' ,

    	'Sua mãe é tão gorda que ela tira foto três por quatro via-satélite. ' ,

     ,

        "Sua mãe é tão gorda que se ela se deitar no oceano atlântico ela vira uma ponte que liga os continentes. ",

        ' sua mãe é tão gorda que os peidos dela abrem um buraco na camada de ozonio. ',

      'Sua mãe é tão gorda que usam o umbigo dela como porta aviões.',

      'Sua mãe é tão gorda que se ela fosse trabalhar como reporter ela teria que estar em 10 emissoras ao mesmo tempo. ',

      'sua mãe é tão gorda que se ela sentasse em uma balança ela iria dizer "um de cada vez por favor',

      'Sua mãe é tão gorda que ela tem que passar roupa em uma rodovia.',

      'Sua mãe é tão gorda que se cortassem a carne dela para distribuir mataria a fome na africa. ',

      'Sua mãe é tão gorda que nem mesmo um trator tira ela de casa. ',


      'Sua mãe é tão gorda que ela usa lona de circo como vestido. ',

      'Sua mãe é tão gorda que usam ela como bola de demolição. ',

      'Sua mãe é tão gorda que uma vez chamaram ela para trabalhar como limpador de tunel. ',

      'Sua mãe é tão gorda que quando ela vai tomar banho ela ensaboa todo o box para depois ela começar a se ensaboar dando voltas nele. ',



      'Sua mãe é tão gorda que quando ela sai de salto fino ela acha  petróleo. ',


      '-Sua mãe é tão gorda que a NASA precisou colocar satélites em volta dela.',

      'sua mãe é tão gorda que quando ela bochecha para emchaguar a boca as crianças batem na cara  dela achando que é um balão surpresa. ',

      'Sua mãe é tão gorda que para dar um abraço nela de feliz ano novo tem que começar em julho. ',

      'Sua mãe é tão gorda que quando viajaram para a lua os astronautas olharam para a terra e disseram" esfera cor bege avistada" .',

      'Sua mãe é tão gorda que quando os marinheiros estavam viajando de barco eles olharam para ela e disseram" terra a vista! ".',

      'Sua mãe é tão gorda que ela usa o estadio do maracanã como uma privada.',

      'Sua mãe é tão gorda que ela vive em três  fusos horarios.',

      'Sua mãe é tão gorda que ela usa o coliseu romano como prato',


      'Sua mãe é tão gorda que para ela comer melancia ela não precisa nem cortar em pedaços.',

      'Sua mãe é tão gorda que ela tem seu próprio código de area. '


    ];

    let result = Math.floor((Math.random() * replies.length));
    

    let embed = new Discord.MessageEmbed()
    .setTitle(" Sua Mãe!!!")
    .setColor("#000000")
    
    .addField("Resposta:", replies[result])
    .setFooter(``);

    message.channel.send({embed});
}
exports.help = {
    name: "suamae",
    aliases: [],
    category: "Diversão",
    description: "",
    }
  