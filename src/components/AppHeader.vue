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
	export default {
		name: "Header",
	}
</script>

<style scoped>

</style>