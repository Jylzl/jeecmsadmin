import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/account/Login.vue'
import lock from '@/views/account/Lock.vue'
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
		path: "/lock",
		name: "锁屏",
		component: lock,
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
	}, //栏目管理
	{
		path: '/channel', //栏目
		name: '栏目管理',
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
			},
			{
				path: '/loyalty', //忠诚度
				name: '忠诚度',
				isParent: true,
				component: resolve => {
					require(['@/views/error/405.vue'], resolve)
				},
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
	}, //运营中心
	{
		path: '/operate',
		component: layout,
		iconCls: 'icon-yunyingzhongxin',
		name: '运营中心',
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
	}, //辅助功能
	{
		path: '/help',
		component: layout,
		iconCls: 'icon-gongnengdingyi1',
		name: '辅助功能',
		meta: {
			isLink: true
		},
		children: [{
				path: '/fullTextSearch',
				isParent: true,
				name: '全文检索', //全文检索
				component: resolve => {
					require(['@/views/error/405.vue'], resolve)
				},
			},
			{
				path: '/dictionary',
				name: '字典', //字典
				component: childView,
				isParent: true,
				redirect: '/dictionary/list',
				children: [{
					path: '/dictionary/list', ////字典列表
					name: '字典列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, ]
			},
			{
				path: '/contentCycle',
				name: '内容回收站', //内容回收站
				component: childView,
				isParent: true,
				redirect: '/contentCycle/list',
				children: [{
					path: '/contentCycle/list', ////字典列表
					name: '内容回收站列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, ]
			},
			{
				path: '/crontab',
				name: '定时任务', //定时任务
				component: childView,
				isParent: true,
				redirect: '/crontab/list',
				children: [{
					path: '/crontab/list', //定时任务列表
					name: '定时任务列表',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/crontab/save', //定时任务添加
					name: '定时任务添加',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/crontab/update', //定时任务修改
					name: '定时任务修改',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/file',
				name: '附件管理', //附件管理
				component: childView,
				isParent: true,
				redirect: '/file/list',
				children: [{
					path: '/file/list', //附件管理
					name: '附件管理',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, ]
			},
			{
				path: '/dimensioncode',
				name: '二维码生成', //二维码管理
				component: childView,
				isParent: true,
				redirect: '/dimensioncode/create',
				children: [{
					path: '/dimensioncode/create', ////二维码管理创建
					name: '二维码管理创建',
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, ]
			},
			{
				path: '/customForm',
				name: '智能表单', //智能表单
				component: childView,
				isParent: true,
				redirect: '/customForm/list',
				children: [{
						path: '/customForm/list', ////智能表单列表
						name: '智能表单列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/customForm/add', ////智能表单添加
						name: '智能表单添加',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/customForm/edit', ////智能表单修改
						name: '智能表单修改',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/customForm/record', ////智能表单记录
						name: '智能表单记录',
						component: childView,
						redirect: '/customForm/record/list',
						children: [{
								path: '/customForm/record/list', ////智能表单记录列表
								name: '智能表单记录列表',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/customForm/record/view', ////智能表单记录详情
								name: '智能表单记录详情',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							}
						]
					},
				]
			},
			{
				path: '/scoregroup',
				name: '评分组管理', //评分组管理
				component: childView,
				isParent: true,
				redirect: '/scoregroup/list',
				children: [{
						path: '/scoregroup/list', ////评分组管理列表
						name: '评分组列表',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/scoregroup/add', ////评分组管理添加
						name: '评分组添加',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/scoregroup/edit', ////评分组管理修改
						name: '评分组修改',
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/scoregroup/scoreitem/list', ////评分项管理
						name: '评分项管理',
						component: childView,
						redirect: '/scoregroup/scoreitem/list',
						children: [{
								path: '/scoregroup/scoreitem/list', ////评分项管理列表
								name: '评分项列表',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/scoregroup/scoreitem/add', ////评分项管理添加
								name: '评分项添加',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/scoregroup/scoreitem/edit', ////评分项管理修改
								name: '评分项修改',
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
						]
					}
				]
			},
			{
				path: '/word',
				name: '词汇管理', //词汇管理
				component: childView,
				children: [{
						path: '/tag', ////tag管理
						name: 'tag管理',
						component: childView,
						redirect: '/tag/list',
						children: [{
							path: '/tag/list', ////tag管理列表
							name: 'tag列表',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, ]
					},
					{
						path: '/sensitivity', ////敏感词管理
						name: '敏感词管理',
						component: childView,
						redirect: '/sensitivity/list',
						children: [{
							path: '/sensitivity/list', ////敏感词管理列表
							name: '敏感词列表',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, ]
					},
					{
						path: '/keyword', ////关键词管理
						name: '关键词管理',
						component: childView,
						redirect: '/keyword/list',
						children: [{
							path: '/keyword/list', ////敏感词管理列表
							name: '关键词列表',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, ]
					},
					{
						path: '/origin', ////来源管理
						name: '来源管理',
						component: childView,
						redirect: '/origin/list',
						children: [{
							path: '/origin/list', ////来源管理列表
							name: '来源列表',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, ]
					},
					{
						path: '/searchwords', ////热词管理
						name: '热词管理',
						component: childView,
						redirect: '/searchwords/list',
						children: [{
							path: '/searchwords/list', ////热词管理列表
							name: '热词列表',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, ]
					}
				]
			},
		]
	}, //模板资源
	{
		path: '/interface',
		name: '模板资源',
		component: layout,
		iconCls: 'icon-shebeikaifa',
		children: [{
				path: '/template',
				name: '模板管理',
				component: childView,
				isParent: true,
				redirect: '/templatelist',
				children: [{
					path: '/template/mange',
					name: '模板',
					component: childView,
					hidden: true,
					redirect: '/templatelist',
					children: [{
							path: '/templatelist',
							name: '模板列表',
							component: resolve => {
								require(['@/views/template/template/Index.vue'], resolve)
							},
							hidden: true
						},
						{
							path: '/templateadd',
							name: '模板添加',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
							hidden: true
						},
						{
							path: '/templateedit',
							name: '模板修改',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
							hidden: true
						},
						{
							path: '/templaterename',
							name: '模板重命名',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
							hidden: true
						}, {
							path: '/templatesetting',
							name: '模板设置',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
							hidden: true
						}
					]
				}]
			},
			{
				path: '/resource',
				name: '资源',
				isParent: true,
				component: childView,
				redirect: '/resource/mange',
				children: [{
					path: '/resource/mange',
					name: '资源管理',
					component: childView,
					hidden: true,
					children: [{
							path: '/resourcelist',
							name: '资源列表',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
							hidden: true
						},
						{
							path: '/resourceadd',
							meta: {
								role: 'resourceadd'
							},
							name: '资源添加',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
							hidden: true
						},
						{
							path: '/resourceedit',
							name: '资源修改',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
							hidden: true
						},
						{
							path: '/resourcerename',
							name: '资源重命名',
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
							hidden: true
						},
					]
				}]
			},
		]
	}, //配置管理
	{
		path: '/config',
		component: layout,
		iconCls: 'icon-icon_shezhi',
		name: '配置管理',
		meta: {
			isLink: true
		},
		children: [{
				path: '/siteConfig',
				isParent: true,
				name: '站点设置', //站点设置
				component: resolve => {
					require(['@/views/error/405.vue'], resolve)
				},
			},
			{
				path: '/stat',
				name: '统计设置', //统计设置
				component: childView,
				isParent: true,
				redirect: '/stat/list',
				children: [{
						path: '/stat/list',
						name: '统计列表', //统计列表
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/stat/add',
						name: '统计添加', //统计添加
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/stat/edit',
						name: '统计修改', //统计修改
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			},
			{
				path: '/ftp',
				name: 'FTP管理', //ftp管理
				component: childView,
				isParent: true,
				redirect: '/ftp/list',
				children: [{
					path: '/ftp/list',
					name: 'FTP列表', //ftp管理列表
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/ftp/add',
					name: 'FTP添加', //ftp管理添加
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}, {
					path: '/ftp/edit',
					name: 'FTP修改', //ftp管理修改
					component: resolve => {
						require(['@/views/error/405.vue'], resolve)
					},
				}]
			},
			{
				path: '/oss',
				name: 'OSS管理', //oss管理
				component: childView,
				isParent: true,
				redirect: '/oss/list',
				children: [{
						path: '/oss/list',
						name: 'OSS列表', //oss管理列表
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/oss/add',
						name: 'OSS添加', //oss管理添加
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/oss/edit',
						name: 'OSS修改', //oss管理修改
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			},
			{
				path: '/type',
				name: '内容类型', //内容类型
				component: childView,
				isParent: true,
				redirect: '/type/list',
				children: [{
						path: '/type/list',
						name: '内容类型列表', //内容类型列表
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/type/add',
						name: '内容类型添加', //内容类型添加
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/type/edit',
						name: '内容类型修改', //内容类型修改
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			},
			{
				path: '/directive',
				name: '标签向导', //标签向导
				component: childView,
				isParent: true,
				redirect: '/directive/list',
				children: [{
						path: '/directive/list',
						name: '标签向导列表', //标签向导列表
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/directive/add',
						name: '标签向导添加', //标签向导添加
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
				]
			},
			{
				path: '/model',
				name: '模型管理', //模型管理
				component: childView,
				isParent: true,
				redirect: '/model/list',
				children: [{
						path: '/model/list',
						name: '模型列表', //模型管理列表
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}, {
						path: '/model/add',
						name: '模型添加', //模型管理添加
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}, {
						path: '/model/edit',
						name: '模型修改', //模型管理修改
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/channelModel/list',
						name: '栏目模型字段列表', //栏目模型
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						}
					},
					{
						path: '/channelModel/update',
						name: '栏目模型字段修改', //栏目模型项修改
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						}
					},
					{
						path: '/channelModel/save',
						name: '栏目模型字段添加', //栏目模型项添加
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						}
					},
					{
						path: '/contentModel/list',
						name: '内容模型字段模型', //内容模型
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						}
					},
					{
						path: '/contentModel/update',
						name: '内容模型字段修改', //内容模型项修改
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						}
					},
					{
						path: '/contentModel/save',
						name: '内容模型字段添加', //内容模型项添加
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						}
					}
				]
			},
			{
				path: '/globel',
				name: '全局设置', //全局设置
				component: childView,
				children: [{
						path: '/globel/systemUpdate',
						name: '系统设置', //全局设置-系统设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/globel/loginUpdate',
						name: '登录设置', //全局设置-登录设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/globel/memberUpdate',
						name: '会员设置', //全局设置-会员设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/globel/registerModel',
						name: '会员注册管理', //全局设置-会员注册管理
						component: childView,
						redirect: '/globel/registerModel/list',
						children: [{
								path: '/globel/registerModel/list',
								name: '会员注册列表', //全局设置-会员注册管理列表
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/globel/registerModel/add',
								name: '会员注册添加', //全局设置-会员注册管理添加
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/globel/registerModel/edit',
								name: '会员注册修改', //全局设置-会员注册管理修改
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							}
						]
					},
					{
						path: '/globel/markUpdate',
						name: '水印设置', //全局设置-水印设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/globel/firewallUpdate',
						name: '防火墙设置', //全局设置-防火墙设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/globel/attrUpdate',
						name: '其他设置', //全局设置-其他设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/globel/companyUpdate',
						name: '机构信息设置', //全局设置-机构信息设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/globel/contentUpdate',
						name: '内容佣金设置', //全局设置-内容佣金设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
				]
			},
			{
				path: '/site',
				component: childView,
				isParent: true,
				name: '站点管理', //站点管理
				redirect: '/site/list',
				children: [{
						path: '/site/list',
						name: '站点列表', //站点管理列表
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/site/add',
						name: '站点添加', //站点管理添加
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/site/edit',
						name: '站点修改', //站点管理修改
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					}
				]
			},
			{
				path: '/apiManage',
				name: '接口管理', //接口管理
				component: childView,
				children: [{
						path: '/apiManage/apiUpdate',
						name: '接口设置', //接口管理-接口设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/apiManage/apiSSOupdate',
						name: '单点登录设置', //接口管理-sso设置
						component: resolve => {
							require(['@/views/error/405.vue'], resolve)
						},
					},
					{
						path: '/apiManage/apiMan',
						name: '接口管理', //接口管理-接口管理
						component: childView,
						redirect: '/apiManage/apiMan/list',
						children: [{
							path: '/apiManage/apiMan/list',
							name: '接口列表', //接口管理-接口管理列表
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, {
							path: '/apiManage/apiMan/add',
							name: '接口添加', //接口管理-接口管理添加
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, {
							path: '/apiManage/apiMan/edit',
							name: '接口修改', //接口管理-接口管理修改
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}]
					},
					{
						path: '/apiManage/apiUserMan',
						name: '接口用户管理', //接口管理-接口用户管理
						component: childView,
						redirect: '/apiManage/apiUserMan/list',
						children: [{
							path: '/apiManage/apiUserMan/list',
							name: '接口用户列表', //接口管理-接口用户管理列表
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, {
							path: '/apiManage/apiUserMan/add',
							name: '接口用户添加', //接口管理-接口用户管理添加
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, {
							path: '/apiManage/apiUserMan/edit',
							name: '接口用户修改', //接口管理-接口用户管理修改
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}]
					},
					{
						path: '/apiManage/apiUseRecord',
						name: '接口使用记录', //接口管理-接口使用记录
						component: childView,
						redirect: '/apiManage/apiUseRecord/list',
						children: [{
							path: '/apiManage/apiUseRecord/list',
							name: '接口使用列表', //接口管理-接口使用记录列表
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}]
					},
					{
						path: '/apiManage/apiRecord',
						name: 'api接口记录', //接口管理-api接口记录
						component: childView,
						redirect: '/apiManage/apiRecord/list',
						children: [{
							path: '/apiManage/apiRecord/list',
							name: 'api接口记录列表', //接口管理-api接口记录列表
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}]
					},
					{
						path: '/apiManage/apiInfo',
						name: 'api接口管理', //接口管理-接口使用记录
						component: childView,
						redirect: '/apiManage/apiInfo/list',
						children: [{
							path: '/apiManage/apiInfo/list',
							name: 'api接口列表', //接口管理-api接口管理列表
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, {
							path: '/apiManage/apiInfo/add',
							name: 'api接口添加', //接口管理-api接口管理添加
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}, {
							path: '/apiManage/apiInfo/edit',
							name: 'api接口修改', //接口管理-api接口管理修改
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}]
					},
					{
						path: '/apiManage/apiAccount',
						name: 'api接口账户管理', //接口管理-api接口账户管理
						component: childView,
						redirect: '/apiManage/apiAccount/list',
						children: [{
								path: '/apiManage/apiAccount/list',
								name: 'api接口账户列表', //接口管理-api接口账户管理列表
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							}, {
								path: '/apiManage/apiAccount/add',
								name: 'api接口账户添加', //接口管理-api接口账户管理添加
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							}, {
								path: '/apiManage/apiAccount/edit',
								name: 'api接口账户查看', //接口管理-api接口账户管理查看
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/apiManage/apiAccount/update',
								name: '独立密码修改', //接口管理-api接口账户管理查看
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							}
						]
					}
				]
			}, {
				path: '/smsServer',
				name: '短信服务', //短信服务
				component: childView,
				children: [{
						path: '/smsServer/smsServer',
						name: '短信服务管理', //短信服务-短信服务管理
						component: childView,
						redirect: '/smsServer/smsServer/list',
						children: [{
								path: '/smsServer/smsServer/list',
								name: '短信服务列表', //短信服务-短信服务管理列表
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/smsServer/smsServer/add',
								name: '短信服务添加', //短信服务-短信服务管理添加
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							},
							{
								path: '/smsServer/smsServer/edit',
								name: '短信服务修改', //短信服务-短信服务管理修改
								component: resolve => {
									require(['@/views/error/405.vue'], resolve)
								},
							}
						]
					},
					{
						path: '/smsServer/smsServer/smsRecord',
						name: '短信使用记录', //短信服务-短信使用记录
						component: childView,
						redirect: '/smsServer/smsServer/smsRecord',
						children: [{
							path: '/smsServer/smsServer/smsRecord',
							name: '短信使用记录列表', //短信服务-短信使用记录
							component: resolve => {
								require(['@/views/error/405.vue'], resolve)
							},
						}]
					},
				]
			},
		]
	}, //网站监测
	{
		path: '/webmonitoring', //内容
		name: '网站监测',
		component: layout,
		iconCls: 'icon-gongyezujian-yibiaopan',
		meta: {
			isLink: true
		},
		children: [{
			path: '/webset',
			name: '可访问性', //内容管理
			component: childView,
			isParent: true,
			redirect: '/webset/accessibility',
			children: [{
				path: '/webset/accessibility',
				name: '可访问性',
				component: resolve => {
					require(['@/views/content/content/list.vue'], resolve)
				}
			}]
		}, {
			path: '/warning',
			name: '告警通知', //专题管理
			component: childView,
			isParent: true,
			redirect: '/warning/notice',
			children: [{
				path: '/warning/notice',
				name: '告警通知',
				component: resolve => {
					require(['@/views/content/topic/list.vue'], resolve)
				}
			}]
		}]
	}, //关于
	{
		path: '/about', //关于
		name: '关于',
		component: layout,
		iconCls: 'icon-kefu',
		redirect: '/about/us',
		isParent: true,
		leaf: true, //只有一个节点  
		children: [{
			path: '/about/us',
			name: '关于',
			component: resolve => {
				require(['@/views/error/405.vue'], resolve)
			},
			hidden: false,
		}]
	}, //错误页面
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