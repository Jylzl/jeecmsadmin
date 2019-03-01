<template>
	<el-container>
		<el-aside width="200px">
			<div class="left-top">
				<el-button type="text"><i class="el-icon-refresh"></i>&nbsp;&nbsp;刷新</el-button>
			</div>
			<div class="left-center">
				<el-scrollbar wrap-class="scrollbar-wrapper ">
					<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				</el-scrollbar>
			</div>
		</el-aside>
		<el-main>
			<div class="right-top">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item>首页</el-breadcrumb-item>
					<el-breadcrumb-item>活动管理</el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="right-center">
				<el-button-group>
					<el-button size="small">固顶</el-button>
					<el-button size="small">推荐</el-button>
					<el-button size="small">共享</el-button>
				</el-button-group>
				<el-select v-model="value" size="small" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="value" size="small" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="value" size="small" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<!-- <vue-neditor-wrap v-model="content" :config="myConfig" :destroy="false" @ready="ready"></vue-neditor-wrap>
			<editor api-key="udm8u7u1w88b8yqqt0czgf3glqzet1mnbt95at9wv8u6bib3" :init="init" id="full-featured" v-model="content1"></editor> -->
		</el-main>
	</el-container>
</template>
<script>
	import VueNeditorWrap from "vue-neditor-wrap";
	import Editor from "@tinymce/tinymce-vue";
	import tinymce_init from "../../../plugins/tinymce/tinymce.js";
	import {
		method
	} from "bluebird";
	export default {
		components: {
			VueNeditorWrap,
			Editor
		},
		data() {
			return {
				content1: "<h1>你好</h1>",
				init: tinymce_init,
				myConfig: {
					// 如果需要上传功能,找后端小伙伴要服务器接口地址
					serverUrl: "/api/web/upload/ueditor",
					// 你的UEditor资源存放的路径,相对于打包后的index.html
					UEDITOR_HOME_URL: "/NEditor/",
					// 编辑器不自动被内容撑高
					autoHeightEnabled: false,
					// 初始容器高度
					initialFrameHeight: 440,
					// 初始容器宽度
					initialFrameWidth: "100%",
					// 关闭自动保存
					enableAutoSave: true,
					fontsize: [10, 11, 12, 14, 16, 18, 20, 24, 36, 48],
					// 自动将Div转换为P标签
					allowDivTransToP: false,
					webAppKey: "0csvxWBT1bgGXIPdwgqsqSd0"
				},
				content: "<h1 style='text-align:center;'>欢迎使用NEditor富文本编辑器</h1>",
				data: [{
						label: "一级 1",
						children: [{
							label: "二级 1-1",
							children: [{
								label: "三级 1-1-1"
							}]
						}]
					},
					{
						label: "一级 2",
						children: [{
								label: "二级 2-1",
								children: [{
									label: "三级 2-1-1"
								}]
							},
							{
								label: "二级 2-2",
								children: [{
									label: "三级 2-2-1"
								}]
							}
						]
					},
					{
						label: "一级 3",
						children: [{
								label: "二级 3-1",
								children: [{
									label: "三级 3-1-1"
								}]
							},
							{
								label: "二级 3-2",
								children: [{
									label: "三级 3-2-1"
								}]
							}
						]
					}
				],
				defaultProps: {
					children: "children",
					label: "label"
				},
				options: [{
						value: "选项1",
						label: "黄金糕"
					},
					{
						value: "选项2",
						label: "双皮奶"
					},
					{
						value: "选项3",
						label: "蚵仔煎"
					},
					{
						value: "选项4",
						label: "龙须面"
					},
					{
						value: "选项5",
						label: "北京烤鸭"
					}
				],
				value: ""
			};
		},
		methods: {
			ready(editorInstance) {
				// console.log('editorInstance', editorInstance)
			},
			handleNodeClick(data) {
				console.log(data);
			}
		}
	};
</script>
<style scoped>
	.el-container {
		height: calc(100% - 48px);
	}

	.el-aside {
		box-sizing: border-box;
		border-right: 1px solid #d4dde2;
		background-color: #fff;
		line-height: 1;
	}

	.left-top {
		box-sizing: border-box;
		height: 50px;
		padding: 5px;
		line-height: 40px;
	}

	.right-top,
	.right-center {
		box-sizing: border-box;
		height: 50px;
		padding: 5px 15px;
		line-height: 40px;
		border-bottom: 1px dashed #e7ecf3;
	}

	.el-breadcrumb {
		line-height: 40px;
	}

	.left-center {
		height: calc(100% - 50px);
	}

	.el-main {
		background-color: #fff;
		padding: 0;
	}
</style>