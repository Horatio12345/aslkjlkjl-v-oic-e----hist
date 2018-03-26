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

bot.on("guildMemberSpeaking", (member, bool) => { 
	if (bool) {
	let hChannel = bot.channels.get(process.env.TCHANNEL);
	  hChannel.send('```css '+member.displayName+'```');
	}  

});
bot.login(process.env.TOKEN);
//bot.login(config.token);
