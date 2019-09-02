<template>
	<div class="cms-upload">
		<div class="cms-upload-box">
			<el-upload name="uploadFile" :action="upLoadUrl" :data="data" :show-file-list="false"
				:on-success="handleAvatarSuccess" :on-progress="handleAvatarProgress" class="cms-upload">
				<i v-if="imageUrl==''" class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<div class="cms-show-img" v-if="imageUrl!=''">
				<img :src="imageUrl" class="back-img">
				<div class="img-porp" @dblclick="dialogVisible=true">
					<div class="el-icon-zoom-in cms-zoom-icon">
						<span class="cms-zoom-font">双击查看大图</span>
					</div>
					<div class="cms-img-bottom">
						<el-upload name="uploadFile" :action="upLoadUrl" :data="data" :show-file-list="false"
							:on-success="handleAvatarSuccess" :on-progress="handleAvatarProgress" class="cms-again">
							<a href="javascript:void(0)">修改</a>
						</el-upload>
						<div class="cms-again delete">
							<a href="javascript:void(0)" @click="deleteImg">删除</a>
						</div>
					</div>
				</div>
			</div>
			<!-- 进度条 -->
			<!-- <el-progress type="circle" :percentage="percentage" :status="status" class="cms-progress" v-if="uploadStar"> -->
			<!-- </el-progress> -->
			<el-dialog :visible.sync="dialogVisible">
				<img width="100%" :src="imageUrl" alt="">
			</el-dialog>
		</div>
		<!-- 水印 -->
		<el-checkbox v-model="params.mark" class="mark-box" v-if="isMark">水印</el-checkbox>
	</div>
</template>

<script>
	import {
		getRand
	} from "@/utils/random.js";
	import {
		signParams
	} from "@/utils/aes.js";
	import api from "@/api/api";
	var rand = getRand();
	export default {
		name: "cms-upload",
		props: {
			field: {
				type: String,
				default: ""
			},
			src: {
				type: String,
				default: ""
			},
			isMark: {
				type: Boolean,
				default: true
			},
			index: {
				type: Number,
				default: 0
			},
			pIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				imageUrl: this.src != "" && this.src.indexOf("http") < 0 ?
					this.$getUrl() + this.src : this.src,
				upLoadUrl: this.$store.state.sys.baseUrl + api.bsaeUpload,
				params: {
					appId: process.env.VUE_APP_appId,
					sessionKey: localStorage.getItem("sessionKey"),
					type: "image",
					nonceStr: rand
				},
				data: {},
				percentage: 0,
				status: "",
				uploadStar: false,
				dialogVisible: false
			};
		},

		methods: {
			handleAvatarSuccess(res, file) {
				//上传成功服务器响应
				if (res.code == "200" && res.body != "") {
					this.status = "success";
					setTimeout(() => {
						this.uploadStar = false;
						this.status = "";
						this.percentage = 0;
						if (res.body.uploadPath.indexOf("http") >= 0) {
							this.imageUrl = res.body.uploadPath;
							this.$emit(
								"get",
								res.body.uploadPath,
								this.field,
								this.index,
								this.pIndex
							);
							this.$emit("change", res.body.uploadPath, this.index);
						} else {
							this.imageUrl = this.$getUrl() + res.body.uploadPath;
							this.$emit(
								"get",
								res.body.uploadPath,
								this.field,
								this.index,
								this.pIndex
							);
							this.$emit("change", res.body.uploadPath, this.index, this.pIndex);
						}
					}, 1000);
				} else {
					this.errorMessage(res.code + ":" + res.message);
					this.status = "exception";
					setTimeout(() => {
						this.uploadStar = false;
						this.percentage = 0;
						this.status = "";
						this.imageUrl = "";
						this.$emit("get", this.src, this.field, this.index, this.pIndex);
						this.$emit("change", this.src, this.index, this.pIndex);
					}, 1000);
					this.errorMessage("上传失败:" + res.code);
				}
			},
			handleAvatarProgress(event, file, fileList) {
				//进度
				this.imageUrl = "";
				this.uploadStar = true;
				this.percentage = parseInt(event.percent.toFixed(1));
			},
			deleteImg() {
				this.uploadStar = false;
				this.percentage = 0;
				this.status = "";
				this.$emit("get", "", this.field, this.index, this.pIndex);
				this.$emit("change", "", this.index, this.pIndex);
				this.imageUrl = "";
			}
		},
		created() {
			this.data = signParams(this.params, process.env.VUE_APP_appKey);
			//console.log("src:"+this.src);
			// this.imageUrl = this.src.indexOf('http') >= 0 ?this.src : this.getUrl()+this.src;
		},
		watch: {
			src(curVal, oldVal) {
				//console.log("curVal:"+curVal);
				if (curVal == "") {
					this.imageUrl = "";
				} else if (curVal.indexOf("http") >= 0) {
					this.imageUrl = curVal;
				} else {
					this.imageUrl = this.$getUrl() + curVal;
				}
				// if(curVal!=''){
				//     this.$emit('change',this.imageUrl,this.index,this.pIndex);
				// }
			},
			params: {
				handler(curVal, oldVal) {
					this.data = signParams(curVal, process.env.VUE_APP_appKey);
				},
				deep: true
			}
		}
	};
</script>

<style lang="scss" scoped>
	$width: 130px;
	$height: 130px;

	.cms-upload {
		display: flex;
		align-items: center;
	}

	.cms-upload-box {
		position: relative;
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		width: $width;
		height: $width;
	}

	.mark-box {
		margin-left: 10px;
	}

	.avatar-uploader .el-upload:hover .img-porp {
		display: block;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: $width;
		height: $height;
		line-height: $height;
		text-align: center;
	}

	.cms-show-img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		cursor: pointer;
	}

	.cms-zoom-icon {
		color: #fff;
		font-size: 20px;
		margin: 0 auto;
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		margin-left: -51px;
		margin-top: -15px;
	}

	.cms-zoom-font {
		font-size: 14px;
		position: relative;
		top: -3px;
	}

	.cms-show-img:hover .img-porp {
		display: block;
	}

	.back-img {
		width: 100%;
		height: 100%;
	}

	.img-porp {
		position: absolute;
		background: rgba(0, 0, 0, 0.6);
		width: 100%;
		height: 100%;
		top: 0;
		display: none;
		z-index: 49;
	}

	.cms-img-bottom {
		width: 100%;
		height: 30px;
		line-height: 30px;
		display: flex;
		position: absolute;
		bottom: 0;
		z-index: 50;
	}

	.cms-again {
		width: 50%;
		background: #1ab0fb;
		text-align: center;

		a {
			color: #fff;
			font-size: 12px;
		}
	}

	.delete {
		width: 50%;
		background: #ff7653;
		text-align: center;

		a {
			color: #fff;
			font-size: 12px;
		}
	}

	.cms-progress {
		position: absolute;
		top: 0;
		width: $width;
		height: $height;
		z-index: 888;
	}
</style>