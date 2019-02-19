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
							<span class="count-num">0&nbsp;</span>
							<span class="up-num">(0)</span>
						</p>
						<p class="all-count">累计:&nbsp;&nbsp;0</p>
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
							<span class="count-num">0&nbsp;</span>
							<span class="up-num">(0)</span>
						</p>
						<p class="all-count">累计:&nbsp;&nbsp;0</p>
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
							<span class="count-num">0&nbsp;</span>
							<span class="up-num">(0)</span>
						</p>
						<p class="all-count">累计:&nbsp;&nbsp;0</p>
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
							<span class="count-num">0&nbsp;</span>
							<span class="up-num">(0)</span>
						</p>
						<p class="all-count">累计:&nbsp;&nbsp;0</p>
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
								<el-dropdown-item>刷新</el-dropdown-item>
								<el-dropdown-item>关闭</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div>
						<ve-line :data="chartData1"></ve-line>
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
								<el-dropdown-item>刷新</el-dropdown-item>
								<el-dropdown-item>关闭</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div>
						<ve-ring :data="chartData2"></ve-ring>
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
						<el-table :data="tableData" stripe style="width: 100%" ref="multipleTable" tooltip-effect="dark">
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
	export default {
		components: {
			'full-calendar': require('vue-fullcalendar')
		},
		data() {
			return {
				chartData1: {
					columns: ['日期', 'pv统计', 'ip统计', '独立访客统计'],
					rows: [
						{ '日期': '00:00-00:59', 'pv统计': 1393, 'ip统计': 1093, '独立访客统计': 1132 },
						{ '日期': '03:00-03:59', 'pv统计': 3530, 'ip统计': 3230, '独立访客统计': 1126 },
						{ '日期': '06:00-06:59', 'pv统计': 2923, 'ip统计': 2623, '独立访客统计': 1176 },
						{ '日期': '09:00-09:59', 'pv统计': 1723, 'ip统计': 1423, '独立访客统计': 1149 },
						{ '日期': '12:00-12:59', 'pv统计': 3792, 'ip统计': 3492, '独立访客统计': 1323 },
						{ '日期': '15:00-15:59', 'pv统计': 4593, 'ip统计': 4293, '独立访客统计': 1478 },
						{ '日期': '18:00-18:59', 'pv统计': 4593, 'ip统计': 4293, '独立访客统计': 1178 },
						{ '日期': '21:00-21:59', 'pv统计': 4593, 'ip统计': 4293, '独立访客统计': 1378 }
					]
				},
				chartData2: {
					columns: ['访问类型', '访问量'],
					rows: [
						{ '访问类型': '外部链接', '访问量': 1393 },
						{ '访问类型': '直接访问', '访问量': 3530 },
						{ '访问类型': '搜索引擎', '访问量': 2923 }
					]
				},
				chartData3: {
					  columns: ['word', 'count'],
					  rows:[
						{
						'word': 'visualMap',
						'count': 22199
						}, {
						'word': 'continuous',
						'count': 10288
						}, {
						'word': 'contoller',
						'count': 620
						}, {
						'word': 'series',
						'count': 274470
						}, {
						'word': 'gauge',
						'count': 12311
						}, {
						'word': 'detail',
						'count': 1206
						}, {
						'word': 'piecewise',
						'count': 4885
						}
					]
				},
				tableData: [],
				multipleSelection: []
			}
		},
		methods: {},
		mounted() {
			var _this = this;
			var arrs = [{
				date: '2016-05-02 12:12:12',
				type:'0',
				name: '王小虎a',
				matter: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04 12:12:12',
				type:'0',
				name: '王小虎b',
				matter: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01 12:12:12',
				type:'1',
				name: '王小虎c',
				matter: '上海市普陀区金沙江路 1516 弄'
			}, {
				date: '2016-05-01 12:12:12',
				type:'2',
				name: '王小虎d',
				matter: '上海市普陀区金沙江路 1515 弄'
			}, {
				date: '2016-05-01 12:12:12',
				type:'1',
				name: '王小虎d',
				matter: '上海市普陀区金沙江路 1515 弄'
			}, {
				date: '2016-05-01 12:12:12',
				type:'0',
				name: '王小虎e',
				matter: '上海市普陀区金沙江路 1514 弄'
			}]
			setTimeout(() => {
				_this.tableData = [];
				arrs.forEach(arr => {
					_this.tableData.push(arr)
				});
			}, 2000)
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
		width: 35%;
		height: 100%;
	}

	.bg-icon .icon-title {
		color: #fff;
		font-size: 14px;
		text-align: center;
		margin-top: 10px;
	}

	.bg-info {
		width: 65%;
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