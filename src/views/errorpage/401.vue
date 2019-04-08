<template>
    <div class="errPage-container">
        <el-button icon="arrow-left" class="pan-back-btn" @click="back">返回</el-button>
        <el-row>
            <el-col :span="12">
                <h1 class="text-jumbo text-ginormous">Oops!</h1>
                <h2>你没有权限去该页面</h2>
                <h6>如有不满请联系你的单位管理员</h6>
                <ul class="list-unstyled">
                    <li>或者你可以去:</li>
                    <li class="link-type">
                        <router-link to="/">返回首页</router-link>
                    </li>
                    <li class="link-type">
                        <router-link to="/about/us">联系网站管理员</router-link>
                    </li>
                    <li class="link-type">
                        <a href="https://www.baidu.com/" target="_blank">去逛逛百度</a>
                    </li>
                    <li><a href="#" @click.prevent="dialogVisible=true">点我看图</a></li>
                </ul>
            </el-col>
            <el-col :span="12">
                <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
            </el-col>
        </el-row>
        <el-dialog :visible.sync="dialogVisible" title="随便看">
            <img :src="danceGif" class="pan-img">
        </el-dialog>
    </div>
</template>

<script>
    import errGif from '@/assets/401_images/401.gif'
    import danceGif from '@/assets/401_images/dance.gif'

    export default {
        name: 'Page401',
        data() {
            return {
                errGif: errGif + '?' + +new Date(),
                danceGif: danceGif + '?' + +new Date(),
                dialogVisible: false
            }
        },
        methods: {
            back() {
                if (this.$route.query.noGoBack) {
                    this.$router.push({
                        path: '/'
                    })
                } else {
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .errPage-container {
        width: 800px;
        max-width: 100%;
        margin: 100px auto;

        h1 {
            display: block;
            font-size: 2em;
            margin-block-start: 0.67em;
            margin-block-end: 0.67em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
        }

        h2 {
            display: block;
            font-size: 1.5em;
            margin-block-start: 0.83em;
            margin-block-end: 0.83em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
        }

        h6 {
            display: block;
            font-size: 0.67em;
            margin-block-start: 2.33em;
            margin-block-end: 2.33em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
        }

        ul,
        menu,
        dir {
            display: block;
            list-style-type: disc;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 40px;
        }

        li {
            display: list-item;
            text-align: -webkit-match-parent;
        }

        .pan-back-btn {
            background: #008489;
            color: #fff;
            border: none !important;
        }

        .pan-gif {
            margin: 0 auto;
            display: block;
        }

        .pan-img {
            display: block;
            margin: 0 auto;
            width: 80%;
        }

        .text-jumbo {
            font-size: 60px;
            font-weight: 700;
            color: #484848;
        }

        .list-unstyled {
            font-size: 14px;

            li {
                padding-bottom: 5px;
            }

            a {
                color: #008489;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>