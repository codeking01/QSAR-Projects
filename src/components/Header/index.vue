<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="0" >
            <router-link to="/home"><span>QSAR</span></router-link>
          </el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="1">
            <router-link to="/home">Home</router-link>
            </el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3">
            <router-link to="/info">Info</router-link>
            </el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
          <el-menu-item index="5">Contact</el-menu-item>

        </el-menu>
      </el-header>
    </el-container>
  </div>

</template>

<script setup lang="ts">

</script>

<script lang="ts">
export default {
  name: 'HeaderIndex'
}
</script>
<style scoped lang="scss">

.item-log {
  position: relative;
  margin-left: 40px;
  margin-top: 5px;
  width: 68px;
  height: 40px;
}
.el-container {
  position: relative;
  margin-bottom: 50px;
}
// 调整log在左边的做法
.flex-grow {
  flex-grow: 0.91;
}
// 去除掉下划线
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

</style>
