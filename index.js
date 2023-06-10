const { Client, GatewayIntentBits } = require ('discord.js')
const { token } = require('./config.json');
const { userInfo } = require('./database-objects.js')


const client = new Client ({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => { 
    console.log('Ready!');

})

client.login(token);