<template>
  <div class="tree-layout">
            <div class="tree">
                <div class="reflash" @click="reflash()"><span class="el-icon-refresh">刷新</span> </div>
                <el-tree :data="treeData" ref="cmsSiteTree" :props="props"  @node-click="nodeClik"  :default-expanded-keys="[1]"   :indent="16" node-key="id"></el-tree>
            </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        props: {
          label: "name",
          children: "child",
          isLeaf: "hasChild",
          id: "id"
        },
        treeData:[{
          name: '根目录',
          id: '',
          child:[],
        }],
    };
  },
  methods: {
    initData() {
        axios.post(this.$api.siteTree,{root: ''}).then(res => {
          if(res.body.length > 0 ){
            this.treeData[0].child = res.body;
          }
        }); 
    },
    nodeClik(data){
      this.$emit("node-click",data);
    },
    reflash(){
      this.initData();
    }
  },
  created(){
    this.initData();
  }
};
</script>

<style>

</style>
