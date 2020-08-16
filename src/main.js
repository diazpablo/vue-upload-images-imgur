import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from "vue-router";
import App from './App.vue'
import store from './store';
import AuthHandler from '@/components/AuthHandler';
import ImageList from "@/components/ImageList";
import UploadForm from "@/components/UploadForm";

Vue.use(VueHead);
Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: ImageList },
		{ path: '/upload', component: UploadForm },
		{ path: '/oauth2/callback', component: AuthHandler },
	]
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
