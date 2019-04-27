import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import {
	store
} from "@/store/index.js";

// 引入饿了么UI
import "@/plugins/elementui/element.js";
// 图表插件
import VCharts from "v-charts";
// svg
import Icon from "vue2-svg-icon/Icon.vue";

import i18n from '@/i18n/index' // Internationalization
import global from "@/utils/global" //全局方法
import '@/utils/permissions' //全局路由钩子
import '@/directive/index' //自定义指令集

Vue.use(VCharts);
Vue.component("icon", Icon);
Vue.use(global);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount("#app");