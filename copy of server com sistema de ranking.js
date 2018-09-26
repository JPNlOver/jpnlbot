// where your node app starts

// init project
var express = require('express');
var app = express();
const botSettings = require(__dirname + '/botsettings.json');
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({autoReconnect:true});
const mysql = require('mysql')
var config = JSON.parse(fs.readFileSync('./botsettings.json', 'utf-8'));
const prefix = botSettings.prefix;
const http = require('http');


app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(100);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.commands = new Discord.Collection();
bot.mutes = require(__dirname + '/mutes.json'); 

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

bot.on('guildMemberAdd', member => {
  con.query(`INSERT INTO xp SET id='${member.user.id}'`)
  let novomembro = member.user.username
    member.guild.channels.get('462390520623398913').send(":pushpin: - Seja bem-vindo <@" + member.user.id + "> ao nosso servidor, qualquer dúvida contate alguém da staff.");
  member.guild.channels.get('462390520623398913').send('**Leia os canais importantes!**')
  member.guild.channels.get('462390520623398913').send('https://imgur.com/6CXXfMb')
  });

bot.on('guildMemberRemove', member => {
  con.query(`DELETE FROM xp WHERE id ='${member.user.id}'`)
  let novomembro = member.user.username
    member.guild.channels.get('462394106203865098').send(":pushpin: - <@" + member.user.id + "> saiu do servidor, que pena... Volte sempre! (~~ou não~~)"); 
  member.guild.channels.get('462394106203865098').send('https://imgur.com/ugyvnnU')
});

con = mysql.createPool({
host: "mysql472.umbler.com",
user: "mvssbezerra",
password: "marcos2001",
  port: "41890",
database: "xpdb"
});

con.getConnection(err => {
  if(err) throw err;
  console.log("Conectado à database!");
});

function addanime() {
};

