<template>
	<el-row type="flex" justify="space-between">
		<el-col :span="11">
			<el-badge is-dot class="item">{{siteName}}</el-badge>
		</el-col>
		<el-col :span="5">
		</el-col>
		<el-col :span="10">
			<div class="user-console">
				<el-dropdown trigger="click">
					<div class="el-dropdown-link">
						<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2030012986,1102835514&fm=200&gp=0.jpg"
							alt="" class="user-header-img">
						<el-badge is-dot class="item">{{userName}}</el-badge>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</div>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>用户设置</el-dropdown-item>
						<el-dropdown-item>
							<el-badge is-dot class="item">未读消息</el-badge>
						</el-dropdown-item>
						<el-dropdown-item><span @click="clockScreen()">锁屏</span></el-dropdown-item>
						<el-dropdown-item divided>
							<el-button type="text" @click="loginOut()">切换用户</el-button>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<div class="siteSearch-form" :class="{'show':show}">
					<el-button type="text" icon="el-icon-search" @click.stop="siteSearchShow(true)"></el-button>
					<el-select ref="siteSearchInput" v-model="search" :remote-method="querySearch" filterable
						default-first-option remote placeholder="请输入内容" class="header-search-select" @change="change"
						@blur="siteSearchShow(false)">
						<el-option v-for="item in options" :key="item.path" :value="item"
							:label="item.name.join(' > ')" />
					</el-select>
				</div>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import Fuse from 'fuse.js'
	import path from 'path'
	export default {
		name: "Header",
		components: {},
		data() {
			return {
				userName: localStorage.getItem('userName'), //用户名
				siteItems: this.$store.state.perms.siteItems, //站点对象
				siteId: localStorage.getItem('_site_id_param'), //站点ID
				search: '',
				options: [],
				searchPool: [],
				show: false,
				fuse: undefined
			};
		},
		watch: {
			lang() {
				this.searchPool = this.generateRoutes(this.routes)
			},
			routes() {
				this.searchPool = this.generateRoutes(this.routes)
			},
			searchPool(list) {
				this.initFuse(list)
			},
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
			routes() {
				return this.$store.getters.permission_routes;
			}
		},
		mounted() {
			this.searchPool = this.generateRoutes(this.routes)
		},
		methods: {
			siteSearchShow(type) {
				this.show = type;
				this.$refs.siteSearchInput.focus()
			},
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
			loginOut() {
				this.$confirm("您在进行退出操作, 是否继续?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning"
					})
					.then(() => {
						this.$store
							.dispatch("loginOut")
							.then((res) => {
								if (res.code == '200') {
									this.$message({
										type: 'success',
										message: '退出成功'
									});
									this.$router.push("/login");
								} else {
									this.$message({
										message: '退出失败',
										type: 'warning'
									});
								}
							})
							.catch(() => {
								this.$message.error('服务器异常');
							});
					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "已取消"
						});
					});
			},
			change(val) {
				this.$router.push(val.path)
				this.search = ''
				this.options = []
				this.$nextTick(() => {
					this.show = false
				})
			},
			initFuse(list) {
				this.fuse = new Fuse(list, {
					shouldSort: true,
					threshold: 0.4,
					location: 0,
					distance: 100,
					maxPatternLength: 32,
					minMatchCharLength: 1,
					keys: [{
						name: 'name',
						weight: 0.7
					}, {
						name: 'path',
						weight: 0.3
					}]
				})
			},
			generateRoutes(routes, basePath = '/', prefixTitle = []) {
				let res = []

				for (const router of routes) {
					// 如果路由不显示就跳出循环
					if (router.hidden) {
						continue
					}
					const data = {
						path: path.resolve(basePath, router.path),
						name: [...prefixTitle]
					}
					if (router.meta && router.meta.title) {
						// generate internationalized title
						data.name = [...data.name, router.meta.title]
						if (router.redirect !== 'noredirect') {
							// only push the routes with title
							// special case: need to exclude parent router without redirect
							res.push(data)
						}
					}

					// recursive child routes
					if (router.children) {
						const tempRoutes = this.generateRoutes(router.children, data.path, data.name)
						if (tempRoutes.length >= 1) {
							res = [...res, ...tempRoutes]
						}
					}
				}
				return res
			},
			querySearch(query) {
				if (query !== '') {
					this.options = this.fuse.search(query)
				} else {
					this.options = []
				}
			}
		}
	};
</script>
<style>
	.siteSearch-form {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
		border-bottom: 1px solid #d1d2d3;
		padding: 0 10px;
	}
</style>

<style lang="scss" scoped>
	.el-dropdown-link {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 100%;
		align-items: center;
		padding: 0 5px;
	}

	.el-dropdown-link:hover {
		cursor: pointer;
		background-color: rgba(0,0,0,.025);;
	}

	.nav-bar,
	.navbar-nav,
	.navbar-collapse {
		height: 100%;
	}

	.navbar-nav>ul {
		height: 100%;
	}

	.navbar-nav>ul:after {
		content: "";
		display: block;
		clear: both;
		height: 0;
	}

	.navbar-nav>ul {
		zoom: 1;
	}

	.navbar-nav>ul>li {
		box-sizing: border-box;
		float: left;
		height: 100%;
		padding: 10px 15px;
		line-height: 39px;
	}

	.item {
		box-sizing: border-box;
		padding-right: 12px;
		line-height: 1;
	}

	.user-console {
		display: -webkit-flex;
		display: flex;
		flex-direction: row-reverse;
	}

	.user-header-img1 {
		display: -webkit-flex;
		display: flex;
		align-items: center;
		margin-right: 8px;
	}

	.user-header-img {
		box-sizing: border-box;
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid #e1e2e3;
		padding: 1px;
		margin-right: 8px;
	}

	.header-search-select {
		font-size: 18px;
		transition: width 0.2s;
		width: 0;
		overflow: hidden;
		background: transparent;
		border-radius: 0;
		display: inline-block;
		vertical-align: middle;

		/deep/ .el-input__inner {
			border-radius: 0;
			border: 0;
			padding-left: 0;
			padding-right: 0;
			box-shadow: none !important;
			border-bottom: 1px solid #d9d9d9;
			vertical-align: middle;
		}
	}

	.show {
		.header-search-select {
			width: 210px;
			margin-left: 10px;
		}
	}
</style>