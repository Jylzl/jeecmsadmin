<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-03-26 20:07:23
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-01 23:35:41
 -->
<template>
	<div class="topic h100">
		<div class="topic-top">
			<div class="topic-top-left">
			</div>
			<div class="topic-top-right">
				<el-button type="primary" icon="el-icon-edit-outline" size="small">发布专题</el-button>
			</div>
		</div>
		<div class="topic-center">
			<div class="topic-center-left">
				<el-checkbox-group v-model="checkbox" size="small" @change="checkboxChange">
					<el-checkbox-button v-model="params.queryRecommend" label="queryRecommend">全部
					</el-checkbox-button>
					<el-checkbox-button v-model="params.queryShare" label="queryShare">推荐
					</el-checkbox-button>
				</el-checkbox-group>
				<el-select v-model="params.queryStatus" size="small" placeholder="状态" style="width:110px;"
					@change="query" clearable>
					<el-option v-for="item in queryStatus" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="params.queryOrderBy" size="small" placeholder="排序" style="width:130px;"
					@change="query" class="hidden-lg-and-down" clearable>
					<el-option v-for="item in queryOrderBy" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="topic-center-right">
				<label for="">标题：</label>
				<el-input v-model="params.queryInputUsername" placeholder="请输入标题" @change="query" size="small"
					clearable></el-input>
				<el-button type="primary" size="small" icon="el-icon-search" @click="query">查询</el-button>
			</div>
		</div>
		<div class="topic-table" v-loading="loading">
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<div class="table-box">
					<el-table :data="tableData" row-key="id" ref="multipleTable" tooltip-effect="dark" size="small"
						style="width: 100%" @selection-change="checkIdsAndStatus" @sort-change="sortChange">
						<el-table-column type="expand" width="30" align="left">
							<template slot-scope="props">
								<el-form label-position="left" inline class="demo-table-expand">
									<el-form-item label="所属栏目：">
										<span>{{ props.row.channelName }}</span>
									</el-form-item>
									<el-form-item label="文章类型：">
										<span>{{ props.row.typeName }}</span>
									</el-form-item>
									<el-form-item label="是否置顶：">
										<span>{{ props.row.topLevel }}</span>
									</el-form-item>
									<el-form-item label="是否推荐：">
										<span>推荐{{props.row.recommendLevel}}</span>
									</el-form-item>
									<el-form-item label="点击量">
										<span>{{ props.row.views }}</span>
									</el-form-item>
									<el-form-item label="评论量">
										<span>{{ props.row.commentCount }}</span>
									</el-form-item>
								</el-form>
							</template>
						</el-table-column>
						<el-table-column type="selection" width="46" align="center"></el-table-column>
						<el-table-column label="ID" prop="id" width="100" sortable="custom"></el-table-column>
						<el-table-column label="标题" prop="title" :show-overflow-tooltip="true">
							<template slot-scope="scope">
								<a class="news-link" :href="scope.row.url" :title="scope.row.title"
									target="_blank">{{scope.row.title}}</a>
							</template>
						</el-table-column>
						<el-table-column label="排序" prop="topLevel" width="80" align="center">
							<template slot-scope="scope">
								<el-input v-model.number="scope.row.topLevel" min="0" max="99" :maxlength="2"
									size="mini"></el-input>
							</template>
						</el-table-column>
						<el-table-column label="发布时间" prop="releaseDate" width="160" align="center"
							:filters="[{text: '今天', value: '2016-05-01'}, {text: '本周', value: '2016-05-02'}, {text: '近七天', value: '2016-05-03'}, {text: '本月', value: '2016-05-04'}]"
							sortable="custom" :filter-method="filterHandler"></el-table-column>
						<el-table-column label="状态" prop="status" width="80" align="center" sortable="custom">
							<template slot-scope="props">
								{{filterStatus(props.row.status)}}
							</template>
						</el-table-column>
						<el-table-column label="操作" prop="id" width="120" align="center">
							<template slot-scope="scope">
								<el-button type="primary" icon="el-icon-edit" size="mini" circle
									v-show="scope.row.hasUpdateRight"
									@click.native="routerLink('/content/edit','update',scope.row.id)"
									v-perms="'/content/update'"></el-button>
								<el-button type="danger" icon="el-icon-delete" size="mini" circle
									v-show="scope.row.hasDeleteRight"
									@click.native="deleteBatch($api.contentDelete,scope.row.id)"
									v-perms="'/content/delete'"></el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</el-scrollbar>
		</div>
		<div class="topic-bottom">
			<div>
				<el-button size="small" :disabled="disabled" @click="deleteBatch($api.contentDelete,ids)"
					v-perms="'/content/delete'">批量删除</el-button>
				<el-button size="small" :disabled="disabled" @click="prioritysBatch($api.contentPriority)"
					v-perms="'/content/priority'">保存排序</el-button>
				<el-button size="small" :disabled="disabled" @click="prioritysBatch($api.contentPriority)"
					v-perms="'/content/priority'">批量归档</el-button>
			</div>
			<div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
					:current-page="params.pageNo" :page-sizes="[5, 10, 20, 30, 50,100]" :page-size="params.pageSize"
					:pager-count="5" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import listMixins from "@/mixins/list";
	import Sortable from "sortablejs";
	import cmsTree from "@/components/cmscomponents/cmsTree.vue";
	export default {
		mixins: [listMixins],
		components: {
			cmsTree: cmsTree
		},
		data() {
			return {
				queryStatus: [{
						label: "全部",
						value: "all",
						num: -2
					},
					{
						label: "投稿",
						value: "contribute",
						num: 4
					},
					{
						label: "草稿",
						value: "draft",
						num: 0
					},
					{
						label: "待审",
						value: "prepared",
						num: 1
					},
					{
						label: "已审",
						value: "passed",
						num: 3
					},
					{
						label: "已终审",
						value: "checked",
						num: 2
					},
					{
						label: "退回",
						value: "rejected",
						num: -1
					},
					{
						label: "归档",
						value: "pigeonhole",
						num: 5
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
				typeList: [], //内容类型接口
				breadItems: [{
					name: "根目录",
					id: ""
				}], //面包屑
				labelDialogTitle: "", //弹窗标题
				channelVisble: false, //选择栏目弹窗,
				topicVisble: false, //专题弹窗
				topicIds: [], //选中的专题数组
				topicList: [] //专题列表
			};
		},
		created() {
			this.initTableData(this.$api.contentList, this.params); //请求列表
			this.getChannelInfo(); //模型列表
			this.getTypeList(); //内容类型
			this.getAllTotal(); //获取内容总数
		},
		mounted() {
			this.rowDrop(); //表格行拖拽
			// this.columnDrop();//表格列拖拽
		},
		filters: {},
		methods: {
			handleClose(done) {
				done();
			},
			//栏目dialog取消按钮操作
			cancel() {
				this.channelVisble = false;
				this.$refs["channelTree"].setCheckedKeys([]);
			},
			//栏目dialog确认按钮操作
			confirm() {
				let url = "";
				let params = {}; //请求api参数对象
				params.channelId = this.currentCheckChannelId;
				params.ids = this.ids;
				if (this.operateType == "move") {
					url = this.$api.contentMove;
				} else if (this.operateType == "copy") {
					url = this.$api.contentCopy;
					params.siteId = this.$getSiteId();
				} else {
					return false;
				}
				this.loading = true;
				this.$axios
					.post(url, params)
					.then(res => {
						if (res.code == "200") {
							this.loading = false;
							this.channelVisble = false;
							this.$refs["channelTree"].setCheckedKeys([]);
							this.successMessage("操作成功");
							this.getTableData(this.params);
							this.getAllTotal();
						}
					})
					.catch(err => {
						this.loading = false;
					});
			},
			//专题弹窗触发
			topicClick() {
				this.$axios.post(this.$api.topicListAll).then(res => {
					if (res.code == "200") {
						this.topicVisble = true;
						this.labelDialogTitle =
							"选择专题(" + this.$getSiteName() + ")";
						this.topicList = res.body;
					}
				});
			},
			topicCancel() {
				// for (let key in this.topicList) {
				//   this.$set(this.checked, key, [])
				// }
				this.topicVisble = false;
			},
			handleChange() {
				this.$emit("change", this.checked);
			},
			confirmTopic() {
				let params = {
					ids: this.ids,
					topicIds: this.topicIds.join(",")
				};
				this.loading = true;
				this.$axios
					.post(this.$api.contentSend, params)
					.then(res => {
						if (res.code == "200") {
							this.topicVisble = false;
							this.loading = false;
							this.successMessage("操作成功");
						} else {
							this.loading = false;
						}
					})
					.catch(error => {
						this.loading = false;
					});
			},
			filterHandler(value, row, column) {
				const property = column["property"];
				return row[property] === value;
			},
			// 表头排序改变
			sortChange(val) {
				function orderNum(ascending, descending) {
					if (val.order === "ascending") {
						return ascending;
					} else if (val.order === "descending") {
						return descending;
					} else {
						return this.params.queryOrderBy;
					}
				}
				if (val.prop) {
					switch (val.prop) {
						case "id":
							this.params.queryOrderBy = orderNum("1", "0");
							break;
						case "releaseDate":
							this.params.queryOrderBy = orderNum("3", "2");
							break;
						default:
							break;
					}
				} else {
					this.params.queryOrderBy = "";
				}
				this.query();
				return false;
			},
			//根据文章状态吗返回名称
			filterStatus(data) {
				let arr = this.queryStatus.filter(item => {
					return item.num == data;
				});
				return arr[0].label;
			},
			//固顶、推荐、共享
			checkboxChange() {
				this.params.queryTopLevel = false;
				this.params.queryRecommend = false;
				this.params.queryShare = false;
				this.checkbox.forEach(element => {
					this.params[element] = true;
				});
				this.params.queryShare = this.params.queryShare == true ? 1 : 0;
				this.query();
			},
			//添加内容，获取栏目id 模型id
			addContent(command) {
				this.params.parentId = this.params.cid;
				this.params.modelId = command;
				this.routerLink("/content/add", "edit", 0, this.params);
			},
			getNodes(data, node) {
				this.$emit("change", data, node);
			},
			//异步加载树形结构，加载栏目
			ansyTree(node, resolve) {
				let api = this.$api;
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
								obj.isChild =
									res.body[i].childCount > 0 ? false : true;
								obj.name = res.body[i].name;
								obj.data = res.body;
								data.push(obj);
							}
							return resolve(data);
						})
						.catch(error => {});
				}
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
				const tbody = document.querySelector(
					".el-table__body-wrapper tbody"
				);
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
				const wrapperTr = document.querySelector(
					".el-table__header-wrapper tr"
				);
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
			//创建面包屑
			creatBread(node, arr) {
				if (node.parent != null) {
					let params = {
						name: node.data.name,
						id: node.data.id
					};
					arr.push(params);
					this.creatBread(node.parent, arr);
				} else {
					this.breadItems = arr.reverse();
					return false;
				}
			},
			//获取栏目树点击
			getChannelId(data, node) {
				this.creatBread(node, []); //创建栏目导航
				this.params.cid = data.id; //传递栏目id
				this.getChannelInfo(data.id); //获取栏目信息
				this.getTableData(this.params); //获取内容信息
				this.getAllTotal();
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
			},
			//退回操作
			reject() {
				this.loading = true;
				let statusArr = this.status.split(",");
				let mark = true;
				for (let key in statusArr) {
					if (
						statusArr[key] != "1" ||
						statusArr[key] != "2" ||
						statusArr[key] != "4"
					) {
						//如果内容状态不是审核通过
						this.errorMessage(
							"只有审核通过、审核中、投稿状态的内容才能退回"
						);
						mark = false;
						this.loading = false;
						return true;
					}
				}
				if (mark) {
					this.$prompt("请输入退回原因", "提示", {})
						.then(({
							value
						}) => {
							this.$axios
								.post(this.$api.contentReject, {
									ids: this.ids,
									rejectOpinion: value
								})
								.then(res => {
									if (res.code == "200") {
										this.successMessage("退回成功");
										this.getTableData(this.params);
										this.getAllTotal();
									}
								});
						})
						.catch(() => {});
				}
			}
		}
	};
</script>

<style scoped>
	.topic {
		background-color: #fff;
	}

	.topic-top,
	.topic-center {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		height: 50px;
		padding: 5px 15px;
		line-height: 40px;
		border-bottom: 1px dashed #e7ecf3;
	}

	.topic-table {
		height: calc(100% - 150px);
	}

	.topic-bottom {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		height: 50px;
		padding: 10px 15px;
	}

	.topic-bottom .el-dropdown,
	.topic-bottom .el-button+.el-button {
		margin-left: 3px;
	}

	.topic-bottom .el-dropdown .el-button {
		height: 30px;
	}

	.topic-center .topic-center-left {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.topic-center .topic-center-left>div {
		margin-right: 15px;
	}

	.topic-center .topic-center-left>div:last-child {
		margin-right: 0;
	}

	.topic-center .topic-center-right {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.topic-center .topic-center-right>button {
		margin-left: 15px;
	}

	.topic-center .topic-center-right>label {
		margin-left: 15px;
		white-space: nowrap;
		color: #666;
	}

	.topic-center .topic-center-right>label:first-child {
		margin-left: 0;
	}

	.news-link {
		display: inline;
		color: inherit;
		text-decoration: none;
	}
</style>