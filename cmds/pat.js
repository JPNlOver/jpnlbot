const Discord = require('discord.js');


const client = new Discord.Client();
const fs = require('fs')
var config = JSON.parse(fs.readFileSync('./botsettings.json', 'utf-8'));
const IOTools = require(__dirname + '/utils/IOTools');
const ioTools = new IOTools();
const Command = require(__dirname + '/utils/BaseCmd')
const api = ('dc6zaTOxFJmzC')
const got = require('got')

const token = 'NDQ4ODU3ODcwNDI0MDgwMzk0.DhnQFw.vO9NCNTw4Gci0DBaORMuSm5YjXo';




client.on('message',async message => {


  if (message.content === "<3uuse") {
    message.channel.send('Por favor, especifíque qual item deseja usar.')
    
    
  

}
if (message.content.startsWith("<3uuse ")) {
  
  const nick = message.author.username
  const user = message.author
  const userid = message.author.id
  const user2 = client.users.find('id', userid)
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
    



message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
            let desc = rows[0].descricao
            
            
            
            
            const descint = parseInt(desc)
            if (descint > 0) {
              con.query(`SELECT * FROM inventario WHERE id = "${userid}"`,(err, rows) => {
                
                let newitem = Math.floor(desc - 1)
                
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
      con.query(`UPDATE xp SET desc = 'pseudoTest' WHERE id = '${userid}'`)
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
    var id = message.author.id
  message.author.send ('Por favor, digite o que será inserido em sua descrição:')
  .then((newmsg) => { //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.content, {
      max: 1,
      time: 50000,
      errors: ['time'],
    }).then((collected) => {
      var cc = collected.first().content
      con.query(`UPDATE xp SET desc = '${cc}' WHERE id = '${message.author.id}'`)
      newmsg.channel.send(`Sua descrição foi salva: '${collected.first().content}'`);
      
    }).catch(() => {
      newmsg.channel.send('Please submit a name for your character. To restart Profile creation, please type "!profilecreate" command in Profile Creation channel on the server.');
    });
  });
}
});





client.login(config.token)

module.exports.help = {
    name: "icon",
}