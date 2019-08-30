<template>
	<div class="h100">
		<Breadcrumb />
		<div class="main-view">
			<el-scrollbar wrap-class="scrollbar-wrapper ">
				<router-view></router-view>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
export default {
	name: "Main",
	components: {
		Breadcrumb
	}
};
</script>
<style scoped>
.main-view {
	height: calc(100% - 50px);
}
</style>