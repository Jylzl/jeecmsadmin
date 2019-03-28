<template>
	<el-breadcrumb class="app-breadcrumb" separator-class="el-icon-d-arrow-right">
		<transition-group name="breadcrumb">
			<template v-for="(item,index) in levelList">
				<el-breadcrumb-item :key="index"  v-if="item.redirect==='noredirect'||index==levelList.length-1">{{item.name}}</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: item.path }" :key="index"  v-else>{{item.name}}</el-breadcrumb-item>
			</template>
		</transition-group>
	</el-breadcrumb>
</template>

<script>
	import pathToRegexp from 'path-to-regexp'
	export default {
		data() {
			return {
				levelList: null
			}
		},
		watch: {
			$route() {
				this.getBreadcrumb()
			}
		},
		created() {
			this.getBreadcrumb()
		},
		methods: {
			getBreadcrumb() {
				let matched = this.$route.matched.filter(item => item.name);
				const first = matched[0];
				if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
					matched = [{
						path: '/work',
						name: '首页'
					}].concat(matched)
				}
				this.levelList = matched.filter(item => item.name)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-breadcrumb.el-breadcrumb {
		display: block;
		font-size: 14px;
		line-height: 50px;
		margin-left: 8px;

		.no-redirect {
			color: #97a8be;
			cursor: text;
		}
	}
</style>