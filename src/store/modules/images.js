import api from '@/api/imgur';

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
	uploadImage: () => {
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