const { Events } = require('discord.js');
const { userInfo } = require('./database-objects.js')

module.exports = {
    name: Events.InteractionCreate,
}