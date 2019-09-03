<template>
	<div class="topic">
		<section class="topic-body" v-loading="loading">
			<el-form ref="form" :model="dataInfo" :rules="rules" class="cms-form" label-width="162px">

				<el-row>
					<el-col :span="24">
						<el-form-item label="专题名称" class="flex-50" prop="name">
							<el-input v-model="dataInfo.name" class="cms-width"></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="20">
						<el-form-item label="简称" class="flex-50" prop="">
							<el-input v-model="dataInfo.shortName" class="cms-width"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="4">
						<el-form-item label="包含栏目" class="flex-50" prop="">
							<el-button type="primary" @click="selectChannel">包含栏目</el-button>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="24">
						<el-form-item label="关键字" class="flex-50" prop="">
							<el-input v-model="dataInfo.keywords" class="cms-width"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-form-item label="描述" class="flex-100" prop="">
							<el-input v-model="dataInfo.description" class="cms-width" type="textarea"></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="5">
						<el-form-item label="推荐" class="flex-50" prop="">
							<el-radio-group v-model="dataInfo.recommend">
								<el-radio :label="true">是</el-radio>
								<el-radio :label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="5">
						<el-form-item label="归档" class="flex-50" prop="">
							<el-radio-group v-model="dataInfo.recommend">
								<el-radio :label="true">是</el-radio>
								<el-radio :label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="7">
						<el-form-item label="排列顺序" class="flex-50" prop="priority">
							<el-input v-model="dataInfo.priority" class="cms-width"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="7">
						<el-form-item label="模版" class="flex-50" prop="">
							<el-select class="cms-width" v-model="dataInfo.tplContent">
								<el-option label="默认" value="/WEB-INF/t/cms/www/default/topic/topic_default.html">
								</el-option>
								<el-option v-for="(item,index) in tplList" :key="index" :label="item"
									:value="'/WEB-INF/t/cms/www'+item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="12">
						<el-form-item label="标题图" class="flex-50" prop="">
							<cms-upload :src="dataInfo.titleImg" @change="getTitleImg"></cms-upload>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="内容图" class="flex-50" prop="">
							<cms-upload :src="dataInfo.contentImg" @change="getContentImg"></cms-upload>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="24">
						<el-form-item label="内容图" class="flex-50" prop="">
							<el-button type="warning" v-if="isType('save')" @click="add(true)" v-perms="'/topic/save'">
								提交并继续添加
							</el-button>
							<el-button type="primary" v-if="isType('save')" @click="add(false)" v-perms="'/topic/save'">
								添加
							</el-button>
							<el-button type="primary" v-if="isType('update')" @click="update()"
								v-perms="'/topic/update'">修改
							</el-button>
							<el-button type="info" @click="$reset">重置</el-button>
							<span class="gray" v-if="isType('save')">
								选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页</span>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>

			<!-- 移动栏目弹窗 -->
			<el-dialog class="dialog" :title="labelDialogTitle" :visible.sync="channelVisble" width="25%">
				<div class="tree-layout">
					<div class="tree">
						<el-tree :data="treeData" :indent="16" :props="channelProps" ref="channelTree" node-key="id"
							:default-expand-all="true" :default-checked-keys="defaultKeys" show-checkbox
							@check-change="checkChange">
						</el-tree>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="cancel">返回</el-button>
					<el-button type="primary" @click="channelVisble = false">确认</el-button>
				</span>
			</el-dialog>
		</section>
	</div>
</template>
<script>
import axios from "axios";
import va from "@/rules";
import formMixns from "@/mixins/form";

export default {
	mixins: [formMixns],
	data() {
		let required = va.required();
		let number = va.number();
		return {
			rules: {
				//校验规则
				name: [required],
				priority: [required, number]
			},
			tplList: [],
			treeData: [
				{
					name: "根栏目",
					id: "",
					child: []
				}
			],
			defaultKeys: [],
			channelVisble: false, //选择栏目弹窗,
			labelDialogTitle: "",
			currentCheckChannelId: 0, //当前选中栏目
			channelProps: {
				label: "name",
				children: "child",
				isLeaf: "hasChild",
				id: "id"
			}
		};
	},
	methods: {
		selectChannel() {
			this.labelDialogTitle = "选择栏目";
			this.channelVisble = true;
		},
		cancel() {
			this.channelVisble = false;
			this.$refs["channelTree"].setCheckedKeys([]);
		},
		checkChange(node, checkStatus, childStatus) {
			let checkIds = this.$refs["channelTree"].getCheckedKeys();
			this.dataInfo.channelIds = checkIds;
		},
		getDataInfo(id) {
			//重写获取表单数据
			let api = this.$api; //API地址
			this.$axios
				.all([
					this.$axios.post(api.topicGet, { id: id }),
					this.$axios.post(api.topicTplList)
				])
				.then(
					this.$axios.spread((res, tpl) => {
						this.loading = false;
						this.dataInfo = res.body; //将用户数据复制给dataInfo
						this.defaultKeys = res.body.channelIds;
						this.tplList = tpl.body;
						this.$refs["form"].resetFields();
					})
				)
				.catch(error => {
					this.loading = false;
				});
		},
		getChannels() {
			this.$axios
				.post(this.$api.fullTextSearchChannelList, {
					hasContentOnly: true
				})
				.then(res => {
					this.treeData[0].child = res.body;
				});
		},

		getTitleImg(src) {
			this.dataInfo.titleImg = src;
		},
		getContentImg(src) {
			this.dataInfo.contentImg = src;
		},
		add(state) {
			this.dataInfo.channelIds = this.dataInfo.channelIds.join(","); //选中的栏目
			this.saveDataInfo(
				state,
				this.$api.topicSave,
				this.dataInfo,
				"list"
			);
		},
		update() {
			this.dataInfo.channelIds = this.dataInfo.channelIds.join(","); //选中的栏目
			this.updateDataInfo(this.$api.topicUpdate, this.dataInfo, "list");
		},
		handleClose(done) {
			done();
		}
	},
	created() {
		//初始获取数据
		this.getDataInfo(this.id);
		this.getChannels();
	}
};
</script>

<style  scope>
.topic {
	box-sizing: border-box;
	min-height: 100%;
	padding: 0 20px 20px 20px;
}

.topic-body {
	box-sizing: border-box;
	min-height: 100%;
	padding: 40px 40px 30px 20px;
	background-color: #ffffff;
}

.el-dialog__body {
	min-height: 450px;
	overflow: auto;
}
.red-color {
	color: red;
}
</style>
