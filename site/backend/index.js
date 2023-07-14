const { request } = require('undici');
const express = require('express');
const cors = require('cors');

//Edit these to env variables so my code is completely anon. 

const port = process.env.PORT;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const secret_key = process.env.SESSION_SECRET;
const frontendUrl = 'https://api.ezbake.xyz';
const callbackRoute = '/auth/discord/callback';

// console.log(process.env.REDIRECT_URI);
// console.log(process.env.CLIENT_ID);
// console.log(process.env.CLIENT_SECRET);

const app = express();

app.use(cors({ origin: frontendUrl }));

app.get(callbackRoute, async ({ query }, response) => {
	const { code } = query;

	if (code) {
		try {
			const tokenResponseData = await request('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: client_id,
					client_secret: client_secret,
					code,
					grant_type: 'authorization_code',
					redirect_uri: `${frontendUrl}${callbackRoute}`,
					scope: 'identify',
				}).toString(),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});

			const oauthData = await tokenResponseData.body.json();

			// Here you might want to do something with the OAuth data, like save it in a database
			// or pass it to your frontend.

			console.log(oauthData);
		} catch (error) {
			console.error(error);
		}
	}

	response.redirect('https://ezbake.xyz');
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})



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
