const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {    
  // join the correct voice channel 
  let channel = client.channels.get('427352629379727364');  
});

bot.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith("direct")) {
	channel = bot.get_channel(427355139431464981);
  channel.send('hello');
  }
});

bot.on("guildMemberSpeaking", (member, bool) => { 
	bot.channels.id=(427355139431464981);
  channel.send('hello');
  
  //427355139431464981  log text channel
  //427352629379727364  General voice channel
});

bot.login(config.token);
