<template>
  <div id="app">
    <router-view />
    <BackToTop />
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop/index.vue'
export default {
  components: {
    BackToTop
  }
}
</script>

<style lang="scss">
@import url(./assets/css/rest.css);
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
</style>
