<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-24 08:40:20
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-06 14:06:54
 -->
<template>
	<div class="content-main">
		<el-scrollbar wrap-class="scrollbar-wrapper">
			<div class="cms-content-right">
				<el-form ref="form" :model="info" :rules="rules" class="cms-form" label-width="162px"
					v-loading="loading" label-position="right">
					<!-- 动态表单 -->
					<el-row :gutter="20">
						<el-col :span="9">
							<!-- 栏目 -->
							<el-form-item label="选择栏目" prop="parentId">
								<el-tooltip class="item" effect="dark" content="只能选择最后一层" placement="top">
									<el-cascader class="cms-width"
										:props="{'value':'id','label':'name','children':'child'}" :options="channelList"
										v-model="info.parentId" filterable v-if="dataState">
									</el-cascader>
								</el-tooltip>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<!--关联副栏目  -->
							<el-form-item label="关联副栏目">
								<el-tooltip class="item" effect="dark" content="关联后本条内容将会出现在所选的栏目页，需要结合标签使用"
									placement="top">
									<el-button @click="channelVisble=true">关联副栏目</el-button>
								</el-tooltip>
							</el-form-item>
						</el-col>
						<el-col :span="10">
							<!-- 关联专题 -->
							<el-form-item label="关联专题" prop="topicIds">
								<el-select class="width_100" v-model="info['topicIds']">
									<el-option v-for="(item,index) in topicList" :key="index" :label="item.name"
										:value="item.id"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<template v-for="(item,index) in itemList">
								<el-form-item :key="index" v-if="item.field=='title'" :label="item.label" prop="title">
									<el-row>
										<el-col :span="22">
											<el-input class="cms-width" v-model="info['title']"></el-input>
										</el-col>
										<el-col :span="2">
											<el-checkbox v-model="isLink" style="margin-left:20px;">外部链接</el-checkbox>
										</el-col>
									</el-row>
								</el-form-item>
							</template>
						</el-col>
						<el-col :span="24">
							<el-form-item label="外部链接地址" v-if="isLink">
								<el-input class="cms-width" v-model="info['link']"></el-input>
							</el-form-item>
						</el-col>
						<template v-for="(item,index) in itemList">
							<el-col :key="index" :span="item.width?item.width:24" v-if="item">
								<!-- 系统字段 -->
								<el-form-item :label="item.label" :prop="(item.custom?'attr_':'')+item.field"
									:rules="item.required?fieldRequied:[]"
									v-if="item.field!='channelId'&&item.field!='title'&&item.field!='typeImg'&&!(item.field=='titleImg'&&!hasTitleImg)&&!(item.field=='contentImg'&&!hasContentImg)">
									<!-- 文本 -->
									<el-input class="cms-width" v-model="info['attr_'+item.field]"
										v-if="item.dataType==1&&item.custom"></el-input>
									<el-input class="cms-width" v-model="info[item.field]"
										v-if="item.dataType==1  &&!item.custom  &&item.field!='titleImg'  &&item.field!='contentImg' &&item.field!='typeImg' &&item.field!='attachments' &&item.field!='media' &&item.field!='name' &&item.field!='origin'">
									</el-input>
									<el-row v-if="item.field=='origin'">
										<el-col :span="9">
											<el-input v-model="info[item.field]"></el-input>
										</el-col>
										<el-col :span="15">
											<label class="el-form-item__label" style="width:162px;">来源地址</label>
											<div style="margin-left: 162px;">
												<el-input v-model="info['originUrl']"></el-input>
											</div>
										</el-col>
									</el-row>
									<el-input v-if="item.field=='name'" class="cms-width" v-model="info[item.field]"
										@blur="getPath">
									</el-input>
									<!-- 标题，内容图片 类型图 -->
									<cms-upload :src="info[item.field]" :field="item.field"
										v-if="item.field=='titleImg'&&hasTitleImg" :isMark="false" @get="getFieldImg">
									</cms-upload>
									<cms-upload :src="info[item.field]" :field="item.field"
										v-if="item.field=='contentImg'&&hasContentImg" :isMark="false"
										@get="getFieldImg">
									</cms-upload>
									<!-- 附件 -->
									<cms-multiple-upload v-if="item.field=='attachments'" @change="getAttachments">
									</cms-multiple-upload>
									<!--文档路径  -->
									<cms-attach-upload :src="info['docPath']" v-if="item.field=='docPath'"
										:multiple="false" :isDoc="true" action='/api/member/upload/o_upload_doc'
										@change="getDocPath">
									</cms-attach-upload>
									<!-- 图片集 -->
									<cms-pictrues v-if="item.field=='pictures'" @change="getPics"></cms-pictrues>
									<!-- 多媒体 -->
									<div v-if="item.field=='media'" class="media-upload">
										<cms-multiple-upload :src="info['mediaPath']" :multiple="false"
											field="mediaPath" @get="getMediaPath" btnLabel="上传"></cms-multiple-upload>
										<div class="media-player">
											<label style="padding: 0 10px 0 20px;">播放器</label>
											<el-radio-group v-model="info['mediaType']">
												<el-radio label="WM"></el-radio>
												<el-radio label="REAL"></el-radio>
												<el-radio label="FLV"></el-radio>
												<el-radio label="FLASH"></el-radio>
												<el-radio label="CK"></el-radio>
											</el-radio-group>
										</div>
									</div>
									<!-- 整形文本 -->
									<el-input class="cms-width" v-model.number="info['attr_'+item.field]"
										v-if="item.dataType==2&&item.custom" type="number" min='0'></el-input>
									<el-input class="cms-width" v-model="info[item.field]"
										v-if="item.dataType==2&&!item.custom"></el-input>
									<!-- 浮点形文本 -->
									<el-input class="cms-width" v-model="info['attr_'+item.field]"
										v-if="item.dataType==3&&item.custom"></el-input>
									<!-- 文本区 -->
									<el-input class="cms-width" v-model="info['attr_'+item.field]" type="textarea"
										v-if="item.dataType==4&&item.custom">
									</el-input>
									<el-input class="cms-width" v-model="info[item.field]" type="textarea"
										v-if="item.dataType==4&&  !item.custom&& item.field!='txt' &&item.field!='txt1' &&item.field!='txt2' &&item.field!='txt3' &&item.field!='docPath' &&item.field!='pictures' ">
									</el-input>
									<!-- 日期 -->
									<el-date-picker class="cms-width" v-model="info['attr_'+item.field]" type="date"
										value-format="yyyy-MM-dd" v-if="item.dataType==5&&item.custom"></el-date-picker>
									<el-date-picker class="cms-width" v-model="info[item.field]" type="date"
										value-format="yyyy-MM-dd"
										v-if="item.dataType==5&&!item.custom&&item.field!='releaseDate'">
									</el-date-picker>
									<!-- 发布时间，归档日期 -->
									<el-row v-if="item.field=='releaseDate'">
										<el-col :span="8">
											<el-date-picker v-model="info['releaseDate']" type="datetime"
												value-format="yyyy-MM-dd HH:mm:ss" class="w200">
											</el-date-picker>
										</el-col>
										<el-col :span="16">
											<label class="el-form-item__label" style="width:162px;">归档日期</label>
											<div style="margin-left: 162px;">
												<el-date-picker v-model="info['pigeonholeDate']" type="date"
													value-format="yyyy-MM-dd" class="w200"></el-date-picker>
											</div>
										</el-col>
									</el-row>
									<!-- 下拉列表 -->
									<el-select class="cms-width" v-model="info['attr_'+item.field]"
										v-if="item.dataType==6&&item.custom">
										<el-option v-for="(opt,optIndex) in item.optValue" :key="optIndex" :label="opt"
											:value="opt"></el-option>
									</el-select>
									<!-- 标题颜色 -->
									<el-row v-if="item.field=='titleColor'">
										<el-col :span="2">
											<el-color-picker v-model="info[item.field]" size="small"></el-color-picker>
										</el-col>
										<el-col :span="22">
											<label class="el-form-item__label" style="width:162px;">是否加粗</label>
											<div style="margin-left: 162px;">
												<el-checkbox v-model="info['bold']" class="ml-24"></el-checkbox>
											</div>
										</el-col>
									</el-row>
									<!-- 固顶级别 -->
									<el-row v-if="item.field=='topLevel'">
										<el-col :span="8">
											<el-input-number v-model="info['topLevel']" controls-position="right"
												:min="0" class="w200"></el-input-number>
										</el-col>
										<el-col :span="8">
											<label class="el-form-item__label" style="width:162px;">固顶到期日期</label>
											<div style="margin-left: 162px;">
												<el-date-picker class="w200" type="date" value-format="yyyy-MM-dd"
													v-model="info['topLevelDate']"></el-date-picker>
											</div>
										</el-col>
										<el-col :span="8">
											<label class="el-form-item__label" style="width:162px;">排序时间</label>
											<div style="margin-left: 162px;">
												<el-date-picker class="w200" type="datetime"
													value-format="yyyy-MM-dd HH:mm:ss" v-model="info['sortDate']">
												</el-date-picker>
											</div>
										</el-col>
									</el-row>
									<!--内容类型-->
									<div v-if="item.field=='typeId'">
										<el-select class="w200" v-model="info['typeId']" @change="getTypeId">
											<el-option v-for="(item,index) in typeList" :key="index" :label="item.name"
												:value="item.id"></el-option>
										</el-select>
										<el-checkbox class="ml-24" v-model="info['recommend']"
											style="margin-left:10px;">推荐</el-checkbox>
										<el-checkbox v-model="info['draft']">草稿</el-checkbox>
										<div class="mt-10" v-if="info['recommend']" style="margin-left:-162px;">
											<label class="el-form-item__label" style="width:162px;">推荐等级</label>
											<div style="margin-left: 162px;">
												<el-input-number v-model="info['recommendLevel']"
													controls-position="right" :min="0" class="w150"></el-input-number>
											</div>
										</div>
										<div v-if="isTypeImg" class="mt-10" style="margin-left:-162px;">
											<label class="el-form-item__label" style="width:162px;">类型图</label>
											<div style="margin-left: 162px;">
												<cms-upload :src="info['typeImg']" field="typeImg" :isMark="false"
													@get="getFieldImg"> </cms-upload>
											</div>
										</div>
									</div>
									<!-- 栏目模版 -->
									<el-select class="cms-width" v-model="info[item.field]"
										v-if="item.field=='tplContent'">
										<el-option label="默认" value="/default/content/news.html"></el-option>
										<el-option v-for="(item,index) in tplAll.contentTpl" :key="index" :label="item"
											:value="item"></el-option>
									</el-select>
									<!-- 栏目手机模板 -->
									<el-select class="cms-width" v-model="info[item.field]"
										v-if="item.field=='tplMobileContent'">
										<el-option label="默认" value=""></el-option>
										<el-option v-for="(item,index) in tplAll.contentMobileTpl" :key="index"
											:label="item" :value="item"></el-option>
									</el-select>
									<!-- 复选框 -->
									<!-- 自定义字段拼接名称-->
									<el-checkbox-group v-model="info['attr_'+item.field]"
										v-if="item.dataType==7&&item.custom">
										<el-checkbox v-for="(opt,optIndex) in item.optValue" :key="optIndex"
											:label="opt"></el-checkbox>
									</el-checkbox-group>
									<!-- 浏览权限 -->
									<el-checkbox-group v-model="info[item.field]"
										v-if="item.dataType==7&&!item.custom&&item.field=='viewGroupIds'">
										<el-checkbox v-for="(item,index) in groupList" :key="index" :label="item.id">
											{{item.name}}</el-checkbox>
									</el-checkbox-group>
									<!-- 单选框 -->
									<el-radio-group v-model="info['attr_'+item.field]"
										v-if="item.dataType==8&&item.custom">
										<el-radio :label="opt" v-for="(opt,optIndex) in item.optValue" :key="optIndex">
										</el-radio>
									</el-radio-group>
									<!-- 是否开放 -->
									<el-radio-group v-model="info['isOpen']" v-if="item.field=='isOpen'">
										<el-radio :label="true"> 是</el-radio>
										<el-radio :label="false"> 否</el-radio>
									</el-radio-group>

									<!-- 是否收费 -->
									<div v-if="item.field=='charge'">
										<el-radio-group v-model="info['charge']">
											<el-radio :label="0">免费</el-radio>
											<el-radio :label="1">收费</el-radio>
											<el-radio :label="2">打赏</el-radio>
										</el-radio-group>
										<div style="margin-left:-162px;">
											<div class="mt-10" v-if="info['charge']==1">
												<label class="el-form-item__label" style="width:162px;">收费金额</label>
												<div style="margin-left: 162px;">
													<el-input-number v-model="info.chargeAmount"
														controls-position="right" :min="0" class="w150">
													</el-input-number>
												</div>
											</div>
											<div class="mt-10" v-if="info['charge']==2">
												<label class="el-form-item__label" style="width:162px;">打赏方式</label>
												<div style="margin-left: 162px;">
													<el-row>
														<el-col :span="4">
															<el-select v-model="info['rewardPattern']">
																<el-option label="随机" :value="false"></el-option>
																<el-option label="固定" :value="true"></el-option>
															</el-select>
														</el-col>
														<el-col :span="20">
															<div v-if="info['rewardPattern']==false&&info['charge']==2">
																<el-input-number v-model="info['rewardRandomMin']"
																	controls-position="right" :min="0" class="w150">
																</el-input-number>
																<label>&nbsp;&nbsp;至&nbsp;&nbsp;</label>
																<el-input-number v-model="info['rewardRandomMax']"
																	controls-position="right" :min="0" class="w150">
																</el-input-number>
															</div>
															<div v-if="info['rewardPattern']==true&&info['charge']==2">
																<el-input-number v-for="item in chargeMap"
																	:key="item.key" v-model="item.value"
																	controls-position="right" :min="0"
																	style="margin-right:5px;" class="w150">
																</el-input-number>
															</div>
														</el-col>
													</el-row>
												</div>
											</div>
										</div>
									</div>
									<cms-multiple-upload :src="info['attr_'+item.field]" :multiple="false"
										:field="'attr_'+item.field" @get="getMediaPath" btnLabel="上传"
										v-if="item.dataType==9&&item.custom"></cms-multiple-upload>
									<!-- 自定义图片-->
									<cms-upload :src="info['attr_'+item.field]" :field="'attr_'+item.field"
										@get="getFieldImg" v-if="item.dataType==10&&item.custom"></cms-upload>
									<!--富文本编辑器-->
									<div v-if="item.field=='txt'&&dataState">
										<cms-export-upload :index="0" @get="getDocTxt()"></cms-export-upload>
										<cms-neditor :destroy="false" v-model="info['txt']" :index="0"></cms-neditor>
									</div>
									<div v-if="item.field=='txt1'&&dataState">
										<cms-export-upload :index="1" @get="getDocTxt()"></cms-export-upload>
										<cms-neditor :destroy="false" v-model="info['txt1']" :index="1"></cms-neditor>
									</div>
									<div v-if="item.field=='txt2'&&dataState">
										<cms-export-upload :index="2" @get="getDocTxt()"></cms-export-upload>
										<cms-neditor :destroy="false" v-model="info['txt2']" :index="2"></cms-neditor>
									</div>
									<div v-if="item.field=='txt3'&&dataState">
										<cms-export-upload :index="3" @get="getDocTxt()"></cms-export-upload>
										<cms-neditor :destroy="false" v-model="info['txt3']" :index="3"></cms-neditor>
									</div>
								</el-form-item>
							</el-col>
						</template>
					</el-row>
					<!-- 动态表单 -->
					<div class="form-footer">
						<div style="margin-left: 162px;">
							<el-button size="small" v-if="this.id==0" type="warning" @click="add(true)"
								v-perms="'/content/save'">提交并继续添加
							</el-button>
							<el-button size="small" v-if="this.id==0" type="primary" @click="add(false)"
								v-perms="'/content/save'">提交
							</el-button>
							<el-button size="small" type="primary" @click="add(true,true)" v-perms="'/content/save'">预览
							</el-button>
							<el-button size="small" type="info" @click="$reset">重置</el-button>
						</div>
					</div>
				</el-form>
			</div>
		</el-scrollbar>
		<!-- 模型弹窗 -->
		<el-dialog class="dialog" title="选择副栏目" :visible.sync="channelVisble" width="30%">
			<div class="tree-layout">
				<div class="tree">
					<div class="tree">
						<el-tree :data="treeData" ref="channelTree" :props="props" @check-change="checkChange"
							:default-expanded-keys="['']" show-checkbox :indent="16" node-key="id">
						</el-tree>
					</div>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="channelVisble = false">取消</el-button>
				<el-button type="primary" @click="channelVisble=false">选择</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import formMixins from "@/mixins/form";
	import va from "@/rules";

	export default {
		mixins: [formMixins],
		components: {},
		data() {
			let self = this;
			let required = va.required("此项必填");
			let number = va.number("只能输入数字");
			let string = va.string("只能输入英文字母");
			return {
				params: this.$route.query, //前一个页面带过来的数据
				rules: {
					parentId: [required],
					title: [required],
					typeId: [required, number],
					isOpen: [number],
					charge: [number]
				},
				fieldRequied: [{
					required: true,
					message: "此项必填",
					trigger: "change"
				}],
				parentId: "",
				dataState: false,
				isLink: false, //是否开启外部链接
				hasContentImg: false,
				hasTitleImg: false,
				treeData: [],
				channelList: [], //栏目列表
				itemList: [], //动态列表
				topicList: [], //专题列表
				typeList: [], //内容类型列表
				groupList: [], //用户组列表
				workflowList: [], //工作流
				tplAll: [], //所有模型
				chargeMap: [],
				contentInfo: {},
				info: {
					parentId: "", //上层栏目id,
					channelId: "", //栏目id
					channelIds: [], //副栏目
					bold: false,
					topicIds: "", //专题id
					link: "", //外部链接地址
					originUrl: "", //来源地址
					topLevelDate: "",
					sortDate: "",
					releaseDate: "",
					pigeonholeDate: "",
					typeId: "",
					recommend: false,
					recommendLevel: 1,
					draft: false,
					tplContent: "",
					tplMobileContent: "",
					charge: false,
					attachments: [],
					attachmentNames: [], //附件名称
					attachmentPaths: [], //附件地址
					mediaPath: "", //媒体路径
					mediaType: "CK", //媒体类型
					pics: [],
					picPaths: [], //图片地址
					picDescs: [], //图片描述
					chargeAmount: "", //总费
					rewardPattern: false, //奖励模式
					rewardFix: "", //固定奖
					rewardRandomMin: 0, //随机奖励最小值
					rewardRandomMax: 10, //随机奖励最大值
					docPath: "", //doc地址
					docFile: "", //文档名称
					downNeed: 0, //下载需要财富值
					isOpen: false //是否开启
				},
				isTypeImg: false,
				props: {
					label: "name",
					children: "child",
					isLeaf: "hasChild",
					id: "id"
				},
				channelVisble: false, //选择模型模版弹窗
				ue: []
			};
		},
		methods: {
			back() {
				this.routerLink("/content/list", "list", this.parentId);
			},
			getChannelId(data, node) {
				this.routerLink("/content/list", "list", data.id);
			},
			checkChange(node, checkStatus, childStatus) {
				//副栏目选择
				this.info.channelIds = this.$refs["channelTree"].getCheckedKeys(); //获取副栏目
			},
			handleClose() {},
			ansyTree() {
				//异步加载栏目树形结构
				this.$axios
					.post(this.$api.fullTextSearchChannelList, {
						hasContentOnly: true
					})
					.then(res => {
						this.treeData = res.body;
					});
			},
			getTypeId(val) {
				this.$axios.post(this.$api.typeGet, {
					id: val
				}).then(res => {
					if (res.code == "200") {
						this.isTypeImg = res.body.hasImage;
					}
				});
			},
			getPath(event) {
				if (event.target.value != "") {
					this.$axios
						.post(this.$api.channelCreatPath, {
							name: event.target.value
						})
						.then(res => {
							this.info.path = res.body;
						});
				}
			},
			getFieldImg(path, field, index, pindex) {
				this.info[field] = path;
			},
			getAttachments(res) {
				this.info.attachments = res; //附件对象数组
			},
			getPics(res) {
				//图片
				this.info.pics = res; //附件对象数组
			},
			getDocPath(res) {
				//文档路径
				this.info.docPath = res.uploadPath; //文档路径
				this.info.docFile = res.fileName;
			},
			getDocTxt(txt, index) {
				this.ue[index].execCommand("inserthtml", txt);
			},
			getMediaPath(path, field) {
				//动态媒体路径

				this.info[field] = path; //媒体路径
			},
			// getUeditor(ue, index) {
			// 	this.ue[index] = ue; //获取ue实例
			// },
			getTitleImg(path) {
				//标题图
				this.info.titleImg = path;
			},
			getContentImg(path) {
				//内容图
				this.info.contentImg = path;
			},
			getTypeImg(path) {
				//类型图
				this.info.typeImg = path;
			},
			getContentInfo(id) {
				//获取栏目默认信息
				this.$axios.post(this.$api.contentGet, {
					id: id
				}).then(res => {
					this.contentInfo = res.body;
					this.params.modelId = res.body.modelId;
					this.info.modelId = res.body.modelId;
					this.params.parentId = res.body.channelId;
					this.parentId = res.body.channelId;
					this.getDataInfo();
				});
			},
			getDataInfo(id) {
				this.loading = true;
				//先获取模型id
				let modelParams = {
					modelId: this.params.modelId,
					isChannel: false
				};
				this.$axios
					.post(this.$api.itemList, modelParams)
					.then(res => {
						this.loading = false;
						this.$refs["form"].resetFields();
						this.info.titleImg = ""; //滞空处理
						this.info.contentImg = ""; //滞空处理
						let itemList = res.body; //渲染数据字段模型
						for (let i in itemList) {
							if (itemList[i].custom) {
								//判断是否是系统字段
								if (itemList[i].dataType == 7) {
									//判断是否为多选框
									let data = [];
									if (itemList[i].defValue != "") {
										data = itemList[i].defValue.split(",");
									}
									this.$set(
										this.info,
										"attr_" + itemList[i].field,
										data
									); //转换为数组
								} else {
									this.$set(
										this.info,
										"attr_" + itemList[i].field,
										this.contentInfo[
											"attr_" + itemList[i].field
										]
									);
								}
							} else {
								if (itemList[i].dataType == 7) {
									this.$set(
										this.info,
										itemList[i].field,
										this.contentInfo[itemList[i].field]
									);
								} else {
									this.$set(
										this.info,
										itemList[i].field,
										this.contentInfo[itemList[i].field]
									);
								}
							}
						}
						this.itemList = itemList;
						this.getAllList(); //获取辅助字段列表
						this.getDefaultInfo(this.params.id); //数据回填
					})
					.catch(err => {
						this.loading = false;
					});
			},
			getDefaultInfo(id) {
				//数据回填
				this.info.bold = this.contentInfo.bold;
				this.info.originUrl = this.contentInfo.originUrl;
				this.info.sortDate = this.contentInfo.sortDate;
				this.info.topLevelDate = this.contentInfo.topLevelDate;
				this.info.pigeonholeDate = this.contentInfo.pigeonholeDate;
				this.info.viewGroupIds = this.contentInfo.viewGroupIds;
				this.info.typeId = this.contentInfo.typeId;
				this.info.downNeed = this.contentInfo.downNeed;
				this.info.isOpen = this.contentInfo.isOpen;
				this.info.recommend = this.contentInfo.recommend;
				this.info.recommendLevel = this.contentInfo.recommendLevel;
				this.info.draft = this.contentInfo.draft;
				this.info.topicIds = this.contentInfo.topicIds[0];
				this.info.channelIds = this.contentInfo.channelIds;
				this.info.mediaPath = this.contentInfo.mediaPath;
				this.info.mediaType = this.contentInfo.mediaType;
				this.info.chargeAmount = this.contentInfo.chargeAmount;
				this.info.charge = this.contentInfo.charge;
				this.$set(
					this.info,
					"rewardPattern",
					this.contentInfo.rewardPattern
				);
				this.$set(
					this.info,
					"rewardRandomMax",
					this.contentInfo.rewardRandomMax
				);
				this.$set(
					this.info,
					"rewardRandomMin",
					this.contentInfo.rewardRandomMin
				);
				this.getTypeId(this.info.typeId);
				this.$set(this.info, "attachments", []);
				this.$set(this.info, "pics", []);
				if (this.contentInfo.link != "") {
					this.isLink = true;
					this.info.link = this.contentInfo.link;
				}
				if (this.contentInfo.isOpen == "") {
					//是否开放
					this.info.isOpen = true;
				}
				if (this.contentInfo.rewardFix.length > 0) {
					this.chargeMap = this.contentInfo.rewardFix;
				} else {
					this.$axios.post(this.$api.configContentChargeGet).then(res => {
						let aa = [];
						for (let i in res.body.fixMap) {
							aa.push(res.body.fixMap[i].value);
						}
						this.chargeMap = aa; //打赏固定金额
					});
				}
				if (this.contentInfo.attachArr.length > 0) {
					for (let i in this.contentInfo.attachArr) {
						let obj = {
							name: this.contentInfo.attachArr[i].attachmentNames,
							path: this.contentInfo.attachArr[i].attachmentPaths
						};
						this.info.attachments.push(obj);
					}
				}
				if (this.contentInfo.picArr.length > 0) {
					for (let j in this.contentInfo.picArr) {
						let obj = {
							name: this.contentInfo.picArr[j].picDescs,
							path: this.contentInfo.picArr[j].picPaths
						};
						this.info.pics.push(obj);
					}
				}
				this.dataState = true;
			},
			getAllList() {
				let api = this.$api; //API地址
				this.$axios
					.post(api.channelGet, {
						id: this.params.parentId
					})
					.then(res => {
						console.log(res)
						this.hasContentImg = res.body.hasContentImg;
						this.hasTitleImg = res.body.hasTitleImg;
						if (this.params.parentId != "") {
							//栏目数据回填
							this.info.parentId = res.body.nodeIds; //层级id[]
						} else {
							this.info.parentId = [""]; //层级id[]
						}
					});
				this.$axios
					.all([
						this.$axios.post(api.fullTextSearchChannelList, {
							hasContentOnly: true
						}), //栏目列表
						this.$axios.post(api.topicListAll, {
							channelId: this.params.parentId
						}), //关联专题列表
						this.$axios.post(api.typeList, {
							containDisabled: false
						}), //内容类型列表
						this.$axios.post(api.groupList), //会员组列表
						this.$axios.post(api.tplModelList, {
							modelId: this.params.modelId
						})
					])
					.then(
						this.$axios.spread(
							(channels, topicList, type, groups, tplAll) => {
								this.channelList = this.channelList.concat(
									channels.body
								); //栏目列表
								this.topicList = topicList.body; //关联专题列表
								this.typeList = type.body; //内容类型列表
								this.groupList = groups.body; //会员组列表
								this.tplAll = tplAll.body; //所有模型
							}
						)
					)
					.catch(err => {
						this.loading = false;
					});
			},
			getEditorContent() {
				//处理一下栏目的富文本内容,固定只有四个
				if (this.info.txt != undefined) {
					this.info.txt = this.ue[0].getContent();
				}
				if (this.info.txt1 != undefined) {
					this.info.txt1 = this.ue[1].getContent();
				}
				if (this.info.txt2 != undefined) {
					this.info.txt2 = this.ue[2].getContent();
				}
				if (this.info.txt3 != undefined) {
					this.info.txt3 = this.ue[3].getContent();
				}
			},
			getParams() {
				//获取到处理完成给后台提交的对象
				let params = {}; //数组对象换成字符串
				let picPaths = [];
				let picDescs = [];
				let attachmentNames = [];
				let attachmentPaths = [];
				this.getEditorContent();
				this.info.rewardFix = this.chargeMap;
				for (let j = 0; j < this.info.pics.length; j++) {
					//处理图集
					picPaths.push(this.info.pics[j].path);
					picDescs.push(this.info.pics[j].name);
				}
				for (let i in this.info.attachments) {
					//处理附件
					attachmentNames.push(this.info.attachments[i].name);
					attachmentPaths.push(this.info.attachments[i].path);
				}
				this.info.picPaths = picPaths;
				this.info.picDescs = picDescs;
				this.info.attachmentNames = attachmentNames;
				this.info.attachmentPaths = attachmentPaths;
				for (let key in this.info) {
					if (this.info[key] instanceof Array) {
						params[key] = this.info[key].join(",");
					} else {
						params[key] = this.info[key];
					}
				}
				delete params.attachments;
				delete params.pics;
				params.channelId = params.parentId.substring(
					params.parentId.lastIndexOf(",") + 1
				);
				params.id = this.params.id;
				return params;
			},
			reset() {
				window.location.reload();
			},
			update(state) {
				//修改栏目
				let params = this.getParams();
				if (params.channelId == "") {
					this.errorMessage("请选择一个栏目");
					return false;
				}
				let form = this.$refs["form"];
				form.validate(valid => {
					//验证方法
					if (valid) {
						this.loading = true;
						this.$axios
							.post(this.$api.contentUpdate, this.getParams())
							.then(res => {
								if (res.code == "200") {
									this.successMessage("修改成功");
									setTimeout(() => {
										this.routerLink(
											"/content/list",
											"list",
											this.parentId
										);
									}, 1000);
								}
								this.loading = false;
							})
							.catch(error => {
								this.loading = false;
							});
					} else {
						return false;
					}
				});
			}
		},
		created() {
			this.$store.dispatch("setCollapse", true); //收缩状态栏
			//初始获取数据
			this.getContentInfo(this.params.id);
			this.ansyTree();
		},
		mounted() {}
	};
</script>

<style lang="scss" scoped>
	@import url("../../../assets/css/contentadd.scss");

	.content-main {
		box-sizing: border-box;
		padding: 20px;
		height: 100%;
		background-color: #fff;
	}
</style>