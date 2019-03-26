import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/account/Login.vue'
import layout from '@/views/layout/Layout.vue'
import work from '@/views/console/Console.vue'

import error from '@/views/error/404.vue'
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
		path: '/login',
		name: '登录',
		component: login,
		hidden: true
	},
	{
		path: '/',
		name: '工作台',
		meta: {
			role: 'work'
		},
		component: layout,
		iconCls: 'icon-shebeizhuangtai',
		leaf: true, //只有一个节点
		redirect: '/work',
		children: [{
			path: '/work',
			component: work,
		}]
	}
];
const ansycRoutes = [{
		path: '/contentMange', //内容
		name: '内容发布',
		component: layout,
		iconCls: 'icon-ceshishenqing',
		meta: {
			isLink: true
		},
		children: [{
			path: '/content',
			name: '内容管理', //内容管理
			component: childView,
			isParent: true,
			redirect: '/content/list',
			children: [{
				path: '/content/list',
				name: '内容列表',
				component: resolve => {
					require(['@/views/content/content/list.vue'], resolve)
				}
			}, {
				path: '/content/save',
				name: '内容添加',
				component: resolve => {
					require(['@/views/content/content/add.vue'], resolve)
				}
			}, {
				path: '/content/update',
				name: '内容修改',
				component: resolve => {
					require(['@/views/content/content/add.vue'], resolve)
				}
			}]
		}, {
			path: '/topic',
			name: '专题管理', //专题管理
			component: childView,
			isParent: true,
			redirect: '/topic/list',
			children: [{
					path: '/topic/list',
					name: '专题列表',
					component: resolve => {
						require(['@/views/content/topic/list.vue'], resolve)
					}
				},
				{
					path: '/topic/save',
					name: '专题添加',
					component: resolve => {
						require(['@/views/content/topic/edit.vue'], resolve)
					}
				},
				{
					path: '/topic/update',
					name: '专题修改',
					component: resolve => {
						require(['@/views/content/topic/edit.vue'], resolve)
					}
				}
			]

		}]
	},
	{
		path: '/channel', //栏目
		name: '栏目',
		component: layout,
		iconCls: 'icon-liebiao',
		redirect: '/channel/list',
		isParent: true,
		leaf: true, //只有一个节点  
		children: [{
			path: '/channel/list',
			name: '栏目列表', //栏目列表
			component: resolve => {
				require(['@/views/channel/list.vue'], resolve)
			},
			hidden: true,
		}, {
			path: '/channel/save',
			name: '栏目添加', //栏目添加
			component: resolve => {
				require(['@/views/channel/add.vue'], resolve)
			},
			hidden: true,
		}, {
			path: '/channel/update',
			name: '栏目修改', //栏目修改
			component: resolve => {
				require(['@/views/channel/update.vue'], resolve)
			},
			hidden: true,
		}, {
			path: '/channel/copy',
			name: '栏目复制', //栏目复制
			component: resolve => {
				require(['@/views/channel/copy.vue'], resolve)
			},
			hidden: true,
		}]
	}, //数据中心
	{
		path: "/dataCenter",
		name: '数据中心', //数据中心
		component: layout,
		iconCls: 'icon-shujukanban',
		meta: {
			isLink: true,
		},
		children: [{
				path: '/traffic', //流量分析
				name: '流量统计',
				component: childView,
				redirect: '/traffic/trend',
				children: [{
					path: '/traffic/trend', //趋势分析
					name: '趋势分析',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/traffic/channel', //栏目访问量排行
					name: '栏目访问量排行',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/sourceanalysis', //来源分析
				name: '来源分析',
				component: childView,
				children: [{
						path: '/sourceanalysis/class', //来源分类
						name: '来源分类',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/sourceanalysis/engin', //搜索引擎
						name: '搜索引擎',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/sourceanalysis/domain', //来访域名
						name: '来访域名',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/sourceanalysis/city', //来访域名
						name: '来访地区',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/sourceanalysis/keywords', //搜索词
						name: '搜索词',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			},
			{
				path: '/surveyedanalysis', //受访分析
				name: '受访分析',
				component: childView,
				children: [{
						path: '/surveyedanalysis/surveyed', //受访页面
						name: '受访页面',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/surveyedanalysis/index', //入口页面
						name: '入口页面',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			},
			{
				path: '/loyalty', //忠诚度
				name: '忠诚度',
				isParent: true,
				component: resolve => {
					require(['@/views/error/405.vue'], resolve)
				},
			},
			{
				path: '/siteProfile', //网站概况
				name: '网站概况',
				component: childView,
				children: [{
						path: '/siteProfile/contentnum', //内容发布数
						name: '内容发布数',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/siteProfile/worknum', //工作量
						name: '工作量',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/siteProfile/commentnum', //评论数
						name: '评论数',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/siteProfile/leavenum', //留言数
						name: '留言数',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/siteProfile/usernum', //会员注册数
						name: '会员注册数',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			}
		]
	}, //用户中心
	{
		path: '/userManager',
		name: '用户管理', //用户管理
		component: layout,
		iconCls: 'icon-icon_zhanghao',
		meta: {
			isLink: true
		},
		children: [{
				path: '/user',
				name: '会员管理', //会员管理
				component: childView,
				isParent: true,
				redirect: '/user/list',
				children: [{
						path: '/user/list', //会员列表
						name: '会员列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/user/save', //会员添加
						name: '会员添加',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
						hidden: true
					},
					{
						path: '/user/update', //会员添加
						name: '会员修改',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
						hidden: true
					}
				]
			}, {
				path: '/role', //角色管理
				name: '角色管理',
				component: childView,
				isParent: true,
				redirect: '/role/list',
				children: [{
						path: '/role/list', //角色管理
						name: '角色管理',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/role/save', //成员添加
						name: '角色添加',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
						hidden: true
					},
					{
						path: '/role/update', //成员修改
						name: '角色修改',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
						hidden: true
					},
					{
						path: '/role/members', //成员列表
						name: '成员列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
						hidden: true
					}
				]
			}, {
				path: '/account',
				name: '账户绑定', //会员管理
				component: childView,
				isParent: true,
				redirect: '/account/list',
				children: [{
					path: '/account/list', //会员列表
					name: '列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, ]
			}, {
				path: '/adminGlobal',
				name: '管理员(全站)', //管理员(全站)
				component: childView,
				isParent: true,
				redirect: '/adminGlobal/list',
				children: [{
					path: '/adminGlobal/list', //管理员列表(全站)
					name: '管理员(全站)列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/adminGlobal/edit', //管理员编辑页(全站)
					name: '管理员(全站)编辑',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
					hidden: true
				}, {
					path: '/adminGlobal/add', //管理员添加页(全站)
					name: '管理员(全站)添加',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
					hidden: true
				}]
			}, {
				path: '/adminGlocal',
				name: '管理员(本站)', //管理员(本站)
				component: childView,
				isParent: true,
				redirect: '/adminGlocal/list',
				children: [{
					path: '/adminGlocal/list', //管理员列表(本站)
					name: '管理员(本站)列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/adminGlocal/edit', //管理员编辑页(本站)
					name: '管理员(本站)修改',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/adminGlocal/add', //管理员添加页(本站)
					name: '管理员(本站)添加',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			}, {
				path: '/log',
				name: '操作日志', //操作日志
				component: childView,
				isParent: true,
				redirect: '/log/list',
				children: [{
					path: '/log/list', //日志列表
					name: '日志列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			}, {
				path: '/group',
				name: '会员组管理', //会员组管理
				component: childView,
				isParent: true,
				redirect: '/group/list',
				children: [{
					path: '/group/list', //会员组列表
					name: '会员组列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/group/add', //会员组添加
					name: '会员组添加',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/group/edit', //会员组修改
					name: '会员组修改',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/department',
				name: '部门管理', //部门管理
				component: childView,
				isParent: true,
				redirect: '/department/list',
				children: [{
					path: '/department/tpm',
					name: '部门模板', //部门管理
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
					children: [{
						path: '/department/list', //部门列表
						name: '部门列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}, {
						path: '/department/save', //部门添加
						name: '部门添加',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}, {
						path: '/department/update', //部门添加
						name: '部门修改',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}, {
						path: '/department/memberList', //部门添加
						name: '部门成员列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}]
				}, ]
			}, {
				path: '/message',
				name: '站内信管理', //站内信管理
				component: childView,
				isParent: true,
				redirect: '/message/list',
				children: [{
					path: '/message/list', //站内信列表
					name: '站内信列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/message/add', //发送站内信
					name: '发送站内信',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/message/seek', //查看站内信
					name: '站内信查看',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/message/reply', //回复站内信
					name: '站内信回复',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/message/forward', //转发站内信
					name: '站内信转发',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			}
		]
	},
	{
		path: '/operate',
		component: layout,
		iconCls: 'icon-yunyingzhongxin',
		name: '运营中心', //
		meta: {
			isLink: true
		},
		children: [{
				path: '/contentReuse',
				isParent: true,
				name: '内容复用', //内容复用
				component: resolve => {
					require(['@/views/error/405.vue'], resolve)
				},
			},
			{
				path: '/workflow',
				name: '工作流', //工作流
				component: childView,
				isParent: true,
				redirect: '/workflow/list',
				children: [{
					path: '/workflow/list', //工作流列表
					name: '工作流列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/workflow/save', //工作流添加
					name: '工作流添加',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/workflow/update', //工作流修改
					name: '工作流修改',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/link',
				name: '友情链接', //友情链接
				component: childView,
				isParent: true,
				redirect: '/link/list',
				children: [{
					path: '/link/list', //友情链接列表
					name: '友情链接列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/link/save', //友情链接添加
					name: '友情链接添加',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/link/update', //友情链接修改
					name: '友情链接修改',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/link/typeList', //友情链接类别列表
					name: '类别列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/ad',
				name: '广告管理', //广告管理
				component: childView,
				isParent: true,
				redirect: '/ad/list',
				children: [{
					path: '/ad/list', //广告管理
					name: '广告列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/ad/save', //广告添加
					name: '广告添加',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/ad/update', //广告修改
					name: '广告修改',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/adSpace/list', //广告版位列表
					name: '广告版位列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/contentShare',
				name: '共享管理', //共享管理
				component: childView,
				isParent: true,
				redirect: '/contentShare/list',
				children: [{
						path: '/contentShare/list', //共享列表
						name: '共享列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/contentShare/view', //内容查看
						name: '内容查看',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
				]
			},
			{
				path: '/contentBuy',
				name: '内容购买记录', //内容购买记录
				component: childView,
				isParent: true,
				redirect: '/contentBuy/list',
				children: [{
					path: '/contentBuy/list', ////内容购买记录列表
					name: '内容购买记录列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, ]
			},
			{
				path: '/userAccount',
				name: '用户账户统计', //用户账户统计
				component: childView,
				isParent: true,
				redirect: '/userAccount/list',
				children: [{
					path: '/userAccount/list', ////用户账户统计列表
					name: '用户账户统计列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, ]
			},
			{
				path: '/charge',
				name: '内容收费统计', //内容收费统计
				component: childView,
				isParent: true,
				redirect: '/charge/list',
				children: [{
						path: '/charge/list', ////内容收费统计列表
						name: '内容收费统计列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/charge/commission', ////2）平台佣金所得
						name: '平台佣金所得',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
				]
			},
			{
				path: '/accountPay',
				name: '转账管理', //转账管理
				component: childView,
				isParent: true,
				redirect: '/accountPay/list',
				children: [{
					path: '/accountPay/list', ////转账管理列表
					name: '转账列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, ]
			},
			{
				path: '/drawApply',
				name: '提现管理', //提现管理
				component: childView,
				isParent: true,
				redirect: '/drawApply/list',
				children: [{
						path: '/drawApply/list', ////提现管理列表
						name: '提现列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/drawApply/traAccount', ////转账
						name: '转账',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			},
			{
				path: '/comment',
				name: '评论管理', //评论管理
				component: childView,
				isParent: true,
				redirect: '/comment/list',
				children: [{
					path: '/comment/list', //评论列表
					name: '评论列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/comment/itemList', //评论查看
					name: '评论查看',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/job',
				name: '职位申请', //职位申请
				component: childView,
				isParent: true,
				redirect: '/job/list',
				children: [{
						path: '/job/list', //职位申请
						name: '职位申请列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/job/seek', //简历查看
						name: '简历查看',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			},
			{
				path: '/db',
				name: '数据备份', //数据备份
				component: childView,
				children: [{
						path: '/backups',
						name: '备份',
						component: childView,
						redirect: '/backups/list',
						children: [{
								path: '/backups/list',
								name: '备份列表',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/backups/seek',
								name: '表字段列表',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							}
						]
					},
					{
						path: '/revert',
						name: '恢复',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/backupsDir',
						name: '备份目录',
						component: childView,
						redirect: '/backupsDir/list',
						children: [{
								path: '/backupsDir/list',
								name: '备份目录列表',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/backupsDir/edit',
								name: '备份目录重命名',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
						]
					},
				]
			},
			{
				path: '/vote',
				name: '问卷管理', //问卷管理
				component: childView,
				isParent: true,
				redirect: '/vote/list',
				children: [{
					path: '/vote/list', //问卷调查列表
					name: '问卷列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/vote/save', //问卷新增
					name: '问卷新增',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/vote/update', //问卷修改
					name: '问卷修改',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/guestbook',
				name: '留言管理',
				component: childView,
				isParent: true,
				redirect: '/guestbook/list',
				children: [{
					path: '/guestbook/list',
					name: '留言列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/guestbook/save',
					name: '留言新增',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/guestbookType/list',
					name: '留言类型列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/collection',
				name: '采集管理',
				component: childView,
				children: [{
						path: '/collectionmanage',
						name: '采集',
						component: childView,
						redirect: '/collectionmanage/list',
						children: [{
								path: '/collectionmanage/list',
								name: '采集列表',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/collectionmanage/save',
								name: '采集添加',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/collectionmanage/update',
								name: '采集修改',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
						]
					},
					{
						path: '/collectionhistory',
						name: '采集历史',
						component: childView,
						redirect: '/collectionhistory/list',
						children: [{
							path: '/collectionhistory/list',
							name: '采集列表',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, ]
					},
					{
						path: '/collectionspeed',
						name: '采集进度',
						component: childView,
						redirect: '/collectionspeed/view',
						children: [{
							path: '/collectionspeed/view',
							name: '采集查看',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, ]
					},
				]
			},
			{
				path: '/weixin',
				name: '公众号设置', //公众号设置
				component: childView,
				children: [{
						path: '/weixinConfig', //公众号设置
						name: '公众号设置',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/weixinMenu', //自定义菜单
						name: '自定义菜单',
						component: childView,
						redirect: '/weixinMenu/list',
						children: [{
								path: '/weixinMenu/list', ////自定义菜单列表
								name: '自定义菜单列表',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/weixinMenu/add', ////自定义菜单添加
								name: '自定义菜单添加',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/weixinMenu/edit', ////自定义菜单修改
								name: '自定义菜单修改',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/weixinMenu/child', ////自定义菜单二级菜单
								name: '自定义菜单二级菜单',
								component: childView,
								redirect: '/weixinMenu/child/list',
								children: [{
										path: '/weixinMenu/child/list', ////自定义菜单列表
										name: '二级菜单列表',
										component: resolve => {
											require(['@/views/error/405.vue'], resolve)
										},
									},
									{
										path: '/weixinMenu/child/add', ////自定义菜单添加
										name: '二级菜单添加',
										component: resolve => {
											require(['@/views/error/405.vue'], resolve)
										},
									},
									{
										path: '/weixinMenu/child/edit', ////自定义菜单修改
										name: '二级菜单修改',
										component: resolve => {
											require(['@/views/error/405.vue'], resolve)
										},
									},
								]

							},
						]
					},
					{
						path: '/weixinMessage', //自定义回复
						name: '自定义回复',
						component: childView,
						redirect: '/weixinMessage/list',
						children: [{
								path: '/weixinMessage/list', ////自定义菜单列表
								name: '自定义回复列表',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/weixinMessage/add', ////自定义菜单添加
								name: '自定义回复添加',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/weixinMessage/edit', ////自定义菜单修改
								name: '自定义回复修改',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
						]
					},
					{
						path: '/weixinMessageDef', //默认回复
						name: '默认回复',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
				]
			},
			{
				path: '/statically',
				name: '页面静态化', //页面静态化
				component: childView,
				children: [{
						path: '/statically/indexStatic', //首页静态化
						name: '首页静态化',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/statically/channelStatic', //栏目静态化
						name: '栏目静态化',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/statically/contentStatic', //内容静态化
						name: '内容静态化',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
				]
			},
		]
	},
	{
		path: '*',
		name: '404',
		component: error,
		meta: {
			role: 'index'
		},
		hidden: true
	}
];

export {
	routes,
	ansycRoutes
}