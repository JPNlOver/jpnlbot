const Discord = require('discord.js');


const client = new Discord.Client();
const fs = require('fs')
var config = JSON.parse(fs.readFileSync('./botsettings.json', 'utf-8'));


const token = 'NDQ4ODU3ODcwNDI0MDgwMzk0.DhnQFw.vO9NCNTw4Gci0DBaORMuSm5YjXo';


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

    let start = Date.now(); message.channel.send(message.channel.id, 'Pong! ').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setTitle(`🔔 Pong!`)
        .setColor(0xff2f2f)
        .addField("📶 Latencia", `${diff}ms`, true)
        .addField("💻 Host", `${API}ms`, true)
        message.edit(embed);
      
    });

}
  
});


client.login(config.token);

module.exports.help = {
    name: "icon",
}