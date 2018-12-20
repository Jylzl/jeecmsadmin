import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'
import Console from '@/views/console/Console.vue'
import Content from '@/views/content/content/Content.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'main',
        component: Layout,
        children: [{
                path: '/console',
                name: 'Console',
                component: Console,
            }, {
                path: '/content',
                name: 'Content',
                component: Content,
            }]
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ '@/views/layout/Layout.vue')
    }]
})