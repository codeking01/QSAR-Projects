<template>
  <el-main height="1000px">
    <el-table :data="tableData" height="500" style="width: 100%">
      <el-table-column prop="date" label="时间" width="180"/>
      <el-table-column prop="name" label="作者" width="180"/>
      <el-table-column prop="papers" label="文章"/>
      <el-table-column fixed="right" label="下载" width="240">
        <template #default>
          <el-button link type="primary" size="medium" @click="handleClick">下载</el-button>
<!--          <el-button link type="primary" size="medium">Edit</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </el-main>

</template>

<script setup lang="ts">
const handleClick = () => {
  alert('点击了')
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    papers: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    papers: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    papers: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    papers: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    papers: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    papers: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    papers: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<script lang="ts">
export default {
  name: 'index'
}
</script>

<style scoped lang="less">
el-main {
  margin-bottom: 40px;
  height: 100%;
}
</style>
