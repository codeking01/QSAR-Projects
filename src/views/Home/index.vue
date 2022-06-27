<template>
  <div class="swiper-slide animate__animated  animate__backInUp">
  <el-carousel type="card" indicator-position="outside" :interval="8000" arrow="always" height="1000px">
    <el-carousel-item v-for="(c1,index) in imgList" :key="index">
      <img :src="c1.imgUrl" alt="轮播图信息">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script setup lang="ts">
import HeaderIndex from '@/components/Header/index.vue'
const imgList = [
  { imgUrl: require('./images/home_01.png') },
  { imgUrl: require('./images/home_02.png') },
  { imgUrl: require('./images/home_03.png') },
  { imgUrl: require('./images/home_04.png') },
]
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
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.outer {
  width: 100%;
  height: 450px;
  margin-bottom: 100px;
}

</style>
