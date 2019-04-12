<template>
	<el-container>
		<el-aside width="200px">
			<div class="left-top">
				<el-button type="text"><i class="el-icon-refresh"></i>&nbsp;&nbsp;刷新</el-button>
			</div>
			<div class="left-center">
				<el-scrollbar wrap-class="scrollbar-wrapper">
					<el-tree :props="props" :load="ansyTree" lazy :indent='16' node-key="id"
						:default-expanded-keys="['']" @node-click="getNodes" v-if="refash" :default-expand-all="true"
						icon-class="no">
						<span class="custom-tree-node" slot-scope="{ node, data }">
							<span :title="node.label">{{ node.label }}</span>
						</span>
					</el-tree>
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
						<el-button type="primary" icon="el-icon-edit" size="small">发布内容</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="item in modelList" :key="item.id" :command="item.id">{{item.name}}
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			<div class="right-center">
				<div class="right-center-left">
					<el-checkbox-group v-model="checkbox" size="small" @change="checkboxChange">
						<el-checkbox-button v-model="params.queryTopLevel" label="queryTopLevel">固顶
						</el-checkbox-button>
						<el-checkbox-button v-model="params.queryRecommend" label="queryRecommend">推荐
						</el-checkbox-button>
						<el-checkbox-button v-model="params.queryShare" label="queryShare">共享
						</el-checkbox-button>
					</el-checkbox-group>
					<el-select v-model="params.queryTypeId" size="small" placeholder="类型" style="width:130px;"
						@change="query" clearable>
						<el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.id">
						</el-option>
					</el-select>
					<el-select v-model="params.queryStatus" size="small" placeholder="状态" style="width:130px;"
						@change="query" clearable>
						<el-option v-for="item in queryStatus" :key="item.value" :label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="params.queryOrderBy" size="small" placeholder="排序" style="width:130px;"
						@change="query" clearable>
						<el-option v-for="item in queryOrderBy" :key="item.value" :label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="right-center-right">
					<label for="">标题：</label>
					<el-input v-model="params.queryTitle" placeholder="请输入内容" size="small"></el-input>
					<label for="">发布者：</label>
					<el-input v-model="params.queryInputUsername" placeholder="请输入内容" size="small"></el-input>
					<el-button type="primary" size="small" icon="el-icon-search" @click="query">查询</el-button>
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
					<div class="table-box">
						<!-- <el-table :data="tableData" row-key="id" ref="multipleTable" tooltip-effect="dark"
							style="width: 100%" @selection-change="handleSelectionChange">
							<el-table-column type="selection" width="46" align="center"></el-table-column>
							<el-table-column v-for="(item, index) in dropCol" :width="item.width" :align="item.align"
								:key="`col_${index}`" :prop="dropCol[index].prop" :label="item.label"></el-table-column>
							操作 -->
							<!-- <el-table-column label="操作" align="center">
								<span slot-scope="scope">
									{{scope.row.id}}
								</span>
							</el-table-column> -->

						<!-- </el-table> -->
						<el-table :data="tableData" row-key="id" ref="multipleTable" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" :default-sort = "{prop: 'id', order: 'descending'}">
							<el-table-column type="expand" width="30" align="left">
								<template slot-scope="props">
									<el-form label-position="left" inline class="demo-table-expand">
										<el-form-item label="ID">
											<span>{{ props.row.id }}</span>
										</el-form-item>
										<el-form-item label="标题">
											<span>{{ props.row.title }}</span>
										</el-form-item>
										<el-form-item label="置顶">
											<span>{{ props.row.topLevel }}</span>
										</el-form-item>
										<el-form-item label="类型">
											<span>{{ props.row.typeName }}</span>
										</el-form-item>
										<el-form-item label="发布者">
											<span>{{ props.row.userName }}</span>
										</el-form-item>
										<el-form-item label="发布者">
											<span>{{ props.row.address }}</span>
										</el-form-item>
										<el-form-item label="点击">
											<span>{{ props.row.views }}</span>
										</el-form-item>
									</el-form>
								</template>
							</el-table-column>
							<el-table-column type="selection" width="46" align="center"></el-table-column>
							<el-table-column label="ID" prop="id" width="100" sortable></el-table-column>
							<el-table-column label="标题" prop="title" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column label="置顶" prop="topLevel" width="60" align="center">
								<div slot-scope="scope">
									<el-input v-model.number="scope.row.topLevel" min="0" max="99" :maxlength="2" size="mini"></el-input>
								</div>
							</el-table-column>
							<el-table-column label="类型" prop="typeName" width="80" align="center"></el-table-column>
							<el-table-column label="发布者" prop="userName" width="100" align="left"></el-table-column>
							<el-table-column label="发布时间" prop="releaseDate" width="160" align="center" :filters="[{text: '今天', value: '2016-05-01'}, {text: '本周', value: '2016-05-02'}, {text: '近七天', value: '2016-05-03'}, {text: '本月', value: '2016-05-04'}]" sortable></el-table-column>
							<el-table-column label="状态" prop="status" width="80" align="center" sortable>
								<div slot-scope="props">
									{{filterStatus(props.row.status)}}
								</div>
							</el-table-column>
							<el-table-column label="操作" prop="id" width="120" align="center">
								<div>
									<el-button type="text">修改</el-button>
									<el-button type="text">删除</el-button>
								</div>
							</el-table-column>
						</el-table>
					</div>
					<div class="list-paging">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
							:current-page="params.pageNo" :page-sizes="[10, 20, 30, 50,100]"
							:page-size="params.pageSize" :pager-count="5"
							layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
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
	import listMixins from "@/mixins/list";
	import Sortable from "sortablejs";
	export default {
		mixins: [listMixins],
		data() {
			return {
				queryStatus: [{
						label: "全部",
						value: "all",
						num:-2
					},
					{
						label: "投稿",
						value: "contribute",
						num:4
					},
					{
						label: "草稿",
						value: "draft",
						num:0
					},
					{
						label: "待审",
						value: "prepared",
						num:1
					},
					{
						label: "已审",
						value: "passed",
						num:3
					},
					{
						label: "已终审",
						value: "checked",
						num:2
					},
					{
						label: "退回",
						value: "rejected",
						num:-1
					},
					{
						label: "归档",
						value: "pigeonhole",
						num:5
					}
				],
				queryOrderBy: [{
						label: "ID降序",
						value: "0"
					},
					{
						label: "ID升序",
						value: "1"
					},
					{
						label: "发布时间降",
						value: "2"
					},
					{
						label: "发布时间升",
						value: "3"
					},
					{
						label: "固顶降,发布降",
						value: "4"
					},
					{
						label: "固顶降,发布升",
						value: "5"
					},
					{
						label: "日点击降",
						value: "6"
					},
					{
						label: "周点击降",
						value: "7"
					},
					{
						label: "月点击降",
						value: "8"
					},
					{
						label: "总点击降",
						value: "9"
					},
					{
						label: "日评论降",
						value: "10"
					},
					{
						label: "周评论降",
						value: "11"
					},
					{
						label: "月评论降",
						value: "12"
					},
					{
						label: "总评论降",
						value: "13"
					},
					{
						label: "日下载降",
						value: "14"
					},
					{
						label: "周下载降",
						value: "15"
					},
					{
						label: "月下载降",
						value: "16"
					},
					{
						label: "总下载降",
						value: "17"
					},
					{
						label: "日顶降",
						value: "18"
					},
					{
						label: "周顶降",
						value: "19"
					},
					{
						label: "月顶降",
						value: "20"
					},
					{
						label: "总顶降",
						value: "21"
					},
					{
						label: "推荐降,发布升",
						value: "22"
					},
					{
						label: "推荐升,发布降",
						value: "23"
					}
				],
				props: {
					//栏目树
					label: "name",
					children: "zones",
					isLeaf: "isChild",
					id: "id"
				},
				refash: true,
				dropCol: [{
						label: "ID",
						prop: "id",
						width: "60",
						align: "left"
					},
					{
						label: "标题",
						prop: "title",
						width: "300",
						align: "left"
					},
					{
						label: "置顶",
						prop: "topLevel",
						width: "60",
						align: "center"
					},
					{
						label: "类型",
						prop: "typeName",
						width: "60",
						align: "center"
					},
					{
						label: "发布者",
						prop: "userName",
						width: "60",
						align: "left"
					},
					{
						label: "点击",
						prop: "views",
						width: "60",
						align: "left"
					},
					{
						label: "发布时间",
						prop: "releaseDate",
						width: "100",
						align: "center"
					},
					{
						label: "状态",
						prop: "status",
						width: "60",
						align: "center"
					}
				],
				multipleSelection: [],
				checkbox: [], //固定，推荐，共享
				modelList: {}, //当前栏目信息
				pageTotal: 0, //总页数
				params: {
					//请求参数
					queryShare: "",
					queryTitle: "",
					queryStatus: "",
					queryTypeId: "",
					queryTopLevel: false,
					queryInputUsername: "",
					queryRecommend: false,
					queryOrderBy: "4",
					cid: "",
					pageNo: 1,
					pageSize: 20,
					format: "",
					https: "",
					hasCollect: ""
				},
				typeList: [] //内容类型接口
			};
		},
		created() {
			this.initTableData(this.$api.contentList, this.params); //请求列表
			this.getChannelInfo(); //模型列表
			this.getTypeList(); //内容类型
			this.getAllTotal(); //获取内容总数
			console.log(this.tableData);
		},
		mounted() {
			this.rowDrop();
			this.columnDrop();
		},
		methods: {
			filterStatus(data){
				let arr = this.queryStatus.filter((item)=>{
					return item.num == data;
				})
				return arr[0].label;
			},
			checkboxChange() {
				this.params.queryTopLevel = false;
				this.params.queryRecommend = false;
				this.params.queryShare = false;
				this.checkbox.forEach(element => {
					this.params[element] = true;
				});
				this.query();
			},
			getNodes(data, node) {
				this.$emit("change", data, node);
			},
			ansyTree(node, resolve) {
				let api = this.$api;
				//异步加载树形结构
				if (node.level === 0) {
					return resolve([{
						name: "根目录",
						id: ""
					}]);
				}
				if (node.level > 0) {
					this.$axios
						.post(api.contentTree, {
							root: node.data.id,
							hasContent: true
						})
						.then(res => {
							const data = [];
							for (let i in res.body) {
								let obj = {};
								obj.id = res.body[i].id;
								obj.isChild = res.body[i].childCount > 0 ? false : true;
								obj.name = res.body[i].name;
								obj.data = res.body;
								data.push(obj);
							}
							return resolve(data);
						})
						.catch(error => {});
				}
			},
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
			//分页一页数量改变
			handleSizeChange(val) {
				this.params.pageSize = val;
				this.query();
			},
			//分页当前页改变
			handleCurrentChange(val) {
				this.params.pageNo = val;
				this.query();
			},
			//行拖拽
			rowDrop() {
				const tbody = document.querySelector(".el-table__body-wrapper tbody");
				const _this = this;
				Sortable.create(tbody, {
					onEnd({
						newIndex,
						oldIndex
					}) {
						const currRow = _this.tableData.splice(oldIndex, 1)[0];
						_this.tableData.splice(newIndex, 0, currRow);
					}
				});
			},
			//列拖拽
			columnDrop() {
				const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
				this.sortable = Sortable.create(wrapperTr, {
					animation: 180,
					delay: 0,
					onEnd: evt => {
						const oldItem = this.dropCol[evt.oldIndex];
						this.dropCol.splice(evt.oldIndex, 1);
						this.dropCol.splice(evt.newIndex, 0, oldItem);
					}
				});
			},
			//获取模型信息(发布内容)
			getChannelInfo(channelId) {
				let modelList = [];
				this.$axios
					.post(this.$api.modelList, {
						containDisabled: false,
						hasContent: true
					})
					.then(res => {
						if (res.code == "200") {
							modelList = res.body; //获取模型
						}
						if (channelId != "" && channelId != undefined) {
							this.$axios
								.post(this.$api.channelGet, {
									id: channelId,
									showTxt: false
								})
								.then(res => {
									if (res.body.selfModels.length > 0) {
										this.modelList = res.body.models; //获取模型
									} else {
										this.modelList = modelList;
									}
								});
						} else {
							this.modelList = modelList;
						}
					});
			},
			//获取类型列表
			getTypeList() {
				this.$axios
					.post(this.$api.typeList, {
						containDisabled: false
					})
					.then(res => {
						if (res.code == "200") {
							this.typeList = res.body;
						}
					});
			},
			//获取分页
			getAllTotal() {
				this.$axios.post(this.$api.contentPage, this.params).then(res => {
					if (res.code == 200) {
						this.pageTotal = Number(res.body.totalCount);
					}
				});
			},
			//查询
			query() {
				this.getTableData(this.params);
				this.getAllTotal();
			}
		}
	};
</script>

<style scoped>
	.el-container {
		height: 100%;
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

	.right-center .right-center-left {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
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

	.table-box {
		/* height: 380px; */
	}

	.list-paging {
		box-sizing: border-box;
		height: 50px;
		line-height: 50px;
		margin-top: 30px;
		padding: 5px 15px;
		text-align: right;
	}
</style>