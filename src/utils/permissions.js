/**
 * @description: 全局路由钩子、页面加载进度条
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 15:53:28
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-06 14:51:42
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import getPageTitle from '@/utils/get-page-title'
import router from '@/router/index' //路由
import {
    store
} from "@/store/index.js"; //存储仓库

router.beforeEach((to, from, next) => {
    NProgress.start();
    // 设置页面标题
    document.title = getPageTitle(to.meta.title)

    let user = localStorage.getItem('sessionKey'); //登录标示
    let perms = store.state.perms.perms; //登录状态
    if (to.path == '/login' || to.path == '/404' || to.path == '/401') {
        next();
    } else {
        if (user == null) {
            next('/login');
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