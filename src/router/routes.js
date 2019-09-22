/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 15:53:28
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-10 15:52:27
 */
import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/account/Login.vue'
import lock from '@/views/account/Lock.vue'

import layout from '@/layout/Layout.vue'
import childView from '@/components/childView/Index.vue'

//错误页面
const error401 = r => require.ensure([], () => r(require('@/views/errorpage/401.vue')), 'work') // 错误-401
const error404 = r => require.ensure([], () => r(require('@/views/errorpage/404.vue')), 'work') // 错误-404

//工作台
const work = r => require.ensure([], () => r(require('@/views/console/Console.vue')), 'work') // 工作台

// 内容专题
const contentList = r => require.ensure([], () => r(require('@/views/content/content/list.vue')), 'contentList') // 内容-列表
const contentAdd = r => require.ensure([], () => r(require('@/views/content/content/add.vue')), 'contentAdd') // 内容-新增
const contentEdit = r => require.ensure([], () => r(require('@/views/content/content/edit.vue')), 'contentEdit') // 内容-修改
const topicList = r => require.ensure([], () => r(require('@/views/content/topic/list.vue')), 'topicList') // 专题-列表
const topicAdd = r => require.ensure([], () => r(require('@/views/content/topic/add.vue')), 'topicAdd') // 专题-新增
const topicEdit = r => require.ensure([], () => r(require('@/views/content/topic/edit.vue')), 'topicEdit') // 专题-修改

// 栏目管理
const channelList = r => require.ensure([], () => r(require('@/views/channel/list.vue')), 'channelList') // 栏目-列表
const channelAdd = r => require.ensure([], () => r(require('@/views/channel/add.vue')), 'channelList') // 栏目-新增
const channelEdit = r => require.ensure([], () => r(require('@/views/channel/edit.vue')), 'channelList') // 栏目-修改
const channelCopy = r => require.ensure([], () => r(require('@/views/channel/copy.vue')), 'channelList') // 栏目-复制


Vue.use(Router)
/**
 * routes==默认路由节点
 */
