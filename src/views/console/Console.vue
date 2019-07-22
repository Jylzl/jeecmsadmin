<template>
	<el-container>
		<el-main>
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<el-row :gutter="24">
					<el-col :span="6" :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
						<div class="bg-box">
							<div class="bg-green bg-icon">
								<svg width="48" height="48">
									<image xlink:href="@/assets/svg/content.svg" src="svg.png" width="48" height="48" />
								</svg>
								<!-- <icon name="content" :w="48" :h="48"></icon> -->
								<p class="icon-title">内容发布数</p>
							</div>
							<div class="bg-info">
								<p class="today-count">
									<span class="todat-title">今日</span>
									<span class="count-num">{{page.pageNum.contentDayTotalCount}}&nbsp;</span>
									<span class="up-num">({{page.pageNum.contentDayUncheckCount}})</span>
								</p>
								<p class="all-count">累计:&nbsp;&nbsp;<countTo :startVal='0'
										:endVal='page.pageNum.contentTotal' :duration='3000'></countTo>
								</p>
							</div>
						</div>
					</el-col>
					<el-col :span="6" :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
						<div class="bg-box">
							<div class="bg-yellow bg-icon">
								<svg width="48" height="48">
									<image xlink:href="@/assets/svg/comment.svg" src="svg.png" width="48" height="48" />
								</svg>
								<!-- <icon name="comment" :w="48" :h="48"></icon> -->
								<p class="icon-title">评论数</p>
							</div>
							<div class="bg-info">
								<p class="today-count">
									<span class="todat-title">今日</span>
									<span class="count-num">{{page.pageNum.commentDayTotalCount}}&nbsp;</span>
									<span class="up-num">({{page.pageNum.commentDayUncheckCount}})</span>
								</p>
								<p class="all-count">累计:&nbsp;&nbsp;<countTo :startVal='0'
										:endVal='page.pageNum.commentTotal' :duration='3000'></countTo>
								</p>
							</div>
						</div>
					</el-col>
					<el-col :span="6" :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
						<div class="bg-box">
							<div class="bg-blue bg-icon">
								<svg width="48" height="48">
									<image xlink:href="@/assets/svg/list.svg" src="svg.png" width="48" height="48" />
								</svg>
								<!-- <icon name="list" :w="48" :h="48"></icon> -->
								<p class="icon-title">留言数</p>
							</div>
							<div class="bg-info">
								<p class="today-count">
									<span class="todat-title">今日</span>
									<span class="count-num">{{page.pageNum.guestbookDayTotalCount}}&nbsp;</span>
									<span class="up-num">({{page.pageNum.guestbookDayUncheckTotalCount}})</span>
								</p>
								<p class="all-count">累计:&nbsp;&nbsp;<countTo :startVal='0'
										:endVal='page.pageNum.guestbookTotal' :duration='100'></countTo>
								</p>
							</div>
						</div>
					</el-col>
					<el-col :span="6" :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
						<div class="bg-box">
							<div class="bg-purple bg-icon">
								<svg width="48" height="48">
									<image xlink:href="@/assets/svg/news.svg" src="svg.png" width="48" height="48" />
								</svg>
								<!-- <icon name="news" :w="48" :h="48"></icon> -->
								<p class="icon-title">待办</p>
							</div>
							<div class="bg-info">
								<p class="today-count">
									<span class="todat-title">今日</span>
									<span class="count-num">{{page.pageNum.memberToday}}&nbsp;</span>
								</p>
								<p class="all-count">累计:&nbsp;&nbsp;<countTo :startVal='0'
										:endVal='page.pageNum.memberTotal' :duration='100'></countTo>
								</p>
							</div>
						</div>
					</el-col>
				</el-row>
				<div class="box-card sys-inf">
					<el-row :gutter="20">
						<el-col :span="4" :xl="4" :lg="4" :md="8" :sm="8" v-for="(item,index) in numList" :key="index"
							class="m-b-20">
							<div :class="'inf-card inf-card_'+(index+1)">
								<div class="inf-card-title">{{item.name}}</div>
								<div class="inf-card-num">
									<countTo :startVal='0' :endVal='item.num' :duration='3000'></countTo>
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
												<div class="card-inf">数据发布</div>
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
									<span>本级内容</span>
								</div>
								<div class="text item">
									<el-row :gutter="10" class="personal-content">
										<el-col :span="12" v-for="(item,index) in personalContent" :key="index">
											<el-link :underline="false" class="personal-content-card">
												<div class="card-title">{{item.title}}</div>
												<div class="card-content">{{item.count}}</div>
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
									<span>数据概览</span>
									<ul class="tab-spot">
										<li :class="{active:sysChartItem==0}" @click="tabSpotChange('sysChartItem',0)">0
										</li>
										<li :class="{active:sysChartItem==1}" @click="tabSpotChange('sysChartItem',1)">1
										</li>
										<li :class="{active:sysChartItem==2}" @click="tabSpotChange('sysChartItem',2)">2
										</li>
									</ul>
								</div>
								<div class="sys-chart-body">
									<div v-show="sysChartItem == 0">
										<ve-line :data="chart1Data" :extend="chart1Set" :data-empty="chart1DataEmpty"
											:loading="chart1loading"></ve-line>
									</div>
									<div v-show="sysChartItem == 1">
									</div>
									<div v-show="sysChartItem == 2">
										<div id="chart-03"></div>
									</div>
								</div>
							</el-card>
						</el-col>
						<el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24">
							<el-card :body-style="{ padding: '15px' }">
								<div slot="header">
									<span>数据类型</span>
									<ul class="tab-spot">
										<li class="active">1</li>
										<li>2</li>
										<li>3</li>
									</ul>
								</div>
								<div class="text item">
									<ve-ring :data="chart2Data" :extend="chart2Set" :data-empty="chart2DataEmpty"
										:loading="chart2loading"></ve-ring>
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
	import "v-charts/lib/style.css";
	export default {
		components: {
			countTo: countTo,
			"full-calendar": require("vue-fullcalendar")
		},
		data() {
			this.chart1Set = {
				// 'xAxis.0.axisLabel.rotate': 45
				stack: {
					'用户': ['访问用户', '下单用户']
				},
				area: true
			};
			this.chart2Set = {
				// 'xAxis.0.axisLabel.rotate': 45
			};
			return {
				sysChartItem: 0,
				numList: [{
						name: '资源总数',
						num: 30479
					}, {
						name: '资源入库量',
						num: 195902
					}, {
						name: '资源调用量',
						num: 226386
					},
					{
						name: '资源共享量',
						num: 36564
					},
					{
						name: '待清洗量',
						num: 74512
					},
					{
						name: '待审核量',
						num: 24580
					}
				],
				personalContent: [{
					title: '待清洗内容',
					count: 60
				}, {
					title: '待分类内容',
					count: 60
				}, {
					title: '待打标内容',
					count: 60
				}, {
					title: '待审核内容',
					count: 100
				}],
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
				chart1option: false,
				chart1DataEmpty: false,
				chart1Data: {
					columns: [],
					rows: []
				},
				//来源分析数据
				chart2loading: false,
				chart2option: false,
				chart2DataEmpty: false,
				chart2Data: {
					columns: [],
					rows: []
				},
				chartData3: {
					columns: ["word", "浏览量"],
					rows: [{
							word: "visualMap",
							浏览量: 22199,
							占比: "1%"
						},
						{
							word: "continuous",
							浏览量: 10288,
							占比: "1%"
						},
						{
							word: "contoller",
							浏览量: 620,
							占比: "1%"
						},
						{
							word: "series",
							浏览量: 274470,
							占比: "1%"
						},
						{
							word: "gauge",
							浏览量: 12311,
							占比: "1%"
						},
						{
							word: "detail",
							浏览量: 1206,
							占比: "1%"
						},
						{
							word: "piecewise",
							浏览量: 4885,
							占比: "1%"
						}
					]
				},
				tableData: [],
				page: {
					//页面数据
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
		created() {
			// this.getPv();
			// this.getsource();
			// this.create('keyword');
		},
		mounted() {
			var _this = this;
			var arrs = [{
					date: "2016-05-02 12:12:12",
					type: "0",
					name: "王小虎a",
					matter: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-04 12:12:12",
					type: "0",
					name: "王小虎b",
					matter: "上海市普陀区金沙江路 1517 弄"
				},
				{
					date: "2016-05-01 12:12:12",
					type: "1",
					name: "王小虎c",
					matter: "上海市普陀区金沙江路 1516 弄"
				},
				{
					date: "2016-05-01 12:12:12",
					type: "2",
					name: "王小虎d",
					matter: "上海市普陀区金沙江路 1515 弄"
				},
				{
					date: "2016-05-01 12:12:12",
					type: "1",
					name: "王小虎d",
					matter: "上海市普陀区金沙江路 1515 弄"
				},
				{
					date: "2016-05-01 12:12:12",
					type: "0",
					name: "王小虎e",
					matter: "上海市普陀区金沙江路 1514 弄"
				}
			];
			setTimeout(() => {
				_this.tableData = [];
				arrs.forEach(arr => {
					_this.tableData.push(arr);
				});
			}, 2000);
			this.globalCount();
			this.globalAdmin();
			this.getPv();
			this.getsource();
			this.create("link");
		},
		methods: {
			//获取pv、ip、访客数信息
			getPv() {
				var _this = this;
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
						let arr = _this.chart1Data.rows;
						arr.splice(0, arr.length);
						if (res.body.list) {
							res.body.list.forEach(element => {
								data.push({
									日期: _this.timeFormat("day", element[4]),
									"浏览量（PV）": element[0],
									"统计（IP）": element[1],
									"访客数（UV）": element[2]
								});
							});
						}
						_this.chart1Data.columns = [
							"日期",
							"浏览量（PV）",
							"统计（IP）",
							"访客数（UV）"
						];
						_this.chart1Data.rows = data;
						_this.chart1DataEmpty = !_this.chart1Data.rows.length;
						setTimeout(() => {
							_this.chart1loading = false;
						}, 300);
					})
					.catch(err => {
						console.log(err);
					});
			},
			//获取来源
			getsource() {
				var _this = this;
				_this.chart2loading = true;
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
				_this.$axios
					.post(_this.$api.flowSourceList, _this.pam)
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
						_this.chart2Data.columns = ["访问类型", "访问量"];
						_this.chart2Data.rows = data;
						_this.chart2DataEmpty = !_this.chart2Data.rows.length;
						setTimeout(() => {
							_this.chart2loading = false;
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
				let _this = this;
				if (type === "link") {
					_this.params.type = type;
					_this.$axios
						.post(this.$api.flowSourceList, _this.params)
						.then(res => {
							// this.page.source = res.body.totalMap;
							// let sum = 0;
							// for (let x in res.body.totalMap) {
							// 	sum += res.body.totalMap[x];
							// }
							// if (sum === 0) {
							// 	sum = 1;
							// }
							// this.page.sum = sum;
							_this.create("keyword");
						})
						.catch(err => {
							this.loading = false;
						});
				}
				if (type === "keyword") {
					_this.params.start_date = moment()
						.subtract("days", 1)
						.format("YYYY/MM/DD");
					_this.params.end_date = moment().format("YYYY/MM/DD");
					_this.params.method = "overview/getWord";
					_this.params.metrics = "pv_count";
					_this.params.type = type;
					_this.$axios
						.post(_this.$api.flowSearchWordList, _this.params)
						.then(res => {
							// console.log("-------------")
							// console.log(res)
							// _this.page.keyword = res.body.items;
						})
						.catch(err => {
							// _this.loading = false;
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
					.catch(err => {});
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
					.catch(err => {});
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

	.bg-box {
		background: #fff;
		height: 112px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.bg-box .bg-green {
		background: #17d57e;
	}

	.bg-box .bg-yellow {
		background: #fec92b;
	}

	.bg-box .bg-blue {
		background: #2da3fb;
	}

	.bg-box .bg-purple {
		background: #c172d8;
	}

	.bg-icon {
		box-sizing: border-box;
		text-align: center;
		padding-top: 22px;
		width: 32%;
		height: 100%;
	}

	.bg-icon .icon-title {
		color: #fff;
		font-size: 14px;
		text-align: center;
		margin-top: 10px;
	}

	.bg-info {
		box-sizing: border-box;
		width: 68%;
		padding: 24px;
		text-align: left;
	}

	.today-count {
		color: #5a5e66;
		font-size: 18px;
	}

	.all-count {
		font-size: 14px;
		color: #999;
		margin-top: 20px;
	}

	.today-count .todat-title {
		margin-right: 10px;
	}

	.today-count .count-num {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 18px;
		margin-right: 4px;
		color: #353535;
	}

	.today-count .up-num {
		font-size: 14px;
		color: #ff724c;
	}

	.m-t-20 {
		margin-top: 20px;
	}

	.m-b-20 {
		margin-bottom: 20px;
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