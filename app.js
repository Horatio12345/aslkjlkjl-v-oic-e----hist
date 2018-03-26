const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {    
  // join the correct text channel 
});

bot.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

bot.on("guildMemberSpeaking", (member, bool) => { 
	channel = client.get_channel(427355139431464981)
  channel.send('hello');
});

bot.login(config.token);
