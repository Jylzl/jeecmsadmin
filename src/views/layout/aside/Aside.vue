<template>
	<div class="aside">
		<div class="aside-top el-header el-menu"></div>
		<div class="left-center">
			<el-scrollbar wrap-class="scrollbar-wrapper ">
				<el-menu :collapse-transition="false" default-active="0" class="el-menu-vertical-demo aside-menu" @open="handleOpen"
				 @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true"
				 :collapse="isCollapse">
					<el-menu-item index="0" route="/console">
						<i class="icon iconfont icon-shebeizhuangtai el-submenu-iconfont"></i>
						<span slot="title">工作台</span>
					</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<i class="icon iconfont icon-ceshishenqing el-submenu-iconfont"></i>
							<span>内容发布</span>
						</template>
						<el-menu-item index="1-0" route="/contentlist">内容管理</el-menu-item>
						<el-menu-item index="1-1" route="/topic">专题管理</el-menu-item>
					</el-submenu>
					<el-menu-item index="2" route="/column">
						<i class="icon iconfont icon-liebiao el-submenu-iconfont"></i>
						<span slot="title">栏目管理</span>
					</el-menu-item>
					<el-submenu index="3" :unique-opened="true">
						<template slot="title">
							<i class="icon iconfont icon-shujukanban el-submenu-iconfont"></i>
							<span>数据中心</span>
						</template>
						<el-submenu index="3-1">
							<template slot="title">流量统计</template>
							<el-menu-item index="3-1-1">趋势分析</el-menu-item>
							<el-menu-item index="3-1-2">栏目访问量排行</el-menu-item>
						</el-submenu>
						<el-submenu index="3-2">
							<template slot="title">来源分析</template>
							<el-menu-item index="3-2-1">来源分类</el-menu-item>
							<el-menu-item index="3-2-2">搜索引擎</el-menu-item>
							<el-menu-item index="3-2-3">来访域名</el-menu-item>
							<el-menu-item index="3-2-4">来访地区</el-menu-item>
							<el-menu-item index="3-2-5">搜索词</el-menu-item>
						</el-submenu>
						<el-submenu index="3-3">
							<template slot="title">受访分析</template>
							<el-menu-item index="3-3-1">受访页面</el-menu-item>
							<el-menu-item index="3-3-2">入口页面</el-menu-item>
						</el-submenu>
						<el-submenu index="3-4">
							<template slot="title">网站概况</template>
							<el-menu-item index="3-4-1">内容发布数</el-menu-item>
							<el-menu-item index="3-4-2">工作量</el-menu-item>
							<el-menu-item index="3-4-3">评论数</el-menu-item>
							<el-menu-item index="3-4-4">留言数</el-menu-item>
						</el-submenu>
						<el-menu-item index="3-5" route="/topic">忠诚度</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">
							<i class="icon iconfont icon-icon_zhanghao el-submenu-iconfont"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item-group>
							<template slot="title">管理员</template>
							<el-menu-item index="4-1">超级管理员</el-menu-item>
							<el-menu-item index="4-2">普通管理员</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="用户">
							<el-menu-item index="4-3">信息发布员</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title">
							<i class="icon iconfont icon-yunyingzhongxin el-submenu-iconfont"></i>
							<span slot="title">运营中心</span>
						</template>
						<el-menu-item-group title="首页">
							<el-menu-item index="5-1" route="/accessibility">可访问性</el-menu-item>
							<el-menu-item index="5-2">连通率</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="告警">
							<el-menu-item index="5-3">告警通知</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title">
							<i class="icon iconfont icon-gongnengdingyi1 el-submenu-iconfont"></i>
							<span slot="title">辅助功能</span>
						</template>
						<el-menu-item-group title="首页">
							<el-menu-item index="6-1" route="/accessibility">可访问性</el-menu-item>
							<el-menu-item index="6-2">连通率</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="告警">
							<el-menu-item index="6-3">告警通知</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title">
							<i class="icon iconfont icon-gongyezujian-yibiaopan el-submenu-iconfont"></i>
							<span slot="title">网站监测</span>
						</template>
						<el-menu-item-group title="首页">
							<el-menu-item index="7-1" route="/accessibility">可访问性</el-menu-item>
							<el-menu-item index="7-2">连通率</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="告警">
							<el-menu-item index="7-3">告警通知</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="8">
						<template slot="title">
							<i class="icon iconfont icon-icon_shezhi el-submenu-iconfont"></i>
							<span slot="title">配置管理</span>
						</template>
						<el-menu-item-group>
							<template slot="title">系统配置</template>
							<el-menu-item index="8-1">权限管理</el-menu-item>
							<el-menu-item index="8-2">普通管理员</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="监测配置">
							<el-menu-item index="8-3">可访问性监测</el-menu-item>
							<el-menu-item index="8-4">连通性监测</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="9" route="/console">
						<i class="icon iconfont icon-kefu el-submenu-iconfont"></i>
						<span slot="title">关于</span>
					</el-menu-item>
				</el-menu>
			</el-scrollbar>
		</div>
		<div class="aside-footer el-menu">
			<el-button type="text" v-on:click="closeLeft"><i class="el-icon-d-arrow-left"></i></el-button>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Aside',
		data() {
			return {
				isCollapse: false,
				input10: ''
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				// console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				// console.log(key, keyPath);
			},
			closeLeft() {
				this.isCollapse = !this.isCollapse;
				this.$emit('change-width', this.isCollapse ? '65px' : '220px');
			}
		}
	}
</script>

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