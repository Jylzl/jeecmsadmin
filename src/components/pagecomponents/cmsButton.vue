<template>
       <a href="javascript:void(0)" 
       class="cms-table-button iconfont" 
       :class="type"
       :title="title" 
       > 
       </a>
    
</template>

<script>
export default {
    name:'cms-button',
    props: {
        type:{
            type:String,
            default:'edit'
        }
    },
    data(){
        return{}   
    },
    computed:{
        title(){
            let titie="";
                if(this.type=='edit'){
                     titie='修改'; 
                }
                if(this.type=='delete'){
                     titie='删除'; 
                }
                if(this.type=='rename'){
                     titie='重命名'; 
                }
                if(this.type=='view'){
                     titie='查看'; 
                }
                if(this.type=='user'){
                    titie='成员管理'
                }
                if(this.type=='down'){
                    titie='下载'
                }
                if(this.type=='formList'){
                     titie='代码调用'
                }
            return titie;
        }
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
    .cms-table-button{
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height:1;
        border-radius: 4px;
        background: #000;
        color: #fff;
         position: relative;
         text-align: center;
         font-size: 14px;
         top:-2px;
         margin-left: 2px;
         transition: 0.2s;
         &:first-child{
               margin-left: 0px;
         }
         &:hover{
             opacity: 0.65;
         }
     &.edit{
         background: #17d57e;
        &::after{
            content: '\e662';
            position: relative;
           top:5px;
        }        
     }
      &.delete{
         background: #ff8b53;
        &::after{
            content: "\e604";
            position: relative;
            top:4px;
            font-size:12px; 
        }        
     }  
      &.rename{
         background: #d573ea;
        &::after{
            content: "\e670";
            position: relative;
            top:4px;
            font-size:12px; 
        }        
     
     }
     &.view{
         background: #50c3e4;
        &::after{
            content: "\e797";
            position: relative;
            top:4px;
            font-size:12px; 
        }        
     }
     &.user{
        background: #ffae38;
         &::after{
            content: "\e659";
            position: relative;
            top:4px;
            font-size:14px; 
        }    
     }
     &.down{
        background: #409EFF;
         &::after{
            content: "\eb8e";
            position: relative;
            top:4px;
            font-size:14px; 
        }  
     }
     &.formList{
        background: #ffae38;
         &::after{
            content: "\e6ea";
            position: relative;
            top:5px;
            left:1px;
            font-size:14px; 
        }  
     }
     }
</style>
