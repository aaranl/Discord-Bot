const { Client, GatewayIntentBits } = require ('discord.js')
const { token, userID } = require('./config.json');
const { userInfo } = require('./database-objects.js')

const client = new Client ({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => { 
    console.log('Ready!');

})

//***************************************** 

client.on('message', (message) => {
    //Ignore all other bots
    if (message.author.bot) return;

    if (message.author.id === userID) {
        console.log('User ${message.authoer.username} sent a message')

    }

})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'messages') {

    }
})

//***************************************** 

client.login(token);