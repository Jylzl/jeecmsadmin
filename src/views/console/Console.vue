<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">4</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">11</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">22</div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
