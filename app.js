const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {    
  // join the correct voice channel 
//  let vChannel = bot.channels.get('427352629379727364');  
//   vChannel.join()
//   		.then(connection => console.log('Connected'))
//  		.catch(console.error);
});

bot.on("message", (message) => {
	
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith("direct")) {
	let hChannel = bot.channels.get('427355139431464981');
  hChannel.send('hello');
  }
});

bot.on("guildMemberSpeaking", (member, bool) => { 
	
	let hChannel = bot.channels.get('427355139431464981');
  hChannel.send('voice');
  
  //427355139431464981  log text channel
  //427352629379727364  General voice channel
});

bot.login(config.token);
