require("colors");

const {testServerId} = require("../../config.json");
const commandComparing = require("../../utils/commandComparing.js");
const getApplicationCommands = require("../../utils/getApplicationCommands.js");
const getLocalCommands = require("../../utils/getLocalCommands.js");

module.exports = async (client) => {
    try {
        const [localCommands, applicationCommands] = await Promise.all([
            getLocalCommands(),
            getApplicationCommands(client, testServer),
        ]);
    

        for (const localCommand of localCommands) {
            const { data, deleted } = localCommand;
            const {
                name: commandName,
                description: commandDescription,
                options: commandOptions,
            } = data;
        

            const existingCommand = await applicationCommands.cache.find(
                (cmd) => cmd.name === commandName
            );

            if (deleted) {
                if(existingCommand) {
                    await applicationCommands.delete(existingCommand.id);
                    console.log(
                        `[COMMAND REGISTERY] Application command ${commandName} was deleted from the database`
                        .red
                    );
                    } else {
                    console.log(
                        `[COMMAND REGISTERY] Application command ${commandName} has been skipped, since property "deleted" is set to "true"`
                        .grey
                    );
                }
            } else if (existingCommand) {
                if(commandComparing(existingCommand, commandOptions)) {
                    await applicationCommands.edit(existingCommand.id,{name : commandName, description: commandDescription, options: commandOptions});
                    console.log(
                        `[COMMAND REGISTERY] Application command ${commandName} has been edited.`
                        .orange
                    );
                }
            } else {
                await applicationCommands.create({name: commandName, description: commandDescription, options: commandOptions});
                console.log(
                    `[COMMAND REGISTERY] Application command ${commandName} has been registered.`
                    .green
                );
            }
        }
    } catch (error) {
        console.log(
            `An error occured inside the command registery:\n ${error}`
            .red
        );
    }
}