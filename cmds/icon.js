const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send(":arrows_counterclockwise: Gerando avatar...");
    message.channel.send({files: [
        {
            attachment: message.guild.iconURL,
            name: "icon.png"
        }  
    ]});

    msg.delete();
}

module.exports.help = {
    name: "icon",
}