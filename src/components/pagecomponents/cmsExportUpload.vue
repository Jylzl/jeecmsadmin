<template>
 <div style="margin-bottom:12px;">
    <el-upload
      class="upload-attach"
      :action="uploadUrl"
      :data="data"
      :multiple="multiple"
      :limit="limit"
      :name="name"
      :auto-upload="auto_upload"
      :before-upload="beforeAvatarUpload"
      :on-success="onSuccess"
      :on-error="onError"
      :show-file-list="show_file_list"
      :file-list="fileList"
      ref="upload">
      <el-button type="primary">导入文档</el-button>
    </el-upload>
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
  name: "cms-export-upload",
  props: {
    src:{

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
      default: true
    },
    index:{
        type:Number,
        default:0
    }
  },
  data() {
    return {
      uploadUrl:this.$store.state.sys.baseUrl+'/api/admin/content/import_doc',
      params: {
        appId: process.env.appId,
        sessionKey: localStorage.getItem("sessionKey"),
        type: "attach",
        nonceStr: rand,
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
      multipleList:[],
    };
  },

  methods: {
    beforeAvatarUpload(file) {
      let isUpLoad = false;
      if (this.isDoc) {
        if (!this.isMIME(file.name)) {
          this.$message.error("只能上传txt,doc,docx,xls,xlsx,ppt,pptx,pdf");
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
             this.$emit('get',response.body.txt,this.index);     
        }else{
                this.$emit('get','',this.index);
        }
    },
    onError(err, file, fileList) {
      this.errorMessage("上传失败");
      this.$refs["upload"].clearFiles();
       this.$emit('get','',this.index);
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
    this.data = signParams(this.params, process.env.appKey);
  }
};
</script>

<style scope lang='scss'>
.upload-attach .el-upload-list {
  width: 50%;
}
</style>
