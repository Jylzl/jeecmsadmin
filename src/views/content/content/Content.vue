<template>
	<div>
		<vue-neditor-wrap v-model="content" :config="myConfig" :destroy="false" @ready="ready"></vue-neditor-wrap>
		<editor api-key="udm8u7u1w88b8yqqt0czgf3glqzet1mnbt95at9wv8u6bib3" :init="init" id="full-featured" v-model="content1"></editor>
	</div>
</template>
<script>
	import VueNeditorWrap from "vue-neditor-wrap";
	import Editor from '@tinymce/tinymce-vue';
	import tinymce_init from '../../../plugins/tinymce/tinymce.js'
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
					webAppKey:"0csvxWBT1bgGXIPdwgqsqSd0"
				},
				content: "<h1 style='text-align:center;'>欢迎使用NEditor富文本编辑器</h1>"
			};
		},
		methods: {
			ready(editorInstance) {
				// console.log('editorInstance', editorInstance)
			}
		}
	};
</script>
<style scoped>
</style>