<template>
    <div>
        <el-upload class="upload-attach" :action="uploadUrl" :data="data" :multiple="multiple" :limit="limit"
            :name="name" :on-progress='onProgress' :on-success="onSuccess" :on-error="onError" :show-file-list="false"
            ref="upload">
            <el-button type="primary">批量上传</el-button>
            <span class="file-gray">只能上传图片类型</span>
        </el-upload>
        <div v-if="uploading" class="w-350">
            <span class="file-gray">正在上传：</span>
            <span class="file-gray"><i class="el-icon-document"></i>{{fileName}}</span>
            <el-progress :percentage="percentage" :status="status"></el-progress>
        </div>
        <div>
            <cms-pictrues-items :index='index' :src='item' v-for="(item,index) in fileList" :key="index"
                @getItems="getPicInfo" @delete='delFileList' class="pics-items-left"></cms-pictrues-items>
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
    import cmsPictruesItems from "@/components/pagecomponents/cmsPictruesItems.vue"
    var rand = getRand();
    export default {
        components: {
            cmsPictruesItems
        },
        name: "cms-file-upload",
        props: {
            propList: {
                type: Array,
                default: function () {
                    return []
                }
            },
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
            //上传路径
            uploadPath: {
                type: String,
                default: ""
            },
        },
        data() {
            return {
                uploadUrl: this.$store.state.sys.baseUrl + (this.action == "" ? this.$api.bsaeUpload : this.action),
                params: {
                    appId: process.env.VUE_APP_appId,
                    sessionKey: localStorage.getItem("sessionKey"),
                    type: "image",
                    nonceStr: rand,
                    mark: false,
                    uploadPath: this.uploadPath
                },
                obj: {
                    fileName: "",
                    fileSize: "",
                    uploadPath: ""
                },
                data: {},
                fileList: [],
                uploading: false,
                percentage: 0,
                status: '',
                fileName: '',
            };
        },

        methods: {
            getPicInfo(src, index) {
                this.$set(this.fileList, this.fileList[index], src);
                this.$emit('change', this.fileList); //返回列表
            },
            onProgress(event, file, fileList) {
                this.status = '';
                this.uploading = true;
                this.fileName = file.name;
                this.percentage = parseInt(event.percent);
            },
            delFileList(index) {
                this.fileList.splice(index, 1);
                this.$emit('change', this.fileList); //返回列表
            },
            onSuccess(response, file, fileList) {
                if (response.code == '200' && response.body != '') {
                    this.status = 'success';
                    this.fileList.push({
                        name: '',
                        path: response.body.uploadPath
                    });
                } else {
                    this.status = 'exception';
                }
                setTimeout(() => {
                    this.uploading = false;
                    this.fileName = '';
                    this.percentage = 0;
                }, 500);
                this.$emit('change', this.fileList); //返回列表
            },


            onError(err, file, fileList) {
                this.errorMessage("上传失败");
                this.$refs["upload"].clearFiles();
                this.$emit("on-error", file, fileList);
                this.$emit('change', this.fileList); //返回列表
            },

        },
        watch: {
            propList: {
                handler(curVal, oldVal) {
                    if (this.propList.length > 0) {
                        this.fileList = this.propList;
                    }

                },
                deep: true
            }
        },
        created() {
            if (this.propList.length > 0) {
                this.fileList = this.propList;
            }
            this.data = signParams(this.params, process.env.VUE_APP_appKey);
        }
    };
</script>

<style scope lang='scss'>
    .file-gray {
        font-size: 12px;
        line-height: 1;
        padding-top: 6px;
        color: #acb5bb;
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

        .cms-file-label {
            float: left;
            width: 230px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .cms-delete-little {
            float: right;
            margin-right: 10px;
        }
    }

    .pics-items-left {
        float: left;
        margin-right: 55px;
    }
</style>