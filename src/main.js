import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'

Vue.use(VueHead);

new Vue({
	render: h => h(App),
}).$mount('#app')
