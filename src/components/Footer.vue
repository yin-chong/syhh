<template>
  <div class="footer">
    <div class="footer_msg">
      <p>服务热线：025-5286 3607</p>
      <!-- <p> 邮箱：vxdsvdfgdhgghfh </p> -->
      <p><a href="http://www.beian.miit.gov.cn/" target="blank" style="color: #fff">苏ICP备19069780号-1</a></p>
      <p> 公司地址：江苏省南京市雨花台六朝路11号证大喜玛拉雅G座9楼</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  width: 100%;
  text-align: center;
  background-color: #1d1d1d;
  color: #ffffff;
  justify-content: center;
  align-items: center;
}

.footer_msg {
  padding-top: 14px;
  padding-bottom: 14px;
}
@media (max-width: 767px) {
  .footer_msg p {
    font-size: 0.625rem;
  }
}
@media (min-width: 992px) {
  .footer_msg p {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }
}
</style>