function generateXp() {
let min = 10;
let max = 20;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

bot.on("message", async message => {
  var authorID = message.author.id
  var author = message.author
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  var a1 = rows[0].xp;
    if (a1 < 370) {
  if (a1 > 200) {
    if (rows[0].lvl == 0){
    con.query(`UPDATE xp SET lvl = 1 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try {
  message.member.addRole('462686635285413889')  //nivel 1
  .then(console.log)
   
    } catch(err) {}
  }
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 580) {
  if (a1 > 370) {
    if (rows[0].lvl <= 1){
    con.query(`UPDATE xp SET lvl = 2 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462686635285413889')  //nivel 1
  .then(console.log)
  .catch(console.log('Membro ja está com cargo!'));
  message.member.addRole('462686633351839754')  //nivel 2
  .then(console.log)
   
    }catch(err){}
  }
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 810) {
  if (a1 > 580) {
    if (rows[0].lvl <= 2){
    con.query(`UPDATE xp SET lvl = 3 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462686633351839754')  //nivel 2
  .then(console.log)
  .catch(console.error)
  message.member.addRole('462686629933350912')  //nivel 3
  .then(console.log)
   
  }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 1300) {
  if (a1 > 810) {
    if (rows[0].lvl <= 3){
    con.query(`UPDATE xp SET lvl = 4 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462686629933350912')  //nivel 3
  .then(console.log)
   
  message.member.addRole('462686627140206603') //nivel 4
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 1920) {
  if (a1 > 1300) {
    if (rows[0].lvl <= 4){
    con.query(`UPDATE xp SET lvl = 5 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462686627140206603') //nivel 4
  .then(console.log)
   
  message.member.addRole('462686623935496203') //nivel 5
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 2950) {
  if (a1 > 1920) {
    if (rows[0].lvl <= 5){
    con.query(`UPDATE xp SET lvl = 6 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462686623935496203') //nivel 5
  .then(console.log)
   
  message.member.addRole('462686621280632842') //nivel 6*
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 4220) {
  if (a1 > 2950) {
    if (rows[0].lvl <= 6){
    con.query(`UPDATE xp SET lvl = 7 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462686621280632842') //nivel 6*
  .then(console.log)
   
  message.member.addRole('462686617816137750') //nivel 7*
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 6350) {
  if (a1 > 4220) {
    if (rows[0].lvl <= 7){
    con.query(`UPDATE xp SET lvl = 8 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462686617816137750') //nivel 7*
  .then(console.log)
   
  message.member.addRole('462686614288728074') //nivel 8*
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 9500) {
  if (a1 > 6350) {
    if (rows[0].lvl <= 8){
    con.query(`UPDATE xp SET lvl = 9 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462686614288728074') //nivel 8*
  .then(console.log)
   
  message.member.addRole('462687142989004801') //nivel 9*
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 13900) {
  if (a1 > 9500) {
    if (rows[0].lvl <= 9){
    con.query(`UPDATE xp SET lvl = 10 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462687142989004801') //nivel 9*
  .then(console.log)
   
  message.member.addRole('462687137142276096') //nivel 10 
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 20900) {
  if (a1 > 13900) {
    if (rows[0].lvl <= 10){
    con.query(`UPDATE xp SET lvl = 11 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462687137142276096') //nivel 10 
  .then(console.log)
   
  message.member.addRole('462687132595781634') //nivel 11
  .then(console.log)
   
  }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 30999) {
  if (a1 > 20900) {
    if (rows[0].lvl <= 11){
    con.query(`UPDATE xp SET lvl = 12 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462687132595781634') //nivel 11
  .then(console.log)
   
  message.member.addRole('462687140137009152') //nivel 12
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 46810) {
  if (a1 > 30999) {
    if (rows[0].lvl <= 12){
    con.query(`UPDATE xp SET lvl = 13 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462687140137009152') //nivel 12
  .then(console.log)
   
  message.member.addRole('462685212090826773') //nivel 13
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 68580) {
  if (a1 > 46810) {
    if (rows[0].lvl <= 13){
    con.query(`UPDATE xp SET lvl = 14 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462685212090826773') //nivel 13
  .then(console.log)
   
  message.member.addRole('462685208966332426') //nivel 14
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 102870) {
  if (a1 > 68580) {
    if (rows[0].lvl <= 14){
    con.query(`UPDATE xp SET lvl = 15 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462685208966332426') //nivel 14
  .then(console.log)
   
  message.member.addRole('462685205493317651') //nivel 15
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 154305) {
  if (a1 > 102870) {
    if (rows[0].lvl <= 15){
    con.query(`UPDATE xp SET lvl = 16 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462685205493317651') //nivel 15
  .then(console.log)
   
  message.member.addRole('462685200816537611') //nivel 16
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 231457) {
  if (a1 > 154305) {
    if (rows[0].lvl <= 16){
    con.query(`UPDATE xp SET lvl = 17 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462685200816537611') //nivel 16
  .then(console.log)
   
  message.member.addRole('462685197423345674') //nivel 17
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 347185) {
  if (a1 > 231457) {
    if (rows[0].lvl <= 17){
    con.query(`UPDATE xp SET lvl = 18 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462685197423345674') //nivel 17
  .then(console.log)
   
  message.member.addRole('462685186958557204') //nivel 18
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 600000) {
  if (a1 > 347185) {
    if (rows[0].lvl <= 18){
    con.query(`UPDATE xp SET lvl = 19 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462685186958557204') //nivel 18
  .then(console.log)
   
  message.member.addRole('462685181824729088') //nivel 19
  .then(console.log)
   
    }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 999999999999) {
  if (a1 > 600000) {
    if (rows[0].lvl <= 19){
    con.query(`UPDATE xp SET lvl = 20 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    bot.channels.get('462343998564990980').send('<@' + message.author.id + '>' + ' Acaba de upar de nível!')
    }) 
    }
    try{
    message.member.removeRole('462685181824729088') //nivel 19
  .then(console.log)
   
  message.member.addRole('462685178461028352') //nivel 20
  .then(console.log)
   
    con.query(`UPDATE xp SET xp = '600000' WHERE id = '${message.author.id}'`)
    }catch(err){}}
    }
    })
  if (message.content.startsWith("<3setxp")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando!");
    const args2 = message.content.substr("<3addxp ".length);
    let msg1 = args2;
    let msg2 = msg1.split(" ").pop();
    con.query(`UPDATE xp SET xp = '${msg2}' WHERE id = '${message.mentions.users.first().id}'`)
    message.channel.send(message.mentions.users.first().username +' definiu sua experiência para: **' + msg2 +'**xp')
  }
  
  if (message.content.startsWith("<3xp ")) {
  con.query(`SELECT * FROM xp WHERE id = "${message.mentions.users.first().id}"`,(err, rows) => {
    let xp = rows[0].xp
    message.channel.send(message.mentions.users.first().username + ' tem **' + xp + "** de Experiência!")
  })
  }
  if (message.content == ("<3xp")) {
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`,(err, rows) => {
    let xp = rows[0].xp
    message.channel.send('Você' + ' tem **' + xp + "** de Experiência!")
  })
  }
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`,(err, rows) => {
    let authorName = rows[0].nick;
    if(message.author.username != authorName) {
        con.query(`UPDATE xp SET nick = '${message.author.username}' WHERE id = '${message.author.id}'`)  
    }
    
  })
  if (!message.content.startsWith("<3")) {
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`,(err, rows) => {
    if (err) throw err;
    
    let sql;
    
    if (rows.length < 1) {
    sql = `INSERT INTO xp (id, xp) VALUES ('${message.author.id}', '${generateXp()})'`;
    } else {
     let xp = rows[0].xp;
      sql = `UPDATE xp SET xp = ${xp + generateXp()} WHERE id = '${message.author.id}'`;
    }
    con.query(sql);
    console.log('Adicionado experiência para ' + message.author.username)
  });
  }
})

       
bot.on('message', message => {
  
    

if (message.content.startsWith("<3addanime1 ")) {
const args2 = message.content.substr("<3addanime1 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '1'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime2 ")) {
const args2 = message.content.substr("<3addanime2 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '2'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime3 ")) {
const args2 = message.content.substr("<3addanime3 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '3'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime4 ")) {
const args2 = message.content.substr("<3addanime4 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '4'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime5 ")) {
const args2 = message.content.substr("<3addanime5 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '5'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime6 ")) {
const args2 = message.content.substr("<3addanime6 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '6'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime7 ")) {
const args2 = message.content.substr("<3addanime7 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '7'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime8 ")) {
const args2 = message.content.substr("<3addanime8 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '8'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime9 ")) {
const args2 = message.content.substr("<3addanime9 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '9'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3addanime10 ")) {
const args2 = message.content.substr("<3addanime10 ".length);
let msg1 = args2;
con.query(`UPDATE animes SET animes = '${msg1}' WHERE id = '10'`, (err, rows) => {
  if(err) throw err;
})
message.channel.send('Adicionado ' + msg1 +' a lista!')
}
if (message.content.startsWith("<3animelist")) {

con.query(`SELECT * FROM animes`, (err, rows) => {
  if(err) throw err;

  let a1 = rows[0].animes;
  let a2 = rows[1].animes;
  let a3 = rows[2].animes;
  let a4 = rows[3].animes;
  let a5 = rows[4].animes;
  let a6 = rows[5].animes;
  let a7 = rows[6].animes;
  let a8 = rows[7].animes;
  let a9 = rows[8].animes;
  let a10 = rows[9].animes;
  let embed = new Discord.RichEmbed()
              .setAuthor("ㅤ ㅤㅤ  ㅤㅤ ㅤㅤㅤ ㅤㅤ  ㅤㅤ Lista De animes!")
              .setDescription(" ")
              .setColor("#500366")
              .addField("1 - Nome",`${a1}`)
              .addField("2 - Nome",`${a2}`)
              .addField("3 - Nome",`${a3}`)
              .addField("4 - Nome",`${a4}`)
              .addField("5 - Nome",`${a5}`)
              .addField("6 - Nome",`${a6}`)
              .addField("7 - Nome",`${a7}`)
              .addField("8 - Nome",`${a8}`)
              .addField("9 - Nome",`${a9}`)
              .addField("10 - Nome",`${a10}`);

              message.channel.send({embed: embed});
              })
}
if (message.content.startsWith("<3clearlist")) {
  con.query(`UPDATE animes SET animes = 'nenhum'`, (err, rows) => {
    if(err) throw err;
})
message.channel.send('Lista limpa com sucesso!')
}

if (message.content.startsWith("<3sorteio")) {
  randomNumber = Math.floor(Math.random() * (11 - 1) + 1);

 if(randomNumber == 1){
   con.query(`SELECT * FROM animes`, (err, rows) => {
     if(err) throw err;
     let a1 = rows[0].animes;
      message.channel.send("O anime escolhido foi: " + "**" + a1 + "!**")

 })};
   if(randomNumber == 2){
     con.query(`SELECT * FROM animes`, (err, rows) => {
       if(err) throw err;
       let a2 = rows[1].animes;
        message.channel.send("O anime escolhido foi: " + "**" + a2 + "!**")
   })};

   if(randomNumber == 3){
     con.query(`SELECT * FROM animes`, (err, rows) => {
       if(err) throw err;
       let a3 = rows[2].animes;
        message.channel.send("O anime escolhido foi: " + "**" + a3 + "!**")
   })};

   if(randomNumber == 4){
     con.query(`SELECT * FROM animes`, (err, rows) => {
       if(err) throw err;
       let a4 = rows[3].animes;
        message.channel.send("O anime escolhido foi: " + "**" + a4 + "!**")
   })};

   if(randomNumber == 5){
     con.query(`SELECT * FROM animes`, (err, rows) => {
       if(err) throw err;
       let a5 = rows[4].animes;
        message.channel.send("O anime escolhido foi: " + "**" + a5 + "!**")
   })};

   if(randomNumber == 6){
     con.query(`SELECT * FROM animes`, (err, rows) => {
       if(err) throw err;
       let a6 = rows[5].animes;
        message.channel.send("O anime escolhido foi: " + "**" + a6 + "!**")
 })};
 if(randomNumber == 7){
   con.query(`SELECT * FROM animes`, (err, rows) => {
     if(err) throw err;
     let a7 = rows[6].animes;
      message.channel.send("O anime escolhido foi: " + "**" + a7 + "!**")
})};
if(randomNumber == 8){
  con.query(`SELECT * FROM animes`, (err, rows) => {
    if(err) throw err;
    let a8 = rows[7].animes;
     message.channel.send("O anime escolhido foi: " + "**" + a8 + "!**")
})};
if(randomNumber == 9){
  con.query(`SELECT * FROM animes`, (err, rows) => {
    if(err) throw err;
    let a9 = rows[8].animes;
     message.channel.send("O anime escolhido foi: " + "**" + a9 + "!**")
})};
if(randomNumber == 10){
  con.query(`SELECT * FROM animes`, (err, rows) => {
    if(err) throw err;
    let a10 = rows[9].animes;
     message.channel.send("O anime escolhido foi: " + "**" + a10 + "!**")
})}
}
})

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

bot.login(config.token)