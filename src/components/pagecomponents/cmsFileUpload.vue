<template>
	<el-upload class="upload-demo" :action="uploadUrl" :data="data" :multiple="multiple" :limit="limit" :name="name"
		:auto-upload="auto_upload" :on-success="onSuccess" :on-error="onError" :show-file-list="show_file_list"
		:file-list="fileList">
		<el-button type="primary">上传</el-button>
	</el-upload>
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
		name: 'cms-file-upload',
		props: {
			//提交地址,默认为/upload/o_upload
			action: {
				type: String,
				default: '',
			},
			//是否支持多文件上传
			multiple: {
				type: Boolean,
				default: true,
			},
			//支持最大上传文件数
			limit: {
				type: Number,
				default: 9999,
			},
			//是否显示上传文件列表
			show_file_list: {
				type: Boolean,
				default: true,
			},
			//文件提交name值
			name: {
				type: String,
				default: 'uploadFile',
			},
			//是否选择完文件之后自动上传，默认true
			auto_upload: {
				type: Boolean,
				default: true,
			},
			//上传路径
			uploadPath: {
				type: String,
				default: '',
			},
			//是否只能上传文档类型
			isDoc: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				uploadUrl: this.$store.state.sys.baseUrl + (this.action == '' ? this.$api.bsaeUpload : this.action),
				params: {
					appId: process.env.VUE_APP_appId,
					sessionKey: localStorage.getItem("sessionKey"),
					type: "attach",
					nonceStr: rand,
					mark: false,
					uploadPath: this.uploadPath,
				},
				selectFiles: 0,
				successFiles: 0,
				data: {},
				fileList: [],
			};
		},

		methods: {
			onSuccess(response, file, fileList) {
				this.$emit("on-success", file, fileList);
			},
			onError(err, file, fileList) {
				this.$emit("on-error", file, fileList);
			}
		},
		created() {
			this.data = signParams(this.params, process.env.VUE_APP_appKey);
		},
	};
</script>

<style>
	.upload-demo,
	.upload-demo .el-upload,
	.upload-demo ul {
		display: inline-block;
	}

	.upload-demo .el-upload {
		position: relative;
		top: 20;
	}
</style>