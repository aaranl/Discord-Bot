const Sequelize = require('sequelize');
const { username, password } = require('../config.json');

const sequelize = new Sequelize('discordbot', username, password, {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const userInfo = require('./models/userInfo.js')(sequelize, Sequelize.DataTypes);

module.exports = {
    userInfo
};