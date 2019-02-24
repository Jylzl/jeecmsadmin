<template>
	<div id="app">
		<router-view />
		<BackToTop />
	</div>
</template>
<script>
	import BackToTop from '@/components/BackToTop/index.vue'

	export default {
		components: {
			BackToTop
		}
	}
</script>
<style lang="scss">
	@import url(./assets/css/rest.min.css);

	html,
	body {
		height: 100%;
	}

	#app {
		height: 100%;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	@media (-webkit-max-device-pixel-ratio: 1) {
		::-webkit-scrollbar-track-piece {
			background-color: #ffffff;
		}

		::-webkit-scrollbar {
			width: 6px;
			height: 6px;
		}

		::-webkit-scrollbar-thumb {
			background-color: #c2c2c2;
			background-clip: padding-box;
			min-height: 28px;
		}

		::-webkit-scrollbar-thumb:hover {
			background-color: #a0a0a0;
		}
	}

	.clearfix:after {
		content: "";
		display: block;
		clear: both;
		height: 0;
	}

	.clearfix {
		zoom: 1;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.el-scrollbar__view{
		height: 100%;
	}
</style>