<template>
	<div>
		<vue-neditor-wrap
		 v-model="content"
		 :config="myConfig"
		 :destroy="false"
		 @ready="ready"
		></vue-neditor-wrap>
		<editor
		 api-key="udm8u7u1w88b8yqqt0czgf3glqzet1mnbt95at9wv8u6bib3"
		 :init="init"
		 v-model="content1"
		></editor>
	</div>
</template>
<script>
import VueNeditorWrap from "vue-neditor-wrap";
import Editor from '@tinymce/tinymce-vue';
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
			init: {
				selector: 'textarea',  // change this value according to your HTML
				plugins: 'wordcount',
				branding: false,
				contextmenu: "link image imagetools table spellchecker",
				menubar: 'file edit insert view format table tools help',
				menu: {
					file: { title: 'File', items: 'newdocument' },
					edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall' },
					insert: { title: 'Insert', items: 'link media | template hr' },
					view: { title: 'View', items: 'visualaid' },
					format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat' },
					table: { title: 'Table', items: 'inserttable tableprops deletetable | cell row column' },
					tools: { title: 'Tools', items: 'spellchecker code' }
				}
			},
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
				fontsize: [10, 11, 12, 14, 16, 18, 20, 24, 36, 48]
			},
			content: "<h1 style='text-align:center;'>欢迎使用NEditor富文本编辑器</h1>"
		};
	},
	methods: {
		ready(editorInstance) {
			console.log('editorInstance', editorInstance)
		}
	}
};
</script>
<style scoped>
</style>
