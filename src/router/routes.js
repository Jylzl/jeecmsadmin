import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/account/Login.vue'
import lock from '@/views/account/Lock.vue'
import layout from '@/layout/Layout.vue'
import work from '@/views/console/Console.vue'

import error401 from '@/views/errorpage/401.vue'
import error404 from '@/views/errorpage/404.vue'
import childView from '@/components/childView/Index.vue'
// const resourceTree = resolve => {
// 	require(['@/views/interface/resource/tree.vue'], resolve)
// }; //
// const resourceList = resolve => {
// 	require(['@/views/interface/resource/list.vue'], resolve)
// }; //
// const resourceEdit = resolve => {
// 	require(['@/views/interface/resource/edit.vue'], resolve)
// }; //
// const resourceReName = resolve => {
// 	require(['@/views/interface/resource/rename.vue'], resolve)
// }; //
// const templateTree = resolve => {
// 	require(['@/views/interface/template/tree.vue'], resolve)
// }; //
// const templateList = resolve => {
// 	require(['@/views/interface/template/list.vue'], resolve)
// }; //
// const templateEdit = resolve => {
// 	require(['@/views/interface/template/edit.vue'], resolve)
// }; //
// const templateReName = resolve => {
// 	require(['@/views/interface/template/rename.vue'], resolve)
// }; //
// const templateSetting = resolve => {
// 	require(['@/views/interface/template/setting.vue'], resolve)
// }; //
// function $importViews(componentName) { //异步加载组件
// 	return resolve => {
// 		require(['@/views/' + componentName + '.vue'], resolve)
// 	}
// }


Vue.use(Router)
/**
 * routes==默认路由节点
 */
