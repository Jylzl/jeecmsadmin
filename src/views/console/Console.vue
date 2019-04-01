<template>
	<div>
		<el-row :gutter="24">
			<el-col :span="6" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
				<div class="bg-box">
					<div class="bg-green bg-icon">
						<icon name="content" :w="48" :h="48"></icon>
						<p class="icon-title">内容发布数</p>
					</div>
					<div class="bg-info">
						<p class="today-count">
							<span class="todat-title">今日</span>
							<span class="count-num">{{page.pageNum.contentDayTotalCount}}&nbsp;</span>
							<span class="up-num">({{page.pageNum.contentDayUncheckCount}})</span>
						</p>
						<!-- <p class="all-count">累计:&nbsp;&nbsp;{{page.pageNum.contentTotal}}</p> -->
						<p class="all-count">累计:&nbsp;&nbsp;<countTo :startVal='0' :endVal='page.pageNum.contentTotal'
								:duration='3000'></countTo>
						</p>
					</div>
				</div>
			</el-col>
			<el-col :span="6" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
				<div class="bg-box">
					<div class="bg-yellow bg-icon">
						<icon name="comment" :w="48" :h="48"></icon>
						<p class="icon-title">评论数</p>
					</div>
					<div class="bg-info">
						<p class="today-count">
							<span class="todat-title">今日</span>
							<span class="count-num">{{page.pageNum.commentDayTotalCount}}&nbsp;</span>
							<span class="up-num">({{page.pageNum.commentDayUncheckCount}})</span>
						</p>
						<p class="all-count">累计:&nbsp;&nbsp;<countTo :startVal='0' :endVal='page.pageNum.commentTotal'
								:duration='3000'></countTo>
						</p>
					</div>
				</div>
			</el-col>
			<el-col :span="6" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
				<div class="bg-box">
					<div class="bg-blue bg-icon">
						<icon name="list" :w="48" :h="48"></icon>
						<p class="icon-title">留言数</p>
					</div>
					<div class="bg-info">
						<p class="today-count">
							<span class="todat-title">今日</span>
							<span class="count-num">{{page.pageNum.guestbookDayTotalCount}}&nbsp;</span>
							<span class="up-num">({{page.pageNum.guestbookDayUncheckTotalCount}})</span>
						</p>
						<p class="all-count">累计:&nbsp;&nbsp;<countTo :startVal='0' :endVal='page.pageNum.guestbookTotal'
								:duration='100'></countTo>
						</p>
					</div>
				</div>
			</el-col>
			<el-col :span="6" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
				<div class="bg-box">
					<div class="bg-purple bg-icon">
						<icon name="news" :w="48" :h="48"></icon>
						<p class="icon-title">待办</p>
					</div>
					<div class="bg-info">
						<p class="today-count">
							<span class="todat-title">今日</span>
							<span class="count-num">{{page.pageNum.memberToday}}&nbsp;</span>
							<!-- <span class="up-num">(0)</span> -->
						</p>
						<p class="all-count">累计:&nbsp;&nbsp;<countTo :startVal='0' :endVal='page.pageNum.memberTotal'
								:duration='100'></countTo>
						</p>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="24">
			<el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
				<el-card class="box-card" shadow="never">
					<div slot="header" class="clearfix card-header">
						<span>访问分析</span>
						<el-dropdown style="float: right;" trigger="click">
							<span class="el-dropdown-link">
								<i class="el-icon-more"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item><span @click="getPv()">刷新</span></el-dropdown-item>
								<el-dropdown-item>详情</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div>
						<ve-line :data="chart1Data" :extend="chart1Set" :data-empty="chart1DataEmpty"
							:loading="chart1loading"></ve-line>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
				<el-card class="box-card">
					<div slot="header" class="clearfix card-header">
						<span>来源分析</span>
						<el-dropdown style="float: right;" trigger="click">
							<span class="el-dropdown-link">
								<i class="el-icon-more"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item><span @click="getsource()">刷新</span></el-dropdown-item>
								<el-dropdown-item>关闭</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div>
						<ve-ring :data="chart2Data" :extend="chart2Set" :data-empty="chart2DataEmpty"
							:loading="chart2loading"></ve-ring>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="24">
			<el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
				<el-card class="box-card" shadow="never">
					<div slot="header" class="clearfix card-header">
						<span>热词分析</span>
						<el-dropdown style="float: right;" trigger="click">
							<span class="el-dropdown-link">
								<i class="el-icon-more"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>刷新</el-dropdown-item>
								<el-dropdown-item>切换</el-dropdown-item>
								<el-dropdown-item>关闭</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div>
						<ve-line :data="chartData3"></ve-line>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
				<el-card class="box-card">
					<div slot="header" class="clearfix card-header">
						<span>待办事项</span>
						<el-dropdown style="float: right;" trigger="click">
							<span class="el-dropdown-link">
								<i class="el-icon-more"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>刷新</el-dropdown-item>
								<el-dropdown-item>关闭</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div style="height:400px;">
						<el-table :data="tableData" stripe style="width: 100%" ref="multipleTable"
							tooltip-effect="dark">
							<el-table-column type="selection" width="55"></el-table-column>
							<el-table-column prop="date" label="日期" width="160" sortable></el-table-column>
							<el-table-column prop="name" label="状态" width="100">
								<template slot-scope="scope">
									<el-tag type="success" v-if="scope.row.type == '0'">已办</el-tag>
									<el-tag type="warning" v-else-if="scope.row.type == '1'">待办</el-tag>
									<el-tag type="danger" v-else-if="scope.row.type == '2'">加急</el-tag>
									<el-tag type="info" v-else>正常</el-tag>
								</template>
							</el-table-column>
							<!-- <el-table-column prop="name" label="姓名" width="180"></el-table-column> -->
							<el-table-column prop="matter" label="事项"></el-table-column>
						</el-table>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import moment from 'moment';
	import countTo from 'vue-count-to';
	import 'v-charts/lib/style.css'
	export default {
		components: {
			'countTo': countTo,
			'full-calendar': require('vue-fullcalendar')
		},
		data() {
			this.chart1Set = {
				// 'xAxis.0.axisLabel.rotate': 45
			}
			this.chart2Set = {
				// 'xAxis.0.axisLabel.rotate': 45
			}
			return {
				params: {
					type: 'source', //查询分类
					flag: '1', //查询范围
					target: '', //查询指标
					year: '', //年度
					begin: '', //开始日期
					end: '', //结束日期
					orderBy: '', //排序
					count: '10'
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
					columns: ['word', '浏览量'],
					rows: [{
						'word': 'visualMap',
						'浏览量': 22199,
						"占比": '1%'

					}, {
						'word': 'continuous',
						'浏览量': 10288,
						"占比": '1%'
					}, {
						'word': 'contoller',
						'浏览量': 620,
						"占比": '1%'
					}, {
						'word': 'series',
						'浏览量': 274470,
						"占比": '1%'
					}, {
						'word': 'gauge',
						'浏览量': 12311,
						"占比": '1%'
					}, {
						'word': 'detail',
						'浏览量': 1206,
						"占比": '1%'
					}, {
						'word': 'piecewise',
						'浏览量': 4885,
						"占比": '1%'
					}]
				},
				tableData: [],
				page: {
					//页面数据
					source: [], //来访域名  type:array
					keyword: [], //搜索词   type:array
					pageNum: '',
					adminNum: '', //会员数
					pv: [], //获取pv、
					ip: [], //ip、
					fk: [], //访客数信息
					avg: [], //平均访问时长  
					wd: [], //时间维度
					ss: [], //来源分析
					ssKey: [], //来源键
					sum: '',
					sumkey: '',
				},
			}
		},
		created() {
			// this.getPv();
			// this.getsource();
			// this.create('keyword');
		},
		mounted() {
			var _this = this;
			var arrs = [{
				date: '2016-05-02 12:12:12',
				type: '0',
				name: '王小虎a',
				matter: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04 12:12:12',
				type: '0',
				name: '王小虎b',
				matter: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01 12:12:12',
				type: '1',
				name: '王小虎c',
				matter: '上海市普陀区金沙江路 1516 弄'
			}, {
				date: '2016-05-01 12:12:12',
				type: '2',
				name: '王小虎d',
				matter: '上海市普陀区金沙江路 1515 弄'
			}, {
				date: '2016-05-01 12:12:12',
				type: '1',
				name: '王小虎d',
				matter: '上海市普陀区金沙江路 1515 弄'
			}, {
				date: '2016-05-01 12:12:12',
				type: '0',
				name: '王小虎e',
				matter: '上海市普陀区金沙江路 1514 弄'
			}]
			setTimeout(() => {
				_this.tableData = [];
				arrs.forEach(arr => {
					_this.tableData.push(arr)
				});
			}, 2000)
			this.globalCount();
			this.globalAdmin();
			this.getPv();
			this.getsource();
			this.create('link');
		},
		methods: {
			//获取pv、ip、访客数信息
			getPv() {
				var _this = this;
				_this.chart1loading = true;
				_this.$axios.post(_this.$api.flowPvList, {
						flag: '4',
						begin: '',
						end: '',
						statisDay: '',
						year: ''
					}).then(res => {
						let data = [];
						let arr = _this.chart1Data.rows;
						arr.splice(0, arr.length);
						if (res.body.list) {
							res.body.list.forEach(element => {
								data.push({
									'日期': _this.timeFormat('day', element[4]),
									'浏览量（PV）': element[0],
									'统计（IP）': element[1],
									'访客数（UV）': element[2]
								})
							});
						}
						_this.chart1Data.columns = ['日期', '浏览量（PV）', '统计（IP）', '访客数（UV）'];
						_this.chart1Data.rows = data;
						_this.chart1DataEmpty = !_this.chart1Data.rows.length;
						setTimeout(() => {
							_this.chart1loading = false;
						}, 1000);
					})
					.catch(err => {
						console.log(err)
					});
			},
			//获取来源 
			getsource() {
				var _this = this;
				_this.chart2loading = true;
				let pam = {
					type: 'source', //查询分类
					flag: '1', //查询范围
					target: '0', //查询指标
					year: '', //年度
					begin: '', //开始日期
					end: '', //结束日期
					orderBy: '', //排序
					count: '10',
				};
				_this.$axios.post(_this.$api.flowSourceList, _this.pam).then(res => {
					console.log(res.body)
						let data = [];
						let a = 0;
						for (let i in res.body.totalMap) {
							data.push({
								'访问类型': res.body.keys[a],
								'访问量': res.body.totalMap[i]
							})
							a++;
						}
						_this.chart2Data.columns = ['访问类型', '访问量'];
						_this.chart2Data.rows = data;
						_this.chart2DataEmpty = !_this.chart2Data.rows.length;
						setTimeout(() => {
							_this.chart2loading = false;
						}, 1000);
					})
					.catch(err => {
						console.log(err)
					});
			},
			//格式化时间显示
			timeFormat(flag, timeName) {
				let formatTime = '0';
				if (flag == 'day' || flag == 'yesterday') { //小时转换
					switch (timeName) {
						case 0:
							formatTime = "00:00-00:59"
							break;
						case 1:
							formatTime = "01:00-01:59"
							break;
						case 2:
							formatTime = "02:00-02:59"
							break;
						case 3:
							formatTime = "03:00-03:59"
							break;
						case 4:
							formatTime = "04:00-04:59"
							break;
						case 5:
							formatTime = "05:00-05:59"
							break;
						case 6:
							formatTime = "06:00-06:59"
							break;
						case 7:
							formatTime = "07:00-07:59"
							break;
						case 8:
							formatTime = "08:00-08:59"
							break;
						case 9:
							formatTime = "09:00-09:59"
							break;
						case 10:
							formatTime = "10:00-10:59"
							break;
						case 11:
							formatTime = "11:00-11:59"
							break;
						case 12:
							formatTime = "12:00-12:59"
							break;
						case 13:
							formatTime = "13:00-13:59"
							break;
						case 14:
							formatTime = "14:00-14:59"
							break;
						case 15:
							formatTime = "15:00-15:59"
							break;
						case 16:
							formatTime = "16:00-16:59"
							break;
						case 17:
							formatTime = "17:00-17:59"
							break;
						case 18:
							formatTime = "18:00-18:59"
							break;
						case 19:
							formatTime = "19:00-19:59"
							break;
						case 20:
							formatTime = "20:00-20:59"
							break;
						case 21:
							formatTime = "21:00-21:59"
							break;
						case 22:
							formatTime = "22:00-22:59"
							break;
						case 23:
							formatTime = "23:00-23:59"
							break;
						default:
							formatTime = "99:99:99~99:99:99:99"
							break;
					}
				}
				if (flag == 'year') {
					let date = new Date();
					switch (timeName) {
						case 1:
							formatTime = date.getFullYear() + "-01"
							break;
						case 2:
							formatTime = date.getFullYear() + "-02"
							break;
						case 3:
							formatTime = date.getFullYear() + "-03"
							break;
						case 4:
							formatTime = date.getFullYear() + "-04"
							break;
						case 5:
							formatTime = date.getFullYear() + "-05"
							break;
						case 6:
							formatTime = date.getFullYear() + "-06"
							break;
						case 7:
							formatTime = date.getFullYear() + "-07"
							break;
						case 8:
							formatTime = date.getFullYear() + "-08"
							break;
						case 9:
							formatTime = date.getFullYear() + "-09"
							break;
						case 10:
							formatTime = date.getFullYear() + "-10"
							break;
						case 11:
							formatTime = date.getFullYear() + "-11"
							break;
						case 12:
							formatTime = date.getFullYear() + "-12"
							break;
						default:
							formatTime = "9999-99-99"
							break;
					}
				}
				if (flag == 'month' || flag == 'years') {
					formatTime = timeName;
				}
				return formatTime;
			},
			//获取欢迎页面需要的数据 
			create(type) {
				let _this = this;
				if (type === 'link') {
					_this.params.type = type;
					_this.$axios.post(this.$api.flowSourceList, _this.params).then(res => {
							// console.log(res)
							// this.page.source = res.body.totalMap;
							// let sum = 0;
							// for (let x in res.body.totalMap) {
							// 	sum += res.body.totalMap[x];
							// }
							// if (sum === 0) {
							// 	sum = 1;
							// }
							// this.page.sum = sum;
							_this.create('keyword');

						})
						.catch(err => {
							this.loading = false;
						});
				}
				if (type === 'keyword') {
					_this.params.start_date = moment().subtract('days', 1).format('YYYY/MM/DD');
					_this.params.end_date = moment().format('YYYY/MM/DD');
					_this.params.method = 'overview/getWord';
					_this.params.metrics = 'pv_count';
					_this.params.type = type;
					_this.$axios.post(_this.$api.flowSearchWordList, _this.params).then(res => {
							// console.log(res.body.items)
							// _this.page.keyword = res.body.items;
						})
						.catch(err => {
							// _this.loading = false;
						});
				}

			},
			//获取内容总数
			globalCount() {
				this.$axios.post(this.$api.globalStatistic).then(res => {
						this.page.pageNum = res.body
					})
					.catch(err => {});
			},
			//获取会员注册数
			globalAdmin() {
				this.$axios.post(this.$api.statisticMemberList, {
						queryModel: 'month',
						begin: '',
						end: ''
					}).then(res => {
						this.page.adminNum = res.body
					})
					.catch(err => {});
			},
		}
	}
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

	.el-row {
		padding-bottom: 20px;
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
		width: 40%;
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
		width: 60%;
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
</style>