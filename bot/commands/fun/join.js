const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

//TODO: Fix hard set channelId which makes it so the bot will just rejoin the channel the person was in orginally.


module.exports = {
	data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Join a channel')
        .addChannelOption(option => option.setName('channel')
            .setDescription('The channel to join')
            .addChannelTypes(ChannelType.GuildVoice)
            .setRequired(true)
    ),
	async execute(interaction) {
        if (interaction.member.voice.channelId != undefined)  { // Not the best way to do this
		    const connection = joinVoiceChannel({
                channelId: interaction.member.voice.channelId,
                guildId: interaction.guildId,
                adapterCreator: interaction.guild.voiceAdapterCreator,
                selfDeaf: true,
                selfMute: false
            });
        } else {
            await interaction.reply('You are not connected to a voice channel');
        }  

	},
};