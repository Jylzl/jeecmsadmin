<template>
  <el-breadcrumb separator="⋙">
    <el-breadcrumb-item :to="{ path: '/' }">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped>
.el-breadcrumb {
  height: 48px;

  line-height: 48px;
}
.el-breadcrumb__separator {
  color: #95989e;
}
</style>

