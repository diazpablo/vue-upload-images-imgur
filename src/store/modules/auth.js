const state = {
	token: null
};

const getters = {
	idLoggedin: state => !!state.token
}

const actions = {
	logout: ({ commit }) => commit('setToken', null),
};

const mutations = {
	setToken: (state, token) => {
		state.token = token;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}