const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('Disconects the bot'),

	async execute(interaction) {
        const connection = getVoiceConnection(interaction.guildId);
        connection.destroy();
	},
};