<template>
	<el-container>
		<el-aside width="200px">
			<div class="left-top">
				<el-button type="text"><i class="el-icon-refresh"></i>&nbsp;&nbsp;刷新</el-button>
			</div>
			<div class="left-center">
				<el-scrollbar wrap-class="scrollbar-wrapper">
					<el-tree :data="data" :props="defaultProps" :default-expand-all="true" @node-click="handleNodeClick"></el-tree>
				</el-scrollbar>
			</div>
		</el-aside>
		<el-main>
			<div class="right-top">
				<div class="right-top-left">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item>首页</el-breadcrumb-item>
						<el-breadcrumb-item>活动管理</el-breadcrumb-item>
						<el-breadcrumb-item>活动列表</el-breadcrumb-item>
						<el-breadcrumb-item>活动详情</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="right-top-right">
					<el-dropdown>
						<el-button type="primary" icon="el-icon-edit-outline" size="small">添加内容</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>黄金糕</el-dropdown-item>
							<el-dropdown-item>狮子头</el-dropdown-item>
							<el-dropdown-item>螺蛳粉</el-dropdown-item>
							<el-dropdown-item>双皮奶</el-dropdown-item>
							<el-dropdown-item>蚵仔煎</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			<div class="right-center">
				<div class="right-center-left">
					<el-button-group>
						<el-button size="small">固顶</el-button>
						<el-button size="small">推荐</el-button>
						<el-button size="small">共享</el-button>
					</el-button-group>
					<el-select v-model="value" size="small" placeholder="请选择" style="width:130px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" size="small" placeholder="请选择" style="width:130px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" size="small" placeholder="固顶降,发布降" style="width:130px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="right-center-right">
					<label for="">标题：</label>
					<el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
					<label for="">发布者：</label>
					<el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
					<el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
				</div>
			</div>
			<div class="right-table">
				<el-scrollbar wrap-class="scrollbar-wrapper ">
					<!-- <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55"></el-table-column>
						<el-table-column label="日期" width="120">
							<template slot-scope="scope">{{ scope.row.date }}</template>
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="120"></el-table-column>
						<el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
					</el-table> -->
					<el-table :data="tableData" row-key="id" ref="multipleTable" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55" align="center"></el-table-column>
						<el-table-column v-for="(item, index) in col" :key="`col_${index}`" :prop="dropCol[index].prop" :label="item.label"></el-table-column>
					</el-table>
					<div class="list-paging">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 50]" :page-size="10" :pager-count="5" layout="total, sizes, prev, pager, next, jumper" :total="400">
						</el-pagination>
					</div>
				</el-scrollbar>
			</div>
			<div class="right-bottom">
				<el-button size="small">删除</el-button>
				<el-button size="small">保存置顶</el-button>
				<el-button size="small">推荐</el-button>
				<el-button size="small">取消推荐</el-button>
				<el-button size="small">移动</el-button>
				<el-button size="small">复制</el-button>
				<el-button size="small">审核</el-button>
				<el-button size="small">退回</el-button>
				<el-button size="small">提交</el-button>
				<el-button size="small">生成静态页</el-button>
				<el-button size="small">推送至专题</el-button>
				<el-button size="small">归档</el-button>
				<el-button size="small">出档</el-button>
				<el-button size="small">群发微信</el-button>
			</div>
		</el-main>
	</el-container>
