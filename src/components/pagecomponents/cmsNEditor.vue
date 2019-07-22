<template>
	<script :id="id" :name="name" type="text/plain"></script>
</template>

<script>
	// 一个简单的事件订阅发布的实现,取代原始Event对象,提升IE下的兼容性
	class LoadEvent {
		constructor() {
			this.listeners = {};
		}
		on(eventName, callback) {
			this.listeners[eventName] === undefined ?
				(this.listeners[eventName] = []) :
				"";
			this.listeners[eventName].push(callback);
		}
		emit(eventName) {
			this.listeners[eventName] &&
				this.listeners[eventName].forEach(callback => callback());
		}
	}
	export default {
		name: "cms-neditor",
		data() {
			return {
				appId: this.$store.state.sys.appId,
				id: "editor" +
					Math.random()
					.toString()
					.slice(-10),
				editor: null,
				isReady: false, // 实例是否已经ready
				readyValue: "", // ready之后给编辑器设置的值
				defaultConfig: {
					enableAutoSave: false,
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
					allowDivTransToP: true,
					webAppKey: "0csvxWBT1bgGXIPdwgqsqSd0"
				}
			};
		},
		props: {
			value: {
				type: String,
				default: "欢迎使用Nueditor编辑器"
			},
			config: {
				type: Object,
				default: function () {
					return {};
				}
			},
			init: {
				type: Function,
				default: function () {
					return () => {};
				}
			},
			destroy: Boolean,
			name: String
		},
		computed: {
			mixedConfig() {
				return Object.assign({}, this.defaultConfig, this.config);
			}
		},
		methods: {
			// 添加自定义按钮
			registerButton: ({
				name,
				icon,
				tip,
				handler,
				UE = window.UE
			}) => {
				UE.registerUI(name, (editor, name) => {
					editor.registerCommand(name, {
						execCommand: () => {
							handler(editor, name);
						}
					});
					const btn = new UE.ui.Button({
						name,
						title: tip,
						cssRules: `background-image: url(${icon}) !important;background-size: cover;`,
						onclick() {
							editor.execCommand(name);
						}
					});
					editor.addListener("selectionchange", () => {
						const state = editor.queryCommandState(name);
						if (state === -1) {
							btn.setDisabled(true);
							btn.setChecked(false);
						} else {
							btn.setDisabled(false);
							btn.setChecked(state);
						}
					});
					return btn;
				});
			},
			// 实例化编辑器之前-JS依赖检测
			_beforeInitEditor(value) {
				// 准确判断ueditor.config.js和ueditor.all.js是否均已加载 仅加载完ueditor.config.js时UE对象和UEDITOR_CONFIG对象也存在,仅加载完ueditor.all.js时UEDITOR_CONFIG对象也存在,但为空对象
				!!window.UE &&
					!!window.UEDITOR_CONFIG &&
					Object.keys(window.UEDITOR_CONFIG).length !== 0 &&
					!!window.UE.getEditor ?
					this._initEditor(value) :
					this._loadScripts().then(() => this._initEditor(value));
			},
			// 实例化编辑器
			_initEditor(value) {
				let _this = this;
				this.$nextTick(() => {
					this.init();
					this.editor = window.UE.getEditor(this.id, this.mixedConfig);
					this.readyValue = value;
					this.editor.addListener("ready", () => {
						this.isReady = true;
						this.$emit("ready", this.editor);
						this.editor.setContent(this.readyValue);
						this.editor.addListener("contentChange", () => {
							this.$emit("input", this.editor.getContent());
						});
					});
				});
				window.UE.Editor.prototype._bkGetActionUrl =
					window.UE.Editor.prototype.getActionUrl;
				window.UE.Editor.prototype.getActionUrl = function (action) {
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
						return this.defaultConfig.UEDITOR_HOME_URL + "/config.json";
					}
				};
			},
			// 动态添加JS依赖
			_loadScripts() {
				// 确保多个实例同时渲染时不会重复创建SCRIPT标签
				if (window.loadEnv) {
					return new Promise((resolve, reject) => {
						window.loadEnv.on("scriptsLoaded", function () {
							resolve();
						});
					});
				} else {
					window.loadEnv = new LoadEvent();
					return new Promise((resolve, reject) => {
						// 如果在其他地方只引用ueditor.all.min.js，在加载ueditor.config.js之后仍需要重新加载ueditor.all.min.js，所以必须确保ueditor.config.js已加载
						// this._loadService().then(() => this._loadConfig()).then(() => this._loadCore()).then(() => {
						//   window.loadEnv.emit("scriptsLoaded");
						//   resolve();
						// });
						const that = this;
						that._loadParse()
							.then(() => that._loadConfig())
							.then(() => that._loadCore())
							.then(() => that._loadService())
							.then(() => {
								window.loadEnv.emit("scriptsLoaded");
								resolve();
							})
							.catch(err => {
								console.error(err);
							});
					});
				}
			},
			_loadConfig() {
				return new Promise((resolve, reject) => {
					if (
						!!window.UE &&
						!!window.UEDITOR_CONFIG &&
						Object.keys(window.UEDITOR_CONFIG).length !== 0
					) {
						resolve();
						return;
					}
					let configScript = document.createElement("script");
					configScript.type = "text/javascript";
					configScript.src =
						this.mixedConfig.UEDITOR_HOME_URL + "neditor.config.js";
					document
						.getElementsByTagName("head")[0]
						.appendChild(configScript);
					configScript.onload = function () {
						if (
							!!window.UE &&
							!!window.UEDITOR_CONFIG &&
							Object.keys(window.UEDITOR_CONFIG).length !== 0
						) {
							resolve();
						} else {
							console &&
								console.error(
									"加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!"
								);
						}
					};
				});
			},
			_loadService() {
				return new Promise((resolve, reject) => {
					let coreScript = document.createElement("script");
					coreScript.type = "text/javascript";
					coreScript.src =
						this.mixedConfig.UEDITOR_HOME_URL + "neditor.service.js";
					document
						.getElementsByTagName("head")[0]
						.appendChild(coreScript);
					coreScript.onload = function () {
						resolve();
					};
				});
			},
			_loadParse() {
				return new Promise((resolve, reject) => {
					let coreScript = document.createElement("script");
					coreScript.type = "text/javascript";
					coreScript.src =
						this.mixedConfig.UEDITOR_HOME_URL + "neditor.parse.min.js";
					document
						.getElementsByTagName("head")[0]
						.appendChild(coreScript);
					coreScript.onload = function () {
						resolve();
					};
				});
			},
			_loadCore() {
				return new Promise((resolve, reject) => {
					if (!!window.UE && !!window.UE.getEditor) {
						resolve();
						return;
					}
					let coreScript = document.createElement("script");
					coreScript.type = "text/javascript";
					coreScript.src =
						this.mixedConfig.UEDITOR_HOME_URL + "neditor.all.js";
					document
						.getElementsByTagName("head")[0]
						.appendChild(coreScript);
					coreScript.onload = function () {
						resolve();
						// if (!!window.UE && !!window.UE.getEditor) {
						//   resolve();
						// } else {
						//   console &&
						//     console.error(
						//       "加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!"
						//     );
						// }
					};
				});
			},
			// 设置内容
			_setContent(value) {
				if (this.isReady) {
					value === this.editor.getContent() ||
						this.editor.setContent(value);
				} else {
					this.readyValue = value;
				}
			}
		},
		beforeDestroy() {
			if (this.destroy && this.editor && this.editor.destroy)
				this.editor.destroy();
		},
		// v-model语法糖实现
		watch: {
			value: {
				handler(value) {
					this.editor ?
						this._setContent(value) :
						this._beforeInitEditor(value);
				},
				immediate: true
			}
		}
	};
</script>