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

//
//bot.on("guildMemberSpeaking", (member, bool) => {
//  //var txtMessage = member.display_name+ ' spoke';
//    console.log(`spoke`);
// 
//  //bot.send(txtMessage);
//});

bot.login(config.token);