const routes = [{
		meta: {
			title: '登录',
			hidden: true
		},
		name: 'login',
		path: '/login',
		component: login
	},
	{
		meta: {
			title: "锁屏",
			hidden: true
		},
		name: "lock",
		path: "/lock",
		component: lock
	},
	{
		meta: {
			title: '401',
			hidden: true
		},
		name: 'error401',
		path: '/401',
		component: error401
	},
	{
		meta: {
			title: '404',
			hidden: true
		},
		name: 'error404',
		path: '/404',
		component: error404
	}
];
const ansycRoutes = [{
		meta: {
			title: '工作台',
			iconCls: 'icon-shebeizhuangtai',
			leaf: true
		},
		name: 'home',
		path: '/',
		redirect: {
			name: 'work'
		},
		component: layout,
		children: [{
			meta: {
				title: '工作台'
			},
			name: 'work',
			path: '/work',
			component: work,
		}]
	}, {
		meta: {
			title: '内容发布',
			iconCls: 'icon-bianji'
		},
		name: 'cms',
		path: '/cms',
		component: layout,
		redirect: {
			name: 'contentList'
		},
		children: [{
			meta: {
				title: '内容管理',
				leaf: true
			},
			path: '/content',
			name: 'content',
			redirect: {
				name: 'contentList'
			},
			component: childView,
			children: [{
				meta: {
					title: '内容列表'
				},
				name: 'contentList',
				path: '/content/list',
				component: contentList
			}, {
				meta: {
					title: '内容添加'
				},
				name: 'contentAdd',
				path: '/content/add',
				component: contentAdd
			}, {
				meta: {
					title: '内容修改'
				},
				name: 'contentEdit',
				path: '/content/edit',
				component: contentEdit
			}]
		}, {
			meta: {
				title: '专题管理',
				leaf: true
			},
			name: '/topic',
			path: 'topic',
			redirect: {
				name: 'topicList'
			},
			component: childView,
			children: [{
					meta: {
						title: '专题列表'
					},
					name: 'topicList',
					path: '/topic/list',
					component: topicList
				},
				{
					meta: {
						title: '专题添加'
					},
					name: 'topicAdd',
					path: '/topic/add',
					component: topicAdd
				},
				{
					meta: {
						title: '专题修改'
					},
					name: 'topicEdit',
					path: '/topic/edit',
					component: topicEdit
				}
			]

		}]
	},
	{
		meta: {
			title: '栏目管理',
			iconCls: 'icon-liebiao',
			leaf: true,
		},
		name: 'channel',
		path: '/channel',
		redirect: {
			name: 'channelList'
		},
		component: layout,
		children: [{
			meta: {
				title: '栏目列表',
				hidden: true
			},
			name: 'channelList',
			path: '/channel/list',
			component: channelList
		}, {
			meta: {
				title: '栏目添加',
				hidden: true
			},
			name: 'channelAdd',
			path: '/channel/add',
			component: channelAdd
		}, {
			meta: {
				title: '栏目修改',
				hidden: true
			},
			name: 'channelEdit',
			path: '/channel/edit',
			component: channelEdit
		}, {
			meta: {
				title: '栏目复制',
				hidden: true
			},
			name: 'channelCopy',
			path: '/channel/copy',
			component: channelCopy
		}]
	},
	{
		meta: {
			title: '数据中心',
			iconCls: 'icon-tubiao-zhexiantu'
		},
		name: 'record',
		path: "/record",
		redirect: {
			name: 'trafficTrend'
		},
		component: layout,
		children: [{
				meta: {
					title: '流量统计'
				},
				name: 'traffic',
				path: '/traffic',
				redirect: {
					name: 'trafficTrend'
				},
				component: childView,
				children: [{
					meta: {
						title: '趋势分析'
					},
					name: 'trafficTrend',
					path: 'trend',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '栏目访问量排行'
					},
					name: 'trafficChannel',
					path: 'channel',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '来源分析'
				},
				path: 'source',
				name: 'source',
				redirect: {
					name: 'sourceClass'
				},
				component: childView,
				children: [{
						meta: {
							title: '来源分类'
						},
						name: 'sourceClass',
						path: 'class',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '搜索引擎'
						},
						name: 'sourceEngin',
						path: 'engin',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '来访域名'
						},
						name: 'sourceDomain',
						path: 'domain',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '来访地区'
						},
						name: 'sourceCity',
						path: 'city',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '搜索词'
						},
						name: 'sourceKeywords',
						path: 'keywords',
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
				name: 'interviewed',
				path: 'interviewed',
				redirect: {
					name: 'interviewedSurveyed'
				},
				component: childView,
				children: [{
						meta: {
							title: '受访页面'
						},
						name: 'interviewedSurveyed',
						path: 'surveyed',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '入口页面'
						},
						name: 'interviewedIndex',
						path: 'index',
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
				name: 'siteProfile',
				path: 'siteprofile',
				redirect: {
					name: 'contentnum'
				},
				component: childView,
				children: [{
						meta: {
							title: '内容发布数'
						},
						name: 'contentNum',
						path: 'contentnum',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '工作量'
						},
						name: 'workNum',
						path: 'worknum',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '评论数'
						},
						name: 'commentNum',
						path: 'commentnum',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '留言数'
						},
						name: 'leaveNum',
						path: 'leavenum',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员注册数'
						},
						name: 'memberNum',
						path: 'member',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '忠诚度'
				},
				name: 'loyalty',
				path: 'loyalty',
				component: resolve => {
					require(['@/views/errorpage/405.vue'], resolve)
				}
			}
		]
	},
	{
		meta: {
			title: '用户管理',
			iconCls: 'icon-icon_zhanghao'
		},
		name: 'user',
		path: '/user',
		component: layout,
		children: [{
				meta: {
					title: '会员管理'
				},
				name: 'member',
				path: '/member',
				redirect: {
					name: 'memberList'
				},
				component: childView,
				children: [{
						meta: {
							title: '会员列表'
						},
						name: 'memberList',
						path: 'list',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员添加',
							hidden: true,
						},
						name: 'memberAdd',
						path: 'add',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员修改',
							hidden: true,
						},
						name: 'memberEdit',
						path: 'edit',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			}, {
				meta: {
					title: '会员组管理'
				},
				name: 'group',
				path: 'group',
				redirect: {
					name: 'groupList'
				},
				component: childView,
				children: [{
					meta: {
						title: '会员组列表'
					},
					name: 'groupList',
					path: 'list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '会员组添加'
					},
					name: 'groupAdd',
					path: 'add',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '会员组修改'
					},
					name: 'groupEdit',
					path: 'edit',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '角色管理'
				},
				name: 'role',
				path: 'role',
				redirect: {
					name: 'roleLst'
				},
				component: childView,
				children: [{
						meta: {
							title: '角色列表'
						},
						name: 'roleLst',
						path: 'list',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '角色添加',
							hidden: true
						},
						name: 'roleAdd',
						path: 'add',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '角色修改',
							hidden: true
						},
						name: 'roleEdit',
						path: 'edit',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			}, {
				meta: {
					title: '账户绑定'
				},
				name: 'account',
				path: 'account',
				redirect: {
					name: 'accountList'
				},
				component: childView,
				children: [{
					meta: {
						title: '账户列表'
					},
					name: 'accountList',
					path: 'list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '全站管理员'
				},
				name: 'adminGlobal',
				path: 'adminglobal',
				redirect: {
					name: 'adminGlobalList'
				},
				component: childView,
				children: [{
					meta: {
						title: '全站管理员列表'
					},
					name: 'adminGlobalList',
					path: 'list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '全站管理员添加',
						hidden: true
					},
					name: 'adminGlobalAdd',
					path: 'add',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '全站管理员修改',
						hidden: true
					},
					name: 'adminGlobalEdit',
					path: 'edit',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '本站管理员'
				},
				name: 'adminLocal',
				path: 'adminlocal',
				redirect: {
					name: 'adminLocalList'
				},
				component: childView,
				children: [{
					meta: {
						title: '本站管理员列表'
					},
					name: 'adminLocalList',
					path: 'list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '本站管理员添加'
					},
					name: 'adminLocalAdd',
					path: 'add',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '本站管理员修改'
					},
					name: 'adminLocalEdit',
					path: 'edit',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '部门管理'
				},
				name: 'department',
				path: 'department',
				redirect: {
					name: 'departmentList'
				},
				component: childView,
				children: [{
					meta: {
						title: '部门列表'
					},
					name: 'departmentList',
					path: 'list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '部门添加'
					},
					name: 'departmentAdd',
					path: 'add',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '部门修改'
					},
					name: 'departmentEdit',
					path: 'edit',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '部门成员列表'
					},
					name: 'departmentMemberList',
					path: 'memberlist',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '站内信管理'
				},
				name: 'message',
				path: 'message',
				redirect: {
					name: 'messageList'
				},
				component: childView,
				children: [{
					meta: {
						title: '站内信列表'
					},
					name: 'messageList',
					path: 'list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '发送站内信'
					},
					name: 'messageSend',
					path: 'send',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信查看'
					},
					name: 'messageView',
					path: 'view',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信回复'
					},
					name: 'messageReply',
					path: 'reply',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信转发'
					},
					name: 'messageForward',
					path: 'forward',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '操作日志'
				},
				name: 'oplog',
				path: 'oplog',
				redirect: {
					name: 'oplogList'
				},
				component: childView,
				children: [{
					meta: {
						title: '操作日志列表'
					},
					name: 'oplogList',
					path: 'list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}
		]
	},
	{
		meta: {
			title: '模板资源',
			iconCls: 'icon-shebeikaifa'
		},
		name: 'interface',
		path: '/interface',
		redirect: {
			name: 'templateList'
		},
		component: layout,
		children: [{
				meta: {
					title: '模板管理',
					leaf: true
				},
				name: 'template',
				path: 'template',
				redirect: {
					name: 'templateList'
				},
				component: childView,
				children: [{
						meta: {
							title: '模板列表',
							hidden: true,
						},
						name: 'templateList',
						path: 'list',
						component: resolve => {
							require(['@/views/template/template/Index.vue'], resolve)
						}
					},
					{
						meta: {
							title: '模板添加',
							hidden: true,
						},
						name: 'templateAdd',
						path: 'add',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '模板修改',
							hidden: true,
						},
						name: 'templateEdit',
						path: 'edit',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '模板重命名',
							hidden: true,
						},
						name: 'templateRename',
						path: 'rename',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}, {
						meta: {
							title: '模板设置',
							hidden: true,
						},
						name: 'templateSetting',
						path: 'setting',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '资源管理',
					leaf: true
				},
				name: 'resource',
				path: '/resource',
				redirect: {
					name: 'resourceList'
				},
				component: childView,
				children: [{
						meta: {
							title: '资源列表',
							hidden: true,
						},
						name: 'resourceList',
						path: 'list',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '资源添加',
							hidden: true
						},
						name: 'resourceAdd',
						path: 'add',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '资源修改',
							hidden: true
						},
						name: 'resourceEdit',
						path: 'edit',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '资源重命名',
							hidden: true
						},
						name: 'resourceRename',
						path: 'rename',
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
			title: '网站监测',
			iconCls: 'icon-gongyezujian-yibiaopan'
		},
		path: '/monitor',
		name: 'monitor',
		redirect: {
			name: 'webset'
		},
		component: layout,
		children: [{
			meta: {
				title: '可访问性',
				leaf: true
			},
			path: 'ping',
			name: 'ping',
			component: resolve => {
				require(['@/views/content/content/list.vue'], resolve)
			}
		}, {
			meta: {
				title: '告警通知',
				leaf: true
			},
			path: 'warning',
			name: 'warning',
			component: resolve => {
				require(['@/views/content/topic/list.vue'], resolve)
			}
		}, {
			meta: {
				title: '百度统计',
				leaf: true
			},
			path: 'baidu',
			name: 'baidu',
			component: resolve => {
				require(['@/views/monitor/baidu/baidu.vue'], resolve)
			}
		}]
	},
	{
		meta: {
			title: '关于',
			iconCls: 'icon-kefu',
			leaf: true
		},
		name: 'about',
		path: '/about',
		redirect: {
			name: 'aboutUs'
		},
		component: layout,
		children: [{
			meta: {
				title: '我们'
			},
			name: 'aboutUs',
			path: 'us',
			component: resolve => {
				require(['@/views/about/about.vue'], resolve)
			}
		}]
	}
];

export {
	routes,
	ansycRoutes
}