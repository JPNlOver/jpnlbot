  const Discord = require('discord.js');


const client = new Discord.Client();
const fs = require('fs')
var config = JSON.parse(fs.readFileSync('./botsettings.json', 'utf-8'));


const token = 'NDQ4ODU3ODcwNDI0MDgwMzk0.DhnQFw.vO9NCNTw4Gci0DBaORMuSm5YjXo';





client.on('message', message => {

  if (message.content.startsWith("<3jogar")) {
    if (message.member.hasPermission("MANAGE_WEBHOOKS")) {
    const args2 = message.content.substr("<3jogar".length);
    let msg1 = args2;
client.user.setActivity(msg1)
    
    message.channel.send(':video_game:  Agora estou jogando: ' + '**"' + msg1 + '"**')
}return
message.channel.send('Você não tem permissão para fazer isso!')
    
  }else 
    
    
    if (message.content.startsWith("<3transmitir")) {
    if (message.member.hasPermission("MANAGE_WEBHOOKS")) {
    const args2 = message.content.substr("<3transmitir".length);
    let msg1 = args2;
client.user.setGame(msg1, 'https://www.twitch.tv/jpniover')
    
    message.channel.send(':video_game::satellite:  Agora estou transmitindo: ' + '**"' + msg1 + '"**')
}return
message.channel.send('Você não tem permissão para fazer isso!')
  }else

if (message.content.startsWith("<3assistir")) {
    if (message.member.hasPermission("MANAGE_WEBHOOKS")) {
    const args2 = message.content.substr("<3assistir".length);
    let msg1 = args2;
client.user.setActivity(msg1, { type: 'WATCHING' })
    
    message.channel.send(':tv:  Agora estou assistindo: ' + '**"' + msg1 + '"**')
}return
message.channel.send('Você não tem permissão para fazer isso!')
}else

  if (message.content.startsWith("<3escutar")) {
    if (message.member.hasPermission("MANAGE_WEBHOOKS")) {
    const args2 = message.content.substr("<3escutar".length);
    let msg1 = args2;
client.user.setActivity(msg1, { type: 'LISTENING' })
    
    message.channel.send(':headphones:  Agora estou ouvindo: ' + '**"' + msg1 + '"**')
}return
message.channel.send('Você não tem permissão para fazer isso!')
}})



//type=0 = playing  
//type=1 = streaming  
//type=2 = listening 
//type=3 = watching﻿
client.login(config.token);

module.exports.help = {
    name: "icon",
}