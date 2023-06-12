const { Client, GatewayIntentBits } = require ('discord.js')
const { token, userID } = require('./config.json');
const { userInfo } = require('./database-objects.js')

const client = new Client ({ intents: [GatewayIntentBits.Guilds] });

//Test to see if the bot is online

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})


//***************************************** 

// client.on('message', (message) => {
//     //Ignore all other bots
//     if (message.author.bot) return;

//     if (message.author.id === userID) {
//         console.log(`User ${message.author.username} sent a message`)

//     }

// })

//****************************************** 



//Slash command codes

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
})



//Client login 

client.login(token);