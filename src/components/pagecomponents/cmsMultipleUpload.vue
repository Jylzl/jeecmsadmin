<template>
	<div>
		<el-upload class="upload-attach" :action="uploadUrl" :data="data" :multiple="multiple" :limit="limit"
			:name="name" :auto-upload="autoUpload" :before-upload="beforeAvatarUpload" :on-progress='onProgress'
			:on-success="onSuccess" :on-error="onError" :show-file-list="false" ref="upload">
			<el-button type="primary">{{btnLabel}}</el-button>
		</el-upload>
		<div v-if="showFileList && uploading" class="w-350">
			<span class="file-gray">正在上传：</span>
			<span class="file-gray"><i class="el-icon-document"></i>{{fileName}}</span>
			<el-progress :percentage="percentage" :status="status"></el-progress>
		</div>
		<div v-if="showFileList && fileList.length>0">
			<span class="file-gray">文件列表：</span>
			<ul class="el-upload-list el-upload-list--text cms-file-items-box clearfix">
				<li class="el-upload-list__item is-success cms-file-item" v-for="(item,index) in fileList" :key="index">
					<a class="el-upload-list__item-name cms-file-label" :title="item.name">
						<label for="">
							<i class="el-icon-document"></i>
							{{item.name}}
						</label>
						<i class="cms-delete-little iconfont icon-shanchu1" @click="delFileList(index)"></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {
		getRand
	} from "@/utils/random";
	import {
		signParams
	} from "@/utils/aes.js";
	import api from "@/api/api";
	var rand = getRand();
	export default {
		name: "cms-file-upload",
		props: {
			propList: {},
			uploadName: {
				type: String,
				default: "上传"
			},
			action: {
				type: String,
				default: ""
			},
			//是否支持多文件上传
			multiple: {
				type: Boolean,
				default: true
			},
			//支持最大上传文件数
			limit: {
				type: Number,
				default: 9999
			},

			//是否显示上传文件列表
			showFileList: {
				type: Boolean,
				default: true
			},
			//文件提交name值
			name: {
				type: String,
				default: "uploadFile"
			},
			//是否选择完文件之后自动上传，默认true
			autoUpload: {
				type: Boolean,
				default: true
			},
			//上传路径
			uploadPath: {
				type: String,
				default: ""
			},
			//是否只能上传文档类型
			isDoc: {
				type: Boolean,
				default: false
			},
			btnLabel: {
				type: String,
				default: '批量上传',
			},
			field: {
				type: String,
				default: '',
			}
		},
		data() {
			return {
				uploadUrl: this.$store.state.sys.baseUrl + (this.action == "" ? this.$api.bsaeUpload : this.action),
				params: {
					appId: process.env.VUE_APP_appId,
					sessionKey: localStorage.getItem("sessionKey"),
					type: "attach",
					nonceStr: rand,
					mark: false,
					uploadPath: this.uploadPath
				},
				obj: [{
					name: "",
					path: "",
				}],
				data: {},
				fileList: [],
				uploading: false,
				percentage: 0,
				status: '',
				fileName: '',
			};
		},
		methods: {
			onProgress(event, file, fileList) {
				this.status = '';
				this.uploading = true;
				this.fileName = file.name;
				this.percentage = parseInt(event.percent);
			},
			delFileList(index) {

				this.fileList.splice(index, 1);
				this.$emit("change", this.fileList);
				this.$emit("get", '', this.field);
			},
			onSuccess(response, file, fileList) {
				if (response.code == '200' && response.body != '') {
					this.status = 'success';
					if (this.multiple) {
						this.fileList.push({
							name: response.body.fileName,
							path: response.body.uploadPath
						});
					} else {
						this.fileList = [{
							name: response.body.uploadPath,
							path: response.body.uploadPath
						}]
					}
				} else {
					this.status = 'exception';
					this.errorMessage(response.code + ":" + response.message);
				}
				setTimeout(() => {
					this.uploading = false;
					this.fileName = '';
					this.percentage = 0;
				}, 500);
				this.$emit("change", this.fileList);
				this.$emit("get", this.fileList[0].path, this.field);
			},

			beforeAvatarUpload(file) {},
			onError(err, file, fileList) {
				this.errorMessage("上传失败");
				this.$refs["upload"].clearFiles();
				this.$emit("on-error", file, fileList);
				this.$emit("change", this.obj);
				this.$emit("get", '', this.field);
			},
		},
		created() {
			if (this.multiple) { //多图数组

				if (this.propList) {
					this.fileList = this.propList;
				}
			} else { //单图字符串


				if (this.propList && this.propList != '') {

					this.fileList = [{
						name: this.propList,
						path: this.propList
					}]
				}

			}
			this.data = signParams(this.params, process.env.VUE_APP_appKey);
		},
		watch: {
			propList: {
				handler(culVal, oldVal) {


				},
				deep: true
			}
		}
	};
</script>

<style scope lang='scss'>
	.upload-attach .el-upload-list {
		width: 50%;
	}

	.file-gray {
		font-size: 12px;
		line-height: 1;
		padding-top: 6px;
		color: #acb5bb;
	}

	.cms-file-items-box {
		width: 740px;
	}

	.cms-file-item {
		width: 350px;

		float: left;
		height: 30px;
		line-height: 30px;
		margin-top: 0px !important;
		margin-right: 30px;

		&:nth-child(2n) {
			margin-right: 0;
		}
	}

	.w-350 {
		width: 740px;
	}

	.cms-delete-little {
		display: inline-block;
		width: 16px;
		height: 16px;
		border-radius: 4px;
		background: #ff8b53;
		color: #fff;
		font-size: 12px;
		line-height: 16px;
		text-align: center;
	}

	.cms-file-label {
		overflow: hidden;
		display: flex;
		align-items: center;
		margin-right: 0;
		justify-content: space-between;

		>label {
			float: left;
			width: 300px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.cms-delete-little {
			float: right;
			margin-right: 10px;
		}
	}
</style>