import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/layout/Layout.vue'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'main',
        component: Main
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ '@/views/layout/Layout.vue')
    }]
})