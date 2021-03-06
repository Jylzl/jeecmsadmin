import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/Layout.vue";
import Console from "@/views/console/Console.vue";
// import Content from "@/views/content/content/Content.vue";

import Accessibility from "@/views/daily/index/Accessibility.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [{
			path: "/",
			name: "main",
			component: Layout,
			redirect: "/console",
			children: [{
					path: "/console",
					name: "Console",
					component: Console
				},
				{
					path: "/contentlist",
					name: "ContentList",
					component: () => import("@/views/content/content/ContentList.vue")
				},
				{
					path: "/contentadd",
					name: "ContentAdd",
					component: () => import("@/views/content/content/ContentAdd.vue")
				},
				{
					path: "/topic",
					name: "Topic",
					component: () => import("@/views/content/topic/Topic.vue")
				},
				{
					path: "/column",
					name: "Column",
					component: () => import("@/views/column/Index.vue")
				},
				{
					path: "/accessibility",
					name: "Accessibility",
					component: Accessibility
				},
				{
					path: "/resourcelist",
					name: "ResourceList",
					component: () => import("@/views/template/template/Index.vue")
				}
			]
		},
		{
			path: "/login",
			name: "Login",
			component: () => import("@/views/account/Login.vue")
		},
		{
			path: "/register",
			name: "Register",
			component: () => import("@/views/account/Register.vue")
		},
		{
			path: "/lock",
			name: "Lock",
			component: () => import("@/views/account/Lock.vue")
		}
	]
});