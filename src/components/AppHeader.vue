<template>
	<div class="ui secondary pointing menu">
		<router-link class="active item" to="/">
			Image Storage
		</router-link>
		<div class="right menu">
			<div v-if="isLoggedIn" class="horizontal">
				<router-link class="ui item" to="/">
					Gallery
				</router-link>
				<router-link class="ui item" to="/upload">
					Upload Image
				</router-link>
				<a class="ui item" @click="logout">
					Logout
				</a>
			</div>
			
			<a v-else class="ui item" @click="login">
				Login
			</a>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	
	export default {
		name: "Header",
		computed: mapGetters([ 'isLoggedIn' ]),
		methods: mapActions([ 'login', 'logout' ])
	}
</script>

<style scoped>
	.horizontal {
		display: flex;
	}
</style>