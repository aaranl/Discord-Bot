const {SlashCommandBuilder, PermissionFlagBits} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test")
    .setDMPermission(false)
    .addSubcommandGroup((subcommandgroup) => 
      subcommandgroup
        .setName("user")
        .setDescription("Configure a user.")
        .addSubcommand((subcommand) => 
          subcommand
            .setName("role")
            .setDescription("Configure a users role.")
            .addUserOption((option) =>
                option.setName("user").setDescription("The user to configure.")
            )
        )
        .addSubcommand((subcommand) => 
          subcommand
            .setName("nickname")
            .setDescription("Configure a users nickname.")
            .addUserOption((option) =>
                option.setName("nickname").setDescription("The nickname the user should have.")
            )
            .addUserOption((option) =>
                option.setName("user").setDescription("The user to configure.")
            )
        )
    
    )
    .addSubcommand((subcommand) => 
      subcommand
        .setName("message")
        .setDescription("Configure a message.")
    )
    .toJSON(),
    //userPermissions: [PermissionFlagBits.ManageMessages],
    //botPermissision: [PermissionFlagBits.Connect],

    run: (client, interaction) => {
        return interaction.reply("This is a test command.");
    }
};