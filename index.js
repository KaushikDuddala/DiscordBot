
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, yt_token } = require('./config.json');



const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);



const YouTube = require('simple-youtube-api');
const youtube = new YouTube
(yt_token);
const channel = 814884952599953459;
const ytdl = require('ytdl-core');
const Util = require("discord.js"); 
const queue = new Map();

client.on('message', async msg => { 
    let message = msg;
  
      if (message.author.bot) return;
      if (message.channel.type === "dm") return; 
      let prefix = ">"
      if (!msg.content.startsWith(prefix)) return undefined;
  
      const args = msg.content.split(' ');
      const searchString = args.slice(1).join(' ');
      const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
      const serverQueue = queue.get(msg.guild.id);

      let command = msg.content.toLowerCase().split(' ')[0];
      command = command.slice(prefix.length)
});
