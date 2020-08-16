import qs from 'qs';
import axios from 'axios';

const BASE_URL = 'https://api.imgur.com';
const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const LOGIN_PATH = '/oauth2/authorize';
const GET_IMAGES_PATH = '/3/account/me/images';
const UPLOAD_IMAGE_PATH = '/3/upload';

export default {
	login() {
		const querystring = {
			client_id: CLIENT_ID,
			response_type: 'token',
		};

		window.location = `${BASE_URL}${LOGIN_PATH}?${qs.stringify(querystring)}`;
	},
	fetchImages(token) {
		return axios.get(`${BASE_URL}${GET_IMAGES_PATH}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	},
	uploadImages(images, token) {
		const promises = Array.from(images).map(image => {
			const formData = new FormData();
			formData.append('image', image);

			return axios.post(`${BASE_URL}${UPLOAD_IMAGE_PATH}`, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			});
		});

		return Promise.all(promises);
	}
};