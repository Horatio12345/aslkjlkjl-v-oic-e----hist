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
	  // hChannel.send('```css\n '+member.displayName+'```');
var d = new Date();
var hour=d.getUTCHours().padStart(2,"0");
var min=d.getUTCMinutes().padStart(2,"0");
var sec=d.getUTCSeconds().padStart(2,"0");
//[11:22:33] .padStart(2,'0')
//hChannel.send('___['+hour+':'+min+':'+sec+']   '+member.displayName+'  ');
	hChannel.send(' '+member.displayName+'  ');		
	}  

});
bot.login(process.env.TOKEN);
//bot.login(config.token);
