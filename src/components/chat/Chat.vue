<template>
    <transition name="el-zoom-in-bottom">
        <div v-show="show" class="chat-box transition-box" contextmenu="return false">
            <div class="chat-top">
                <div class="chat-top-bar">
                    <el-button type="text" icon="el-icon-close" title="关闭" @click="hideChat()"></el-button>
                </div>
                <div class="chat-card">
                    <div class="user-header-img">
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030012986,1102835514&fm=200&gp=0.jpg"
                            alt="">
                        <span class="user-state"></span>
                    </div>
                    <div class="user-inf">
                        <h3 class="user-name" v-rightMenu = "menudata">李子隆</h3>
                        <p class="user-profile">孝感市门户网站</p>
                    </div>
                </div>
            </div>
            <div class="chat-form">
                <el-input placeholder="搜索" size="medium" prefix-icon="el-icon-search" v-model="input21" clearable>
                </el-input>
            </div>
            <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
                <el-tab-pane label="消息" name="first">
                    <el-scrollbar wrap-class="scrollbar-wrapper">
                        <ul class="chat-massage-list">
                            <li class="chat-massage" v-for="i in 20" :key="i">
                                <div class="user-header-img">
                                    <img draggable='false' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030012986,1102835514&fm=200&gp=0.jpg" alt="">
                                </div>
                                <div class="chat-massage-inf">
                                    <div class="chat-massage-user">
                                        <span>{{i}}孝感市门户</span>
                                        <span class="time">2019-02-11</span>                                        
                                    </div>
                                    <div class="chat-massage-txt">时刻提防十大科技和话就卡死更多话就卡死</div>
                                </div>
                            </li>
                        </ul>
                    </el-scrollbar>
                </el-tab-pane>
                <el-tab-pane label="联系人" name="second">
                    <el-scrollbar wrap-class="scrollbar-wrapper">
                        <el-collapse v-model="activeNames" @change="handleChange" class="contacts-list">
                            <el-collapse-item  v-for="i in 10" :name="i" :key="i">
                                <template slot="title">
                                    <div class="contacts-header"><span class="contacts-group">{{i}}孝感市门户网站中心</span><span class="contacts-total">{{i}}/33</span></div>
                                </template>
                                <div>
                                    <ul class="chat-user-list">
                                        <li class="chat-user" v-for="i in 10" :key="i">
                                            <div class="user-header-img">
                                                <img draggable='false' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030012986,1102835514&fm=200&gp=0.jpg" alt="">
                                            </div>
                                            <div class="chat-user-inf">
                                                <div class="chat-user-user">
                                                    <span>{{i}}孝感市门户</span>                                     
                                                </div>
                                                <div class="chat-user-introduction">时刻提防十大科技和话就卡死更多话就卡死</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </el-scrollbar>
                </el-tab-pane>
                <el-tab-pane label="设置" name="third">角色管理</el-tab-pane>
            </el-tabs>
            <div class="chat-footer">footer</div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Chat",
        components: {},
        data() {
            return {
                 menudata:{
                    // 菜单box的样式   Menu box style
                    boxStyle:"width:150px;background:#f55;",
                    // 菜单选项的样式 Style of menu options
                    optionStyle:"color:#fff;line-height:30px;font-size:15px;",
                    menus:[
                        {
                        /**
                         * content 菜单显示的文字 <支持html> 
                         * callback：菜单点击要触发函数  需要在methods定义 
                         * style ： 本项菜单的单独样式 可以覆盖掉optionStyle  
                         * icon : icon图片地址
                         * iconStyle: icon 图片的样式（例如大小等 直接作用于图片）
                         * iconPosition : 支持left / right (其余全部按照left处理);
                         * content The text displayed on the menu(can use html)
                         * callback: Menu clicks to trigger functions need to be defined in methods
                         * style :  The single style of this menu can override option Style
                         * icon : your icon's url
                         * iconStyle : you icon's style ,is image's style
                         * iconPosition :you can use left or right ;The rest are all processed according to left
                         */
                        /**
                         * 字段(field)           类型(type)                 是否可以为空(is can null)    默认值
                         * content            [ html | text ]                       Y                   ""
                         * callback           [  methods function ]                 Y                   return false
                         * style                   [ css ]                          Y                   ""
                         * icon                   [ url ]                           Y                   ""
                         * iconStyle              [ css ]                           Y                   ""
                         * iconPosition           [string]                          Y                   "left"
                        */
                        content:"menu content",
                        callback:"callbackMethods",
                        style:"border-bottom:1px solid #fff;background:#333;line-height:30px;",
                        icon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2310514390,3580363630&fm=27&gp=0.jpg",
                        iconStyle:"width:20px;height:20px;",
                        iconPosition:"left",
                        },
                        {
                        content:"右键菜单二",
                        callback:"otherMethods"
                        }
                    ],
                },
                show: true,
                input21: "",
                activeName: "first",
                activeNames: ["1"]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleChange(val) {
                console.log(val);
            },
            hideChat() {
                this.show = !this.show;
            },
            callbackMethods(){
                // do something
                alert('aa')
            },
            otherMethods(){
                // do something
                 alert('aa1')
            }
        }
    };
