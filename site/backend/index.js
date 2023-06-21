const express = require("express")
const app = express();
const cors = require('cors');
const passport = require("passport");
const passportFile = require("./config/passport-setup");
const session = require('express-session');

const port = 4000;

app.use(cors({
    origin: 'https://ezbake.xyz'
}));

app.use(session ({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/discord", passport.authenticate("discord", { permissions: 8 })); //WORKS
app.get("/auth/discord/callback", passport.authenticate("discord", {
    failureRedirect: 'https://ezbake.xyz/error' //In the case of a failure redirect the user back to the homepage
}), function(req, res) {
    res.redirect("https://ezbake.xyz") //In the case of a success redirect the user to a new page 
});

app.listen(port, () => console.log(`Server is running on port 4000`))
console.log(process.env.CLIENT_ID);
console.log(process.env.CLIENT_SECRET);
console.log(process.env.SESSION_SECRET);