const routes = [{
		meta: {
			title: '登录',
			hidden: true
		},
		path: '/login',
		name: '登录',
		component: login
	},
	{
		meta: {
			title: "锁屏",
			hidden: true
		},
		path: "/lock",
		name: "锁屏",
		component: lock
	},
	{
		meta: {
			title: '401',
			hidden: true
		},
		path: '/401',
		name: '401',
		component: error401
	},
	{
		meta: {
			title: '404',
			hidden: true
		},
		path: '/404',
		name: '404',
		component: error404
	},
	{
		meta: {
			title: '工作台',
			role: 'work',
			iconCls: 'icon-shebeizhuangtai',
			leaf: true, //只有一个节点
		},
		path: '/',
		name: '工作台',
		redirect: '/work',
		component: layout,
		children: [{
			meta: {
				title: '工作台'
			},
			path: '/work',
			component: work,
		}]
	}
];
const ansycRoutes = [{
		meta: {
			title: '内容发布',
			iconCls: 'icon-ceshishenqing',
			isLink: true
		},
		path: '/contentMange', //内容管理
		name: '内容发布',
		component: layout,
		redirect: '/content/list',
		children: [{
			meta: {
				title: '内容管理',
				isParent: true,
			},
			path: '/content',
			name: '内容管理',
			redirect: '/content/list',
			component: childView,
			children: [{
				meta: {
					title: '内容列表'
				},
				path: '/content/list',
				name: '内容列表',
				component: resolve => {
					require(['@/views/content/content/list.vue'], resolve)
				}
			}, {
				meta: {
					title: '内容添加'
				},
				path: '/content/edit',
				name: '内容添加',
				component: resolve => {
					require(['@/views/content/content/add.vue'], resolve)
				}
			}, {
				meta: {
					title: '内容修改'
				},
				path: '/content/update',
				name: '内容修改',
				component: resolve => {
					require(['@/views/content/content/edit.vue'], resolve)
				}
			}]
		}, {
			meta: {
				title: '专题管理',
				isParent: true
			},
			path: '/topic',
			name: '专题管理', //专题管理
			redirect: '/topic/list',
			component: childView,
			children: [{
					meta: {
						title: '专题列表'
					},
					path: '/topic/list',
					name: '专题列表',
					component: resolve => {
						require(['@/views/content/topic/list.vue'], resolve)
					}
				},
				{
					meta: {
						title: '专题添加'
					},
					path: '/topic/save',
					name: '专题添加',
					component: resolve => {
						require(['@/views/content/topic/edit.vue'], resolve)
					}
				},
				{
					meta: {
						title: '专题修改'
					},
					path: '/topic/update',
					name: '专题修改',
					component: resolve => {
						require(['@/views/content/topic/edit.vue'], resolve)
					}
				}
			]

		}]
	}, //栏目管理
	{
		meta: {
			title: '栏目管理',
			isParent: true,
			iconCls: 'icon-liebiao',
			leaf: true, //只有一个节点  
		},
		path: '/channel', //栏目
		name: '栏目管理',
		redirect: '/channel/list',
		component: layout,
		children: [{
			meta: {
				title: '栏目列表',
				hidden: true
			},
			path: '/channel/list',
			name: '栏目列表', //栏目列表
			component: resolve => {
				require(['@/views/channel/list.vue'], resolve)
			}
		}, {
			meta: {
				title: '栏目添加',
				hidden: true
			},
			path: '/channel/save',
			name: '栏目添加', //栏目添加
			component: resolve => {
				require(['@/views/channel/add.vue'], resolve)
			}
		}, {
			meta: {
				title: '栏目修改',
				hidden: true
			},
			path: '/channel/update',
			name: '栏目修改',
			component: resolve => {
				require(['@/views/channel/update.vue'], resolve)
			}
		}, {
			meta: {
				title: '栏目复制',
				hidden: true
			},
			path: '/channel/copy',
			name: '栏目复制',
			component: resolve => {
				require(['@/views/channel/copy.vue'], resolve)
			}
		}]
	}, //数据中心
	{
		meta: {
			title: '数据中心',
			iconCls: 'icon-shujukanban',
			isLink: true
		},
		path: "/dataCenter",
		name: '数据中心',
		component: layout,
		children: [{
				meta: {
					title: '流量统计'
				},
				path: '/traffic',
				name: '流量统计',
				redirect: '/traffic/trend',
				component: childView,
				children: [{
					meta: {
						title: '趋势分析'
					},
					path: '/traffic/trend', //趋势分析
					name: '趋势分析',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '栏目访问量排行'
					},
					path: '/traffic/channel', //栏目访问量排行
					name: '栏目访问量排行',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '来源分析'
				},
				path: '/sourceanalysis', //来源分析
				name: '来源分析',
				component: childView,
				children: [{
						meta: {
							title: '来源分类'
						},
						path: '/sourceanalysis/class', //来源分类
						name: '来源分类',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '搜索引擎'
						},
						path: '/sourceanalysis/engin', //搜索引擎
						name: '搜索引擎',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '来访域名'
						},
						path: '/sourceanalysis/domain', //来访域名
						name: '来访域名',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '来访地区'
						},
						path: '/sourceanalysis/city', //来访域名
						name: '来访地区',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '搜索词'
						},
						path: '/sourceanalysis/keywords', //搜索词
						name: '搜索词',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '受访分析'
				},
				path: '/surveyedanalysis', //受访分析
				name: '受访分析',
				component: childView,
				children: [{
						meta: {
							title: '受访页面'
						},
						path: '/surveyedanalysis/surveyed', //受访页面
						name: '受访页面',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '入口页面'
						},
						path: '/surveyedanalysis/index', //入口页面
						name: '入口页面',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '网站概况'
				},
				path: '/siteProfile', //网站概况
				name: '网站概况',
				component: childView,
				children: [{
						meta: {
							title: '内容发布数'
						},
						path: '/siteProfile/contentnum', //内容发布数
						name: '内容发布数',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '工作量'
						},
						path: '/siteProfile/worknum', //工作量
						name: '工作量',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '评论数'
						},
						path: '/siteProfile/commentnum', //评论数
						name: '评论数',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '留言数'
						},
						path: '/siteProfile/leavenum', //留言数
						name: '留言数',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员注册数'
						},
						path: '/siteProfile/usernum', //会员注册数
						name: '会员注册数',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '忠诚度',
					isParent: true,
				},
				path: '/loyalty', //忠诚度
				name: '忠诚度',
				component: resolve => {
					require(['@/views/errorpage/405.vue'], resolve)
				}
			}
		]
	}, //用户中心
	{
		meta: {
			title: '用户管理',
			iconCls: 'icon-icon_zhanghao',
			isLink: true
		},
		path: '/userManager',
		name: '用户管理', //用户管理
		component: layout,
		children: [{
				meta: {
					title: '会员管理',
					isParent: true
				},
				path: '/user',
				name: '会员管理', //会员管理
				redirect: '/user/list',
				component: childView,
				children: [{
						meta: {
							title: '会员列表'
						},
						path: '/user/list', //会员列表
						name: '会员列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员添加',
							hidden: true,
						},
						path: '/user/save', //会员添加
						name: '会员添加',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员修改',
							hidden: true,
						},
						path: '/user/update', //会员添加
						name: '会员修改',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			}, {
				meta: {
					title: '角色管理',
					isParent: true
				},
				path: '/role', //角色管理
				name: '角色管理',
				redirect: '/role/list',
				component: childView,
				children: [{
						meta: {
							title: '角色管理'
						},
						path: '/role/list',
						name: '角色管理',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '角色添加',
							hidden: true
						},
						path: '/role/save',
						name: '角色添加',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '角色修改',
							hidden: true
						},
						path: '/role/update',
						name: '角色修改',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '成员列表',
							hidden: true
						},
						path: '/role/members',
						name: '成员列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			}, {
				meta: {
					title: '账户绑定',
					isParent: true
				},
				path: '/account',
				name: '账户绑定',
				redirect: '/account/list',
				component: childView,
				children: [{
					meta: {
						title: '列表'
					},
					path: '/account/list',
					name: '列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '管理员(全站)',
					isParent: true,
				},
				path: '/adminGlobal',
				name: '管理员(全站)', //管理员(全站)
				redirect: '/adminGlobal/list',
				component: childView,
				children: [{
					meta: {
						title: '管理员(全站)列表'
					},
					path: '/adminGlobal/list', //管理员列表(全站)
					name: '管理员(全站)列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '管理员(全站)编辑',
						hidden: true
					},
					path: '/adminGlobal/edit', //管理员编辑页(全站)
					name: '管理员(全站)编辑',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '管理员(全站)添加',
						hidden: true
					},
					path: '/adminGlobal/add', //管理员添加页(全站)
					name: '管理员(全站)添加',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '管理员(本站)',
					isParent: true
				},
				path: '/adminGlocal',
				name: '管理员(本站)', //管理员(本站)
				redirect: '/adminGlocal/list',
				component: childView,
				children: [{
					meta: {
						title: '管理员(本站)列表'
					},
					path: '/adminGlocal/list', //管理员列表(本站)
					name: '管理员(本站)列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '管理员(本站)修改'
					},
					path: '/adminGlocal/edit', //管理员编辑页(本站)
					name: '管理员(本站)修改',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '管理员(本站)添加'
					},
					path: '/adminGlocal/add', //管理员添加页(本站)
					name: '管理员(本站)添加',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '操作日志',
					isParent: true
				},
				path: '/log',
				name: '操作日志', //操作日志
				redirect: '/log/list',
				component: childView,
				children: [{
					meta: {
						title: '日志列表'
					},
					path: '/log/list', //日志列表
					name: '日志列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '会员组管理',
					isParent: true
				},
				path: '/group',
				name: '会员组管理', //会员组管理
				redirect: '/group/list',
				component: childView,
				children: [{
					meta: {
						title: '会员组列表'
					},
					path: '/group/list', //会员组列表
					name: '会员组列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '会员组添加'
					},
					path: '/group/add', //会员组添加
					name: '会员组添加',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '会员组修改'
					},
					path: '/group/edit', //会员组修改
					name: '会员组修改',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '部门管理',
					isParent: true
				},
				path: '/department',
				name: '部门管理', //部门管理
				redirect: '/department/list',
				component: childView,
				children: [{
					meta: {
						title: '部门模板'
					},
					path: '/department/tpm',
					name: '部门模板', //部门管理
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					},
					children: [{
						meta: {
							title: '部门列表'
						},
						path: '/department/list', //部门列表
						name: '部门列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}, {
						meta: {
							title: '部门添加'
						},
						path: '/department/save', //部门添加
						name: '部门添加',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}, {
						meta: {
							title: '部门修改'
						},
						path: '/department/update', //部门添加
						name: '部门修改',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}, {
						meta: {
							title: '部门成员列表'
						},
						path: '/department/memberList', //部门添加
						name: '部门成员列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}]
				}]
			}, {
				meta: {
					title: '站内信管理',
					isParent: true
				},
				path: '/message',
				name: '站内信管理', //站内信管理
				redirect: '/message/list',
				component: childView,
				children: [{
					meta: {
						title: '站内信列表'
					},
					path: '/message/list', //站内信列表
					name: '站内信列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '发送站内信'
					},
					path: '/message/add', //发送站内信
					name: '发送站内信',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信查看'
					},
					path: '/message/seek', //查看站内信
					name: '站内信查看',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信回复'
					},
					path: '/message/reply',
					name: '站内信回复',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信转发'
					},
					path: '/message/forward',
					name: '站内信转发',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}
		]
	}, //运营中心
	{
		meta: {
			title: '运营中心',
			iconCls: 'icon-yunyingzhongxin',
			isLink: true
		},
		path: '/operate',
		component: layout,
		name: '运营中心',
		children: [{
				meta: {
					title: '内容复用',
					isParent: true
				},
				path: '/contentReuse',
				name: '内容复用',
				component: resolve => {
					require(['@/views/errorpage/405.vue'], resolve)
				}
			},
			{
				meta: {
					title: '工作流',
					isParent: true
				},
				path: '/workflow',
				name: '工作流', //工作流
				redirect: '/workflow/list',
				component: childView,
				children: [{
					meta: {
						title: '工作流列表'
					},
					path: '/workflow/list', //工作流列表
					name: '工作流列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '工作流添加'
					},
					path: '/workflow/save', //工作流添加
					name: '工作流添加',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '工作流修改'
					},
					path: '/workflow/update', //工作流修改
					name: '工作流修改',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '友情链接',
					isParent: true
				},
				path: '/link',
				name: '友情链接', //友情链接
				redirect: '/link/list',
				component: childView,
				children: [{
					meta: {
						title: '友情链接列表'
					},
					path: '/link/list', //友情链接列表
					name: '友情链接列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '友情链接添加'
					},
					path: '/link/save', //友情链接添加
					name: '友情链接添加',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '友情链接修改'
					},
					path: '/link/update', //友情链接修改
					name: '友情链接修改',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '类别列表'
					},
					path: '/link/typeList', //友情链接类别列表
					name: '类别列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '广告管理',
					isParent: true
				},
				path: '/ad',
				name: '广告管理',
				redirect: '/ad/list',
				component: childView,
				children: [{
					meta: {
						title: '广告列表'
					},
					path: '/ad/list',
					name: '广告列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '广告添加'
					},
					path: '/ad/save',
					name: '广告添加',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '广告修改'
					},
					path: '/ad/update',
					name: '广告修改',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '广告版位列表'
					},
					path: '/adSpace/list',
					name: '广告版位列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '共享管理',
					isParent: true
				},
				path: '/contentShare',
				name: '共享管理',
				redirect: '/contentShare/list',
				component: childView,
				children: [{
						meta: {
							title: '共享列表'
						},
						path: '/contentShare/list',
						name: '共享列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '内容查看'
						},
						path: '/contentShare/view',
						name: '内容查看',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '内容购买记录',
					isParent: true
				},
				path: '/contentBuy',
				name: '内容购买记录', //内容购买记录
				redirect: '/contentBuy/list',
				component: childView,
				children: [{
					meta: {
						title: '内容购买记录列表'
					},
					path: '/contentBuy/list', ////内容购买记录列表
					name: '内容购买记录列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '用户账户统计',
					isParent: true
				},
				path: '/userAccount',
				name: '用户账户统计', //用户账户统计
				redirect: '/userAccount/list',
				component: childView,
				children: [{
					meta: {
						title: '用户账户统计列表'
					},
					path: '/userAccount/list', ////用户账户统计列表
					name: '用户账户统计列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '内容收费统计',
					isParent: true
				},
				path: '/charge',
				name: '内容收费统计', //内容收费统计
				redirect: '/charge/list',
				component: childView,
				children: [{
						meta: {
							title: '内容收费统计列表'
						},
						path: '/charge/list', ////内容收费统计列表
						name: '内容收费统计列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '平台佣金所得'
						},
						path: '/charge/commission', ////2）平台佣金所得
						name: '平台佣金所得',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '转账管理',
					isParent: true
				},
				path: '/accountPay',
				name: '转账管理', //转账管理
				redirect: '/accountPay/list',
				component: childView,
				children: [{
					meta: {
						title: '转账列表'
					},
					path: '/accountPay/list', ////转账管理列表
					name: '转账列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '提现管理',
					isParent: true
				},
				path: '/drawApply',
				name: '提现管理', //提现管理
				redirect: '/drawApply/list',
				component: childView,
				children: [{
						meta: {
							title: '提现列表'
						},
						path: '/drawApply/list', ////提现管理列表
						name: '提现列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '转账'
						},
						path: '/drawApply/traAccount', ////转账
						name: '转账',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '评论管理',
					isParent: true
				},
				path: '/comment',
				name: '评论管理', //评论管理
				redirect: '/comment/list',
				component: childView,
				children: [{
					meta: {
						title: '评论列表'
					},
					path: '/comment/list', //评论列表
					name: '评论列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '评论查看'
					},
					path: '/comment/itemList', //评论查看
					name: '评论查看',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '职位申请',
					isParent: true
				},
				path: '/job',
				name: '职位申请',
				redirect: '/job/list',
				component: childView,
				children: [{
						meta: {
							title: '职位申请列表'
						},
						path: '/job/list',
						name: '职位申请列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '简历查看'
						},
						path: '/job/seek',
						name: '简历查看',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '数据备份'
				},
				path: '/db',
				name: '数据备份',
				component: childView,
				children: [{
						meta: {
							title: '备份'
						},
						path: '/backups',
						name: '备份',
						redirect: '/backups/list',
						component: childView,
						children: [{
								meta: {
									title: '备份列表'
								},
								path: '/backups/list',
								name: '备份列表',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '表字段列表'
								},
								path: '/backups/seek',
								name: '表字段列表',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					},
					{
						meta: {
							title: '恢复'
						},
						path: '/revert',
						name: '恢复',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '备份目录'
						},
						path: '/backupsDir',
						name: '备份目录',
						redirect: '/backupsDir/list',
						component: childView,
						children: [{
								meta: {
									title: '备份目录列表'
								},
								path: '/backupsDir/list',
								name: '备份目录列表',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '备份目录重命名'
								},
								path: '/backupsDir/edit',
								name: '备份目录重命名',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					}
				]
			},
			{
				meta: {
					title: '问卷管理',
					isParent: true
				},
				path: '/vote',
				name: '问卷管理', //问卷管理
				redirect: '/vote/list',
				component: childView,
				children: [{
					meta: {
						title: '问卷列表'
					},
					path: '/vote/list', //问卷调查列表
					name: '问卷列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '问卷新增'
					},
					path: '/vote/save', //问卷新增
					name: '问卷新增',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '问卷修改'
					},
					path: '/vote/update', //问卷修改
					name: '问卷修改',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '留言管理',
					isParent: true
				},
				path: '/guestbook',
				name: '留言管理',
				redirect: '/guestbook/list',
				component: childView,
				children: [{
					meta: {
						title: '留言列表'
					},
					path: '/guestbook/list',
					name: '留言列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '留言新增'
					},
					path: '/guestbook/save',
					name: '留言新增',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '留言类型列表'
					},
					path: '/guestbookType/list',
					name: '留言类型列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '采集管理'
				},
				path: '/collection',
				name: '采集管理',
				component: childView,
				children: [{
						meta: {
							title: '采集'
						},
						path: '/collectionmanage',
						name: '采集',
						redirect: '/collectionmanage/list',
						component: childView,
						children: [{
								meta: {
									title: '采集列表'
								},
								path: '/collectionmanage/list',
								name: '采集列表',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '采集添加'
								},
								path: '/collectionmanage/save',
								name: '采集添加',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '采集修改'
								},
								path: '/collectionmanage/update',
								name: '采集修改',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					},
					{
						meta: {
							title: '采集历史'
						},
						path: '/collectionhistory',
						name: '采集历史',
						redirect: '/collectionhistory/list',
						component: childView,
						children: [{
							meta: {
								title: '采集列表'
							},
							path: '/collectionhistory/list',
							name: '采集列表',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: '采集进度'
						},
						path: '/collectionspeed',
						name: '采集进度',
						redirect: '/collectionspeed/view',
						component: childView,
						children: [{
							meta: {
								title: '采集查看'
							},
							path: '/collectionspeed/view',
							name: '采集查看',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					}
				]
			},
			{
				meta: {
					title: '公众号设置'
				},
				path: '/weixin',
				name: '公众号设置',
				component: childView,
				children: [{
						meta: {
							title: '公众号设置'
						},
						path: '/weixinConfig',
						name: '公众号设置',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '自定义菜单'
						},
						path: '/weixinMenu', //自定义菜单
						name: '自定义菜单',
						redirect: '/weixinMenu/list',
						component: childView,
						children: [{
								meta: {
									title: '自定义菜单列表'
								},
								path: '/weixinMenu/list', ////自定义菜单列表
								name: '自定义菜单列表',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '自定义菜单添加'
								},
								path: '/weixinMenu/add', ////自定义菜单添加
								name: '自定义菜单添加',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '自定义菜单修改'
								},
								path: '/weixinMenu/edit', ////自定义菜单修改
								name: '自定义菜单修改',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '自定义菜单二级菜单'
								},
								path: '/weixinMenu/child', ////自定义菜单二级菜单
								name: '自定义菜单二级菜单',
								redirect: '/weixinMenu/child/list',
								component: childView,
								children: [{
										meta: {
											title: '二级菜单列表'
										},
										path: '/weixinMenu/child/list', ////自定义菜单列表
										name: '二级菜单列表',
										component: resolve => {
											require(['@/views/errorpage/405.vue'], resolve)
										}
									},
									{
										meta: {
											title: '二级菜单添加'
										},
										path: '/weixinMenu/child/add', ////自定义菜单添加
										name: '二级菜单添加',
										component: resolve => {
											require(['@/views/errorpage/405.vue'], resolve)
										}
									},
									{
										meta: {
											title: '二级菜单修改'
										},
										path: '/weixinMenu/child/edit', ////自定义菜单修改
										name: '二级菜单修改',
										component: resolve => {
											require(['@/views/errorpage/405.vue'], resolve)
										}
									}
								]
							}
						]
					},
					{
						meta: {
							title: '自定义回复'
						},
						path: '/weixinMessage',
						name: '自定义回复',
						redirect: '/weixinMessage/list',
						component: childView,
						children: [{
								meta: {
									title: '自定义回复列表'
								},
								path: '/weixinMessage/list',
								name: '自定义回复列表',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '自定义回复添加'
								},
								path: '/weixinMessage/add',
								name: '自定义回复添加',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '自定义回复修改'
								},
								path: '/weixinMessage/edit',
								name: '自定义回复修改',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					},
					{
						meta: {
							title: '默认回复'
						},
						path: '/weixinMessageDef',
						name: '默认回复',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				path: '/statically',
				name: '页面静态化',
				component: childView,
				meta: {
					title: '页面静态化'
				},
				children: [{
						meta: {
							title: '首页静态化'
						},
						path: '/statically/indexStatic',
						name: '首页静态化',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '栏目静态化'
						},
						path: '/statically/channelStatic',
						name: '栏目静态化',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '内容静态化'
						},
						path: '/statically/contentStatic', //内容静态化
						name: '内容静态化',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			}
		]
	}, //辅助功能
	{
		meta: {
			title: '辅助功能',
			iconCls: 'icon-gongnengdingyi1',
			isLink: true
		},
		path: '/help',
		component: layout,
		name: '辅助功能',
		children: [{
				meta: {
					title: '全文检索',
					isParent: true
				},
				path: '/fullTextSearch',
				name: '全文检索', //全文检索
				component: resolve => {
					require(['@/views/errorpage/405.vue'], resolve)
				}
			},
			{
				meta: {
					title: '字典',
					isParent: true
				},
				path: '/dictionary',
				name: '字典', //字典
				redirect: '/dictionary/list',
				component: childView,
				children: [{
					meta: {
						title: '字典列表'
					},
					path: '/dictionary/list', ////字典列表
					name: '字典列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '内容回收站',
					isParent: true
				},
				path: '/contentCycle',
				name: '内容回收站', //内容回收站
				redirect: '/contentCycle/list',
				component: childView,
				children: [{
					meta: {
						title: '内容回收站列表'
					},
					path: '/contentCycle/list', ////字典列表
					name: '内容回收站列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '定时任务',
					isParent: true
				},
				path: '/crontab',
				name: '定时任务', //定时任务
				redirect: '/crontab/list',
				component: childView,
				children: [{
					meta: {
						title: '定时任务列表'
					},
					path: '/crontab/list', //定时任务列表
					name: '定时任务列表',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '定时任务添加'
					},
					path: '/crontab/save', //定时任务添加
					name: '定时任务添加',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '定时任务修改'
					},
					path: '/crontab/update', //定时任务修改
					name: '定时任务修改',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '附件管理',
					isParent: true
				},
				path: '/file',
				name: '附件管理', //附件管理
				redirect: '/file/list',
				component: childView,
				children: [{
					meta: {
						title: '附件管理'
					},
					path: '/file/list', //附件管理
					name: '附件管理',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '二维码生成',
					isParent: true
				},
				path: '/dimensioncode',
				name: '二维码生成', //二维码管理
				redirect: '/dimensioncode/create',
				component: childView,
				children: [{
					meta: {
						title: '二维码管理创建'
					},
					path: '/dimensioncode/create', ////二维码管理创建
					name: '二维码管理创建',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '智能表单',
					isParent: true
				},
				path: '/customForm',
				name: '智能表单', //智能表单
				redirect: '/customForm/list',
				component: childView,
				children: [{
						meta: {
							title: '智能表单列表'
						},
						path: '/customForm/list', ////智能表单列表
						name: '智能表单列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '智能表单添加'
						},
						path: '/customForm/add', ////智能表单添加
						name: '智能表单添加',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '智能表单修改'
						},
						path: '/customForm/edit', ////智能表单修改
						name: '智能表单修改',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '智能表单记录'
						},
						path: '/customForm/record', ////智能表单记录
						name: '智能表单记录',
						redirect: '/customForm/record/list',
						component: childView,
						children: [{
								meta: {
									title: '智能表单记录列表'
								},
								path: '/customForm/record/list', ////智能表单记录列表
								name: '智能表单记录列表',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '智能表单记录详情'
								},
								path: '/customForm/record/view', ////智能表单记录详情
								name: '智能表单记录详情',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					}
				]
			},
			{
				meta: {
					title: '评分组管理',
					isParent: true
				},
				path: '/scoregroup',
				name: '评分组管理', //评分组管理
				redirect: '/scoregroup/list',
				component: childView,
				children: [{
						meta: {
							title: '评分组列表'
						},
						path: '/scoregroup/list', ////评分组管理列表
						name: '评分组列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '评分组添加'
						},
						path: '/scoregroup/add', ////评分组管理添加
						name: '评分组添加',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '评分组修改'
						},
						path: '/scoregroup/edit', ////评分组管理修改
						name: '评分组修改',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '评分项管理'
						},
						path: '/scoregroup/scoreitem/list', ////评分项管理
						name: '评分项管理',
						redirect: '/scoregroup/scoreitem/list',
						component: childView,
						children: [{
								meta: {
									title: '评分项列表'
								},
								path: '/scoregroup/scoreitem/list', ////评分项管理列表
								name: '评分项列表',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '评分项添加'
								},
								path: '/scoregroup/scoreitem/add', ////评分项管理添加
								name: '评分项添加',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '评分项修改'
								},
								path: '/scoregroup/scoreitem/edit', ////评分项管理修改
								name: '评分项修改',
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					}
				]
			},
			{
				meta: {
					title: '词汇管理'
				},
				path: '/word',
				name: '词汇管理', //词汇管理
				component: childView,
				children: [{
						meta: {
							title: 'tag管理'
						},
						path: '/tag', ////tag管理
						name: 'tag管理',
						component: childView,
						redirect: '/tag/list',
						children: [{
							meta: {
								title: 'tag列表'
							},
							path: '/tag/list', ////tag管理列表
							name: 'tag列表',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: '敏感词管理'
						},
						path: '/sensitivity', ////敏感词管理
						name: '敏感词管理',
						redirect: '/sensitivity/list',
						component: childView,
						children: [{
							meta: {
								title: '敏感词列表'
							},
							path: '/sensitivity/list', ////敏感词管理列表
							name: '敏感词列表',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: '关键词管理'
						},
						path: '/keyword', ////关键词管理
						name: '关键词管理',
						redirect: '/keyword/list',
						component: childView,
						children: [{
							meta: {
								title: '关键词列表'
							},
							path: '/keyword/list', ////敏感词管理列表
							name: '关键词列表',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: '来源管理'
						},
						path: '/origin', ////来源管理
						name: '来源管理',
						redirect: '/origin/list',
						component: childView,
						children: [{
							meta: {
								title: '来源列表'
							},
							path: '/origin/list', ////来源管理列表
							name: '来源列表',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: '热词管理'
						},
						path: '/searchwords', ////热词管理
						name: '热词管理',
						redirect: '/searchwords/list',
						component: childView,
						children: [{
							meta: {
								title: '热词列表'
							},
							path: '/searchwords/list', ////热词管理列表
							name: '热词列表',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					}
				]
			}
		]
	}, //模板资源
	{
		meta: {
			title: '模板资源',
			iconCls: 'icon-shebeikaifa'
		},
		path: '/interface',
		name: '模板资源',
		component: layout,
		children: [{
				meta: {
					title: '模板管理',
					isParent: true
				},
				path: '/template',
				name: '模板管理',
				redirect: '/templatelist',
				component: childView,
				children: [{
					meta: {
						title: '模板',
						hidden: true,
					},
					path: '/template/mange',
					name: '模板',
					redirect: '/templatelist',
					component: childView,
					children: [{
							meta: {
								title: '模板列表',
								hidden: true,
							},
							path: '/templatelist',
							name: '模板列表',
							component: resolve => {
								require(['@/views/template/template/Index.vue'], resolve)
							}
						},
						{
							meta: {
								title: '模板添加',
								hidden: true,
							},
							path: '/templateadd',
							name: '模板添加',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						},
						{
							meta: {
								title: '模板修改',
								hidden: true,
							},
							path: '/templateedit',
							name: '模板修改',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						},
						{
							meta: {
								title: '模板重命名',
								hidden: true,
							},
							path: '/templaterename',
							name: '模板重命名',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}, {
							meta: {
								title: '模板设置',
								hidden: true,
							},
							path: '/templatesetting',
							name: '模板设置',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}
					]
				}]
			},
			{
				meta: {
					title: '资源',
					isParent: true
				},
				path: '/resource',
				name: '资源',
				redirect: '/resource/mange',
				component: childView,
				children: [{
					meta: {
						title: '资源管理',
						hidden: true,
					},
					path: '/resource/mange',
					name: '资源管理',
					component: childView,
					children: [{
							meta: {
								title: '资源列表',
								hidden: true,
							},
							path: '/resourcelist',
							name: '资源列表',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						},
						{
							meta: {
								title: '资源添加',
								role: 'resourceadd',
								hidden: true
							},
							path: '/resourceadd',
							name: '资源添加',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						},
						{
							meta: {
								title: '资源修改',
								hidden: true
							},
							path: '/resourceedit',
							name: '资源修改',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						},
						{
							meta: {
								title: '资源重命名',
								hidden: true
							},
							path: '/resourcerename',
							name: '资源重命名',
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}
					]
				}]
			}
		]
	}, //配置管理
	{
		meta: {
			title: '配置管理',
			iconCls: 'icon-icon_shezhi',
			isLink: true
		},
		path: '/config',
		component: layout,
		name: '配置管理',
		children: [{
				meta: {
					title: '站点设置',
					isParent: true
				},
				path: '/siteConfig',
				name: '站点设置', //站点设置
				component: resolve => {
					require(['@/views/errorpage/405.vue'], resolve)
				}
			},
			{
				meta: {
					title: '统计设置',
					isParent: true
				},
				path: '/stat',
				name: '统计设置', //统计设置
				redirect: '/stat/list',
				component: childView,
				children: [{
						meta: {
							title: '统计列表'
						},
						path: '/stat/list',
						name: '统计列表', //统计列表
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '统计添加'
						},
						path: '/stat/add',
						name: '统计添加', //统计添加
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '统计修改'
						},
						path: '/stat/edit',
						name: '统计修改', //统计修改
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: 'FTP管理',
					isParent: true
				},
				path: '/ftp',
				name: 'FTP管理', //ftp管理
				redirect: '/ftp/list',
				component: childView,
				children: [{
					meta: {
						title: 'FTP列表'
					},
					path: '/ftp/list',
					name: 'FTP列表', //ftp管理列表
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: 'FTP添加'
					},
					path: '/ftp/add',
					name: 'FTP添加', //ftp管理添加
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: 'FTP修改'
					},
					path: '/ftp/edit',
					name: 'FTP修改', //ftp管理修改
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: 'OSS管理',
					isParent: true
				},
				path: '/oss',
				name: 'OSS管理',
				redirect: '/oss/list',
				component: childView,
				children: [{
						meta: {
							title: 'oss管理列表'
						},
						path: '/oss/list',
						name: 'oss管理列表',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: 'OSS添加'
						},
						path: '/oss/add',
						name: 'OSS添加',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: 'OSS修改'
						},
						path: '/oss/edit',
						name: 'OSS修改',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '内容类型',
					isParent: true
				},
				path: '/type',
				name: '内容类型',
				redirect: '/type/list',
				component: childView,
				children: [{
						meta: {
							title: '内容类型列表'
						},
						path: '/type/list',
						name: '内容类型列表', //内容类型列表
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '内容类型添加'
						},
						path: '/type/add',
						name: '内容类型添加', //内容类型添加
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '内容类型修改'
						},
						path: '/type/edit',
						name: '内容类型修改', //内容类型修改
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '标签向导',
					isParent: true
				},
				path: '/directive',
				name: '标签向导', //标签向导
				redirect: '/directive/list',
				component: childView,
				children: [{
						meta: {
							title: '标签向导列表'
						},
						path: '/directive/list',
						name: '标签向导列表', //标签向导列表
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '标签向导添加'
						},
						path: '/directive/add',
						name: '标签向导添加', //标签向导添加
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '模型管理',
					isParent: true
				},
				path: '/model',
				name: '模型管理', //模型管理
				redirect: '/model/list',
				component: childView,
				children: [{
						meta: {
							title: '模型列表'
						},
						path: '/model/list',
						name: '模型列表', //模型管理列表
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}, {
						meta: {
							title: '模型添加'
						},
						path: '/model/add',
						name: '模型添加', //模型管理添加
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}, {
						meta: {
							title: '模型修改'
						},
						path: '/model/edit',
						name: '模型修改', //模型管理修改
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '栏目模型字段列表'
						},
						path: '/channelModel/list',
						name: '栏目模型字段列表', //栏目模型
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '栏目模型字段修改'
						},
						path: '/channelModel/update',
						name: '栏目模型字段修改', //栏目模型项修改
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '栏目模型字段添加'
						},
						path: '/channelModel/save',
						name: '栏目模型字段添加', //栏目模型项添加
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '内容模型字段模型'
						},
						path: '/contentModel/list',
						name: '内容模型字段模型', //内容模型
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '内容模型字段修改'
						},
						path: '/contentModel/update',
						name: '内容模型字段修改', //内容模型项修改
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '内容模型字段添加'
						},
						path: '/contentModel/save',
						name: '内容模型字段添加', //内容模型项添加
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '全局设置'
				},
				path: '/globel',
				name: '全局设置', //全局设置
				component: childView,
				children: [{
						meta: {
							title: '系统设置'
						},
						path: '/globel/systemUpdate',
						name: '系统设置', //全局设置-系统设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '登录设置'
						},
						path: '/globel/loginUpdate',
						name: '登录设置', //全局设置-登录设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员设置'
						},
						path: '/globel/memberUpdate',
						name: '会员设置', //全局设置-会员设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员注册管理'
						},
						path: '/globel/registerModel',
						name: '会员注册管理', //全局设置-会员注册管理
						redirect: '/globel/registerModel/list',
						component: childView,
						children: [{
								meta: {
									title: '会员注册列表'
								},
								path: '/globel/registerModel/list',
								name: '会员注册列表', //全局设置-会员注册管理列表
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '会员注册添加'
								},
								path: '/globel/registerModel/add',
								name: '会员注册添加', //全局设置-会员注册管理添加
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '会员注册修改'
								},
								path: '/globel/registerModel/edit',
								name: '会员注册修改', //全局设置-会员注册管理修改
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					},
					{
						meta: {
							title: '水印设置'
						},
						path: '/globel/markUpdate',
						name: '水印设置', //全局设置-水印设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '防火墙设置'
						},
						path: '/globel/firewallUpdate',
						name: '防火墙设置', //全局设置-防火墙设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '其他设置'
						},
						path: '/globel/attrUpdate',
						name: '其他设置', //全局设置-其他设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '机构信息设置'
						},
						path: '/globel/companyUpdate',
						name: '机构信息设置', //全局设置-机构信息设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '内容佣金设置'
						},
						path: '/globel/contentUpdate',
						name: '内容佣金设置', //全局设置-内容佣金设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '站点管理',
					isParent: true
				},
				path: '/site',
				name: '站点管理', //站点管理
				redirect: '/site/list',
				component: childView,
				children: [{
						meta: {
							title: '站点列表'
						},
						path: '/site/list',
						name: '站点列表', //站点管理列表
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '站点添加'
						},
						path: '/site/add',
						name: '站点添加', //站点管理添加
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '站点修改'
						},
						path: '/site/edit',
						name: '站点修改', //站点管理修改
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '接口管理'
				},
				path: '/apiManage',
				name: '接口管理', //接口管理
				component: childView,
				children: [{
						meta: {
							title: '接口设置'
						},
						path: '/apiManage/apiUpdate',
						name: '接口设置', //接口管理-接口设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '单点登录设置'
						},
						path: '/apiManage/apiSSOupdate',
						name: '单点登录设置', //接口管理-sso设置
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '接口管理'
						},
						path: '/apiManage/apiMan',
						name: '接口管理', //接口管理-接口管理
						redirect: '/apiManage/apiMan/list',
						component: childView,
						children: [{
							meta: {
								title: '接口列表'
							},
							path: '/apiManage/apiMan/list',
							name: '接口列表', //接口管理-接口管理列表
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}, {
							meta: {
								title: '接口添加'
							},
							path: '/apiManage/apiMan/add',
							name: '接口添加', //接口管理-接口管理添加
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}, {
							meta: {
								title: '接口修改'
							},
							path: '/apiManage/apiMan/edit',
							name: '接口修改', //接口管理-接口管理修改
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: '接口用户管理'
						},
						path: '/apiManage/apiUserMan',
						name: '接口用户管理', //接口管理-接口用户管理
						redirect: '/apiManage/apiUserMan/list',
						component: childView,
						children: [{
							meta: {
								title: '接口用户列表'
							},
							path: '/apiManage/apiUserMan/list',
							name: '接口用户列表', //接口管理-接口用户管理列表
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}, {
							meta: {
								title: '接口用户添加'
							},
							path: '/apiManage/apiUserMan/add',
							name: '接口用户添加', //接口管理-接口用户管理添加
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}, {
							meta: {
								title: '接口用户修改'
							},
							path: '/apiManage/apiUserMan/edit',
							name: '接口用户修改', //接口管理-接口用户管理修改
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: '接口使用记录'
						},
						path: '/apiManage/apiUseRecord',
						name: '接口使用记录', //接口管理-接口使用记录
						redirect: '/apiManage/apiUseRecord/list',
						component: childView,
						children: [{
							meta: {
								title: '接口使用列表'
							},
							path: '/apiManage/apiUseRecord/list',
							name: '接口使用列表', //接口管理-接口使用记录列表
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: 'api接口记录'
						},
						path: '/apiManage/apiRecord',
						name: 'api接口记录', //接口管理-api接口记录
						redirect: '/apiManage/apiRecord/list',
						component: childView,
						children: [{
							meta: {
								title: 'api接口记录列表'
							},
							path: '/apiManage/apiRecord/list',
							name: 'api接口记录列表', //接口管理-api接口记录列表
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: 'api接口管理'
						},
						path: '/apiManage/apiInfo',
						name: 'api接口管理', //接口管理-接口使用记录
						redirect: '/apiManage/apiInfo/list',
						component: childView,
						children: [{
							meta: {
								title: 'api接口列表'
							},
							path: '/apiManage/apiInfo/list',
							name: 'api接口列表', //接口管理-api接口管理列表
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}, {
							meta: {
								title: 'api接口添加'
							},
							path: '/apiManage/apiInfo/add',
							name: 'api接口添加', //接口管理-api接口管理添加
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}, {
							meta: {
								title: 'api接口修改'
							},
							path: '/apiManage/apiInfo/edit',
							name: 'api接口修改', //接口管理-api接口管理修改
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					},
					{
						meta: {
							title: 'api接口账户管理'
						},
						path: '/apiManage/apiAccount',
						name: 'api接口账户管理', //接口管理-api接口账户管理
						redirect: '/apiManage/apiAccount/list',
						component: childView,
						children: [{
								meta: {
									title: 'api接口账户列表'
								},
								path: '/apiManage/apiAccount/list',
								name: 'api接口账户列表', //接口管理-api接口账户管理列表
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}, {
								meta: {
									title: 'api接口账户添加'
								},
								path: '/apiManage/apiAccount/add',
								name: 'api接口账户添加', //接口管理-api接口账户管理添加
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}, {
								meta: {
									title: 'api接口账户查看'
								},
								path: '/apiManage/apiAccount/edit',
								name: 'api接口账户查看', //接口管理-api接口账户管理查看
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '独立密码修改'
								},
								path: '/apiManage/apiAccount/update',
								name: '独立密码修改', //接口管理-api接口账户管理查看
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					}
				]
			}, {
				meta: {
					title: '短信服务'
				},
				path: '/smsServer',
				name: '短信服务', //短信服务
				component: childView,
				children: [{
						meta: {
							title: '短信服务管理'
						},
						path: '/smsServer/smsServer',
						name: '短信服务管理', //短信服务-短信服务管理
						redirect: '/smsServer/smsServer/list',
						component: childView,
						children: [{
								meta: {
									title: '短信服务列表'
								},
								path: '/smsServer/smsServer/list',
								name: '短信服务列表', //短信服务-短信服务管理列表
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '短信服务添加'
								},
								path: '/smsServer/smsServer/add',
								name: '短信服务添加', //短信服务-短信服务管理添加
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							},
							{
								meta: {
									title: '短信服务修改'
								},
								path: '/smsServer/smsServer/edit',
								name: '短信服务修改', //短信服务-短信服务管理修改
								component: resolve => {
									require(['@/views/errorpage/405.vue'], resolve)
								}
							}
						]
					},
					{
						meta: {
							title: '短信使用记录'
						},
						path: '/smsServer/smsServer/smsRecord',
						name: '短信使用记录', //短信服务-短信使用记录
						redirect: '/smsServer/smsServer/smsRecord',
						component: childView,
						children: [{
							meta: {
								title: '短信使用记录列表'
							},
							path: '/smsServer/smsServer/smsRecord',
							name: '短信使用记录列表', //短信服务-短信使用记录
							component: resolve => {
								require(['@/views/errorpage/405.vue'], resolve)
							}
						}]
					}
				]
			}
		]
	}, //网站监测
	{
		meta: {
			title: '网站监测',
			iconCls: 'icon-gongyezujian-yibiaopan',
			isLink: true
		},
		path: '/webmonitoring',
		name: '网站监测',
		component: layout,
		children: [{
			meta: {
				title: '百度统计',
				isParent: true
			},
			path: '/baidu',
			name: '百度统计',
			redirect: '/baidu/index',
			component: childView
		}, {
			meta: {
				title: '可访问性',
				isParent: true
			},
			path: '/webset',
			name: '可访问性',
			redirect: '/webset/accessibility',
			component: childView,
			children: [{
				meta: {
					title: '可访问性'
				},
				path: '/webset/accessibility',
				name: '可访问性',
				component: resolve => {
					require(['@/views/content/content/list.vue'], resolve)
				}
			}]
		}, {
			meta: {
				title: '告警通知',
				isParent: true
			},
			path: '/warning',
			name: '告警通知', //专题管理
			redirect: '/warning/notice',
			component: childView,
			children: [{
				meta: {
					title: '告警通知'
				},
				path: '/warning/notice',
				name: '告警通知',
				component: resolve => {
					require(['@/views/content/topic/list.vue'], resolve)
				}
			}]
		}]
	}, //关于
	{
		meta: {
			title: '关于',
			iconCls: 'icon-kefu',
			isParent: true,
			leaf: true, //只有一个节点  
		},
		path: '/about', //关于
		name: '关于',
		redirect: '/about/us',
		component: layout,
		children: [{
			meta: {
				title: '关于',
				hidden: false
			},
			path: '/about/us',
			name: '关于',
			component: resolve => {
				require(['@/views/about/about.vue'], resolve)
			}
		}]
	}, //百度统计
	{
		meta: {
			title: '百度统计',
			hidden: true
		},
		path: '/baidu/index',
		name: '百度统计',
		component: resolve => {
			require(['@/views/baidu/baidu.vue'], resolve)
		}
	},
	{
		meta: {
			title: '404',
			hidden: true
		},
		path: '*',
		redirect: '/404'
	}
];

export {
	routes,
	ansycRoutes
}