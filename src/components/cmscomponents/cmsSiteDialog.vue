<template>
      <div class="tree border-none">
             <el-tree v-if="isAnsy" :load="ansySiteAndChannelTree" lazy  :props="props"
                 ref="tree" :default-expand-all="expandAll"
               :default-expanded-keys="['']"   @check-change="checkChange"   show-checkbox :indent="16" node-key="id">
            </el-tree>
            <el-tree v-if="!isAnsy && treeAllFlage" :data="treeData" ref="tree" :props="allprops"  show-checkbox  @check-change="checkChange"   :default-expanded-keys="['']"   :indent="16" node-key="id"  :default-checked-keys="checkIds" :default-expand-all="expandAll"></el-tree>
      </div>
</template>
<script>
// import listMixins from '@/mixins/list'
import axios from "axios";
export default {
  props:{
    //复选框显示级别  all-全部显示  site-显示全部站点ID，channel-显示全部栏目节点  bottom -只显示没有子节点的节点
    showCheck:{
        type:String,
         default:'bottomChannel', 
    },
    isFilterCurrentSite:{
        type:Boolean,
        default:true,
    },
    isAnsy:{
        type:Boolean,
        default:true,
    },
    checkIds:{
       type:Array,
      default:function(){return []},
    },
    expandAll:{
        type:Boolean,
        default:false,
    }
},
  data() {
    return {
      props: {
        label: "name",
        children:"zones",
        isLeaf: "isChild",
        id: "id",
        disabled:"disabled"
      },
      allprops: {
        label: "name",
        children:"child",
        isLeaf: "hasChild",
        id: "id",
        disabled:"disabled"
      },
      treeAllFlage:false,
      treeData:[],
    };
  },methods:{
     //栏目dialog节点选中事件，处理checkbox 只能选择一个
    checkChange(node,checkStatus,childStatus){
            this.$emit('change', this.$refs['tree'].getCheckedNodes());
      
    },
    formateSiteData(data){
        let siteTreeData = [];
        for(let item  of data){
            if(this.isFilterCurrentSite && item.id == this.$getSiteId()){
                continue;
            }
            let obj = {name:item.name,id:'s'+item.id,isChild:false,siteId:item.id,channelId:'',};
            obj.isLastSite = true;   //是否最后一级site层
            obj.disabled =  true;
            siteTreeData.push(obj);
        }
      return  siteTreeData;
    },
    //异步加载栏目树形结构  
    ansySiteAndChannelTree(node, resolve){


      if (node.level === 0) {
        return resolve([
          {
            name: '根目录',
            id: '',
            isChild:true,
            isLastSite:false,
            channelId:'',
            disabled:this.showCheck == 'all' ? false :true,
          }
        ]);
      }
      if(node.level  > 0){
            //是否为最后一级站点
             let siteId = node.data.siteId; 
             let channelId =  node.data.channelId;
            if(node.data.isLastSite || channelId > 0  ){
                   let param = {parentId:channelId,_site_id_param:siteId};
                   axios.post(this.$api.channelList,param).then(res => {
                        let data = [];
                        for (let i in res.body) {
                          let obj = {};
                          obj.id = res.body[i].id;
                          obj.isChild = res.body[i].childCount > 0  ? false : true;
                          obj.name = res.body[i].name;
                          obj.siteId = siteId;
                          obj.channelId =  res.body[i].id;
                          if(this.showCheck == 'channel'){
                             obj.disabled = false;
                          }else if(this.showCheck == 'bottomChannel' ){
                             obj.disabled = !obj.isChild;
                          }
                          data.push(obj);
                        }
                        return resolve(data);
                   });
            }else{
                axios.post(this.$api.siteTree,{root: '',all:true}).then(res => {
                    return resolve(this.formateSiteData(res.body))
                }); 
            }
      }
    },
    formate(channelData){
      for(let i in this.treeData[0].child){
          this.treeData[0].child[i].child = [];
          for(let j in channelData){
              let channel = channelData[j];
              channel.type = false
              if(channel.siteId  == this.treeData[0].child[i].id){
                  this.treeData[0].child[i].child.push(channel);
              }
          }
      }
    },
    fromSite(sites){
        for (let obj of sites){
          obj.disabled = true;
          obj.type = true;
            this.treeData[0].child.push(obj);
            if(obj.hasChild){
                  this.fromSite(obj.child);
            }
        }
    },
  },
  created(){
      //非异步加载所有数据
      if(!this.isAnsy){
             this.treeData = [{
                  name: '根目录1111',
                  id: '',
                  hasChild:true,
                  isLastSite:false,
                  channelId:'',
                  type:true,
                  disabled:this.showCheck == 'all' ? false :true,
                }];
              axios.post(this.$api.siteTree,{root: ''}).then(res => {
                  if(res.code == '200'){
                      if(res.body.length > 0 ){
                            axios.post(this.$api.getAllChannel).then(result=>{
                              if(result.code == '200'){
                                  this.treeData[0].child = [];
                                  this.fromSite(res.body);
                                  this.formate(result.body);
                                  this.treeAllFlage = true;
                              }
                          })
                      }
                  }
              }); 
          
      }
  }
};
</script>
<style lang="scss" scoped>
.border-none{
    width:90%;
    max-height: 400px;
    overflow: auto;
    position: absolute;
    border-right: none;
}
</style>
