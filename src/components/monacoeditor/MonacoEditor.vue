<!--
 * @description: monaco代码编辑器
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-07 12:44:11
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-07 17:19:34
 -->
<template>
    <div class="monaco">
        <div class="monaco-top">
            <div class="monaco-top-left">
                <el-radio-group v-model="radio" size="mini" @change="changeRadio">
                    <el-radio-button label="只读"></el-radio-button>
                    <el-radio-button label="可写"></el-radio-button>
                </el-radio-group>
                <el-select v-model="monacoInit.theme" size="mini" placeholder="主题" style="width:98px;">
                    <el-option v-for="item in monacoInit.thems" :key="item.value" :label="item.label"
                        :value="item.value"></el-option>
                </el-select>
                <el-select v-model="monacoInit.fontSize" size="mini" placeholder="字号" style="width:72px;">
                    <el-option v-for="item in monacoInit.fontSizes" :key="item.value" :label="item.label"
                        :value="item.value"></el-option>
                </el-select>
                <el-select v-model="codeLanguage" size="mini" placeholder="语言" style="width:120px;">
                    <el-option v-for="item in monacoInit.languages" :key="item.value" :label="item.label"
                        :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="monaco-top-right">
                <el-button type="primary" size="mini" icon="el-icon-refresh-right" @click="resetMonacoEditor"
                    :disabled="monacoInit.readOnly">重置</el-button>
                <el-button type="primary" size="mini" icon="el-icon-receiving" @click="saveMonacoEditor"
                    :disabled="monacoInit.readOnly">保存</el-button>
            </div>
        </div>
        <div class="monaco-body" v-loading="monacoeditoLoading" element-loading-text="保存中...">
            <div :id="id" :ref="id" style="height:100%;"></div>
        </div>
    </div>
</template>


