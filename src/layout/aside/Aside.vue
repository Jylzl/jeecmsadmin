<!--
 * @description: 侧边导航栏
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-02-18 19:16:03
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-21 20:30:37
 -->
<template>
	<el-scrollbar wrap-class="scrollbar-wrapper ">
		<el-menu :collapse-transition="false" :default-active="activeIndex" class="h100" @open="handleOpen"
			@close="handleClose" :router="true" :collapse="isCollapse" :unique-opened="true">
			<template v-for="item in $store.state.perms.routers">
				<template v-if="!(item.meta.hidden)">
					<template v-if="!item.children || item.meta.leaf">
						<el-menu-item :route="item" :index="item.name" :key="item.name">
							<i :class="item.meta.iconCls" class="icon iconfont el-submenu-iconfont"></i>
							<span class="collapse-font "
								slot="title">{{generateTitle('submenu',item.meta.title)}}</span>
						</el-menu-item>
					</template>
					<el-submenu v-else :route="item" :index="item.name" :key="item.name">
						<template slot="title">
							<i :class="item.meta.iconCls" class="icon iconfont el-submenu-iconfont"></i>
							<span class="collapse-font" slot="title">{{generateTitle('submenu',item.meta.title)}}</span>
						</template>
						<template v-for="child in item.children">
							<el-menu-item v-if="!child.children ||  child.meta.leaf" :route="child" :index="child.name"
								:key="child.name" class="parent-padding">
								{{child.meta.title}}
							</el-menu-item>
							<el-submenu v-else :route="child" class="child-padding" :index="child.name"
								:key="child.name">
								<template slot="title">
									<span class="collapse-font">{{child.meta.title}}</span>
								</template>
								<template v-for="child2 in child.children">
									<template v-if="!(child2.meta.hidden)">
										<el-menu-item :route="child2" :index="child2.name" :key="child2.name">
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
			return {};
		},
		computed: {
			activeIndex() {
				return this.$route.name;
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
		margin-right: 10px;
		width: 24px;
		text-align: center;
		font-size: 20px;
	}
</style>