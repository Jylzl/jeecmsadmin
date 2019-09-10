<!--
 * @description: 控制台
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 15:53:28
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-10 11:24:58
 -->
<template>
	<el-container>
		<el-main>
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<div class="box-card sys-inf">
					<el-row :gutter="20">
						<el-col :span="4" :xl="4" :lg="4" :md="8" :sm="8" class="m-b-20">
							<div class="inf-card inf-card_1">
								<div class="inf-card-title">文章总数</div>
								<div class="inf-card-num">
									<countTo :startVal='0' :endVal='page.pageNum.contentTotal' :duration='3000'>
									</countTo>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xl="4" :lg="4" :md="8" :sm="8" class="m-b-20">
							<div class="inf-card inf-card_2">
								<div class="inf-card-title">评论总数</div>
								<div class="inf-card-num">
									<countTo :startVal='0' :endVal='page.pageNum.commentTotal' :duration='3000'>
									</countTo>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xl="4" :lg="4" :md="8" :sm="8" class="m-b-20">
							<div class="inf-card inf-card_3">
								<div class="inf-card-title">留言总数</div>
								<div class="inf-card-num">
									<countTo :startVal='0' :endVal='page.pageNum.guestbookTotal' :duration='3000'>
									</countTo>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xl="4" :lg="4" :md="8" :sm="8" class="m-b-20">
							<div class="inf-card inf-card_4">
								<div class="inf-card-title">会员总数</div>
								<div class="inf-card-num">
									<countTo :startVal='0' :endVal='page.pageNum.memberTotal' :duration='3000'>
									</countTo>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xl="4" :lg="4" :md="8" :sm="8" class="m-b-20">
							<div class="inf-card inf-card_5">
								<div class="inf-card-title">咨询总数</div>
								<div class="inf-card-num">
									<countTo :startVal='0' :endVal='page.pageNum.guestbookTotal' :duration='3000'>
									</countTo>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xl="4" :lg="4" :md="8" :sm="8" class="m-b-20">
							<div class="inf-card inf-card_6">
								<div class="inf-card-title">投诉总数</div>
								<div class="inf-card-num">
									<countTo :startVal='0' :endVal='page.pageNum.memberTotal' :duration='3000'>
									</countTo>
								</div>
							</div>
						</el-col>
					</el-row>
				</div>
				<div class="box-card personal-inf">
					<el-row :gutter="20">
						<el-col :span="8" :xl="8" :lg="8" :md="12" :sm="12" class="m-b-20">
							<el-card :body-style="{ padding: '15px' }">
								<div slot="header">
									<span>快捷操作</span>
								</div>
								<div class="text item">
									<el-row :gutter="10">
										<el-col :span="6">
											<el-link :underline="false" class="personal-inf-card">
												<div class="card-icon">
													<i class="el-icon-edit"></i>
												</div>
												<div class="card-inf">内容发布</div>
											</el-link>
										</el-col>
										<el-col :span="6">
											<el-link :underline="false" class="personal-inf-card">
												<div class="card-icon">
													<i class="el-icon-cpu"></i>
												</div>
												<div class="card-inf">数据清洗</div>
											</el-link>
										</el-col>
										<el-col :span="6">
											<el-link :underline="false" class="personal-inf-card">
												<div class="card-icon">
													<i class="el-icon-search"></i>
												</div>
												<div class="card-inf">数据检索</div>
											</el-link>
										</el-col>
										<el-col :span="6">
											<el-link :underline="false" class="personal-inf-card">
												<div class="card-icon">
													<i class="el-icon-pie-chart"></i>
												</div>
												<div class="card-inf">数据统计</div>
											</el-link>
										</el-col>
										<el-col :span="6">
											<el-link :underline="false" class="personal-inf-card">
												<div class="card-icon">
													<i class="el-icon-setting"></i>
												</div>
												<div class="card-inf">个人设置</div>
											</el-link>
										</el-col>
									</el-row>
								</div>
							</el-card>
						</el-col>
						<el-col :span="8" :xl="8" :lg="8" :md="12" :sm="12" class="m-b-20">
							<el-card :body-style="{ padding: '15px' }">
								<div slot="header">
									<span>今日统计</span>
								</div>
								<div class="text item">
									<el-row :gutter="10" class="personal-content">
										<el-col :span="12">
											<el-link :underline="false" class="personal-content-card">
												<div class="card-title">内容发布量</div>
												<div class="card-content">{{page.pageNum.contentDayTotalCount}}</div>
											</el-link>
										</el-col>
										<el-col :span="12">
											<el-link :underline="false" class="personal-content-card">
												<div class="card-title">评论数</div>
												<div class="card-content">{{page.pageNum.commentDayTotalCount}}</div>
											</el-link>
										</el-col>
										<el-col :span="12">
											<el-link :underline="false" class="personal-content-card">
												<div class="card-title">留言数</div>
												<div class="card-content">{{page.pageNum.guestbookDayTotalCount}}</div>
											</el-link>
										</el-col>
										<el-col :span="12">
											<el-link :underline="false" class="personal-content-card">
												<div class="card-title">会员数</div>
												<div class="card-content">{{page.pageNum.memberToday}}</div>
											</el-link>
										</el-col>
									</el-row>
								</div>
							</el-card>
						</el-col>
						<el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" class="m-b-20">
							<el-card :body-style="{ padding: '15px' }">
								<div slot="header">
									<span>待办事项</span>
									<el-tooltip class="item" effect="dark" content="查看更多" placement="top">
										<el-button type="text" class="tab-more">更多<i class="el-icon-arrow-right"></i>
										</el-button>
									</el-tooltip>
								</div>
								<div class="personal-item">
									<el-timeline style="width:100%;">
										<el-timeline-item v-for="(activity, index) in activities" :key="index"
											:icon="activity.icon" :type="activity.type" :color="activity.color"
											:size="activity.size" :timestamp="activity.timestamp" placement="top"
											:hide-timestamp="true">
											<p class="timeline-content">
												<el-link :underline="false" class="timeline-content-title">
													{{activity.content}}</el-link>
												<span class="timeline-content-time">一天前</span>
											</p>
										</el-timeline-item>
									</el-timeline>
								</div>
							</el-card>
						</el-col>
					</el-row>
				</div>
				<div class="box-card sys-chart">
					<el-row :gutter="20">
						<el-col :span="16" :xl="16" :lg="16" :md="24" :sm="24">
							<el-card :body-style="{ padding: '15px' }">
								<div slot="header">
									<span>{{sysChartItem.title}}</span>
									<ul class="tab-spot">
										<li :class="{active:sysChartItem.active==0}"
											@click="tabSpotChange('sysChartItem',0,'趋势分析')">0
										</li>
										<li :class="{active:sysChartItem.active==1}"
											@click="tabSpotChange('sysChartItem',1,'标题2')">1
										</li>
										<li :class="{active:sysChartItem.active==2}"
											@click="tabSpotChange('sysChartItem',2,'标题3')">2
										</li>
									</ul>
								</div>
								<div class="sys-chart-body">
									<div v-show="sysChartItem.active == 0">
										<ve-line :data="chart1Data" :settings="chart1Set" :loading="chart1loading"
											ref="sysChartItem0"></ve-line>
									</div>
									<div v-show="sysChartItem.active == 1">
									</div>
									<div v-show="sysChartItem.active == 2">
										<div id="chart-03"></div>
									</div>
								</div>
							</el-card>
						</el-col>
						<el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24">
							<el-card :body-style="{ padding: '15px' }">
								<div slot="header">
									<span>{{dataChartItem.title}}</span>
									<ul class="tab-spot">
										<li :class="{active:dataChartItem.active==0}"
											@click="tabSpotChange('dataChartItem',0,'来源分析')">0
										</li>
										<li :class="{active:dataChartItem.active==1}"
											@click="tabSpotChange('dataChartItem',1,'标题2')">1
										</li>
										<li :class="{active:dataChartItem.active==2}"
											@click="tabSpotChange('dataChartItem',2,'标题3')">2
										</li>
									</ul>
								</div>
								<div class="sys-chart-body">
									<div v-show="dataChartItem.active == 0">
										<ve-ring :data="chart2Data" :extend="chart2Set" :loading="chart2loading"
											ref="dataChartItem0"></ve-ring>
									</div>
									<div v-show="dataChartItem.active == 1">
									</div>
									<div v-show="dataChartItem.active == 2">
									</div>
								</div>
							</el-card>
						</el-col>
					</el-row>
				</div>
			</el-scrollbar>
		</el-main>
	</el-container>
