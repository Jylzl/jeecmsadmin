<template>
	<div class="aside">
		<div class="aside-top el-header el-menu">CMS-system</div>
		<el-menu default-active="0" class="el-menu-vertical-demo aside-menu" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true" :collapse="isCollapse">
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<el-menu-item index="0" route="/console">
					<i class="el-icon-menu"></i>
					<span slot="title">工作台</span>
				</el-menu-item>
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-document"></i>
						<span>内容</span>
					</template>
					<el-menu-item index="1-0" route="/content">内容管理</el-menu-item>
					<el-menu-item index="1-1" route="/topic">专题管理</el-menu-item>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-bell"></i>
						<span slot="title">日常监测</span>
					</template>
					<el-menu-item-group title="首页">
						<el-menu-item index="2-1" route="/accessibility">可访问性</el-menu-item>
						<el-menu-item index="2-2">连通率</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="告警">
						<el-menu-item index="1-3">告警通知</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-setting"></i>
						<span slot="title">配置</span>
					</template>
					<el-menu-item-group>
						<template slot="title">系统配置</template>
						<el-menu-item index="3-1">权限管理</el-menu-item>
						<el-menu-item index="3-2">普通管理员</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="监测配置">
						<el-menu-item index="3-3">可访问性监测</el-menu-item>
						<el-menu-item index="3-4">连通性监测</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="4">
					<template slot="title">
						<i class="el-icon-service"></i>
						<span>人员</span>
					</template>
					<el-menu-item-group>
						<template slot="title">管理员</template>
						<el-menu-item index="4-1">超级管理员</el-menu-item>
						<el-menu-item index="4-2">普通管理员</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="用户">
						<el-menu-item index="4-3">监测员</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="5">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>导航一</span>
					</template>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="5-1">选项1</el-menu-item>
						<el-menu-item index="5-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="5-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="5-4">
						<template slot="title">选项4</template>
						<el-menu-item index="5-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
			</el-scrollbar>
		</el-menu>
		<div class="aside-footer el-menu">CMS-system</div>
	</div>
</template>
<script>
	export default {
		name: 'Aside',
		data() {
			return {
				isCollapse: false,
				input10: ''
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				// console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				// console.log(key, keyPath);
			}
		}
	}
</script>
<style scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 220px;
		min-height: 400px;
	}

	.aside {
		height: 100%;
	}

	.aside-top {
		padding: 0;
		background-color: rgb(58, 67, 76);
		border-bottom: none;
		border-right: solid 1px #e6e6e6;
		text-align: center;
		color: #fff;
		font-size: 22px;
		font-weight: bolder;
	}
	.aside-footer{
		height: 40px;
		line-height: 40px;
		background-color: rgb(84, 92, 100);
	}
	.aside-menu {
		height: calc(100% - 100px);
	}
</style>