</template>
<script>
	import Sortable from 'sortablejs'
	export default {
		data() {
			return {
				currentPage4: 4,
				col: [{
						label: '日期',
						prop: 'date'
					},
					{
						label: '姓名',
						prop: 'name'
					},
					{
						label: '地址',
						prop: 'address'
					}
				],
				dropCol: [{
						label: '日期',
						prop: 'date'
					},
					{
						label: '姓名',
						prop: 'name'
					},
					{
						label: '地址',
						prop: 'address'
					}
				],
				tableData: [{
						id: '1',
						date: '2016-05-02',
						name: '王小虎1',
						address: '上海市普陀区金沙江路 100 弄'
					},
					{
						id: '2',
						date: '2016-05-04',
						name: '王小虎2',
						address: '上海市普陀区金沙江路 200 弄'
					},
					{
						id: '3',
						date: '2016-05-01',
						name: '王小虎3',
						address: '上海市普陀区金沙江路 300 弄'
					},
					{
						id: '4',
						date: '2016-05-03',
						name: '王小虎4',
						address: '上海市普陀区金沙江路 400 弄'
					}
				],
				multipleSelection: [],
				data: [{
						label: "一级 1",
						children: [{
							label: "二级 1-1",
							children: [{
								label: "三级 1-1-1三级"
							}]
						}]
					},
					{
						label: "一级 2",
						children: [{
								label: "二级 2-1",
								children: [{
									label: "三级 2-1-1"
								}]
							},
							{
								label: "二级 2-2",
								children: [{
									label: "三级 2-2-1"
								}]
							}
						]
					},
					{
						label: "一级 3",
						children: [{
								label: "二级 3-1",
								children: [{
									label: "三级 3-1-1"
								}]
							},
							{
								label: "二级 3-2",
								children: [{
									label: "三级 3-2-1"
								}]
							}
						]
					}
				],
				defaultProps: {
					children: "children",
					label: "label"
				},
				options: [{
						value: "选项1",
						label: "黄金糕"
					},
					{
						value: "选项2",
						label: "双皮奶"
					},
					{
						value: "选项3",
						label: "蚵仔煎"
					},
					{
						value: "选项4",
						label: "龙须面"
					},
					{
						value: "选项5",
						label: "北京烤鸭"
					}
				],
				value: "",
				input: "",
				input5: "",
				select: ""
			};
		},
		 mounted() {
			this.rowDrop()
			this.columnDrop()
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			  //行拖拽
			rowDrop() {
			const tbody = document.querySelector('.el-table__body-wrapper tbody')
			const _this = this
			Sortable.create(tbody, {
				onEnd({ newIndex, oldIndex }) {
				const currRow = _this.tableData.splice(oldIndex, 1)[0]
				_this.tableData.splice(newIndex, 0, currRow)
				}
			})
			},
			//列拖拽
			columnDrop() {
			const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
			this.sortable = Sortable.create(wrapperTr, {
				animation: 180,
				delay: 0,
				onEnd: evt => {
					const oldItem = this.dropCol[evt.oldIndex]
					this.dropCol.splice(evt.oldIndex, 1)
					this.dropCol.splice(evt.newIndex, 0, oldItem)
					}
				})
			}
		}
	};
</script>
<style scoped>
	.el-container {
		height: calc(100% - 48px);
	}

	.el-aside {
		box-sizing: border-box;
		border-right: 1px solid #d4dde2;
		background-color: #fff;
		line-height: 1;
	}

	.left-top {
		box-sizing: border-box;
		height: 50px;
		padding: 5px;
		line-height: 40px;
	}

	.right-top,
	.right-center {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/*垂直居中*/
		box-sizing: border-box;
		height: 50px;
		padding: 5px 15px;
		line-height: 40px;
		border-bottom: 1px dashed #e7ecf3;
	}

	.right-table {
		height: calc(100% - 150px);
	}

	.right-bottom {
		display: flex;
		flex-direction: row;
		justify-content: center;
		box-sizing: border-box;
		height: 50px;
		padding: 10px 15px;
	}

	.right-bottom .el-button+.el-button {
		margin-left: 3px;
	}

	.right-center .right-center-left>div {
		margin-right: 15px;
	}

	.right-center .right-center-left>div:last-child {
		margin-right: 0;
	}

	.right-center .right-center-right {
		display: flex;
		flex-direction: row;
		align-items: center;
		/*垂直居中*/
	}

	.right-center .right-center-right>button {
		margin-left: 15px;
	}

	.right-center .right-center-right>label {
		margin-left: 15px;
		white-space: nowrap;
		color: #666;
	}

	.right-center .right-center-right>label:first-child {
		margin-left: 0;
	}

	.el-breadcrumb {
		line-height: 40px;
	}

	.left-center {
		height: calc(100% - 50px);
	}

	.el-main {
		background-color: #fff;
		padding: 0;
	}
	.list-paging{
		box-sizing: border-box;
		height: 50px;
		line-height: 50px;
		margin-top: 30px;
		padding: 5px 15px;
		text-align: right;
	}
</style>