<script>
    import * as monaco from "monaco-editor";

    export default {
        name: "MonacoEditor",
        props: {
            value: {
                type: String,
                required: true,
                default: function () {
                    return "<div>请编辑html内容</div>";
                }
            },
            language: {
                type: String,
                required: true,
                default: function () {
                    return "html";
                }
            },
            init: {
                type: Object,
                default () {
                    return {
                        config: {
                            selectOnLineNumbers: true,
                            roundedSelection: false,
                            cursorStyle: "line", // 光标样式
                            automaticLayout: false, // 自动布局
                            glyphMargin: true, // 字形边缘
                            useTabStops: false,
                            autoIndent: false // 自动布局
                        },

                        readOnly: true, // 只读
                        theme: "vs", //主题
                        fontSize: 14, // 字体大小
                        thems: [{
                                value: "vs",
                                label: "默认主题"
                            },
                            {
                                value: "vs-dark",
                                label: "深色主题"
                            },
                            {
                                value: "hc-black",
                                label: "高亮主题"
                            }
                        ],
                        fontSizes: [{
                                value: 12,
                                label: "12号"
                            },
                            {
                                value: 14,
                                label: "14号"
                            },
                            {
                                value: 16,
                                label: "16号"
                            },
                            {
                                value: 18,
                                label: "18号"
                            },
                            {
                                value: 20,
                                label: "20号"
                            }
                        ],
                        languages: [{
                                value: "html",
                                label: "html"
                            },
                            {
                                value: "javascript",
                                label: "javascript"
                            },
                            {
                                value: "typescript",
                                label: "typescript"
                            },
                            {
                                value: "css",
                                label: "css"
                            },
                            {
                                value: "scss",
                                label: "scss"
                            },
                            {
                                value: "less",
                                label: "less"
                            },
                            {
                                value: "json",
                                label: "json"
                            },
                            {
                                value: "xml",
                                label: "xml"
                            },
                            {
                                value: "java",
                                label: "java"
                            },
                            {
                                value: "sql",
                                label: "sql"
                            },
                            {
                                value: "python",
                                label: "python"
                            },
                            {
                                value: "shell",
                                label: "shell"
                            },
                            {
                                value: "markdown",
                                label: "markdown"
                            }
                        ]
                    };
                }
            }
        },
        data() {
            return {
                id: "monacoId" +
                    Math.random()
                    .toString()
                    .slice(-10),
                monacoEditor: null,
                monacoeditoLoading: false,
                monacoInit: this.init,
                code: this.value,
                codeLanguage: this.language,
                radio: "只读"
            };
        },
        created() {},
        mounted() {
            let _this = this;
            // 编辑器初始化
            this.initEditor();
            // ctrl + s保存（监听ctrl + s）
            document
                .getElementById(_this.id)
                .addEventListener("keydown", function (e) {
                    if (
                        e.keyCode == 83 &&
                        (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
                    ) {
                        e.preventDefault();
                        if (_this.radio != "只读") {
                            _this.saveMonacoEditor();
                        }
                    }
                });
            //编辑器随窗口自适应
            window.addEventListener("resize", function () {
                _this.initEditor();
            });
        },
        watch: {
            value: {
                handler(newValue, oldValue) {
                    this.code = newValue;
                },
                immediate: true,
                deep: true
            },
            language: {
                handler(newValue, oldValue) {
                    if (typeof newValue != "undefined" && newValue != oldValue) {
                        this.codeLanguage = newValue;
                    }
                },
                immediate: false,
                deep: true
            },
            init: {
                handler(newValue, oldValue) {
                    if (typeof newValue != "undefined" && newValue != oldValue) {
                        this.monacoInit = newValue;
                    }
                },
                immediate: false,
                deep: true
            },
            //监听数据变化重新初始化编辑器
            codeLanguage: {
                handler(newValue, oldValue) {
                    this.initEditor();
                },
                immediate: false,
                deep: true
            },
            monacoInit: {
                handler(newValue, oldValue) {
                    this.initEditor();
                },
                immediate: false,
                deep: true
            }
        },
        methods: {
            initEditor() {
                let _this = this;
                _this.$refs[_this.id].innerHTML = "";
                //创建编辑器
                _this.monacoEditor = monaco.editor.create(_this.$refs[_this.id], {
                    value: _this.code,
                    language: _this.codeLanguage,
                    theme: _this.monacoInit.theme,
                    readOnly: _this.monacoInit.readOnly,
                    fontSize: _this.monacoInit.fontSize,
                    editorOptions: _this.monacoInit.config
                });
                _this.$emit("onMounted", _this.monacoEditor); //编辑器创建完成回调
                _this.monacoEditor.onDidChangeModelContent(function (event) {
                    //编辑器内容changge事件
                    _this.code = _this.monacoEditor.getValue();
                    _this.$emit("input", _this.code); //触发 input 事件，并传入新值
                    _this.$emit(
                        "onCodeChange",
                        _this.monacoEditor.getValue(),
                        event
                    );
                });
            },
            //打开可编辑
            changeRadio() {
                if (this.radio == "可写") {
                    this.monacoInit.readOnly = false;
                    this.initEditor();
                } else {
                    this.monacoInit.readOnly = true;
                    this.initEditor();
                }
            },
            //保存代碼
            saveMonacoEditor() {
                let _this = this;
                _this.monacoeditoLoading = true;
                this.$emit("save", "save", (res) => {
                    //保存的回调
                    if (res.code == _this.$code.success) {
                        _this.successMessage("保存成功")
                    } else {
                        _this.errorMessage("保存失败")
                    }
                    _this.monacoeditoLoading = false;
                });
            },
            //重置代碼
            resetMonacoEditor() {
                let _this = this;
                _this.monacoeditoLoading = true;
                this.$emit("reset", "reset", (res) => {
                    //重置的回调
                    if (res.code == _this.$code.success) {
                        _this.successMessage("保存成功")
                    } else {
                        _this.errorMessage("保存失败")
                    }
                    _this.monacoeditoLoading = false;
                });
            }
        }
    };
</script>

<style scoped>
    .monaco {
        height: 100%;
    }

    .monaco-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        height: 50px;
        padding: 5px 15px;
        line-height: 40px;
        border-bottom: 1px dashed #e7ecf3;
    }

    .monaco-body {
        height: calc(100% - 50px);
        overflow: hidden;
    }

    .monaco-bottom {
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-sizing: border-box;
        height: 50px;
        padding: 10px 15px;
    }

    .right-bottom .el-button+.el-button {
        margin-left: 3px;
    }

    .monaco-top .monaco-top-left>div {
        margin-right: 15px;
    }

    .monaco-top .monaco-top-left>div:last-child {
        margin-right: 0;
    }

    .right-center .right-center-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        /*垂直居中*/
    }

    .right-center .right-center-right>button {
        margin-left: 15px;
    }

    .right-center .right-center-right>label {
        margin-left: 15px;
        white-space: nowrap;
        color: #666;
    }

    .right-center .right-center-right>label:first-child {
        margin-left: 0;
    }
</style>