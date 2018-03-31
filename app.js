const Discord = require("discord.js");
const bot = new Discord.Client();

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
  	vlChannel.send('`'+year+'-'+month+'-'+day+' ['+hour+':'+min+':'+sec+'] `  '+newMember.displayName+'`'+newMember.user.username+'#'+newMember.user.discriminator+'` ***JOINED*** _'+newUserChannel.name+'_');
  	ttsChannel.send('/tts'+newMember.displayName+' JOINED '+newUserChannel.name.replace(/\s/g, '')+'');
  }
  else {
		if (newUserChannel === undefined) {
			//user left channel
			vlChannel.send('`'+year+'-'+month+'-'+day+' ['+hour+':'+min+':'+sec+'] `  '+oldMember.displayName+'`'+oldMember.user.username+'#'+oldMember.user.discriminator+'` ***LEFT*** _'+oldUserChannel.name+'_');
			ttsChannel.send('/tts'+oldMember.displayName+' LEFT '+oldUserChannel.name.replace(/\s/g, '')+'');
			}
		else {
			//user switched channel
			if (newUserChannel!=oldUserChannel) {
				vlChannel.send('`'+year+'-'+month+'-'+day+' ['+hour+':'+min+':'+sec+'] `  '+oldMember.displayName+'`'+oldMember.user.username+'#'+oldMember.user.discriminator+'` ***SWITCHED*** _'+oldUserChannel.name+'_ to _'+newUserChannel.name+'_');
				ttsChannel.send('/tts'+oldMember.displayName+' SWITCHED '+oldUserChannel.name.replace(/\s/g, '')+' to '+newUserChannel.name.replace(/\s/g, '')+'');
				//str = str.replace(/\s/g, '');
				}
			}
  }		
});

bot.login(process.env.TOKEN);
//bot.login(config.token);
