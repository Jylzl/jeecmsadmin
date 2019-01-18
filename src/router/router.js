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
  routes: [
    {
      path: "/",
      name: "main",
      component: Layout,
      children: [
        {
          path: "/console",
          name: "Console",
          component: Console
        },
        {
          path: "/content",
          name: "Content",
          component: () => import("@/views/content/content/Content.vue")
		},
		{
			path: "/topic",
			name: "Topic",
			component: () => import("@/views/content/topic/Topic.vue")
		  },
        {
          path: "/accessibility",
          name: "Accessibility",
          component: Accessibility
        }
      ]
    }
  ]
});
