<template>
  <header-index/>
  <home-index/>
    <router-view/>
  <footer-index/>

</template>

<script setup lang="ts">
import HeaderIndex from '@/components/Header/index.vue'
import FooterIndex from '@/views/Footer/footer-index.vue'
import HomeIndex from '@/views/Home/index.vue'

</script>
<style>


</style>
