<template>
	<div id="app" oncontextmenu="self.event.returnValue=false">
		<router-view />
	</div>
</template>
<script>
export default {
	components: {}
};
</script>
<style lang="scss">
@import url(./assets/css/rest.min.css);
@import url(./assets/iconfont/iconfont.css);

html,
body {
	box-sizing: border-box;
	margin: 0;
	width: 100%;
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
		width: 8px;
		height: 8px;
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

.h100 {
	height: 100%;
}
</style>