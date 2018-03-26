const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {    
  // join the correct voice channel 
  let vChannel = bot.channels.get(process.env.VCHANNEL);  
   vChannel.join()
   		.then(connection => console.log('Connected'))
  		.catch(console.error);  		
  		//add ffmpeg build pack https://github.com/jayzes/heroku-buildpack-ffmpeg
});

//bot.on("message", (message) => {
//	
//  if (message.content.startsWith("ping")) {
//    message.channel.send("pong!");
//  }
//  if (message.content.startsWith("direct")) {
//	let hChannel = bot.channels.get('427355139431464981');
//  hChannel.send('hello');
//  }
//});

bot.on("guildMemberSpeaking", (member, bool) => { 
	if (bool) {
	let hChannel = bot.channels.get(process.env.TCHANNEL);
	  hChannel.send('**'+member.displayName+'**');
	}  

});
bot.login(process.env.TOKEN);
//bot.login(config.token);
