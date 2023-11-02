const {EmbedBuilder} = require ('discord.js');
const {developersId, testServerId} = require('../../config.json');
const nConfig = require('../../messageConfig.json');
const getLocalCommands = require("../../utils/getLocalCommands.js");

module.exports = async (client,interaction) => {
    if (!interaction.isChatInputCommmand) return;

    const localCommands = getLocalCommands();
    const commandObjects = localCommands.find((cmd) => cmd.data.name === interaction.commandName);

    if (!commandObject) return;

    const createEmbed = (color, description) => new EmbedBuilder().setColor(color).setDescription(description);

    if(commandObjects.devOnly && !developersId.includes(interaction.member.id)) {
        const rEmbed = createEmbed(nConfig.embedColorError, nConfig.commandDevOnly);
        return interaction.reply({ embeds: [rEmbed], ephemeral: true });
    }

    if(commandObjects.testMode && interaction.guild.id !== testServerId) {
        const rEmbed = createEmbed(nConfig.embedColorError, nConfig.commandTestMode);
        return interaction.reply({ embeds: [rEmbed], ephemeral: true });
    }

    for (const permission of commandObjects.userPermissions || []) {
        if(!interaction.member.permissions.has(permissions)) {
            const rEmbed = createEmbed(
                nConfig.embedColorError, 
                nConfig.userNoPermissions
            );
            return interaction.reply({ embeds: [rEmbed], ephemeral: true });
        }
    }

    const bot = interaction.guild.members.me;
    for(const permission of commandObject.botPermissions || []) {
        if(!bot.member.permissions.has(permissions)) {
            const rEmbed = createEmbed(
                nConfig.embedColorError, 
                nConfig.botNoPermissions
            );
            return interaction.reply({ embeds: [rEmbed], ephemeral: true });
        }

        try {
            await commandObjects.run(client, interaction);
        } catch (error) {
            console.log(
                `An error occured inside the chat Input Command Validator:\n ${error}`
                .red
            )
        }
    }
};