</template>

<script>
	import moment from "moment";
	import countTo from "vue-count-to";
	export default {
		components: {
			countTo: countTo
		},
		data() {
			this.chart1Set = {
				stack: {
					'数量': ['浏览量（PV）', '统计（IP）', '访客数（UV）']
				},
				area: true
			};
			this.chart2Set = {};
			return {
				sysChartItem: {
					active: 0,
					title: '趋势分析'
				},
				dataChartItem: {
					active: 0,
					title: '来源分析'
				},
				activities: [{
					content: '待审核内容20条',
					timestamp: '2018-04-12 20:46',
					color: '#0bbd87'
				}, {
					content: '待清洗数据100条',
					timestamp: '2018-04-03 20:46',
					color: '#0bbd87'
				}, {
					content: '未读消息5条',
					timestamp: '2018-04-03 20:46',
					size: 'large'
				}, {
					content: '未读消息5条',
					timestamp: '2018-04-03 20:46',
					size: 'large'
				}, {
					content: '未读消息5条',
					timestamp: '2018-04-03 20:46',
					size: 'large'
				}, {
					content: '未读消息5条',
					timestamp: '2018-04-03 20:46',
					size: 'large'
				}],
				params: {
					type: "source", //查询分类
					flag: "1", //查询范围
					target: "", //查询指标
					year: "", //年度
					begin: "", //开始日期
					end: "", //结束日期
					orderBy: "", //排序
					count: "10"
				},
				//访问分析数据
				chart1loading: false,
				chart1Data: {
					columns: [
						"日期",
						"浏览量（PV）",
						"统计（IP）",
						"访客数（UV）"
					],
					rows: []
				},
				//来源分析数据
				chart2loading: false,
				chart2Data: {
					columns: ["访问类型", "访问量"],
					rows: []
				},
				//页面数据
				page: {
					source: [], //来访域名  type:array
					keyword: [], //搜索词   type:array
					pageNum: "",
					adminNum: "", //会员数
					pv: [], //获取pv、
					ip: [], //ip、
					fk: [], //访客数信息
					avg: [], //平均访问时长
					wd: [], //时间维度
					ss: [], //来源分析
					ssKey: [], //来源键
					sum: "",
					sumkey: ""
				}
			};
		},
		created() {},
		mounted() {
			this.globalCount();
			this.globalAdmin();
			this.getPv();
			this.getsource();
			this.create('link');
		},
		methods: {
			//选项卡切换
			tabSpotChange(item, index, title) {
				this[item].active = index;
				this[item].title = title;
				// this.$refs[item + index].resize()
				if (this.$refs[item + index] != undefined) {
					this.$nextTick(_ => {
						this.$refs[item + index].echarts.resize()
					})
				}
			},
			//获取pv、ip、访客数信息
			getPv() {
				this.chart1loading = true;
				this.$axios
					.post(this.$api.flowPvList, {
						flag: "4",
						begin: "",
						end: "",
						statisDay: "",
						year: ""
					})
					.then(res => {
						let data = [];
						if (res.body.list) {
							res.body.list.forEach(element => {
								data.push({
									"日期": this.timeFormat("day", element[4]),
									"浏览量（PV）": element[0],
									"统计（IP）": element[1],
									"访客数（UV）": element[2]
								});
							});
						}
						this.chart1Data.rows = data;
						setTimeout(() => {
							this.chart1loading = false;
						}, 300);
					})
					.catch(err => {
						console.log(err);
					});
			},
			//获取来源
			getsource() {
				this.chart2loading = true;
				let pam = {
					type: "source", //查询分类
					flag: "1", //查询范围
					target: "0", //查询指标
					year: "", //年度
					begin: "", //开始日期
					end: "", //结束日期
					orderBy: "", //排序
					count: "10"
				};
				this.$axios
					.post(this.$api.flowSourceList, this.pam)
					.then(res => {
						let data = [];
						let a = 0;
						for (let i in res.body.totalMap) {
							data.push({
								访问类型: res.body.keys[a],
								访问量: res.body.totalMap[i]
							});
							a++;
						}
						this.chart2Data.rows = data;
						setTimeout(() => {
							this.chart2loading = false;
						}, 300);
					})
					.catch(err => {
						console.log(err);
					});
			},
			//格式化时间显示
			timeFormat(flag, timeName) {
				let formatTime = "0";
				if (flag == "day" || flag == "yesterday") {
					//小时转换
					switch (timeName) {
						case 0:
							formatTime = "00:00-00:59";
							break;
						case 1:
							formatTime = "01:00-01:59";
							break;
						case 2:
							formatTime = "02:00-02:59";
							break;
						case 3:
							formatTime = "03:00-03:59";
							break;
						case 4:
							formatTime = "04:00-04:59";
							break;
						case 5:
							formatTime = "05:00-05:59";
							break;
						case 6:
							formatTime = "06:00-06:59";
							break;
						case 7:
							formatTime = "07:00-07:59";
							break;
						case 8:
							formatTime = "08:00-08:59";
							break;
						case 9:
							formatTime = "09:00-09:59";
							break;
						case 10:
							formatTime = "10:00-10:59";
							break;
						case 11:
							formatTime = "11:00-11:59";
							break;
						case 12:
							formatTime = "12:00-12:59";
							break;
						case 13:
							formatTime = "13:00-13:59";
							break;
						case 14:
							formatTime = "14:00-14:59";
							break;
						case 15:
							formatTime = "15:00-15:59";
							break;
						case 16:
							formatTime = "16:00-16:59";
							break;
						case 17:
							formatTime = "17:00-17:59";
							break;
						case 18:
							formatTime = "18:00-18:59";
							break;
						case 19:
							formatTime = "19:00-19:59";
							break;
						case 20:
							formatTime = "20:00-20:59";
							break;
						case 21:
							formatTime = "21:00-21:59";
							break;
						case 22:
							formatTime = "22:00-22:59";
							break;
						case 23:
							formatTime = "23:00-23:59";
							break;
						default:
							formatTime = "99:99:99~99:99:99:99";
							break;
					}
				}
				if (flag == "year") {
					let date = new Date();
					switch (timeName) {
						case 1:
							formatTime = date.getFullYear() + "-01";
							break;
						case 2:
							formatTime = date.getFullYear() + "-02";
							break;
						case 3:
							formatTime = date.getFullYear() + "-03";
							break;
						case 4:
							formatTime = date.getFullYear() + "-04";
							break;
						case 5:
							formatTime = date.getFullYear() + "-05";
							break;
						case 6:
							formatTime = date.getFullYear() + "-06";
							break;
						case 7:
							formatTime = date.getFullYear() + "-07";
							break;
						case 8:
							formatTime = date.getFullYear() + "-08";
							break;
						case 9:
							formatTime = date.getFullYear() + "-09";
							break;
						case 10:
							formatTime = date.getFullYear() + "-10";
							break;
						case 11:
							formatTime = date.getFullYear() + "-11";
							break;
						case 12:
							formatTime = date.getFullYear() + "-12";
							break;
						default:
							formatTime = "9999-99-99";
							break;
					}
				}
				if (flag == "month" || flag == "years") {
					formatTime = timeName;
				}
				return formatTime;
			},
			//获取欢迎页面需要的数据
			create(type) {
				this.params.type = type;
				if (type === 'link') {
					this.$axios.post(this.$api.flowSourceList, this.params).then(res => {
							this.page.source = res.body.totalMap;
							let sum = 0;
							for (let x in res.body.totalMap) {
								sum += res.body.totalMap[x];
							}
							if (sum === 0) {
								sum = 1;
							}
							this.page.sum = sum;
							this.create('keyword');
						})
						.catch(err => {
							this.loading = false;
							console.log(err)
						});
				} else if (type === 'keyword') {
					this.params.start_date = moment().day(0).format('YYYY/MM/DD');
					this.params.end_date = moment().format('YYYY/MM/DD');
					this.params.method = 'overview/getWord';
					this.params.metrics = 'pv_count';
					this.$axios.post(this.$api.flowSearchWordList, this.params).then(res => {
							this.page.keyword = res.body.items;
						})
						.catch(err => {
							this.loading = false;
							console.log(err)
						});
				}

			},
			//获取内容总数
			globalCount() {
				this.$axios
					.post(this.$api.globalStatistic)
					.then(res => {
						this.page.pageNum = res.body;
					})
					.catch(err => {
						console.log(err)
					});
			},
			//获取会员注册数
			globalAdmin() {
				this.$axios
					.post(this.$api.statisticMemberList, {
						queryModel: "month",
						begin: "",
						end: ""
					})
					.then(res => {
						this.page.adminNum = res.body;
					})
					.catch(err => {
						console.log(err)
					});
			}
		}
	};
