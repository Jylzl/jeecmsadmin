<!--
 * @description: 页面顶部栏
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-06-10 08:35:23
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-30 17:20:46
 -->
<template>
	<div class="header">
		<div class="header-left">
			<div class="logo">
				<el-link :underline="false" @click="$router.push({name:'work'})">
					<img :src="logoUrl" alt="logo" draggable="false" class="logo-img">
					<span class="logo-txt">{{siteName}}</span>
				</el-link>
			</div>
		</div>
		<div class="header-right">
			<div class="user">
				<div class="siteSearch-form" :class="{'show':show}">
					<el-button type="text" @click.stop="siteSearchShow(true)">
						<svg width="26" height="26">
							<image xlink:href="@/assets/svg/search.svg" src="svg.png" width="26" height="26" />
						</svg>
					</el-button>
					<el-select ref="siteSearchInput" v-model="search" :remote-method="querySearch" filterable
						default-first-option remote placeholder="请输入内容" class="header-search-select" @change="change"
						@blur="siteSearchShow(false)">
						<el-option v-for="item in options" :key="item.path" :value="item"
							:label="item.name.join(' > ')" />
					</el-select>
				</div>
				<div class="message">
					<el-button @click="toNews" type="text">
						<el-badge is-dot class="user-name">
							<svg width="26" height="26">
								<image xlink:href="@/assets/svg/news.svg" src="svg.png" width="26" height="26" />
							</svg>
						</el-badge>
					</el-button>
					<el-button @click="toNews" type="text">
						<div class="user-name">
							<svg width="26" height="26">
								<image xlink:href="@/assets/svg/ie.svg" src="svg.png" width="26" height="26" />
							</svg>
						</div>
					</el-button>
				</div>
				<div class="user-console">
					<el-dropdown trigger="click">
						<div class="el-dropdown-link">
							<el-avatar class="user-header-img" :size="32"
								src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030012986,1102835514&fm=200&gp=0.jpg">
							</el-avatar>
							<!-- <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030012986,1102835514&fm=200&gp=0.jpg"
								alt="" class="user-header-img"> -->
							<span class="item user-name">{{userName}}</span>
							<i class="el-icon-caret-bottom"></i>
						</div>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>
								<el-link :underline="false" @click="$router.push({name:'personalHome'})">个人主页</el-link>
							</el-dropdown-item>
							<el-dropdown-item divided>
								<el-button type="text" icon="el-icon-lock" @click="clockScreen()">锁屏</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button type="text" @click="loginOut()">切换用户</el-button>
								<!-- <el-button type="text" icon="el-icon-lock" @click="loginOut()">退出</el-button> -->
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Fuse from "fuse.js";
import path from "path";
export default {
	data() {
		return {
			logoUrl: require("@/assets/img/logo.png"),
			userName: localStorage.getItem("userName"), //用户名
			siteItems: this.$store.state.perms.siteItems, //站点对象
			siteId: localStorage.getItem("_site_id_param"), //站点ID
			search: "",
			options: [],
			searchPool: [],
			show: false,
			fuse: undefined
		};
	},
	watch: {
		lang() {
			this.searchPool = this.generateRoutes(this.routes);
		},
		routes() {
			this.searchPool = this.generateRoutes(this.routes);
		},
		searchPool(list) {
			this.initFuse(list);
		}
	},
	computed: {
		siteName() {
			for (let i in this.siteItems) {
				if (this.siteItems[i].id == this.siteId) {
					return this.siteItems[i].name;
					break;
				}
			}
		},
		user() {
			return this.$store.getters.getUser;
		},
		routes() {
			return this.$store.getters.permission_routes;
		}
	},
	created() {},
	mounted() {
		this.searchPool = this.generateRoutes(this.routes);
	},
	methods: {
		//锁屏操作
		clockScreen() {
			this.$confirm("您在进行锁屏操作, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			})
				.then(() => {
					this.$router.push({
						path: "/lock", //跳转的路径
						query: {
							user: this.userName
						}
					});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消"
					});
				});
		},
		//退出登陆
		loginOut() {
			this.$confirm("您在进行退出操作, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			})
				.then(() => {
					this.$store.dispatch("loginOut").then(res => {
						if (res.code == this.$code.success) {
							this.successMessage("退出成功");
							this.$router.push("/login");
						} else {
							this.errorMessage("退出失败");
						}
					});
				})
				.catch(() => {
					this.warningMessage("已取消");
				});
		},
		//站内搜索
		siteSearchShow(type) {
			this.show = type;
			this.$refs.siteSearchInput.focus();
		},
		change(val) {
			this.$router.push(val.path);
			this.search = "";
			this.options = [];
			this.$nextTick(() => {
				this.show = false;
			});
		},
		initFuse(list) {
			this.fuse = new Fuse(list, {
				shouldSort: true,
				threshold: 0.4,
				location: 0,
				distance: 100,
				maxPatternLength: 32,
				minMatchCharLength: 1,
				keys: [
					{
						name: "name",
						weight: 0.7
					},
					{
						name: "path",
						weight: 0.3
					}
				]
			});
		},
		generateRoutes(routes, basePath = "/", prefixTitle = []) {
			let res = [];
			for (const router of routes) {
				// 如果路由不显示就跳出循环
				if (router.meta.hidden) {
					continue;
				}
				const data = {
					path: path.resolve(basePath, router.path),
					name: [...prefixTitle]
				};
				if (router.meta && router.meta.title) {
					// generate internationalized title
					data.name = [...data.name, router.meta.title];
					if (router.redirect !== "noredirect") {
						// only push the routes with title
						// special case: need to exclude parent router without redirect
						res.push(data);
					}
				}

				// recursive child routes
				if (router.children) {
					const tempRoutes = this.generateRoutes(
						router.children,
						data.path,
						data.name
					);
					if (tempRoutes.length >= 1) {
						res = [...res, ...tempRoutes];
					}
				}
			}
			return res;
		},
		querySearch(query) {
			if (query !== "") {
				this.options = this.fuse.search(query);
			} else {
				this.options = [];
			}
		},
		//前往消息中心
		toNews() {
			this.$router.push({
				name: "personalHome",
				query: {
					type: "notification"
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	height: 60px;
	line-height: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.el-dropdown-link {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100%;
	align-items: center;
	padding: 0 5px;
	color: #fff;
}

.logo {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	height: 100%;
	align-items: center;
	font-size: 0;
}

.logo .logo-img {
	width: 48px;
	vertical-align: middle;
}

.logo .logo-txt {
	color: #ffffff;
	margin-left: 20px;
	font-size: 18px;
}

.el-dropdown-link:hover {
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.025);
}

.item {
	box-sizing: border-box;
	padding-right: 12px;
	line-height: 1;
}

.user {
	display: flex;
	justify-content: flex-end;
	height: 100%;
	align-items: center;
}

.message {
	display: flex;
	align-items: center;
	margin-right: 20px;
}

.user-name {
	color: #ffffff;
}

.user-console {
	display: -webkit-flex;
	display: flex;
	height: 100%;
	flex-direction: row-reverse;
}

.user-header-img1 {
	display: -webkit-flex;
	display: flex;
	align-items: center;
	margin-right: 8px;
}

.user-header-img {
	margin-right: 8px;
}

.header-search-select {
	display: flex;
	align-items: center;
	font-size: 18px;
	transition: width 0.2s;
	width: 0;
	overflow: hidden;
	background: transparent;
	border-radius: 0;
	display: inline-block;
	vertical-align: middle;
	border-radius: 10px;
	padding-top: 8px;

	/deep/ .el-input__inner {
		border-radius: 0;
		border: 0;
		padding-left: 0;
		padding-right: 0;
		box-shadow: none !important;
		border-bottom: 2px solid #fff;
		vertical-align: middle;
		color: #fff;
	}

	/deep/ .el-input.is-focus .el-input__inner {
		border-bottom: 2px solid #fff;
	}

	/deep/ input::-webkit-input-placeholder {
		color: #fff;
	}

	/deep/ input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #fff;
	}

	/deep/ input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #fff;
	}

	/deep/ input:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #fff;
	}
}

.siteSearch-form {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-right: 15px;
}

.siteSearch-form button {
	font-size: 26px;
}

.siteSearch-form .siteSearch-input {
	box-sizing: border-box;
	overflow: hidden;
}

.siteSearch-form .siteSearch-input input {
	box-sizing: border-box;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid #fff;
	padding: 0 10px;
}

.show {
	.header-search-select {
		display: block;
		width: 210px;
		margin-left: 10px;
	}
}
</style>