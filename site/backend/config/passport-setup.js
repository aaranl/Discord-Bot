const passport = require("passport");
var DiscordStrategy = require('passport-discord').Strategy
  , refresh = require('passport-oauth2-refresh');
const {clientId, clientSecret } = require("../../../config.json")

//TODO: Fix bug if I try to add the bot for a second time in one connection, I get a ReferenceError: User is not defined

passport.serializeUser((user, done) => {
    console.log('Serializing user:', user);
    done(null, user.id);
  });


//   //May or may not need to deseralizeUsers, idfk tbh
  
  passport.deserializeUser((id, done) => {
    console.log('Deserializing user ID:', id);
    User.findById(id, (err, user) => {
      console.log('Deserialized user:', user);
      done(err, user);
    });
  });



  passport.use(
    new DiscordStrategy({
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: ["bot", "identify"]
    },
    async(accessToken, refreshToken, profile, done) => {
        done(null,profile);
    })
)
