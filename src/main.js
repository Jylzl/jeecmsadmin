/**
 * @description: Vue main.js
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 15:53:28
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-06 14:17:08
 */
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import {
	store
} from "@/store/index.js";


import "@/plugins/elementui/element.js"; // 引入饿了么UI
import '@/plugins/vcharts/vcharts.js' // 引入vcharts

import Icon from "vue2-svg-icon/Icon.vue"; // svg
import i18n from '@/i18n/index' // Internationalization

import global from "@/utils/global" //全局方法
import cmsComponents from "@/components/index"; //自定义全局组件
import '@/utils/permissions' //全局路由钩子
import '@/directive/index' //自定义指令集

Vue.component("icon", Icon);
Vue.use(global);
Vue.use(cmsComponents);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount("#app");