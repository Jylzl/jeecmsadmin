import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import {
    store
} from './store/index.js'
import './plugins/elementui/element.js'

import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')