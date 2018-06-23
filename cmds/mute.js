const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('comando MUTE pronto!');
});

module.exports.run = async (bot, message, args) => {
     let toMute = message.guild.member(message.mentions.users.first());
        if(!toMute) return message.channel.sendMessage(":exclamation: A quem você se referiu?!");

        if(toMute.id === message.author.id) return message.channel.sendMessage(":x: Você não pode se mutar!!");
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage(":exclamation: Você não pode fazer isso com alguém de cargo igual ou superior ao seu!");

        let role = message.guild.roles.find(r => r.name === "Muted");
        if(!role) {
        try {
            role = await message.guild.createRole({
                name: "Muted",
                color: "##dea9de",
                permissions: []
            });

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
         } catch(e) {
            console.log(e.stack);
          }
        }

        if(toMute.roles.has(role.id)) return message.channel.sendMessage(":no_entry_sign:" + message.mentions.users.first() + "ja está mutado!");

        await toMute.addRole(role);
        message.channel.sendMessage(":mute: " + message.mentions.users.first() + " mutado!")
}

module.exports.help = {
    name: "mute",
}