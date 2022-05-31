<template>
  <div class="outer">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">

</script>
<script lang="ts">
export default {
  name: 'header-index'
}

</script>

<style scoped lang="less">
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 70px;
}

.outer {
  width: 100%;
  height: 450px;
}

</style>