</script>
<style>
    /* .chat-box .el-tabs--top .el-tabs__item.is-top{
                            min-width: 80px;
                            text-align: center;
                        } */
    .chat-form input.el-input__inner {
        border-radius: 0;
        outline: none;
        border: none;
        background-color: #ebeef5;
    }

    .chat-box .el-collapse-item__header {
        height: 42px;
        line-height: 42px;
        padding-left: 10px;
    }

    .chat-box .el-tabs__header {
        margin: 0;
    }
    .chat-box .el-tabs__content{
        height: calc(100% - 40px);
    }
    .chat-box .el-tabs__content .el-tab-pane{
        height: 100%;
    }
    .chat-box .el-collapse-item__header{
        display: flex;
        flex-direction:row-reverse;
    }
    .contacts-list .el-collapse-item:hover{
        background-color: #e1e2e3;
    }
</style>

<style scoped>
    .chat-box {
        box-sizing: border-box;
        position: fixed;
        right: 0;
        top: 0;
        width: 340px;
        height: 100%;
        background-color: #fff;
        z-index: 1000;
        border-left: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        line-height: 1;
        user-select: none;
    }

    .chat-top {
        background-color: #f40;
    }

    .chat-form {
        line-height: 1;
        background-color: #ebeef5;
    }

    .chat-top-bar {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 26px;
        line-height: 26px;
    }

    .chat-top-bar .el-button {
        padding: 0;
    }

    .chat-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
        justify-content: flex-start;
        align-items: center;
        /*垂直居中*/
        height: 120px;
        padding: 20px 10px 10px;
    }

    .chat-card .user-header-img {
        box-sizing: border-box;
        width: 52px;
        height: 52px;
        padding: 2px;
        border: 1px solid #e1e2e3;
        border-radius: 50%;
        position: relative;
    }

    .chat-card .user-header-img .user-state {
        position: absolute;
        right: 0;
        bottom: 0;
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #00ff7f;
        z-index: 10;
    }

    .chat-card .user-header-img img {
        position: absolute;
        left: 2px;
        top: 2px;
        display: block;
        width: 46px;
        height: 46px;
        border-radius: 50%;
    }

    .chat-card .user-inf {
        box-sizing: border-box;
        padding-left: 15px;
        padding-top: 5px;
    }

    .chat-card .user-inf .user-name {
        line-height: 24px;
        font-size: 16px;
        color: #fff;
    }

    .chat-card .user-inf .user-profile {
        line-height: 22px;
        font-size: 12px;
        color: #fff;
    }
    .chat-box .el-tabs{
        height: calc(100% - 222px);
    }
    .chat-box .chat-footer{
        height: 40px;
    }
    .chat-box .chat-massage-list{
        padding:8px 0;
    }
    .chat-box .chat-massage-list .chat-massage,
    .chat-box .chat-user-list .chat-user{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        box-sizing:border-box;
        height: 58px;
        padding: 5px 10px;
    }
    .chat-box .chat-massage-list .chat-massage:hover,
    .chat-box .chat-user-list .chat-user:hover{
        background-color: #e1e2e3;
        cursor: pointer;
    }
    .chat-box .chat-massage-list .chat-massage .user-header-img,
    .chat-box .chat-user-list .chat-user .user-header-img{
        width: 42px;
        height: 42px;
    }
    .chat-box .chat-massage-list .chat-massage .user-header-img img,
    .chat-box .chat-user-list .chat-user .user-header-img img{
        width: 42px;
        height: 42px;
        border-radius:50%;
    }
    .chat-massage-inf,
    .chat-user-inf{
        box-sizing: border-box;
        width: 100%;
        padding-left: 6px;
    }
    .chat-box .chat-massage-list .chat-massage .chat-massage-user,
    .chat-box .chat-user-list .chat-user .chat-user-name{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size:14px;
        color: #454545;
        line-height: 24px;
    }
    .chat-box .chat-massage-list .chat-massage .chat-massage-user .time{
        font-size:12px;
        color: #666;
    }
    .chat-box .chat-massage-list .chat-massage .chat-massage-txt,
    .chat-box .chat-user-list .chat-user .chat-user-introduction{
        font-size:12px;
        color: #666;
        line-height: 20px;
    }
    .contacts-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-sizing:border-box;
        padding-right: 10px;
        width: calc(100% - 24px);;
    }
    .contacts-header .contacts-total{
        font-size:12px;
        color:#666;
    }
</style>