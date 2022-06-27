<template>
  <!-- 头部组件 -->
  <HeaderIndex/>
  <!-- 路由出口 -->
  <router-view/>
  <!-- 脚部组件 -->
  <footer-index/>
</template>

<script setup lang="ts">
import FooterIndex from '@/views/Footer/index.vue'
import HeaderIndex from '@/components/Header/index.vue'

</script>
<style scoped lang="less">

</style>
