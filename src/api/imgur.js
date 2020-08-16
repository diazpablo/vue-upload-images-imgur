import qs from 'qs';
// http://localhost:8080/oauth2/callback#
// access_token=a953430c68a7b6f08a42c0c10783dde329a8d0ca
// expires_in=315360000
// token_type=bearer
// refresh_token=2a1b579c08821ba2496ff04082d8e07f13851fb6
// account_username=diazpablo
// account_id=136515851

const BASE_URL = 'https://api.imgur.com';
const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;

export default {
	login() {
		const querystring = {
			client_id: CLIENT_ID,
			response_type: 'token',
		};

		window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
	}
};