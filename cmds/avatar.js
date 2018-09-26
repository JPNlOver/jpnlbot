const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('comando AVATAR pronto!');
});

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send(":arrows_counterclockwise: Gerando avatar...");
    message.channel.send({files: [
        {
            attachment: message.mentions.users.first().displayAvatarURL,
            name: "avatar.png"
        }  
    ]});

    msg.delete();
}

module.exports.help = {
    name: "avatar",
}