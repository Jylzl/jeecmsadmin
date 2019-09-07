<template>
	<div :id="id" :ref="id" style="height:100%;"></div>
</template>

<script>
import * as monaco from "monaco-editor";

export default {
	name: "MonacoEditor",
	data() {
		return {
			value: null,
			monacoEditor: null
		};
	},
	props: {
		id: {
			type: String,
			required: true,
			default: function() {
				return (
					"monacoId" +
					Math.random()
						.toString()
						.slice(-10)
				);
			}
		},
		value: {
			type: String,
			required: true,
			default: function() {
				return "<div>请编辑html内容</div>";
			}
		},
		language: {
			type: String,
			required: true,
			default: function() {
				return "html";
			}
		},
		readOnly: {
			type: Boolean,
			required: true,
			default: true
		},
		fontSize: {
			type: Number,
			required: true,
			default: 14
		},
		theme: {
			type: String,
			required: true,
			default: "vs"
		},
		init: {
			type: Object,
			required: true,
			default: function() {
				return {
					selectOnLineNumbers: true,
					roundedSelection: false,
					readOnly: false, // 只读
					cursorStyle: "line", // 光标样式
					automaticLayout: false, // 自动布局
					glyphMargin: true, // 字形边缘
					useTabStops: false,
					fontSize: 14, // 字体大小
					autoIndent: false // 自动布局
				};
			}
		}
	},
	data() {
		return {
			monacoEditor: null,
			codesCopy: null
		};
	},
	mounted() {
		let _this = this;
		this.initEditor();
		//编辑器随窗口自适应
		window.addEventListener("resize", function() {
			_this.initEditor();
		});
	},
	watch: {
		value: {
			handler(newValue, oldValue) {
				// this.initEditor();
			},
			immediate: true,
			deep: true
		},
		fontSize: {
			handler(newValue, oldValue) {
				if (typeof newValue != "undefined" && newValue != oldValue) {
					this.initEditor();
				}
			},
			immediate: false,
			deep: true
		},
		readOnly: {
			handler(newValue, oldValue) {
				if (typeof newValue != "undefined" && newValue != oldValue) {
					this.initEditor();
				}
			},
			immediate: false,
			deep: true
		},
		theme: {
			handler(newValue, oldValue) {
				if (typeof newValue != "undefined" && newValue != oldValue) {
					this.initEditor();
				}
			},
			immediate: false,
			deep: true
		},
		language: {
			handler(newValue, oldValue) {
				if (typeof newValue != "undefined" && newValue != oldValue) {
					this.initEditor();
				}
			},
			immediate: false,
			deep: true
		}
	},
	methods: {
		initEditor() {
			let _this = this;
			_this.$refs[_this.id].innerHTML = "";
			_this.monacoEditor = monaco.editor.create(_this.$refs[_this.id], {
				value: _this.codesCopy || _this.value,
				language: _this.language,
				theme: _this.theme,
				readOnly: _this.readOnly,
				fontSize: _this.fontSize,
				editorOptions: _this.init
			});
			_this.$emit("onMounted", _this.monacoEditor); //编辑器创建完成回调
			_this.monacoEditor.onDidChangeModelContent(function(event) {
				//编辑器内容changge事件
				_this.codesCopy = _this.monacoEditor.getValue();
				_this.$emit(
					"onCodeChange",
					_this.monacoEditor.getValue(),
					event
				);
			});
		}
	}
};
</script>