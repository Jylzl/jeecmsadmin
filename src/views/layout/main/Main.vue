<template>
	<div style="height:100%;">
		<Breadcrumb />
		<div class="main-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
	export default {
		name: 'Main',
		components: {
			Breadcrumb
		}
	}
</script>
<style>
	.main-view {
		height: calc(100% - 50px);
	}
</style>