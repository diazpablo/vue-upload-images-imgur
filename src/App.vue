<template>
	<div>
		<Header />
		<div class="ui container">
			<router-view />
		</div>
	</div>
</template>

<script>
	import Header from "@/components/AppHeader";
	
	export default {
		name: 'App',
		components: { Header },
		head: {
			title: {
				inner: 'Home',
				separator: '|',
				complement: 'Upload Images'
			},
		}
	}
</script>

<style>

</style>
