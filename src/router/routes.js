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
	},
	{
		meta: {
			title: '工作台',
			role: 'work',
			iconCls: 'icon-shebeizhuangtai',
			leaf: true,
		},
		name: 'index',
		path: '/',
		redirect: '/work',
		component: layout,
		children: [{
			meta: {
				title: '工作台'
			},
			name: 'work',
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
		name: 'cms',
		path: '/cms',
		component: layout,
		redirect: '/content/list',
		children: [{
			meta: {
				title: '内容管理',
				isParent: true,
			},
			path: '/content',
			name: 'content',
			redirect: '/content/list',
			component: childView,
			children: [{
				meta: {
					title: '内容列表'
				},
				name: 'contentList',
				path: '/content/list',
				component: resolve => {
					require(['@/views/content/content/list.vue'], resolve)
				}
			}, {
				meta: {
					title: '内容添加'
				},
				name: 'contentAdd',
				path: '/content/add',
				component: resolve => {
					require(['@/views/content/content/add.vue'], resolve)
				}
			}, {
				meta: {
					title: '内容修改'
				},
				name: 'contentEdit',
				path: '/content/edit',
				component: resolve => {
					require(['@/views/content/content/edit.vue'], resolve)
				}
			}]
		}, {
			meta: {
				title: '专题管理',
				isParent: true
			},
			name: 'topic',
			path: '/topic',
			redirect: '/topic/list',
			component: childView,
			children: [{
					meta: {
						title: '专题列表'
					},
					name: 'topicList',
					path: '/topic/list',
					component: resolve => {
						require(['@/views/content/topic/list.vue'], resolve)
					}
				},
				{
					meta: {
						title: '专题添加'
					},
					name: 'topicAdd',
					path: '/topic/add',
					component: resolve => {
						require(['@/views/content/topic/add.vue'], resolve)
					}
				},
				{
					meta: {
						title: '专题修改'
					},
					name: 'topicEdit',
					path: '/topic/edit',
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
			leaf: true,
		},
		name: 'channel',
		path: '/channel',
		redirect: '/channel/list',
		component: layout,
		children: [{
			meta: {
				title: '栏目列表',
				hidden: true
			},
			name: 'channelList',
			path: '/channel/list',
			component: resolve => {
				require(['@/views/channel/list.vue'], resolve)
			}
		}, {
			meta: {
				title: '栏目添加',
				hidden: true
			},
			name: 'channelAdd',
			path: '/channel/add',
			component: resolve => {
				require(['@/views/channel/add.vue'], resolve)
			}
		}, {
			meta: {
				title: '栏目修改',
				hidden: true
			},
			name: 'channelEdit',
			path: '/channel/edit',
			component: resolve => {
				require(['@/views/channel/edit.vue'], resolve)
			}
		}, {
			meta: {
				title: '栏目复制',
				hidden: true
			},
			name: 'channelCopy',
			path: '/channel/copy',
			component: resolve => {
				require(['@/views/channel/copy.vue'], resolve)
			}
		}]
	},
	{
		meta: {
			title: '数据中心',
			iconCls: 'icon-shujukanban',
			isLink: true
		},
		name: 'dataCenter',
		path: "/datacenter",
		component: layout,
		children: [{
				meta: {
					title: '流量统计'
				},
				name: 'traffic',
				path: '/traffic',
				redirect: '/traffic/trend',
				component: childView,
				children: [{
					meta: {
						title: '趋势分析'
					},
					name: 'trafficTrend',
					path: '/traffic/trend',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '栏目访问量排行'
					},
					name: 'trafficChannel',
					path: '/traffic/channel',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			},
			{
				meta: {
					title: '来源分析'
				},
				path: '/source',
				name: 'source',
				redirect: '/source/class',
				component: childView,
				children: [{
						meta: {
							title: '来源分类'
						},
						name: 'sourceClass',
						path: '/source/class',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '搜索引擎'
						},
						name: 'sourceEngin',
						path: '/source/engin',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '来访域名'
						},
						name: 'sourceDomain',
						path: '/source/domain',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '来访地区'
						},
						name: 'sourceCity',
						path: '/source/city',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '搜索词'
						},
						name: 'sourceKeywords',
						path: '/source/keywords',
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
				path: '/interviewed',
				redirect: '/interviewed/surveyed',
				component: childView,
				children: [{
						meta: {
							title: '受访页面'
						},
						name: 'interviewedSurveyed',
						path: '/interviewed/surveyed',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '入口页面'
						},
						name: 'interviewedIndex',
						path: '/interviewed/index',
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
				path: '/siteprofile',
				redirect: '/siteprofile/contentnum',
				component: childView,
				children: [{
						meta: {
							title: '内容发布数'
						},
						name: 'siteprofileContentnum',
						path: '/siteprofile/contentnum',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '工作量'
						},
						name: 'siteProfileWorknum',
						path: '/siteprofile/worknum',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '评论数'
						},
						name: 'siteProfileCommentnum',
						path: '/siteprofile/commentnum',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '留言数'
						},
						name: 'siteProfileLeavenum',
						path: '/siteprofile/leavenum',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					},
					{
						meta: {
							title: '会员注册数'
						},
						name: 'siteProfileUsernum',
						path: '/siteprofile/usernum',
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
				name: 'loyalty',
				path: '/loyalty',
				component: resolve => {
					require(['@/views/errorpage/405.vue'], resolve)
				}
			}
		]
	},
	{
		meta: {
			title: '用户管理',
			iconCls: 'icon-icon_zhanghao',
			isLink: true
		},
		name: 'user',
		path: '/user',
		component: layout,
		children: [{
				meta: {
					title: '会员管理',
					isParent: true
				},
				name: 'member',
				path: '/member',
				redirect: '/member/list',
				component: childView,
				children: [{
						meta: {
							title: '会员列表'
						},
						name: 'memberList',
						path: '/member/list',
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
						path: '/member/add',
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
						path: '/member/edit',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			}, {
				meta: {
					title: '会员组管理',
					isParent: true
				},
				name: 'group',
				path: '/group',
				redirect: '/group/list',
				component: childView,
				children: [{
					meta: {
						title: '会员组列表'
					},
					name: 'groupList',
					path: '/group/list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '会员组添加'
					},
					name: 'groupAdd',
					path: '/group/add',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '会员组修改'
					},
					name: 'groupEdit',
					path: '/group/edit',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '角色管理',
					isParent: true
				},
				name: 'role',
				path: '/role',
				redirect: '/role/list',
				component: childView,
				children: [{
						meta: {
							title: '角色列表'
						},
						name: 'roleLst',
						path: '/role/list',
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
						path: '/role/add',
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
						path: '/role/edit',
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
				name: 'account',
				path: '/account',
				redirect: '/account/list',
				component: childView,
				children: [{
					meta: {
						title: '账户列表'
					},
					name: 'accountList',
					path: '/account/list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '全站管理员',
					isParent: true,
				},
				name: 'adminGlobal',
				path: '/adminglobal',
				redirect: '/adminglobal/list',
				component: childView,
				children: [{
					meta: {
						title: '全站管理员列表'
					},
					name: 'adminGlobalList',
					path: '/adminglobal/list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '全站管理员添加',
						hidden: true
					},
					name: 'adminGlobalAdd',
					path: '/adminglobal/add',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '全站管理员修改',
						hidden: true
					},
					name: 'adminGlobalEdit',
					path: '/adminGlobal/edit',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '本站管理员',
					isParent: true
				},
				name: 'adminLocal',
				path: '/adminlocal',
				redirect: '/adminlocal/list',
				component: childView,
				children: [{
					meta: {
						title: '本站管理员列表'
					},
					name: 'adminLocalList',
					path: '/adminlocal/list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '本站管理员添加'
					},
					name: 'adminLocalAdd',
					path: '/adminGlocal/add',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '本站管理员修改'
					},
					name: 'adminLocalEdit',
					path: '/adminGlocal/edit',
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
				name: 'department',
				path: '/department',
				redirect: '/department/list',
				component: childView,
				children: [{
					meta: {
						title: '部门列表'
					},
					name: 'departmentList',
					path: '/department/list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '部门添加'
					},
					name: 'departmentAdd',
					path: '/department/add',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '部门修改'
					},
					name: 'departmentEdit',
					path: '/department/edit',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '部门成员列表'
					},
					name: 'departmentMemberList',
					path: '/department/memberlist',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '站内信管理',
					isParent: true
				},
				name: 'message',
				path: '/message',
				redirect: '/message/list',
				component: childView,
				children: [{
					meta: {
						title: '站内信列表'
					},
					name: 'messageList',
					path: '/message/list',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '发送站内信'
					},
					name: 'messageSend',
					path: '/message/send',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信查看'
					},
					name: 'messageView',
					path: '/message/view',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信回复'
					},
					name: 'messageReply',
					path: '/message/reply',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}, {
					meta: {
						title: '站内信转发'
					},
					name: 'messageForward',
					path: '/message/forward',
					component: resolve => {
						require(['@/views/errorpage/405.vue'], resolve)
					}
				}]
			}, {
				meta: {
					title: '操作日志',
					isParent: true
				},
				name: 'oplog',
				path: '/oplog',
				redirect: '/oplog/list',
				component: childView,
				children: [{
					meta: {
						title: '操作日志列表'
					},
					name: 'oplogList',
					path: '/oplog/list',
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
		component: layout,
		children: [{
				meta: {
					title: '模板管理',
					isParent: true
				},
				name: 'template',
				path: '/template',
				redirect: '/template/list',
				component: childView,
				children: [{
						meta: {
							title: '模板列表',
							hidden: true,
						},
						name: 'templateList',
						path: '/template/list',
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
						path: '/template/add',
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
						path: '/template/edit',
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
						path: '/template/rename',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}, {
						meta: {
							title: '模板设置',
							hidden: true,
						},
						name: 'templateSetting',
						path: '/template/setting',
						component: resolve => {
							require(['@/views/errorpage/405.vue'], resolve)
						}
					}
				]
			},
			{
				meta: {
					title: '资源管理',
					isParent: true
				},
				name: 'resource',
				path: '/resource',
				redirect: '/resource/list',
				component: childView,
				children: [{
						meta: {
							title: '资源列表',
							hidden: true,
						},
						name: 'resourceList',
						path: '/resource/list',
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
						name: 'resourceAdd',
						path: '/resource/add',
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
						path: '/resource/edit',
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
						path: '/resource/rename',
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
			iconCls: 'icon-gongyezujian-yibiaopan',
			isLink: true
		},
		path: '/webmonitoring',
		name: 'webmonitoring',
		component: layout,
		children: [{
			meta: {
				title: '百度统计',
				isParent: true
			},
			path: '/baidu',
			name: 'baidu',
			component: resolve => {
				require(['@/views/baidu/baidu.vue'], resolve)
			}
		}, {
			meta: {
				title: '可访问性',
				isParent: true
			},
			path: '/webset',
			name: 'webset',
			component: resolve => {
				require(['@/views/content/content/list.vue'], resolve)
			}
		}, {
			meta: {
				title: '告警通知',
				isParent: true
			},
			path: '/warning',
			name: 'warning',
			component: resolve => {
				require(['@/views/content/topic/list.vue'], resolve)
			}
		}]
	},
	{
		meta: {
			title: '关于',
			iconCls: 'icon-kefu',
			isParent: true,
			leaf: true,
		},
		path: '/about',
		name: 'about',
		component: resolve => {
			require(['@/views/about/about.vue'], resolve)
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