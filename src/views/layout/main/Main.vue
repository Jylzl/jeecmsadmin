<template>
  <div>
    <Breadcrumb />
    <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
export default {
  name: 'Main',
  components: {
    Breadcrumb
  }
}
</script>
<style>

</style>



