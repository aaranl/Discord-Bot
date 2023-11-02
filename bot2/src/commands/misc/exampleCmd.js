const {SlashCommandBuilder, PermissionFlagBits} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test")
    .setDMPermission(false)
    .addSubCommmand((subcommandgroup) => 
      subcommandgroup
        .setName("user")
        .setDescription("Configure a user.")
        .addSubCommmand((subcommand) => 
          subcommand
            .setName("role")
            .setDescription("Configure a users role.")
            .addUserOptions((option) =>
                option.setName("user").setDescription("The user to configure.")
            )
        )
        .addSubCommmand((subcommand) => 
          subcommand
            .setName("nickname")
            .setDescription("Configure a users nickname.")
            .addUserOptions((option) =>
                option.setName("nickname").setDescription("The nickname the user should have.")
            )
            .addUserOptions((option) =>
                option.setName("user").setDescription("The user to configure.")
            )
        )
    
    )
    .addSubCommmand((subcommand) => 
      subcommand
        .setName("m essage")
        .setDescription("Configure a message.")
    )
    .toJSON(),
    userPermissions: [PermissionFlagBits.ManageMessages],
    botPermissision: [PermissionFlagBits.Connect],

    run: (client, interaction) => {
        return interaction.reply("This is a test command.");
    }
};