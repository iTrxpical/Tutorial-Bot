const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs on the Tutorial Bot.`);
    client.user.setPresence({ game: { name: 'with people | Don't DM me', type: '3' } });
    client.user.setStatus("online");
  });
  
  client.on("message", function(message) {
  if (message.author.equals(client.user)) return;

  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
case "help":
message.author.sendMessage("This is a test bot for a tutorial! ;0")
break;

  client.login(process.env.BOT_TOKEN);
