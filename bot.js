const botSettings = require("jpnlbot/app/botSettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({autoReconnect:true});

const prefix = botSettings.prefix;

bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json"); 

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0 ) {
        console.log("Nenhum comando para carregar!");
        return;
    } 

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(`O bot está funcionando! ${bot.user.username}`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "channel") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice[1];

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
//mute
    if(command === `${prefix}mute`) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":exclamation: Você não tem permissão de `Gerenciar Mensagens`.");

    }

//Unmute
    if(command === `${prefix}unmute`) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Você não tem permissão de `Gerenciar Mensagens`.");

        
        return;
    }
//ban
    if(command === `${prefix}delete`) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry_sign: You are not allowed to `Delete Members`!");



        return;
    }
//kick
    if(command === `${prefix}kick`) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":exclamation: Você não tem permissão de `Expulsar Usuários`!");


        
        return;
    }
});

bot.login(botSettings.token);
