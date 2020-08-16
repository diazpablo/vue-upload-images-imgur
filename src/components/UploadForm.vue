<template>
	<div class="dropper">
		<input
			type="file"
			multiple
			accept="image/*"
			@change="uploadImages($event.target.files)"
		/>
		<span>Drop images here!</span>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	
	export default {
		name: "UploadForm",
		methods: mapActions([ 'uploadImages' ])
	}
</script>

<style scoped>
	.dropper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30vh;
		border: 2px dashed black;
		border-radius: 5px;
		position: relative;
		transition: background-color .4s;
	}
	
	.dropper:hover {
		background-color: #eee;
	}
	
	input {
		cursor: pointer;
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>