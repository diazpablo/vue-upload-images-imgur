import api from '@/api/imgur';
import { router } from "@/main";

const state = {
	images: []
}

const getters = {
	allImages: () => state.images
}

const actions = {
	fetchImages: async ({ rootState, commit }) => {
		const { token } = rootState.auth;
		const { data } = await api.fetchImages(token);
		commit('setImages', data.data)

	},
	uploadImages: async ({ rootState }, images) => {
		// Get the access token
		const { token } = rootState.auth;

		// Call out API module to do the upload
		await api.uploadImages(images, token);

		// Redirect user to Gallery route
		router.push('/');
	}
}

const mutations = {
	setImages: (state, images) => {
		state.images = images;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}