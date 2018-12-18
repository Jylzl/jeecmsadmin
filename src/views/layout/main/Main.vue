<template>
  <div style="height:1000px;">
    <Breadcrumb />
    <Console />
  </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import Console from '@/views/console/Console.vue'
export default {
  name: 'Main',
  components: {
    Breadcrumb,
    Console
  }
}
</script>


