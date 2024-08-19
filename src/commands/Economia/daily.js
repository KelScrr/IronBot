const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");

exports.run = async (client, message, args) => {
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 8.64e+7; // 24 Hours in ms.
    let amount = 500; // How much user will get it in their dailies.

    let lastDaily = await db.get(`lastDaily.${message.author.id}`);
    let buck = await db.get(`account.${message.author.id}.balance`);

    try {
        
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.channel.send(`**Você já pegou seu daily. tente novamente em ${finalTime}!**`);
        } else {
            db.set(`lastDaily.${message.author.id}`, Date.now());
            db.add(`account.${message.author.id}.balance`, amount);
            return message.channel.send(` **${message.author.tag} você pegou seu daily e recebeu 500 coins!**`);
        }

    } catch (error) {
        console.log(error);
        return message.channel.send(`ooops error: ${error}`);
    }
}

exports.help = {
    name: "daily",
    aliases: [],
    category: "Economia",
    description: "",
    }
