const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('comando DELETE pronto!');
});

module.exports.run = async (bot, message, args) => {
    let toBan = message.guild.member(message.mentions.users.first());

        if(!toBan) return message.channel.send(":exclamation: A quem você se refere?!");

        if(toBan.highestRole.position >= message.member.highestRole.position) return message.channel.send(":no_entry_sign: Você não pode fazer isso com alguém com cargo igual ou superior ao seu!");
        if(toBan.id === message.author.id) return message.channel.send(":worried:");

        

        message.mentions.members.first().ban();

        message.channel.send(":exclamation:" + message.mentions.members.first + "Usuario banido!")

        return;


    }
    
module.exports.help = {
    name: "delete"
}