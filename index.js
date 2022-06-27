const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.once('ready', () => {
    console.log('ZeeBot is online!')
});

client.login('OTkxMDQyMzE1MjA2NDE4NDc1.Ga_Pzv.tEX_K6hpwPUekRtfyowJUEotlBRWoddg_q41Ic');