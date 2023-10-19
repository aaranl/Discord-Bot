const { request } = require('undici');
const express = require('express');
const cors = require('cors');


const port = process.env.PORT;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const secret_key = process.env.SESSION_SECRET;
const frontendUrl = 'https://api.ezbake.xyz';
const callbackRoute = '/auth/discord/callback';

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

