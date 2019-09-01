<!--
 * @description: 侧边导航栏
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-02-18 19:16:03
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-30 20:25:33
 -->
<template>
	<el-scrollbar wrap-class="scrollbar-wrapper ">
		<el-menu :collapse-transition="false" :default-active="activeIndex" class="h100" @open="handleOpen"
			@close="handleClose" :router="true" :collapse="isCollapse" :unique-opened="true">
			<template v-for="item in $store.state.perms.routers">
				<template v-if="(item.meta) && !(item.meta.hidden)">
					<template v-if="item.meta && item.meta.leaf">
						<el-menu-item :index="item.redirect || item.path" :key="item.path">
							<i :class="item.meta && item.meta.iconCls" class="icon iconfont el-submenu-iconfont"></i>
							<span class="collapse-font "
								slot="title">{{generateTitle('submenu',item.meta.title)}}</span>
						</el-menu-item>
					</template>
					<el-submenu v-else :index="item.redirect || item.path" :key="item.path">
						<template slot="title">
							<i :class="item.meta && item.meta.iconCls" class="icon iconfont el-submenu-iconfont"></i>
							<span class="collapse-font" slot="title">{{generateTitle('submenu',item.meta.title)}}</span>
						</template>
						<template v-for="child in item.children">
							<el-menu-item v-if="child.meta && child.meta.isParent" :index="child.redirect || child.path"
								:key="child.path" class="parent-padding">
								{{child.meta.title}}
							</el-menu-item>
							<el-submenu v-else :index="child.redirect || child.path" class="child-padding"
								:key="child.path">
								<template slot="title">
									<span class="collapse-font">{{child.meta.title}}</span>
								</template>
								<template v-for="child2 in child.children">
									<template v-if="!(child2.meta) || (child2.meta && !(child2.meta.hidden))">
										<el-menu-item :index="child2.redirect ||  child2.path" :key="child2.path">
											{{child2.meta.title}}</el-menu-item>
									</template>
								</template>
							</el-submenu>
						</template>
					</el-submenu>
				</template>
			</template>
		</el-menu>
	</el-scrollbar>
</template>
<script>
	import {
		generateTitle
	} from '@/utils/i18n'
	export default {
		name: "Aside",
		data() {
			return {
				logoUrl: require('@/assets/img/logo.png'),
				input10: ""
			};
		},
		computed: {
			activeIndex() {
				return this.$route.path;
			},
			isCollapse() {
				return this.$store.getters.getCollapse;
			}
		},
		mounted() {},
		methods: {
			generateTitle,
			handleOpen(key, keyPath) {
				// console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				// console.log(key, keyPath);
			},
		}
	};
</script>

<style scoped>
	.el-submenu-iconfont {
		vertical-align: middle;
		margin-right: 8px;
		width: 24px;
		text-align: center;
		font-size: 18px;
	}
</style>