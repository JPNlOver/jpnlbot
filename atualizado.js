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
const moment = require ("moment")
const remote = require('remote-file-size');
const FFloodProtection = require('flood-protection');







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
let min = 2;
let max = 10;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

bot.on("message", async message => {
  var authorID = message.author.id
  var author = message.author
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  var a1 = rows[0].xp;
    if (a1 < 250) {
  if (a1 > 120) {
    if (rows[0].lvl == 0){
    con.query(`UPDATE xp SET lvl = 1 WHERE id = '${message.author.id}'`, (err, rows) => {
      message.channel.send('<@' + message.author.id + '> Upou para o nível 1! Agora ele está oficialmente participando do servidor!')
  con.query(`SELECT * FROM story WHERE lvl = "1"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      })
    }) 
    }
    try {
  message.member.addRole('462686635285413889')  //nivel 1
   
   
    } catch(err) {}
  }
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 580) {
  if (a1 > 250) {
    if (rows[0].lvl <= 1){
    con.query(`UPDATE xp SET lvl = 2 WHERE id = '${message.author.id}'`, (err, rows) => {
      con.query(`SELECT * FROM story WHERE lvl = "2"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
        message.channel.send('<@' + message.author.id + '> Upou para o nível 2!')
      })
  if(err) throw err;
    }) 
      }
    try{
    message.member.removeRole('462686635285413889')  //nivel 1
   
  .catch();
  message.member.addRole('462686633351839754')  //nivel 2
   
   
    }catch(err){}
  }
    }
  })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 870) {
  if (a1 > 580) {
    if (rows[0].lvl <= 2){
    con.query(`UPDATE xp SET lvl = 3 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    con.query(`SELECT * FROM story WHERE lvl = "3"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 3!')
      })
    }) 
    }
    try{
    message.member.removeRole('462686633351839754')  //nivel 2
   
  .catch(console.error)
  message.member.addRole('462686629933350912')  //nivel 3
   
   
  }catch(err){}}
    }
    })
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`, (err, rows) => {
  const a1 = rows[0].xp;
    if (a1 < 1300) {
  if (a1 > 870) {
    if (rows[0].lvl <= 3){
    con.query(`UPDATE xp SET lvl = 4 WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
    con.query(`SELECT * FROM story WHERE lvl = "4"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 4!')
      })
    }) 
    }
    try{
    message.member.removeRole('462686629933350912')  //nivel 3
   
   
  message.member.addRole('462686627140206603') //nivel 4
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "5"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 5!')
      })
    }) 
    }
    try{
    message.member.removeRole('462686627140206603') //nivel 4
   
   
  message.member.addRole('462686623935496203') //nivel 5
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "6"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 6!')
      })
    }) 
    }
    try{
    message.member.removeRole('462686623935496203') //nivel 5
   
   
  message.member.addRole('462686621280632842') //nivel 6*
   
   
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
      con.query(`SELECT * FROM story WHERE lvl = "7"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 7!')
      })
    }) 
    }
    try{
    message.member.removeRole('462686621280632842') //nivel 6*
   
   
  message.member.addRole('462686617816137750') //nivel 7*
   
   
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
      con.query(`SELECT * FROM story WHERE lvl = "8"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 8!')
      })
    }) 
    }
    try{
    message.member.removeRole('462686617816137750') //nivel 7*
   
   
  message.member.addRole('462686614288728074') //nivel 8*
   
   
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
      con.query(`SELECT * FROM story WHERE lvl = "9"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 9!')
      })
    }) 
    }
    try{
    message.member.removeRole('462686614288728074') //nivel 8*
   
   
  message.member.addRole('462687142989004801') //nivel 9*
   
   
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
      con.query(`SELECT * FROM story WHERE lvl = "10"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 10!')
      })
    }) 
    }
    try{
    message.member.removeRole('462687142989004801') //nivel 9*
   
   
  message.member.addRole('462687137142276096') //nivel 10 
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "11"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 11!')
      })
    }) 
    }
    try{
    message.member.removeRole('462687137142276096') //nivel 10 
   
   
  message.member.addRole('462687132595781634') //nivel 11
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "12"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 12!')
      })
    }) 
    }
    try{
    message.member.removeRole('462687132595781634') //nivel 11
   
   
  message.member.addRole('462687140137009152') //nivel 12
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "13"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 13!')
      })
    }) 
    }
    try{
    message.member.removeRole('462687140137009152') //nivel 12
   
   
  message.member.addRole('462685212090826773') //nivel 13
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "14"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 14!')
      })
    }) 
    }
    try{
    message.member.removeRole('462685212090826773') //nivel 13
   
   
  message.member.addRole('462685208966332426') //nivel 14
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "15"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 15!')
      })
    }) 
    }
    try{
    message.member.removeRole('462685208966332426') //nivel 14
   
   
  message.member.addRole('462685205493317651') //nivel 15
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "16"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 16!')
      })
    }) 
    }
    try{
    message.member.removeRole('462685205493317651') //nivel 15
   
   
  message.member.addRole('462685200816537611') //nivel 16
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "17"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 17!')
      })
    }) 
    }
    try{
    message.member.removeRole('462685200816537611') //nivel 16
   
   
  message.member.addRole('462685197423345674') //nivel 17
   
   
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
    bcon.query(`SELECT * FROM story WHERE lvl = "18"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 18!')
      })
    }) 
    }
    try{
    message.member.removeRole('462685197423345674') //nivel 17
   
   
  message.member.addRole('462685186958557204') //nivel 18
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "19"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Upou para o nível 19!')
      })
    }) 
    }
    try{
    message.member.removeRole('462685186958557204') //nivel 18
   
   
  message.member.addRole('462685181824729088') //nivel 19
   
   
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
    con.query(`SELECT * FROM story WHERE lvl = "20"`, (err, rows) => {
  const a1 = rows[0].story;
        message.author.send(a1)
      message.channel.send('<@' + message.author.id + '> Chegou ao nível 20! e agora terminou sua aventura!(?)')
      })
    }) 
    }
    try{
    message.member.removeRole('462685181824729088') //nivel 19
   
   
  message.member.addRole('462685178461028352') //nivel 20
   
   
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
  if (message.content.startsWith("<3addxp")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando!");
    con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`,(err, rows) => {
    const args2 = message.content.substr("<3addxp ".length);
    let msg1 = args2;
    var msg2 = msg1.split(" ").pop();
    let xp = rows[0].xp;
    let xptotal = parseInt(xp) + parseInt(msg2)
    con.query(`UPDATE xp SET xp = ${xptotal} WHERE id = '${message.mentions.users.first().id}'`)
    message.channel.send(message.author.username +' adicionou: **' + msg2 +'** de experiencia para ' + message.mentions.users.first().username)
    })
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
    if(message.channel.id != "454001537627455488" || "454024567204085761" || "454782616286265364" || "460963065182289921" || "471066302547492865" || "471066550389178388" || "471067067337015296") {
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
  }}
  let bot1 = '448857870424080394'
  let bot2 = '297153970613387264'
  let bot3 = '213466096718708737'
  let bot4 = '159985870458322944'
  let bot5 = '235088799074484224'
  let bot6 = '172002275412279296'
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot1}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot2}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot3}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot4}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot5}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot6}'`)
})

       
bot.on('message', message => {
  //PARTE DA LOJA
  if (message.content.startsWith("<3coin ")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando em outras pessoas!");
  con.query(`SELECT * FROM xp WHERE id = "${message.mentions.users.first().id}"`,(err, rows) => {
    let coin = rows[0].coins
    message.channel.send(message.mentions.users.first().username + ' tem **' + coin + "** FrostCoins!")
  })
  }
  if (message.content == ("<3coin")) {
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`,(err, rows) => {
    let coin = rows[0].coins
    message.channel.send('Você' + ' tem **' + coin + "** FrostCoins!!")
  })
  }
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`,(err, rows) => {
    let authorName = rows[0].nick;
    if(message.author.username != authorName) {
        con.query(`UPDATE xp SET nick = '${message.author.username}' WHERE id = '${message.author.id}'`)  
    }
  })
  //PARTE DA LOJA
  
  //PARTE DO DAILY
  if (message.content.startsWith("<3daily")) {
    let moment1 = moment().format('L')
    con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`,(err, rows) => {
      let lastdaily = rows[0].lastdaily;
      let coin = rows[0].coins;
      let give = '150'
      
                               
      if (lastdaily != moment1) {
          
        message.channel.send('Você recebeu **150** FrostCoins!')
      con.query(`UPDATE xp SET lastdaily = '${moment1}' WHERE id = '${message.author.id}'`)
        let givedcoins = parseInt(coin) + parseInt(give)
        con.query(`UPDATE xp SET coins = '${givedcoins}' WHERE id = '${message.author.id}'`)
        
      } else{
      message.channel.send ('Você já pegou seu crédito diario! Volte amanhã.')
      }
      })
    }
  
  
  
  //PARTE DO DAILY
  
    // PARTE DO COMPARISON
  
 if (message.content.startsWith("<3comparar")) {

const args2 = message.content.substr("<3comparar".length);
   var msg1 = args2
var msg2 = msg1.split(" ").pop();
   var url = msg2
remote(url, function(err, o) {
  console.log(o)
  message.channel.send('o tamanho desta imagem ' + o)
  console.log(msg2)
 })
       }
  //PARTE DO COMPARISON
  
      // PARTE DO HACK
  
 if (message.content.startsWith("<3hack")) {

const args2 = message.content.substr("<3hack".length);
   var msg1 = args2
var msg2 = msg1.split(" ").pop();
   var url = msg2
remote(url, function(err, o) {
  console.log(o)
  try {
    if (o != 'undefined') {
      
  con.query(`SELECT * FROM hack WHERE tamanho = '${o}'`, (err, rows) => {
    
    let resposta = rows[0].nome
    

    
  message.channel.send('psst! essa personagem é o(a) **' + resposta + '**')
    
    
  console.log(msg2)
  })
      } else {
             message.channel.send(':disappointed_relieved: Eu infelizmente não vou poder te ajudar, eu não conheço este personagem!')
    }
  }
  catch(err) {
    message.channel.send('esse personagem não existe na database, por favor adicione-o!')
  }
 })
       }
  //PARTE DO HACK
  //PARTE DO ICON
  if (message.content.startsWith("<3icon")) {
    message.delete(0)
    var embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setTitle('Icone do servidor ' + message.guild.name)
    .setDescription('[link] ' + "(" + message.guild.iconURL + ")")
    .setImage(message.guild.iconURL)
    .setFooter('Pedido por' + message.author.username)
    message.channel.send({embed})
  }
  //PARTE DO ICON
  
  
  //PARTE DO ANTI-FLOOD
 

 
 

  //PARTE DO ANTI-FLOOD
    

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
  if (message.content.startsWith("<3rank")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando!");
    con.query(`SELECT xp, nick from xp ORDER BY xp DESC LIMIT 99`,(err, rows) => {
    const args2 = message.content.substr("<3rank ".length);
    let msg1 = args2;
    var msg2 = msg1.split(" ").pop();
    let xp1 = rows[0].xp;
	let nick1 = rows [0].nick;
	let xp2 = rows[1].xp;
	let nick2 = rows [1].nick;
	let xp3 = rows[2].xp;
	let nick3 = rows [2].nick;
	let xp4 = rows[3].xp;
	let nick4 = rows [3].nick;
	let xp5 = rows[4].xp;
	let nick5 = rows [4].nick;
	let xp6 = rows[5].xp;
	let nick6 = rows [5].nick;
	let xp7 = rows[6].xp;
	let nick7 = rows [6].nick;
	let xp8 = rows[7].xp;
	let nick8 = rows [7].nick;
	let xp9 = rows[8].xp;
	let nick9 = rows [8].nick;
	let xp10 = rows[9].xp;
	let nick10 = rows [9].nick;
    let embed = new Discord.RichEmbed()
              .setAuthor("ㅤ ㅤㅤ  ㅤㅤ ㅤㅤㅤ ㅤㅤ  ㅤㅤ Rank do Servidor!!")
              .setDescription(" ")
              .setColor("#500366")
              .addField("1 - " + `${nick1}` + " (" + `${xp1}` + ")", "ㅤ")
              .addField("2 - " + `${nick2}` + " (" + `${xp2}` + ")", "ㅤ")
              .addField("3 - " + `${nick3}` + " (" + `${xp3}` + ")", "ㅤ")
              .addField("4 - " + `${nick4}` + " (" + `${xp4}` + ")", "ㅤ")
              .addField("5 - " + `${nick5}` + " (" + `${xp5}` + ")", "ㅤ")
              .addField("6 - " + `${nick6}` + " (" + `${xp6}` + ")", "ㅤ")
              .addField("7 - " + `${nick7}` + " (" + `${xp7}` + ")", "ㅤ")
              .addField("8 - " + `${nick8}` + " (" + `${xp8}` + ")", "ㅤ")
              .addField("9 - " + `${nick9}` + " (" + `${xp9}` + ")", "ㅤ")
              .addField("10 - " + `${nick10}` + " (" + `${xp10}` + ")", "ㅤ");

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