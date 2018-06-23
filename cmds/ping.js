const Discord = require('discord.js');


const client = new Discord.Client();


const token = 'NDQ4ODU3ODcwNDI0MDgwMzk0.DecPGg.w49olUdZAi_ULZ0gYBdJID38GJk';


client.on('ready', () => {
  console.log('Comando PING pronto!');
});
client.on('ready', () => {
  console.log('Comando USERINFO pronto!');
});
client.on('ready', () => {
  console.log('Comando UNMUTE pronto!');
});
client.on('ready', () => {
  console.log('Comando MUTE pronto!');
});

client.on('message', message => {

  if (message.content === '<3ping') {

    message.channel.send("Velocidade de resposta: " + `${client.pings[0]}ms` + ":satellite: ");
  }
});


client.login(token);

module.exports.help = {
    name: "icon",
}