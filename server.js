const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

var help = new Discord.RichEmbed().setTitle("_+-=^EyzAlts^=-+_").setDescription(`**Server Prefix:** \n\n**Fun Commands :**\nyoutube-roulette.\n\n**Useful Commands :**\nadd, subtract, multiply, divide, factorial, sqrt, random, exponent, pythagorean, addvideo, say, repeat, level, prefix, invite, and ping.\n\n**Moderation Commands :** lockdown, warn, mute, purge, ban, kick, unban.`).setColor("#00fff6").setThumbnail("https://cdn.discordapp.com/attachments/313339485725130752/318545971187417091/ayy.png").setFooter("Version 0.0.1 | By LittleWhole").setTimestamp();
client.login(BotID);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setGame(`/help | By skullymax`)
    client.user.setStatus('online');
   });

var sys = require('util');

Plugin = exports.Plugin = function(ph) {
	this.ph = ph;
	this.name = this.ph.name;

	this.title = '8 Ball';
	this.version = '0.1';
	this.author = 'Shaun Walker';

	this.irc = this.ph.irc;

	this.seen = [];

	this.irc.addTrigger(this, '8ball', this.trig8Ball);

};

Plugin.prototype.trig8Ball = function(msg) {
	var c = msg.arguments[0], // channel
		u = this.irc.user(msg.prefix), // user
		m = msg.arguments[1], // message
        chan = this.irc.channels[c], // channel object
        params = m.split(' ');

	params.shift();

	if (typeof params[0] == 'undefined') {
		chan.send('\002Example:\002 ' + this.irc.config.command + '8ball <phrase>');
	} else {

		var lines = [
			"Ask again later",
			"Better not tell you now",
			"Concentrate and ask again",
			"Don't count on it",
			"It is certain",
			"Most likely",
			"My reply is no",
			"My sources say no",
			"No",
			"Outlook good",
			"Outlook not so good",
			"Reply hazy, try again",
			"Signs point to yes",
			"Yes",
			"Yes, definitely",
			"You may rely on it"
		];

		var item = lines[Math.floor(Math.random()*lines.length)];
		chan.send(item);

	}
};

var preview = "**Free Alt** Name: simon.storfors@gmail.com Pass:KramTomat123"

client.on('message', message => {
  if (message.content === '/generate') {
      message.author.sendMessage(preview);
}
});

var RoleID = ''
var RoleText = "Use key /use {secretkey}"
var BotID = "NDM0MTI0NzQ2ODIxNDY4MTYw.DbINvA.gPzPNJQKNMpXyTh2jYW1XoL2Hlw"

client.on('message', message => {
  if (message.content === '/use') {
    message.member.addRole(RoleID)
  .then(console.log)
  .catch(console.error);
    message.reply(RoleText)
    message.member.removeRole('')
    message.member.addRole('Starter')

}
});

var help = "**Commands: `/help /free /starter /advanced /god /use {key}`**"

client.on('message', message => {
  if (message.content === '/help') {
      message.channel.sendMessage(help);
}
});

var info = "Buy key from here:"

client.on('message', message => {
  if (message.content === '/useinfo') {
      message.channel.sendMessage(info);
}
});

client.login(BotID);
