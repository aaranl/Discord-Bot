const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT;

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const secret_key = process.env.SESSION_SECRET;

app.get('/oauth/redirect', (req, res) => {
    const requestToken = req.query.code;
    axios({
        method: 'post',
        url: `https://discord.com/api/oauth2/token`,
        data: {
            client_id,
            client_secret,
            grant_type: 'authorization_code',
            code: requestToken,
            redirect_uri,
            scope: ['bot', 'identify']
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
        const accessToken = response.data.access_token;
        const token = jwt.sign({ accessToken }, secret_key);

        // You may want to redirect your user to your website's dashboard, sending along the token.
        res.redirect(`/dashboard?token=${token}`);
    }).catch(error => {
        console.error(error);
        res.status(500).send('Error during Discord OAuth2');
    });
});

app.listen(port, () => console.log(`Server listening at ${port}`));



// const express = require("express")
// const app = express();
// const cors = require('cors');
// const passport = require("passport");
// const passportFile = require("./config/passport-setup");
// const session = require('express-session');
// const port = process.env.PORT;


// //TODO: Rewrite entire backend code to give functionality to the token that is required in OAuth2
// //Look at discord backend documentation

// app.use(cors({
//     origin: 'https://ezbake.xyz'
// }));

// app.use(session ({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.get("/auth/discord", passport.authenticate("discord", { permissions: 8 })); //WORKS
// app.get("/auth/discord/callback", passport.authenticate("discord", {
//     failureRedirect: 'https://ezbake.xyz/error' //In the case of a failure redirect the user back to the homepage
// }), function(req, res) {
//     res.redirect("https://ezbake.xyz") //In the case of a success redirect the user to a new page 
// });

// //Error catching middleware for any errors that aren't handled elsewhere

// app.use(function (err, req, res, next) {
//     console.error(err.stack); 
//     res.status(500).send('Something went wrong'); 
//   });

// app.listen(port, '0.0.0.0', () => console.log(`Server is running on port 4000`))
// // Debugging env variables
// // console.log(process.env.CLIENT_ID);
// // console.log(process.env.CLIENT_SECRET);
// // console.log(process.env.SESSION_SECRET);
