const { Events } = require('discord.js');
const { userInfo } = require('../database-objects.js')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        let user = await userInfo.findOne({
            where: {
                user_id: message.author.id 
            }
        });
        if(!user) {
            user = await userInfo.create({user_id: message.author.id});
        }
        user.increment('user_messages');
        console.log(userInfo.get('user_messages') + 1);
    }
}