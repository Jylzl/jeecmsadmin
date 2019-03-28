// 全局路由钩子
// 页面加载进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import router from '@/router/index' //路由
import {
    store
} from "@/store/index.js"; //存储仓库

router.beforeEach((to, from, next) => {
    NProgress.start();
    let user = localStorage.getItem('sessionKey'); //登录标示
    let perms = store.state.perms.perms; //登录状态
    if (user == null && to.path != '/login') {
        next('/login');
    } else {
        if (to.path == '/login') {
            next();
        } else {
            if (perms) {
                next();
            } else {
                store.dispatch('setRouters').then(() => {
                    router.addRoutes(store.state.perms.addRouters);
                    next({
                        ...to
                    }) // hack方法 确保addRoutes已完成
                })
            }
        }
    }
})

router.afterEach(() => {
    NProgress.done();
});