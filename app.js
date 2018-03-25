const Discord = require("discord.js");
const bot = new Discord.bot();
const config = require("./config.json");


bot.on("ready", () => {  
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  // join the correct text channel
  
});

bot.on("guildMemberSpeaking ", (member, bool) => {
  var txtMessage = {member.display_name}+ ' spoke';
    console.log(txtMessage);
 
  //bot.send(txtMessage);
});

bot.login(config.token);
