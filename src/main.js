import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import {
  store
} from "./store/index.js";

// 引入饿了么UI
import "./plugins/elementui/element.js";
// 图表插件
import VCharts from "v-charts";
// svg
import Icon from "vue2-svg-icon/Icon.vue";
// 页面加载进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VCharts);
Vue.component("icon", Icon);
Vue.config.productionTip = false;

//全局守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");