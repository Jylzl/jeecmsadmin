<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-04-28 08:35:16
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-05 16:25:51
 -->
<template>
	<div>
		<el-upload
			class="upload-attach"
			:action="uploadUrl"
			:data="data"
			:multiple="multiple"
			:limit="limit"
			:name="name"
			:auto-upload="auto_upload"
			:before-upload="beforeAvatarUpload"
			:on-remove="removeList"
			:on-success="onSuccess"
			:on-error="onError"
			:show-file-list="show_file_list"
			:file-list="fileList"
			ref="upload"
		>
			<el-button type="primary">{{uploadName}}</el-button>
		</el-upload>
	</div>
</template>

<script>
import { getRand } from "@/utils/random";
import { signParams } from "@/utils/aes.js";
import api from "@/api/api";
var rand = getRand();
export default {
	name: "cms-file-upload",
	props: {
		src: "",
		uploadName: {
			type: String,
			default: "上传"
		},
		//提交地址,默认为/upload/o_upload
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
		show_file_list: {
			type: Boolean,
			default: true
		},
		//文件提交name值
		name: {
			type: String,
			default: "uploadFile"
		},
		//是否选择完文件之后自动上传，默认true
		auto_upload: {
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
		}
	},
	data() {
		return {
			uploadUrl:
				this.$store.state.sys.baseUrl +
				(this.action == "" ? this.$api.bsaeUpload : this.action),
			params: {
				appId: process.env.VUE_APP_appId,
				sessionKey: localStorage.getItem("sessionKey"),
				type: "attach",
				nonceStr: rand,
				mark: false,
				uploadPath: this.uploadPath
			},
			obj: {
				fileName: "",
				fileSize: "",
				uploadPath: ""
			},
			selectFiles: 0,
			successFiles: 0,
			data: {},
			fileList: [],
			multipleList: []
		};
	},

	methods: {
		removeList(file, fileList) {
			if (!this.multiple) {
				this.$emit("change", this.obj);
			}
		},
		beforeAvatarUpload(file) {
			let isUpLoad = false;
			if (this.isDoc) {
				if (!this.isMIME(file.name)) {
					this.$message.error(
						"只能上传txt,doc,docx,xls,xlsx,ppt,pptx,pdf"
					);
					isUpLoad = false;
				} else {
					isUpLoad = true;
				}
			} else {
				isUpLoad = true;
			}
			return isUpLoad;
		},
		onSuccess(response, file, fileList) {
			//单文件
			if (response.code == "200" && response.body != "") {
				if (!this.multiple) {
					this.fileList = fileList.slice(-1);
				}
				this.$emit("on-success", file, fileList);
				this.$emit("change", response.body);
			} else {
				this.errorMessage(response.message);
				this.$refs["upload"].clearFiles();
				this.$emit("change", this.obj);
			}
		},
		onError(err, file, fileList) {
			this.errorMessage("上传失败");
			this.$refs["upload"].clearFiles();
			this.$emit("on-error", file, fileList);
			this.$emit("change", this.obj);
		},
		isMIME(fileName) {
			//判断类型
			let arr = [
				".txt",
				".doc",
				".docx",
				".ppt",
				".pptx",
				".xls",
				".xlsx",
				".pdf"
			];
			let type = fileName.lastIndexOf(".");
			let index1 = fileName.lastIndexOf(".");
			let index2 = fileName.length;
			let postf = fileName.substring(index1, index2); //后缀名
			if (arr.indexOf(postf) >= 0) {
				return true;
			} else {
				return false;
			}
		}
	},
	created() {
		if (this.src !== "") {
			this.fileList = [
				{
					name: this.src,
					url: this.src
				}
			];
		}

		this.data = signParams(this.params, process.env.VUE_APP_appKey);
	}
};
</script>

<style scope lang='scss'>
.upload-attach .el-upload-list {
	width: 50%;
}
</style>