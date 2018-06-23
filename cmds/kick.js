const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('comando KICK pronto!');
});

module.exports.run = async (bot, message, args) => {
    let toKick = message.guild.member(message.mentions.users.first());
	
        if(!toKick) return message.channel.send(":x: :exclamation: A quem você se referiu?");
		
         
		 if (message.member.hasPermission("KICK_MEMBERS")) {
			 if(toKick.highestRole.position >= message.member.highestRole.position) return message.channel.send(":no_entry_sign: Você não pode fazer isso com alguém de cargo igual ou superior ao seu!");
        if(toKick.id === message.author.id) return message.channel.send("Você não pode fazer isso com você mesmo!:joy:");

       




        message.mentions.members.first().kick();

        message.channel.send(":exclamation: Usuário Kickado!!")
        

        return;

   
}else
	message.channel.send("Você não tem permissão para gerenciar membros!");
}
module.exports.help = {
    name: "kick"
}