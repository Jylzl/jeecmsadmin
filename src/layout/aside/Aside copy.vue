<!--
 * @description: 侧边导航栏
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-02-18 19:16:03
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-11 14:33:59
 -->
<template>
	<el-scrollbar wrap-class="scrollbar-wrapper ">
		<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
			<template v-for="child1 in $store.state.perms.routers">
				<template v-if="!child1.meta.hidden">
					<template v-if="child1.meta.leaf || !child1.children">
						<el-menu-item index="4" :key="child1.name">
							<i :class="item.meta.iconCls" class="icon iconfont el-submenu-iconfont"></i>
							<span slot="title">{{child1.meta.title}}</span>
						</el-menu-item>
					</template>
					<template v-else>
						<el-submenu index="1" :key="child1.name">
							<template slot="title">
								<i :class="item.meta.iconCls" class="icon iconfont el-submenu-iconfont"></i>
								<span>{{child1.meta.title}}</span>
							</template>
							<template v-for="child2 in child1.children">
								<template v-if="!child2.meta.hidden">
									<template v-if="child2.meta.leaf || !child2.children">
										<el-menu-item index="1-1" :key="child2.name">{{child2.meta.title}}
										</el-menu-item>
									</template>
									<template v-else>
										<template slot="title">{{child2.meta.title}}</template>
										<el-submenu index="1-4" :key="child2.name">
											<template v-for="child3 in child2.children">
												<template v-if="!child3.meta.hidden">
													<template v-if="child3.meta.leaf || !child3.children">
														<el-menu-item index="1-4-1" :key="child3.name">
															{{child3.meta.title}}</el-menu-item>
													</template>
												</template>
											</template>
										</el-submenu>
									</template>
								</template>
							</template>
						</el-submenu>
					</template>
				</template>
			</template>
		</el-menu>

		<el-menu :collapse-transition="false" :default-active="activeIndex" class="h100" @open="handleOpen"
			@close="handleClose" :router="true" :collapse="isCollapse" :unique-opened="true">
			<template v-for="item in $store.state.perms.routers">
				<template v-if="(item.meta) && !(item.meta.hidden)">
					<template v-if="item.meta && item.meta.leaf">
						<el-menu-item :route="{name:item.path}" :index="item.name" :key="item.name">
							<i :class="item.meta && item.meta.iconCls" class="icon iconfont el-submenu-iconfont"></i>
							<span class="collapse-font "
								slot="title">{{generateTitle('submenu',item.meta.title)}}</span>
						</el-menu-item>
					</template>
					<el-submenu v-else :route="{name:item.path}" :index="item.name" :key="item.name">
						<template slot="title">
							<i :class="item.meta && item.meta.iconCls" class="icon iconfont el-submenu-iconfont"></i>
							<span class="collapse-font" slot="title">{{generateTitle('submenu',item.meta.title)}}</span>
						</template>
						<template v-for="child in item.children">
							<el-menu-item v-if="child.meta && child.meta.isParent" :route="{name:child.path}"
								:index="child.name" :key="child.name" class="parent-padding">
								{{child.meta.title}}
							</el-menu-item>
							<el-submenu v-else :route="{name:child.path}" class="child-padding" :index="child.name"
								:key="child.name">
								<template slot="title">
									<span class="collapse-font">{{child.meta.title}}</span>
								</template>
								<template v-for="child2 in child.children">
									<template v-if="!(child2.meta) || (child2.meta && !(child2.meta.hidden))">
										<el-menu-item :route="{name:child2.path}" :index="child2.name"
											:key="child2.name">
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