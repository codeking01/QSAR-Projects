<template>
  <!-- 底部 -->
  <footer>
    <div class="footer">
      <div class="footer-container">
        <div class="footerList">
          <h4 class="help-title">帮助中心</h4>
          <div class="footerItem">
            <img src="./images/wx_cz.png">
          </div>
        </div>
        <div class="copyright">
          <!--          <ul class="helpLink">
                      <li>关于我们
                        <span class="space"></span>
                      </li>
                      <li>联系我们
                        <span class="space"></span>
                      </li>
                      <li>关于我们
                        <span class="space"></span>
                      </li>
                      <li>商家入驻
                        <span class="space"></span>
                      </li>
                      <li>营销中心
                        <span class="space"></span>
                      </li>
                      <li>友情链接
                        <span class="space"></span>
                      </li>
                      <li>关于我们
                        <span class="space"></span>
                      </li>
                      <li>营销中心
                        <span class="space"></span>
                      </li>
                      <li>友情链接
                        <span class="space"></span>
                      </li>
                      <li>关于我们</li>
                    </ul>-->
          <p>地址: 天津市滨海新区天津科技大学（中院）</p>
          <div class="finalcopyright">
            Copyright © 2022 <strong><a href="javascript:void(0);" target="">&nbsp;QSAR-Lab &nbsp; </a></strong>&nbsp;
            <strong><a href="javascript:void(0);" target="">codekingtust.com</a></strong> All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
    <!-- main -->
    <el-backtop :right="50" :bottom="50"/>
  </footer>
</template>

<script setup lang="ts">

</script>

<script lang="ts">

export default {
  name: 'footer-index'
}
</script>

<style scoped lang="less">
.footer {
  background-color: #eaeaea;

  .footer-container {
    //width: 1200px;

    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .help-title {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .footerItem {
        display: flex;
        justify-content: center;
        align-items: center;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .finalcopyright {
        display: flex;
        justify-content: center;
        align-items: center;

        a:link {
          color: blue;
          text-decoration: none;
        }

        a:hover {
          color: red;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
