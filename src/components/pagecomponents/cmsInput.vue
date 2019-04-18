<template>
    <div class="cms-inline-input">
        <label for="" class="cms-inline-label">{{label}}:</label>
         <el-input  :value="currentValue" @input="handleInput"
         :style="{width:width+'px'}"
         ></el-input>
    </div>
</template>

<script>
export default {
    name:'cms-input',
    props: {
         value: '',
         label:{
          type: String,
            default: 'label'
         },
         width:{
              type: Number,
              default: 160
         }
    },
    data(){
        return{
          currentValue: this.value
        }
    },
    methods:{
    handleInput(value) {
       this.$emit('input',value); //触发 input 事件，并传入新值
    }
    }
}
</script>

<style scoped lang="scss">
    .cms-inline-input{
        display:inline-block;
        position: relative;
        margin-left: 12px;
    }
    .cms-inline-label{
        font-size: 14px;
        color: #5a5e66;
    }
</style>
