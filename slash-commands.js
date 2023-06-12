const { SlashCommandBulder } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { clientId, guildId, token } = require('./config.json');

const commands = [
    new SlashCommandBulder()
        .setName('ping')
        .setDescription('Replies with pong'),
]


const rest = new REST({ version: '10'}).setToken(token)

rest.put(Routses.applicationGuildCommands(clientId,guildId), {body: commands.map(command => command.toJSON() ) })
    .then(() => console.log('Successful registered commands'))
    .catch(console.error);