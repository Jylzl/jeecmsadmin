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
                default: "Vue + monaco-editor + v-model双向绑定"
            },
            language: {
                type:String,
                required:true,
                default: "javascript"
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
                        readOnly: this.readOnly, // 只读
                        cursorStyle: 'line', // 光标样式
                        automaticLayout: false, // 自动布局
                        glyphMargin: true, // 字形边缘
                        useTabStops: false,
                        fontSize: 28, // 字体大小
                        autoIndent: false // 自动布局
                    };
                }
            }
        },
        data(){
            return {
			};
        },
        mounted() {
            console.log("a-----------------")
            console.log(this.id)
            console.log(this.init)
            console.log(this.value)
            console.log("b-----------------")
            this.monacoEditor = monaco.editor.create(this.$refs.container, {
                value: this.value,
                language: this.language,
                readOnly: this.readOnly,
                fontSize: this.fontSize,
                theme: this.theme,
                editorOptions:this.init
            });
        },
        watch: {
            value: {
                handler(newValue, oldValue) {
                    this.newValue ? this.newValue : newValue;
                    console.log("allll")
                    console.log(newValue)
                    console.log(oldValue)
                },
                immediate: true
            }
        }
    }
</script>