require("colors");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.username}!`.green.bold);
}