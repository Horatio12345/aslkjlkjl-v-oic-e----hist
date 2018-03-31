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
var year=String(d.getUTCFullYear());
var month=String("0"+(d.getUTCMonth()+1)).slice(-2);
var day=String("0"+d.getUTCDate()).slice(-2);
var hour=String("0"+d.getUTCHours()).slice(-2);
var min=String("0"+d.getUTCMinutes()).slice(-2);
var sec=String("0"+d.getUTCSeconds()).slice(-2);
//[11:22:33]
		hChannel.send('`'+year+'-'+month+'-'+day+' ['+hour+':'+min+':'+sec+'] `  '+member.displayName+' 				`'+member.user.username+'#'+member.user.discriminator+'` ');
//hChannel.send('`'+year+'-'+month+'-'+day+' ['+hour+':'+min+':'+sec+'] `  '+member.displayName+' ');
	//hChannel.send(' '+member.displayName+'  ');		
	}  
});

bot.on("voiceStateUpdate", (oldMember, newMember) =>{
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  let vlChannel = bot.channels.get(process.env.VLCHANNEL);
  let ttsChannel = bot.channels.get(process.env.TTSCHANNEL);

var d = new Date();
var year=String(d.getUTCFullYear());
var month=String("0"+(d.getUTCMonth()+1)).slice(-2);
var day=String("0"+d.getUTCDate()).slice(-2);
var hour=String("0"+d.getUTCHours()).slice(-2);
var min=String("0"+d.getUTCMinutes()).slice(-2);
var sec=String("0"+d.getUTCSeconds()).slice(-2);
  if (oldUserChannel === undefined) {
  	//user joined channel
  	vlChannel.send('`'+year+'-'+month+'-'+day+' ['+hour+':'+min+':'+sec+'] `  '+newMember.displayName+'`'+newMember.user.username+'#'+newMember.user.discriminator+'` ***JOINED*** _'+newUserChannel+'_');
  	ttsChannel.send(newMember.displayName+' ***JOINED*** _'+newUserChannel+'_');
  }
  else {
		if (newUserChannel === undefined) {
			//user left channel
			vlChannel.send('`'+year+'-'+month+'-'+day+' ['+hour+':'+min+':'+sec+'] `  '+oldMember.displayName+'`'+oldMember.user.username+'#'+oldMember.user.discriminator+'` ***LEFT*** _'+oldUserChannel+'_');
			ttsChannel.send(oldMember.displayName+' ***LEFT*** _'+oldUserChannel+'_');
			}
		else {
			//user switched channel
			if (newUserChannel!=oldUserChannel) {
				vlChannel.send('`'+year+'-'+month+'-'+day+' ['+hour+':'+min+':'+sec+'] `  '+oldMember.displayName+'`'+oldMember.user.username+'#'+oldMember.user.discriminator+'` ***SWITCHED*** _'+oldUserChannel+'_ to _'+newUserChannel+'_');
				ttsChannel.send(oldMember.displayName+' ***SWITCHED*** _'+oldUserChannel+'_ to _'+newUserChannel+'_');
				}
			}
  }		
});

bot.login(process.env.TOKEN);
//bot.login(config.token);
