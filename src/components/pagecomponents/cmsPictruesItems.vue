<template>
  <div>
    <section class="cms-pictrues-itmes clearfix">
      <el-upload class="cms-pictrue-upload" :action="uploadUrl" :data="data" :name="name" :on-success="onSuccess">
        <i class="el-icon-plus"></i>
        <img :src="getImageUrl(src.path)" alt="" class="cms-pic-img">
      </el-upload>
      <el-input type="textarea" class="cms-desc" v-model="src.name" placeholder="图片集描述"> </el-input>
      <i class="cms-delete-little iconfont icon-shanchu1" @click="delFileList(index)"></i>
    </section>

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
    name: "cms-pictrues-items",
    props: {
      //索引
      index: {
        type: Number,
        default: 0
      },
      src: {
        type: Object,
        default: function () {
          return {
            name: '',
            path: '',
          }
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
        default: false
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

        data: {},
        fileList: [],
        uploading: false,
        percentage: 0,
        status: '',
        fileName: '',
      };
    },
    methods: {
      getImageUrl(path) {
        if (path.indexOf("http") >= 0) {
          return path;
        } else {
          let url = this.$store.state.sys.baseUrl
          let repeat = url.substring(url.lastIndexOf('/'))
          if (path.startsWith(repeat)) {
            url = url.replace(repeat, '')
          }
          return url + path;
        }
      },
      getUrl() { //处理图片显示路径
        let url = this.$store.state.sys.baseUrl;
        let http = url.substring(0, url.indexOf("//") + 2);
        url = url.substring(url.indexOf("//") + 2, url.length);
        url = url.substring(0, url.indexOf("/"));
        return http + url;
      },
      onProgress(event, file, fileList) {
        this.status = '';
        this.uploading = true;
        this.percentage = parseInt(event.percent);
      },
      delFileList(index) {
        this.$emit('delete', index);
      },
      onSuccess(response, file, fileList) {
        if (response.code == '200' && response.body != '') {
          this.status = 'success';
          this.src.path = response.body.uploadPath;
        } else {
          this.status = 'exception';
          this.src.path = ''; //清除路径
          this.src.name = ''; //清除描述  
        }
        setTimeout(() => {
          this.uploading = false;
          this.fileName = '';
          this.percentage = 0;
        }, 500);

      },
      onError(err, file, fileList) {
        this.errorMessage("上传失败");
      },
    },
    watch: {
      src: {
        handler(curVal, oldVal) {
          this.$emit('getItems', curVal, this.index);
        },
        deep: true
      }
    },
    created() {
      this.data = signParams(this.params, process.env.VUE_APP_appKey);
    }
  };
</script>

<style scope lang='scss'>
  .cms-pictrues-itmes {

    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .cms-desc {
    float: left;
    width: 185px;
    height: 80px;
    line-height: 80px;
    border-radius: 4px;

  }

  .cms-pic-img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
  }

  .cms-pictrue-upload {
    width: 144px;
    height: 80px;
    float: left;
    position: relative;
    line-height: 80px;
    text-align: center;
    border: 1px solid #d8dce5;
    border-radius: 4px;
    margin-right: 10px;

    .el-upload {
      width: 100%;
      height: 100%;
    }

    .el-icon-plus {
      font-size: 26px;
      color: #d8dce5;
    }
  }


  .file-gray {
    font-size: 12px;
    line-height: 1;
    padding-top: 6px;
    color: #acb5bb;
  }


  .cms-delete-little {
    cursor: pointer;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: #ff8b53;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-left: 10px;
  }
</style>