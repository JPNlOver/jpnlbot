const prefix = "<3"
const Discord = require('discord.js');


const client = new Discord.Client();


const token = 'NDQ4ODU3ODcwNDI0MDgwMzk0.DecPGg.w49olUdZAi_ULZ0gYBdJID38GJk';



client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const args2 = message.content.substr("<3loop".length);
const args3 = message.content.substr("abcdefghijklmnopqrstuvwuxyz");;
  const command = args.shift().toLowerCase();
if (message.member.hasPermission("MANAGE_MESSAGES")) {
  
if (command === "loop") {

  let msg1 = args2;
let tempo = 0;
  message.channel.sendMessage("Looping ativado!")
       mdsdoceu = setInterval (looping, 100 * 1000); 
	  function looping () {
        message.channel.sendMessage(msg1)
   }}
	if (message.content === "<3disableloop") { 
	message.channel.sendMessage("Looping desativado!")
   clearInterval(mdsdoceu);
   
} 
if (message.content.startsWith("<3looptime ")) { 
const tempo2 = message.content.substr("!looptime ".length);
	let tempo = tempo2
  message.channel.sendMessage("Tempo configurado para: " + tempo)
}
} return  
	if (message.content.startsWith("<3loop")) {
	message.channel.sendMessage("Você não tem permissão para usar este comando!")
 }
 if (message.content.startsWith("<3disableloop")) {
	message.channel.sendMessage("Você não tem permissão para usar este comando!")
 }
})

 

	


client.login(token);

module.exports.help = {
    name: "icon",
}