</script>

<style scoped>
	/* 样式重写 Start*/
	.el-card {
		border-radius: 0;
		border: none;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409eff;
		font-size: 22px;
		font-weight: bold;
	}

	.card-header {
		line-height: 22px;
	}

	/* 样式重写 End*/

	.m-b-20 {
		margin-bottom: 20px;
	}

	.m-t-20 {
		margin-top: 20px;
	}

	.el-timeline-item {
		padding-bottom: 17px;
	}

	/* 第一部分 */
	.box-top {
		overflow: hidden;
	}

	.inf-card {
		display: block;
		box-sizing: border-box;
		height: 100px;
		padding: 10px 10px 20px 10px;
		border: 1px solid #eee;
		border-radius: 2px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}

	.inf-card .inf-card-title {
		height: 20px;
		line-height: 20px;
		font-size: 15px;
		color: #fff;
	}

	.inf-card .inf-card-num {
		height: 60px;
		line-height: 60px;
		font-family: Arial;
		font-size: 26px;
		font-weight: bold;
		color: #fff;
		text-align: center;
	}

	.box-card {
		overflow: hidden;
	}

	.tab-more {
		font-size: 12px;
		padding: 0;
	}

	.sys-inf .inf-card_1 {
		background: linear-gradient(to right, #2f80ed, #54c9f2);
	}

	.sys-inf .inf-card_2 {
		background: linear-gradient(to right, #03c9fb, #3bd3af);
	}

	.sys-inf .inf-card_3 {
		background: linear-gradient(to right, #3387ed, #56ccf2);
	}

	.sys-inf .inf-card_4 {
		background: linear-gradient(to right, #068095, #78ffd6);
	}

	.sys-inf .inf-card_5 {
		background: linear-gradient(to right, #30a0ed, #55cbf2);
	}

	.sys-inf .inf-card_6 {
		background: linear-gradient(to right, #3286ed, #56ccf2);
	}

	/* tab选项卡更多 */
	.tab-spot {
		font-size: 0;
	}

	.tab-spot li {
		display: inline-block;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #e2e2e2;
		margin: 0 3px;
		vertical-align: middle;
		cursor: pointer;
	}

	.tab-spot li.active,
	.tab-spot li:hover {
		background-color: #999;
	}

	/* 个人控制台 */
	.personal-inf-card {
		display: block;
		height: 84px;
	}

	.personal-inf .el-col:nth-child(n + 5),
	.personal-content .el-col:nth-child(n + 3) {
		margin-top: 10px;
	}

	.personal-inf-card .card-icon {
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 28px;
		background-color: #f8f8f8;
		border-radius: 2px;
	}

	.personal-inf-card .card-inf {
		height: 24px;
		line-height: 24px;
		font-size: 14px;
		text-align: center;
	}

	.personal-content-card {
		box-sizing: border-box;
		display: block;
		height: 84px;
		padding: 10px;
		background-color: #F8F8F8;
	}

	.personal-content-card .card-title {
		height: 24px;
		line-height: 24px;
	}

	.personal-content-card .card-content {
		height: 40px;
		line-height: 40px;
		font-size: 30px;
		font-weight: bold;
		color: #009688;
		text-align: left;
	}

	.personal-item {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		height: 178px;
	}

	#chart-01,
	#chart-02,
	#chart-03 {
		width: 100%;
		height: 400px;
	}

	.timeline-content {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}

	.timeline-content .timeline-content-title {
		color: #333;
		font-size: 15px;
	}

	.timeline-content .timeline-content-time {
		color: #999;
		font-size: 14px;
	}
</style>