const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('comando UNMUTE pronto!');
});

module.exports.run = async (bot, message, args) => {
     let toMute = message.guild.member(message.mentions.users.first());
        if(!toMute) return message.channel.sendMessage(":exclamation: A quem você se referiu?");

        let role = message.guild.roles.find(r => r.name === "Muted");

        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":exclamation: Usuario não está mutado!");

        await toMute.removeRole(role);
        message.channel.sendMessage(":loud_sound: " + message.mentions.users.first() + " agora pode falar.")
}

module.exports.help = {
    name: "unmute",
}