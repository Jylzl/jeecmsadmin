<template>
    <div class="baidu-box" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <iframe @load="iframeLoad" src="https://tongji.baidu.com/web/welcome/ico?s=bb388e42a9b88dea2e270489de366e40"
            frameborder="0" width="100%" height="100%"></iframe>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: true
            };
        },
        methods: {
            iframeLoad() {
                this.loading = false
            }
        }
    };
</script>
<style scoped>
    .baidu-box {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>