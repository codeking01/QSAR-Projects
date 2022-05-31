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
          <div class="temp">
            <div class="Headlogo">
              <img src="https://element-plus.gitee.io/images/element-plus-logo.svg" alt="" class="imgconf">
            </div>
          </div>
          <el-menu-item index="1">Processing Center</el-menu-item>
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
          <el-menu-item index="3">Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
          <el-menu-item index="5">Contact</el-menu-item>
        </el-menu>

      </el-header>
    </el-container>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<script lang="ts">
export default {
  name: 'HeaderIndex'
}
</script>
<style scoped lang="scss">
.temp{
  width:900px
}
.el-menu{
}
.Headlogo{

}
.imgconf{
  margin-left: 40px;
  width:80px;
  height:50px;
}
.el-container{
  margin-bottom: 50px;
}

</style>
