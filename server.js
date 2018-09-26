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
const currencyFormatter = require('currency-formatter')
const Jimp = require(`jimp`)







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
      var nmr1 = parseFloat(xp)
      var nmr2 = parseFloat(msg2)
    let xptotal = Math.floor(nmr1 + nmr2)
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
  let bot7 = '160105994217586689'
  let bot8 = '115385224119975941'
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot1}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot2}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot3}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot4}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot5}'`)
  con.query(`UPDATE xp SET xp = '0'   WHERE id = '${bot6}'`)
  con.query(`UPDATE xp SET xp = '0' WHERE id = '${bot7}'`)
})

       
bot.on('message', message => {
  const msguser = message.author
  const comprador = message.author.username
  var storelogchannel = '491338393972899840' 
  const storelog = bot.channels.find('id', storelogchannel)
  
  
  //PARTE DA LOJA
  if (message.content === "<3comprar") {
    message.channel.send('Por favor, Especifíque o que quer comprar.')
      
  
  
  }
  
  //vip7
  if (message.content.startsWith("<3comprar vip7")) {
    
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **VIP (7 dias)** por 900fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 900
            
            
            const coinint = parseInt(coin)
            if (coinint > 899) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **VIP (7 dias)** com sucesso!');
                const itemcomprado = '**VIP (7 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )} 
  
  //vip15
  
  if (message.content.startsWith("<3comprar vip15")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **VIP (15 dias)** por 1650fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 1650
            
            
            const coinint = parseInt(coin)
            if (coinint > 1649) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **VIP (15 dias)** com sucesso!');
                const itemcomprado = '**VIP (15 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //vip30
  
  if (message.content.startsWith("<3comprar vip30")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **VIP (30 dias)** por 3150fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 3150
            
            
            const coinint = parseInt(coin)
            if (coinint > 3149) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **VIP (30dias)** com sucesso!');
                const itemcomprado = '**VIP (30 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //tagpermanente
  
  if (message.content.startsWith("<3comprar tagp")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **TAG (Permanente)** por 1500fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 1500
            
            
            const coinint = parseInt(coin)
            if (coinint > 1499) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **TAG (Permanente)** com sucesso!');
                const itemcomprado = '**TAG (Permanente)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}
  
  //tagtemporaria
  if (message.content.startsWith("<3comprar tagt")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **TAG (Temporária)** por 450fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 450
            
            
            const coinint = parseInt(coin)
            if (coinint > 449) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **TAG (Temporária)** com sucesso!');
                const itemcomprado = '**TAG (Temporária)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //cor
  
  if (message.content.startsWith("<3comprar cor")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Cor (7 dias)** por 450fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 450
            
            
            const coinint = parseInt(coin)
            if (coinint > 449) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Cor (7 dias)** com sucesso!');
                const itemcomprado = '**Cor (7 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //comandopermanente
  if (message.content.startsWith("<3comprar comandop")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Comando (Permanente)** por 1649fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 1650
            
            
            const coinint = parseInt(coin)
            if (coinint > 1649) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Comando (Permanente)** com sucesso!');
                const itemcomprado = '**Comando (Permanente)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //comandotemporario
  
  if (message.content.startsWith("<3comprar comandot")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Comando (Temporário)** por 599fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 600
            
            
            const coinint = parseInt(coin)
            if (coinint > 599) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Comando (Temporário)** com sucesso!');
                const itemcomprado = '**Comando (Temporário)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //foto
  if (message.content.startsWith("<3comprar foto")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Foto Personalizada** por 299fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 300
            
            
            const coinint = parseInt(coin)
            if (coinint > 299) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Foto personalizada** com sucesso!');
                const itemcomprado = '**Foto personalizada**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //banner
  if (message.content.startsWith("<3comprar banner")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Banner** por 1050fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 1050
            
            
            const coinint = parseInt(coin)
            if (coinint > 1049) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Banner** com sucesso!');
                const itemcomprado = '**Banner**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //xp999
  if (message.content.startsWith("<3comprar 1000xp")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **1000 de experiência** por 500fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 500
            
            
            const coinint = parseInt(coin)
            if (coinint > 499) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Experiência** com sucesso!');
                const itemcomprado = '**1000 de experiência**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}  
  
  //1999xp
  if (message.content.startsWith("<3comprar 2000xp")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **2000 de experiência** por 1000fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 1000
            
            
            const coinint = parseInt(coin)
            if (coinint > 999) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Experiência** com sucesso!');
                const itemcomprado = '**2000 de experiência**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )} 
  
  //2990xp
  if (message.content.startsWith("<3comprar 3000xp")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **3000 de experiência** por 1500fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 1500
            
            
            const coinint = parseInt(coin)
            if (coinint > 1499) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Experiência** com sucesso!');
                const itemcomprado = '**2990 de experiência**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )} 
  
  //4000xp
  
  if (message.content.startsWith("<3comprar 4000xp")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **4000 de experiência** por 2000fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 2000
            
            
            const coinint = parseInt(coin)
            if (coinint > 1999) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Experiência** com sucesso!');
                const itemcomprado = '**4000 de experiência**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}
  
  //5000xp
  
  if (message.content.startsWith("<3comprar 5000xp")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **5000 de experiência** por 2500fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 2500
            
            
            const coinint = parseInt(coin)
            if (coinint > 2499) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Experiência** com sucesso!');
                const itemcomprado = '**5000 de experiência**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )} 
  
  //passe7
  if (message.content.startsWith("<3comprar passe7")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Passe livre (7 dias)** por 300fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 300
            
            
            const coinint = parseInt(coin)
            if (coinint > 299) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Passe livre (7 dias)** com sucesso!');
                const itemcomprado = '**Passe livre (7 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )} 
  
  //passe15
  if (message.content.startsWith("<3comprar passe15")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Passe livre (15 dias)** por 600fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 600
            
            
            const coinint = parseInt(coin)
            if (coinint > 599) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Passe livre (15 dias)** com sucesso!');
                const itemcomprado = '**Passe livre (15 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}
  
  //passe30
  
  if (message.content.startsWith("<3comprar passe30")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Passe livre (30 dias)** por 1200fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 1200
            
            
            const coinint = parseInt(coin)
            if (coinint > 1199) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Passe livre (30 dias)** com sucesso!');
                const itemcomprado = '**Passe livre (30 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )} 
  
  //dj7
  
  if (message.content.startsWith("<3comprar dj7")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Passe livre DJ (7 dias)** por 300fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 300
            
            
            const coinint = parseInt(coin)
            if (coinint > 299) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Passe livre DJ (7 dias)** com sucesso!');
                const itemcomprado = '**DJ (7 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )} 
  
  //dj15
  if (message.content.startsWith("<3comprar dj15")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Passe livre DJ (15 dias)** por 600fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 600
            
            
            const coinint = parseInt(coin)
            if (coinint > 599) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Passe livre DJ (15 dias)** com sucesso!');
                const itemcomprado = '**DJ (15 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )}
  
  //dj30
  
  if (message.content.startsWith("<3comprar dj30")) {
    const userid = message.author.id
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    const nick = message.author.username
    message.channel.send('Você deseja comprar **Passe livre DJ (30 dias)** por 1200fc ?')
    
    .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            let coin = rows[0].coins
            let preco = 1200
            
            
            const coinint = parseInt(coin)
            if (coinint > 1199) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                let item = rows[0].descricao
                let item2 = parseInt(item)
                let newitem = Math.floor(item2 + 1)
                let newcoin = Math.floor(coinint - preco)
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                con.query(`UPDATE xp SET coins = '${newcoin}' WHERE id = '${userid}'`)
            message.channel.send(nick + ', Você comprou um(a) **Passe livre DJ (30 dias)** com sucesso!');
                const itemcomprado = '**DJ (30 dias)**'
                storelog.send(comprador + ' acabou de comprar ' + itemcomprado)
                msguser.send(':shopping_cart: Sua solicitação está na fila, por favor espere até que algum administrador processe seu pedido.')
              })}
            else {
              message.channel.send('Você não tem Fc suficiente para comprar este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  }
       )} 
  
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
  if (message.author.id == '213466096718708737') {
   if(message.embeds.length > 0){
        var embed = message.embeds[0];
        
            // do something
    

const args2 = message.content.substr("<3hack".length);
   var msg1 = args2
var msg2 = msg1.split(" ").pop();
   var url = embed.image.url
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
       }}
  
  
  
  
  /*
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
       }*/
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
  
  // MEMES
  if (message.content === '<3meme') {
    randomNumber = Math.floor(Math.random() * (4 - 1) + 1);

 if(randomNumber == 1){
   
      message.channel.send("**EIS QUE VOCÊ MARCA UMA SURUBA!**", {files: ["https://cdn.glitch.com/aa6f87d5-ee50-4c5e-9d69-6e2ae6ea8f4d%2Fvibrador.mp3"]});

 };
    
    if(randomNumber == 2){
      message.channel.send("**HMMMM SAFADA!**", {files: ["https://cdn.glitch.com/aa6f87d5-ee50-4c5e-9d69-6e2ae6ea8f4d%2Fsafada.mp3"]});
    };
    
    if(randomNumber == 3){
      message.channel.send("**EIS QUE ROLA UM SURUBÃO, MAS VOCÊ MORA LONGE!**", {files: ["https://cdn.glitch.com/aa6f87d5-ee50-4c5e-9d69-6e2ae6ea8f4d%2Feu-foder-vcs.mp3"]});
    };
    

              
    
		// Create the attachment using MessageAttachment
		
		// Send the attachment in the message channel
		
	}
  //MEMES
  
  //LOJA
  if (message.content.startsWith("<3storetest")) {
  let store1Embed = new Discord.RichEmbed()
        .setAuthor(`Store Manager`, `https://cdn.discordapp.com/icons/462343998564990977/787ffba180ace63bf124f2c8f084720e.jpg`) // REPLACE `ANIMEH PIC HERE` With A Pfp
        .setThumbnail(`https://cdn.discordapp.com/icons/462343998564990977/787ffba180ace63bf124f2c8f084720e.jpg`) // REPLACE `ANIMEH PIC HERE` With A Pfp
        .setColor(`RED`)
        .setFooter(`Pagina 1 // Pagina 1`) 
        .addField(`Em Desenvolvimento`, `Essa lista está em desenvolvimento\nCusto: ${currencyFormatter.format(999000, { code: 'BRL' })}`)
        .addField(`Em Desenvolvimento`, `Essa lista está em desenvolvimento\nCusto: ${currencyFormatter.format(999000, { code: 'BRL' })}`)
        .addField(`Em Desenvolvimento`, `Essa lista está em desenvolvimento\nCusto: ${currencyFormatter.format(999000, { code: 'BRL' })}`)
        .addField(`Em Desenvolvimento`, `Essa lista está em desenvolvimento\nCusto: ${currencyFormatter.format(999000, { code: 'BRL' })}`)
        .addField(`Em Desenvolvimento`, `Essa lista está em desenvolvimento\nCusto: ${currencyFormatter.format(999000, { code: 'BRL' })}`)
        .addField(`Em Desenvolvimento`, `Essa lista está em desenvolvimento\nCusto: ${currencyFormatter.format(999000, { code: 'BRL' })}`)
        message.channel.send(store1Embed)
  }
        
  //LOJA
    
      

  //INFO
  if (message.content === "<3info") {
  con.query(`SELECT * FROM xp WHERE id = "${message.author.id}"`,(err, rows) => {
    var exp = rows[0].xp
    var lvl = rows[0].lvl
    var fc = rows[0].coins
    var desc = rows[0].desc
    
    
    var exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Informações sobre ' + message.author.username)
    .setAuthor('FrostLand', 'https://cdn.discordapp.com/icons/462343998564990977/787ffba180ace63bf124f2c8f084720e.jpg', 'https://discord.js.org')
    .setDescription(desc)
    .setThumbnail(message.author.avatarURL)
    .addField('Nickname', message.author.username  )
    .addField('Experiência', exp, false)
    .addField('Level', lvl, false)
    .addField('FrostCoins', fc)
    .setImage(message.author.avatarURL)
    .setTimestamp()
    .setFooter('Coordinator', bot.user.avatarURL);

message.channel.send({ embed: exampleEmbed });
    console.log('xp' + exp)
    console.log('FrostCoins' + fc)
    
  })
  }
  //INFO
  
  //INFO other
  
  if (message.content.startsWith("<3info ")) {
    const target = message.mentions.users.first()
    targetid = target.id
  con.query(`SELECT * FROM xp WHERE id = "${target.id}"`,(err, rows) => {
    var exp = rows[0].xp
    var lvl = rows[0].lvl
    var fc = rows[0].coins
    var desc = rows[0].desc
    
    
    var exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Informações sobre ' + target.username)
    .setAuthor('FrostLand', 'https://cdn.discordapp.com/icons/462343998564990977/787ffba180ace63bf124f2c8f084720e.jpg', 'https://discord.js.org')
    .setDescription(desc)
    .setThumbnail(target.avatarURL)
    .addField('Nickname', target.username  )
    .addField('Experiência', exp, false)
    .addField('Level', lvl, false)
    .addField('FrostCoins', fc)
    .setImage(target.avatarURL)
    .setTimestamp()
    .setFooter('Coordinator', bot.user.avatarURL);

message.channel.send({ embed: exampleEmbed });
    console.log('xp' + exp)
    console.log('FrostCoins' + fc)
    
  })
  }
  
  //INFO other
  
  //dance
  if (message.content === '<3dance') {
    const ayy = bot.emojis.find("name", "Happy2");
    const ayy2 = bot.emojis.find("name", "yaay");
    message.channel.send(`**COMO EU PODERIA RESISTIR A ESSA BALADINHA?** ${ayy} ${ayy2}`)
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);

 if(randomNumber == 1){
   
        message.channel.send({
        "embed": {
                "image": {
                "url": "https://cdn.glitch.com/aa6f87d5-ee50-4c5e-9d69-6e2ae6ea8f4d%2Fgiphy.gif",
                }
            }
        });

 };
    
    if(randomNumber == 2){
   
        message.channel.send({
        "embed": {
                "image": {
                "url": "https://cdn.glitch.com/aa6f87d5-ee50-4c5e-9d69-6e2ae6ea8f4d%2F68775be127cbc43346107697e1a012c6.gif",
                }
            }
        });

 };
    
    if(randomNumber == 3){
   
        message.channel.send({
        "embed": {
                "image": {
                "url": "https://cdn.glitch.com/aa6f87d5-ee50-4c5e-9d69-6e2ae6ea8f4d%2Fmqc5eKX.gif",
                }
            }
        });

 };
    if(randomNumber == 4){
   
        message.channel.send({
        "embed": {
                "image": {
                "url": "https://cdn.glitch.com/aa6f87d5-ee50-4c5e-9d69-6e2ae6ea8f4d%2Faaaa.gif",
                }
            }
        });

 };
    if(randomNumber == 5){
   
        message.channel.send({
        "embed": {
                "image": {
                "url": "https://cdn.glitch.com/aa6f87d5-ee50-4c5e-9d69-6e2ae6ea8f4d%2Ftenor.gif",
                }
            }
        });

 };
  }
  
  //dance
  //teste
  
  //teste
  
  //ship
  if (message.content.startsWith(`<3ship`)) {
        let users = message.mentions.users.map(u => u.username);
  if (users.length < 2) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return bot.emit('commandUsage', message, this.help);
  }

  let shippedName = '';
  for (let i = 0; i < users.length; i++) {
    shippedName += `${users[i].substring(0, users[i].length / 2)}`;
  }

  message.channel.send({
    embed: {

      title: 'SHIP <3',
      description: `${users.join(' + ')} = **${shippedName}**`
    }
  }).catch(e => {
    bot.log.error(e);
  });
};

  //ship
  
  //testi
  if (message.content.startsWith('!say')) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando!");
    //retira o prefixo e o comando deixando somente a mensagem
    const args = message.content.substr("!say ".length)
    
    //procura os membros do servidor em que o comando foi executado
    const list = bot.guilds.get(message.guild.id); 

// pega os membros do servidor e envia a mensagem
list.members.forEach(member => member.user.send(args));
  }
  //testi
  
  //add e set coins
  if (message.content.startsWith("<3setcoins")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando!");
    const args2 = message.content.substr("<3setcoins ".length);
    let msg1 = args2;
    let msg2 = msg1.split(" ").pop();
    con.query(`UPDATE xp SET coins = '${msg2}' WHERE id = '${message.mentions.users.first().id}'`)
    message.channel.send(message.mentions.users.first().username +' definiu os FCs de ' + message.mentions.users.first().username + ' para: **' + msg2 +'**FC')
  }
  
  
  //add e set coins
  
  //idsetcoins
  
  if (message.content.startsWith("<3idsetcoins")) {
    const args = message.content.substr("<3idsetcoins 370031194370211860 ".length)
    const args2 = message.content.substr("<3idsetcoins ".length)
    const xp = args2.substring(0, 19)
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando!");
    console.log(xp)
    con.query(`SELECT * FROM xp WHERE id = "${xp}"`,(err, rows) => {
    var exp = rows[0].xp
    var lvl = rows[0].lvl
    var fc = rows[0].coins
    var desc = rows[0].desc
    var name = rows[0].nick
    
  
    let msg1 = args;
    
    con.query(`UPDATE xp SET coins = '${msg1}' WHERE id = '${xp}'`)
    message.channel.send(message.author.username +" definiu os ₣c's de **' + name + '** para: **' + msg1 +'**₣c")
  }
              )}
  
  //idsetcoins
  
  //xpid
  
  if (message.content.startsWith("<3idinfo")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando!");
    const args = message.content.substr("<3infoid ".length)
  con.query(`SELECT * FROM xp WHERE id = "${args}"`,(err, rows) => {
    var exp = rows[0].xp
    var lvl = rows[0].lvl
    var fc = rows[0].coins
    var desc = rows[0].desc
    var name = rows[0].nick
    
    
    var exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Informações sobre ' + name)
    .setAuthor('FrostLand', 'https://cdn.discordapp.com/icons/462343998564990977/787ffba180ace63bf124f2c8f084720e.jpg', 'https://discord.js.org')
    .setDescription(desc)
    .setThumbnail()
    .addField('Nickname', name  )
    .addField('Experiência', exp, false)
    .addField('Level', lvl, false)
    .addField('FrostCoins', fc)
    .setImage()
    .setTimestamp()
    .setFooter('Coordinator', bot.user.avatarURL);

message.channel.send({ embed: exampleEmbed });
    console.log('xp' + exp)
    console.log('FrostCoins' + fc)
    
  })
  }
  
  //idsetxp
  if (message.content.startsWith("<3idsetxp")) {
    const args = message.content.substr("<3idsetxp 370031194370211860 ".length)
    const args2 = message.content.substr("<3idsetxp ".length)
    const xp = args2.substring(0, 19)
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":exclamation: Você não tem permissão para usar esse comando!");
    console.log(xp)
    con.query(`SELECT * FROM xp WHERE id = "${xp}"`,(err, rows) => {
    var exp = rows[0].xp
    var lvl = rows[0].lvl
    var fc = rows[0].coins
    var desc = rows[0].desc
    var name = rows[0].nick
    
    const args2 = message.content.substr("<3addxp ".length);
    let msg1 = args;
    
    con.query(`UPDATE xp SET xp = '${msg1}' WHERE id = '${xp}'`)
    message.channel.send(message.author.username +' definiu a experiência de **' + name + '** para: **' + msg1 +'**xp')
  }
              )}
  
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
  //use
    if (message.content === "<3use") {
    message.channel.send('Por favor, especifíque qual item deseja usar.')
    
    
  

}
if (message.content.startsWith("<3use ")) {
  
  const nick = message.author.username
  const user = message.author
  const userid = message.author.id
  const user2 = bot.users.find('id', userid)
   const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
  con.query(`SELECT * FROM inventario WHERE id = "${message.author.id}"`,(err, rows) => {
    let item = rows[0].descricao
    let itemint = parseInt (item)
    
    if (itemint > 0) {
      message.channel.send (message.author + 'Você deseja usar o item **Descrição** ?')
      .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
    



message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
            let desc2 = rows[0].descricao
            
            
            
            
            const descint = parseInt(desc2)
            if (descint > 0) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                
                let newitem = Math.floor(desc2 - 1)
                
              con.query(`UPDATE inventario SET descricao = '${newitem}' WHERE id = '${userid}'`)
                })
                con.query(`SELECT * FROM xp WHERE id = "${userid}"`,(err, rows) => {
            user2.send ('Por favor, digite o que será inserido em sua descrição:')
  .then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.content, {
      max: 1,
      time: 50000,
      errors: ['time'],
    }).then((collected) => {
      var cc = collected.first().content
      
      
      fs.writeFile(__dirname + "/descricao.txt", cc, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
        adddesc ()
})
      
      newmsg.channel.send(`Sua descrição foi salva: '${collected.first().content}'`);
      
    }).catch(() => {
      newmsg.channel.send('Please submit a name for your character. To restart Profile creation, please type "!profilecreate" command in Profile Creation channel on the server.');
    });
              
              
  });
                  })
              }
            else {
              message.channel.send('Você não possui este item!')
            }
            })
        }
        else {
            message.channel.send(nick + ', Operação cancelada.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.channel.send('Operação cancelada por inatividade.');
    });
  
  })
      
    } else {
      message.channel.send ('Você não possui este item!')
    }
    
  })
}
  function adddesc () {
    var userid = userid
    fs.readFile(__dirname + '/descricao.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    var content = data
    con.query(`UPDATE xp SET desc = '${content}' WHERE id = '${userid}'`);
      console.log (userid)
      console.log (content)
    })
    
}
});



bot.login(config.token)