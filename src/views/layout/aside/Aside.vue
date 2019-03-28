<template>
	<div class="aside">
		<div class="aside-top el-header el-menu"></div>
		<div class="left-center">
			<el-scrollbar wrap-class="scrollbar-wrapper ">
				<el-menu :collapse-transition="false" :default-active="activeIndex"
					class="el-menu-vertical-demo aside-menu" @open="handleOpen" @close="handleClose"
					background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true"
					:collapse="isCollapse" :unique-opened="true">
					<template v-for="(item,index) in $store.state.perms.routers">
						<template v-if="!item.hidden">
							<el-submenu :index="item.path" v-if="!item.leaf" :key="index">
								<template slot="title">
									<i :class="item.iconCls" class="icon iconfont el-submenu-iconfont"></i>
									<span class="collapse-font" slot="title">{{generateTitle('submenu',item.name)}}</span>
								</template>
								<template v-for="(child,index2) in item.children">
									<el-menu-item v-if="child.isParent" :index="child.path" :key="child.path"
										class="parent-padding">
										{{child.name}}
									</el-menu-item>
									<el-submenu v-else :index="child.path" class="child-padding" :key="index2">
										<template slot="title">
											<span class="collapse-font">{{child.name}}</span>
										</template>
										<template v-for="child2 in child.children">
											<el-menu-item v-if="!(child2.hidden)" :index="child2.path"
												:key="child2.path">
												{{child2.name}}
											</el-menu-item>
										</template>
									</el-submenu>
								</template>
							</el-submenu>
							<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.path" class="first-item"
								:key="index">
								<i :class="item.iconCls" class="icon iconfont el-submenu-iconfont"></i>
								<span class="collapse-font " slot="title">{{generateTitle('submenu',item.name)}}</span>
							</el-menu-item>
						</template>
					</template>
				</el-menu>
			</el-scrollbar>
		</div>
		<div class="aside-footer el-menu">
			<el-button type="text" v-on:click="closeLeft"><i class="el-icon-d-arrow-left"></i></el-button>
		</div>
	</div>
</template>
<script>
import { generateTitle } from '@/utils/i18n'
	export default {
		name: "Aside",
		data() {
			return {
				activeIndex: "/work",
				isCollapse: false,
				input10: ""
			};
		},
		watch: {
			$route: function (to, from) {
				this.activeIndex = this.$route.path;
			}
		},
		created() {
			this.activeIndex = this.$route.matched[1].path;
		},
		mounted() {
			this.activeIndex = this.$route.matched[1].path;
		},
		methods: {
			generateTitle,
			handleOpen(key, keyPath) {
				// console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				// console.log(key, keyPath);
			},
			closeLeft() {
				this.isCollapse = !this.isCollapse;
				this.$emit("change-width", this.isCollapse ? "65px" : "220px");
			}
		}
	};
</script>
<style>
	.aside-menu li div,
	.aside-menu .el-menu-item {
		box-sizing: border-box;
		border-left-width: 3px;
		border-left-style: solid;
		border-left-color: rgba(255, 255, 255, 0);
	}

	.aside-menu>.is-active:not(.el-submenu),
	.aside-menu .is-active>div {
		border-left-color: #1f6fb5;
	}
</style>

<style scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		box-sizing: border-box;
		width: 220px;
	}

	.aside {
		height: 100%;
	}

	.aside-top {
		padding: 0;
		background-color: rgb(58, 67, 76);
		border-bottom: none;
		border-right: solid 1px #e6e6e6;
		text-align: center;
		color: #fff;
		font-size: 22px;
		font-weight: bolder;
	}

	.aside-footer {
		display: block;
		display: -webkit-flex;
		height: 40px;
		line-height: 40px;
		background-color: rgb(84, 92, 100);
		justify-content: flex-end;
	}

	.left-center {
		height: calc(100% - 100px);
	}

	.aside-menu {
		height: 100%;
	}

	.el-submenu-iconfont {
		vertical-align: middle;
		margin-right: 8px;
		width: 24px;
		text-align: center;
		font-size: 18px;
	}
</style>