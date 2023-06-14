const express = require("express")
const app = express();
const passport = require("passport");
const passportFile = require("./config/passport-setup");
const session = require('express-session');

const port = 4000;

app.use(session ({
    secret: 'test',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/discord", passport.authenticate("discord", { permissions: 8 })); //WORKS
app.get("/auth/discord/callback", passport.authenticate("discord", {
    failureRedirect: '/' //In the case of a failure redirect the user back to the homepage
}), function(req, res) {
    res.redirect("http://localhost:3000/") //In the case of a success redirect the user to a new page 
});

//TODO: Find error that doesnt return it do the dashboard page.

app.listen(port, () => console.log(`Server is running on port 4000`))

