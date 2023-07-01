const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');

//I dont really understand how connections work so I need to research the fundamentals of them to understand how they get destroyed


module.exports = {
	data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('Disconects the bot'),

	async execute(interaction) {
        const connection = getVoiceConnection(interaction.guildId);
        connection.destroy();
	},
};