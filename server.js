    const Discord = require("discord.js");
	const client = new Discord.Client();
	const ytdl = require("ytdl-core");
	const request = require("request");
	const getYouTubeID = require("get-youtube-id");
	const fetchVideoInfo = require("youtube-info");
	const fs = require("fs")

	var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

	const yt_api_key = config.yt_api_key;
	const bot_controller = config.bot_controller;
	const prefix = config.prefix;
	const discord_token = config.discord_token;

  var guilds = {};


	client.login(discord_token);

	client.on('message', function (message) {
		const member = message.member
		const mess = message.content.toLowerCase();
		const args = message.content.split(' ').slice(1).join(" ");

    if(!guilds[message.guild.id]) {
      guilds[message.guild.id] = {
        queue: [],
        queueNames: [],
        isPlaying: false,
        dispatcher: null,
        voiceChannel: null,
        skipReq: 0,
        skippers: []
      }
    }

		if (mess.startsWith(prefix + "play")){
      if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
		if(guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
		getID(args, function (id) {
			add_to_queue(id, message);
			fetchVideoInfo(id, function (err, videoInfo) {
				if (err) throw new Error(err);
				message.reply("adicionado a playlist **" + videoInfo.title + "**");
        guilds[message.guild.id].queueNames.push(videoInfo.title)

		});
		});
		} else {
			isPlaying = true;
			getID(args, function (id) {
				guilds[message.guild.id].queue.push(id);
				playMusic(id, message);
				fetchVideoInfo(id, function (err, videoInfo){
					if (err) throw new Error(err);
          guilds[message.guild.id].queueNames.push(videoInfo.title)
					message.reply(" tocando agora: **" + videoInfo.title + "**");
	});
		})
		}
    } else {
      message.reply("você precisa estar em um canal de voz!");
    }
	} else if (mess.startsWith(prefix + "skip")) {
	if (guilds[message.guild.id].skippers.indexOf(message.author.id) === -1) {
		guilds[message.guild.id].skippers.push(message.author.id);
		guilds[message.guild.id].skipReq++;
		if (guilds[message.guild.id].skipReq >= Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2)) {
			skip_song(message);
			message.reply("Seu pedido é uma ordem. Próximo!")
	}else {
		message.reply("Você precisa de mais" + Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2) - guilds[message.guild.id].skipReq) = "** votos para eu poder pular!";
	}
	} else {
		message.reply("você já votou!")
	};
} else if (mess.startsWith(prefix + "plist")) {

  var message2 = "```";
for (var i = 0; i < guilds[message.guild.id].queueNames.length; i++) {
var temp = (i + 1) + ": " + guilds[message.guild.id].queueNames[i] + (i === 0 ? "**(Current Song)**" : "") + "\n";
if ((message2 + temp).length <= 2000 - 3){
  message2 += temp;
} else {
  message2 += "```";
  message.channel.send(message2);
  message2 = "```";
}
}
message2 += "```";
message.channel.send(message2);
} else if (mess.startsWith(prefix + "disconnect")) {
  if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
    message.guild.voiceConnection.disconnect()  
} else {
  message.reply("você precisa estar em um canal de voz!");
}
}
});

	client.on('ready', function () {
		console.log("ESTOU PRONTO!")
	});
	function skip_song(message) {
		guilds[message.guild.id].dispatcher.end();
		if (guilds[message.guild.id].queue.length > 1) {
			playMusic(guilds[message.guild.id].queue[0]. message);
		} else {
			guilds[message.guild.id].skipReq = 0;
			guilds[message.guild.id].skippers = [];
		}
	}


	function playMusic (id, message) {
		guilds[message.guild.id].voiceChannel = message.member.voiceChannel;

		guilds[message.guild.id].voiceChannel.join().then(function (connection) {
			stream = ytdl("https://www.youtube.com/watch?v=" + id, {
				filter: 'audioonly'
	});
	guilds[message.guild.id].skipReq = 0
	guilds[message.guild.id].skippers = [];

	guilds[message.guild.id].dispatcher = connection.playStream(stream)
	guilds[message.guild.id].dispatcher.on('end', function () {
		guilds[message.guild.id].skipReq = 0;
		guilds[message.guild.id].skippers = [];
		guilds[message.guild.id].queue.shift();
    guilds[message.guild.id].queueNames.shift();
		if (guilds[message.guild.id].queue.length === 0) {
			guilds[message.guild.id].queue = [];
      guilds[message.guild.id].queueNames = [];
			guilds[message.guild.id].isPlaying = false;
		} else {
      setTimeout(function () {
			playMusic(guilds[message.guild.id].queue[0], message);
    }, 500);

		};
	})
    })
  }
	function getID(str, cb) {
		if (isYoutube(str)) {
			cb(getYouTubeID(str));
		} else {
			search_video(str, function (id) {
				cb(id);
			});
		}
	}

	function add_to_queue(strID, message) {
		if (isYoutube(strID)) {
			guilds[message.guild.id].queue.push(getYouTubeID(strID));
		} else {
			guilds[message.guild.id].queue.push(strID);
		}
	}

	function search_video(query, callback) {
		request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
			var json = JSON.parse(body);

			callback(json.items[0].id.videoId);
		});
	}
	function isYoutube(str) {
		return str.toLowerCase().indexOf("youtube.com") > -1;
	}
