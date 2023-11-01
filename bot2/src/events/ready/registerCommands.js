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
        }
    } catch {

    }
}