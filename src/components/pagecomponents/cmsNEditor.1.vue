<template>
	<vue-neditor-wrap v-model="defaultMsg" :config="ueditorConfig" :destroy="false" @ready="ready"></vue-neditor-wrap>
</template>

<script>
import VueNeditorWrap from "vue-neditor-wrap";
export default {
	name: "cms-neditor",
	components: {
		VueNeditorWrap
	},
	props: {
		ueditorPath: {
			// UEditor 代码的路径
			type: String,
			default: "/NEditor/"
		},
		defaultMsg: {
			type: String,
			default: ""
		},
		ueditorConfig: {
			// UEditor 配置项
			type: Object,
			default: function() {
				return {
					// 如果需要上传功能,找后端小伙伴要服务器接口地址
					serverUrl: "/api/web/upload/ueditor",
					// 你的UEditor资源存放的路径,相对于打包后的index.html
					UEDITOR_HOME_URL: this.ueditorPath,
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
				};
			}
		},
		index: {
			default: 0
		}
	},
	data() {
		return {
			instance: null,
			appId: this.$store.state.sys.appId
		};
	},
	methods: {
		ready(editorInstance) {
			let _this = this;
			this.instance = editorInstance;
			window.UE.Editor.prototype._bkGetActionUrl =
				window.UE.Editor.prototype.getActionUrl;
			window.UE.Editor.prototype.getActionUrl = function(action) {
				if (action == "uploadimage") {
					return (
						_this.$store.state.sys.baseUrl +
						"/api/member/ueditor/upload?sessionKey=" +
						localStorage.getItem("sessionKey") +
						"&appId=" +
						process.env.VUE_APP_appId
					);
				} else if (action == "uploadvideo") {
					return (
						_this.$store.state.sys.baseUrl +
						"/api/member/ueditor/upload?sessionKey=" +
						localStorage.getItem("sessionKey") +
						"&appId=" +
						process.env.VUE_APP_appId
					);
				} else if (action == "uploadfile") {
					return (
						_this.$store.state.sys.baseUrl +
						"/api/member/ueditor/upload?sessionKey=" +
						localStorage.getItem("sessionKey") +
						"&appId=" +
						process.env.VUE_APP_appId
					);
				} else if (action == "catchimage") {
					return (
						_this.$store.state.sys.baseUrl +
						"/api/member/ueditor/getRemoteImage?sessionKey=" +
						localStorage.getItem("sessionKey") +
						"&appId=" +
						process.env.VUE_APP_appId
					);
				} else if (action == "uploadscrawl") {
					return (
						_this.$store.state.sys.baseUrl +
						"/api/member//ueditor/scrawlImage?Type=Image&sessionKey=" +
						localStorage.getItem("sessionKey") +
						"&appId=" +
						process.env.VUE_APP_appId
					);
				} else if (action == "listimage" || action == "listfile") {
					return (
						_this.$store.state.sys.baseUrl +
						"/api/member/ueditor/imageManager?picNum=50&insite=false&sessionKey=" +
						localStorage.getItem("sessionKey") +
						"&appId=" +
						process.env.VUE_APP_appId
					);
				} else if (action == "config") {
					return this.ueditorPath + "/config.json";
				}
			};
			this.$emit("ready", this.instance, this.index);
		}
	}
};
</script>
