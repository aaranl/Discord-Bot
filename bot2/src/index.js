require("dotenv/config")
require("messageConfig.json")

const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContents,
    ],
});

eventHandler(client);

client.login(process.env.TOKEN);