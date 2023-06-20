const { Events } = require('discord.js');
const SpotifyWebApi = require('spotify-web-api-node');
const { spotifyClientId, spotifyClientSecret } = require('../../config.json')

const spotifyApi = new SpotifyWebApi({
  clientId: spotifyClientId,
  clientSecret: spotifyClientSecret,
});

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    // Retrieve an access token
    spotifyApi.clientCredentialsGrant().then(
      function(data) {
        //console.log('The access token is ' + data.body['access_token']);
        spotifyApi.setAccessToken(data.body['access_token']);
      },
      function(err) {
        console.log('Something went wrong when retrieving an access token', err);
      }
    );
  },
};