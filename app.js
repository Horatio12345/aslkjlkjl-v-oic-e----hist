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
var hour=String("0"+d.getUTCHours()).slice(-2);
var min=String("0"+d.getUTCMinutes()).slice(-2);
var sec=String("0"+d.getUTCSeconds()).slice(-2);
//[11:22:33]
hChannel.send('`['+hour+':'+min+':'+sec+']`   '+member.displayName+' ');
	//hChannel.send(' '+member.displayName+'  ');		
	}  

});
bot.on("voiceStateUpdate", (oldMember, newMember) =>{
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  let vlChannel = bot.channels.get(process.env.VLCHANNEL);

var d = new Date();
var hour=String("0"+d.getUTCHours()).slice(-2);
var min=String("0"+d.getUTCMinutes()).slice(-2);
var sec=String("0"+d.getUTCSeconds()).slice(-2);
  if (oldUserChannel === undefined) {
  	//user joined channel
  	vlChannel.send('`['+hour+':'+min+':'+sec+'] `  '+newMember.displayName+' JOINS '+newUserChannel);
  }
  else {
		if (newUserChannel === undefined) {
			//user left channel
			vlChannel.send('`['+hour+':'+min+':'+sec+'] `  '+oldMember.displayName+' LEAVES '+oldUserChannel);
			}
		else {
			//user switched channel
			vlChannel.send('`['+hour+':'+min+':'+sec+'] `  '+oldMember.displayName+' SWITCHES '+oldUserChannel+' to '+newUserChannel);
			}
  }		
});
bot.login(process.env.TOKEN);
//bot.login(config.token);
