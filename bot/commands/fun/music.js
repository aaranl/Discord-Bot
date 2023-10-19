const { EmbedBuilder, SlashCommandBuilder, PermissionFlagBits, VoiceChannel, GuildEmoji } = require ("discord.js");
const client = require ("../../index.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("music")
        .setDescription("Music system")
        .addSubcommand(subcommand =>
            subcommand.setName("play")
                .setDescription("Play a song.")
                .addStringOption(option =>
                    option.setName("query")
                        .setDescription("Provide name or URL of the song")
                    
                )
        )

        .addSubcommand(subcommand =>
            subcommand.setName("options")
                .setDescription("Select an option.")
                .addStringOption(option =>
                    option.setName("options")
                        .setDescription("Select an option.")
                        .setRequired(true)
                        .addChoices(
                            {name: "queue", value: "queue"},
                            {name: "skip", value: "skip"},
                            {name: "pause", value: "pause"},
                            {name: "resume", value: "resume"},
                            {name: "stop", value: "stop"}
                        )
                )
        ), 
        async execute(interaction) {
            const {options, member, build, channel } = interaction;

            const subcommand = options.getSubcommand;
            const query = options.getString("query");
            const option = options.getString("options");
            const voiceChannel = member.voice.channel;

            const embed = new EmbedBuilder;

            if(!voiceChannel) {
                embed.setColor("Red").setDescription("You must be in a voice channel to execute music commands.");
                return interaction.reply({ embeds: [embed], ephemeral: true});
            }
            
            if(!member.voice.channelId == guild.member.me.voice.channelId) {
                embed.setColor("Red").setDescription(`You can't use the music player as it is already active in <#${guild.members.me.voice.channelId}`);
                return interaction.reply({ embeds: [embed], ephemeral: true});
            }

            try {
                switch(subcommand) {
                    case "play":
                        client.distube.play(voiceChannel, query, {testChannel: channel, member: member});
                        return interaction.reply({ content: "Music Require Recieved"});
                    case "settings":
                        const queue = await client.distube.getQueue(voiceChannel);

                        if (!queue) {
                            embed.setColor("Red").setDescription("No active queue");
                            return interaction.reply({ embeds: [embed], ephemeral: true});
                        }
                        
                        switch(option) {
                            case "skip":
                                await queue.skip(voiceChannel);
                                embed.setColor("Green").setDescription("Song has been skipped");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            case "stop":
                                await queue.stop(voiceChannel);
                                embed.setColor("Green").setDescription("Song has been stopped");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            case "pause":
                                await queue.pause(voiceChannel);
                                embed.setColor("Green").setDescription("Song has been paused");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            case "resume":
                                await queue.resume(voiceChannel);
                                embed.setColor("Green").setDescription("Song has been resumed");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            case "queue":
                                embed.setColor("Purple").setDescription(`${queue.songs.map(
                                    (song, id) => `\n**${id + 1}.** ${song.name} -\`${song.formattedDuration}\``
                                )}`);
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                        }
                }
            } catch (err) {
                console.log(err);
                embed.setColor("Red").setDescription("Something went wrong.");
                return interaction.reply({ embeds: [embed], ephemeral: true});
            }

        }
}