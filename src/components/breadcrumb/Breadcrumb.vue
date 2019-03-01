<template>
	<el-breadcrumb separator-class="el-icon-d-arrow-right">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
		<el-breadcrumb-item>活动列表</el-breadcrumb-item>
		<el-breadcrumb-item>活动详情</el-breadcrumb-item>
	</el-breadcrumb>
</template>
<style scoped>
	.el-breadcrumb {
		height: 48px;
		line-height: 48px;
	}
</style>

