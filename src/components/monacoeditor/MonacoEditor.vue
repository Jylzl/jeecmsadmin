<template>
    <div :id="id" :ref="id" style="height:100%;"></div>
</template>

<script>
    import * as monaco from 'monaco-editor';

    export default {
        name: 'MonacoEditor',
        data(){
            return{
                value:null,
                monacoEditor:null
            }
        },
        props: {
            id: {
                type:String,
                required:true,
                default: "monacoId"
            },
            value: {
                type:String,
                required:true,
                default: "<div>请编辑html内容</div>"
            },
            language: {
                type:String,
                required:true,
                default: "html"
            },
            readOnly: {
                type:Boolean,
                required:true,
                default: true
            },
            fontSize: {
                type:Number,
                required:true,
                default: 14
            },
            theme: {
                type:String,
                required:true,
                default: "vs"
            },
            init: {
                type:Object,
                required:true,
                default: function() {
                    return {
                        selectOnLineNumbers: true,
                        roundedSelection: false,
                        readOnly: false, // 只读
                        cursorStyle: 'line', // 光标样式
                        automaticLayout: false, // 自动布局
                        glyphMargin: true, // 字形边缘
                        useTabStops: false,
                        fontSize: 14, // 字体大小
                        autoIndent: false // 自动布局
                    };
                }
            }
        },
        data(){
            return {
                monacoEditor:null,
                codesCopy:null
			};
        },
        mounted() {
            console.log("init----------------start")
            console.log(this.id)
            console.log(this.value)
            console.log(this.language)
            console.log(this.readOnly)
            console.log(this.fontSize)
            console.log(this.theme)
            console.log(this.init)
            console.log("init----------------end")
            this.initEditor();
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
                    
                    if(newValue && newValue !=oldValue ){
                        console.log("fontSize")
                        console.log(oldValue)
                        console.log(newValue)
                        this.initEditor();
                    }
                },
                immediate: true,
                deep: true
            },
            readOnly: {
                handler(newValue, oldValue) {
                    console.log("readOnly")
                    console.log(oldValue)
                    console.log(newValue)
                    if(newValue && newValue !=oldValue ){
                        this.initEditor();
                    }
                },
                immediate: true,
                deep: true
            },
            theme: {
                handler(newValue, oldValue) {
                    console.log("theme")
                    console.log(oldValue)
                    console.log(newValue)
                    console.log(this.monacoEditor)
                    // this.monacoEditor.setTheme(newValue)
                    // initEditor();
                    if(newValue && newValue !=oldValue ){
                        this.initEditor();
                    }
                },
                immediate: true,
                deep: true
            }
        },
        methods:{
            initEditor(){
                // let _this = this;
                // _this.monacoEditor = monaco.editor.create(_this.$refs.container, {
                //     value: _this.value,
                //     language: _this.language,
                //     readOnly: _this.readOnly,
                //     fontSize: _this.fontSize,
                //     theme: _this.theme,
                //     editorOptions:_this.init
                // });
                let _this = this;
                _this.$refs.container.innerHTML = '';
                _this.monacoEditor = monaco.editor.create(_this.$refs.container, {
                    value:_this.codesCopy || _this.value,
                    language: _this.language,
                    theme: _this.theme,//vs, hc-black, or vs-dark            
                    editorOptions:_this.init,
                });
                _this.$emit('onMounted',_this.monacoEditor);//编辑器创建完成回调
                _this.monacoEditor.onDidChangeModelContent(function(event){//编辑器内容changge事件
                    _this.codesCopy = _this.monacoEditor.getValue();
                    _this.$emit('onCodeChange',_this.monacoEditor.getValue(),event)
                });
                //编辑器随窗口自适应
                window.addEventListener('resize',function(){
                    // initEditor();
                    console.log(_this.monacoEditor)
                    console.log(_this.theme)
                    console.log(_this.monacoEditor.getValue())
                })
            }
        }
    }
</script>