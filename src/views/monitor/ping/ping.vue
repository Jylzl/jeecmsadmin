<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-10 15:52:56
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-10 15:57:27
 -->
<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>标题</span>
			</div>
			<div>
				<el-row :gutter="20">
					<el-col :span="8"></el-col>
					<el-col :span="16"></el-col>
				</el-row>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>标题</span>
			</div>
			<div>
				<el-row :gutter="20">
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
				</el-row>
			</div>
		</el-card>
	</div>
</template>