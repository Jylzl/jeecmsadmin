<!--
 * @description: 面包屑
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-02-18 19:16:03
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-21 20:51:14
 -->
<template>
	<div class="p-breadcrumb">
		<div class="breadcrumb-left">
			<el-button type="text" @click="setCollapse" :title="title">
				<i :class="iconClass" class="breadcrumb-btn"></i>
			</el-button>
		</div>
		<div class="breadcrumb-right">
			<el-breadcrumb class="app-breadcrumb" separator-class="el-icon-d-arrow-right">
				<transition-group name="breadcrumb">
					<template v-for="(item,index) in levelList">
						<el-breadcrumb-item :key="index" v-if="item.redirect==='noredirect'||index==levelList.length-1">
							{{item.meta.title}}</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: item.path }" :key="index" v-else>{{item.meta.title}}
						</el-breadcrumb-item>
					</template>
				</transition-group>
			</el-breadcrumb>
		</div>
	</div>
</template>

<script>
import pathToRegexp from "path-to-regexp";
export default {
	data() {
		return {
			levelList: null
		};
	},
	watch: {
		$route() {
			this.getBreadcrumb();
		}
	},
	created() {
		this.getBreadcrumb();
	},
	computed: {
		iconClass() {
			return this.$store.getters.getCollapse
				? "el-icon-s-unfold"
				: "el-icon-s-fold";
		},
		title() {
			return this.$store.getters.getCollapse ? "展开" : "折叠";
		}
	},
	methods: {
		getBreadcrumb() {
			let matched = this.$route.matched.filter(item => item.name);
			const first = matched[0];
			if (
				first &&
				first.name.trim().toLocaleLowerCase() !==
					"index".toLocaleLowerCase()
			) {
				matched = [
					{
						path: "/work",
						name: "work",
						meta: {
							title: "首页"
						}
					}
				].concat(matched);
			}
			this.levelList = matched.filter(item => item.name);
		},
		//侧边栏关闭收缩展开
		setCollapse() {
			this.$store.dispatch("setCollapse");
		}
	}
};
</script>

<style lang="scss" scoped>
.p-breadcrumb {
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 46px;
	padding-left: 20px;
}

.breadcrumb-left {
	padding-right: 10px;
}

.breadcrumb-btn {
	font-size: 20px;
}

.app-breadcrumb.el-breadcrumb {
	display: block;
	font-size: 14px;
	line-height: 46px;
	.no-redirect {
		color: #97a8be;
		cursor: text;
	}
}
</style>