<template>
  <div class="foot">
    <el-main>
      <div class="common-layout">
        <el-container >
          <el-aside width="600px" height=100%>
            <div class="demo-image__placeholder">
              <div class="block">
                <span class="demonstration">个人介绍</span>
                <el-image :src="src">
                  <template #placeholder>
                    <div class="image-slot">Loading<span class="dot">...</span></div>
                  </template>
                </el-image>
                <br>
                <el-button >
                  <a href="http://hgxy.tust.edu.cn/szdw/60897.htm" target="_blank">更多信息</a>
                </el-button>
              </div>
            </div>
          </el-aside>
          <el-container>
            <el-header>
              <div class="base-info">
                <h4>闫方友(副教授)</h4>
                <h5>天津科技大学化工学院化工系</h5>
                <h5>办公电话：+86-22-60600046</h5>
                <h5> 办公地点：泰达中校区8号楼B-417</h5>
                <h5>Email：yanfangyou@tust.edu.cn</h5>
              </div>
              <el-main>
                <!--              <h3>详细信息</h3>-->
              </el-main>
            </el-header>
          </el-container>
        </el-container>
      </div>
    </el-main>
  </div>

</template>
<script setup lang="ts">

const src = require('./images/person01.jpg')
</script>

<script lang="ts">
export default {
  name: 'index'
}
</script>

<style scoped lang="less">
//背景
/*.foot {
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
}*/
.demo-image__placeholder .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  vertical-align: top;
}

.demo-image__placeholder .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.demo-image__placeholder .el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.demo-image__placeholder.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}

.el-container {
  width: 100%;
  height: 100%;
  // TODO 内容多了删除这个
  margin-bottom: 100px;
}

.el-header {
  width: 100%;
  height: 100%;
  margin-top: 38px;
}

// 去除掉下划线
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

</style>
