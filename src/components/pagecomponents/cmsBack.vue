<template>
    <a class="cms-back" href="javascript:void(0)" @click="$router.go(-1)">
    </a>
</template>

<script>
export default {
    name:'cms-back',
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
    }
}
</script>

<style scoped lang="scss">
   
</style>
