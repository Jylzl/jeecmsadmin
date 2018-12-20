<template>
    <vue-neditor-wrap v-model="content" :config="myConfig" :destroy="false" @ready="ready">
    </vue-neditor-wrap>
</template>
<script>
    import VueNeditorWrap from "vue-neditor-wrap";
    import {
        method
    } from "bluebird";
    export default {
        components: {
            VueNeditorWrap
        },
        data() {
            return {
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
                    enableAutoSave: true
                },
                content: ""
            };
        },
        methods: {
            ready(editorInstance) {
                console.log('editorInstance',editorInstance)
            }
        }
    };
</script>
