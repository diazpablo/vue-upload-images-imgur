<template>
	<div class="ui secondary pointing menu">
		<a class="active item" href="/">
			Image Storage
		</a>
		<div class="right menu">
			<a class="ui item" @click="login">
				Login
			</a>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	
	export default {
		name: "Header",
		methods: mapActions([ 'login' ])
	}
</script>

<style scoped>

</style>