const Discord = require('discord.js');


const client = new Discord.Client();


const token = 'NDQ4ODU3ODcwNDI0MDgwMzk0.DecPGg.w49olUdZAi_ULZ0gYBdJID38GJk';



client.on('message', message => {

  if (message.content === '<3ddp') {

    message.channel.send("OOO dono do poraum :kissing_closed_eyes: ");
  }
});


client.login(token);

module.exports.help = {
    name: "ddp",
}