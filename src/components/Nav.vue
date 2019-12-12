<template>
  <div>
    <!-- 导航栏 -->
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-navbar-brand>
        <!-- <svg-icon
          icon-symbol-id="#Bootstrap"
          :svg-size-config="{
                        width: '40px', height: '40px'
                    }"
        ></svg-icon> -->
        <img
          v-lazy="compIcon"
          alt=""
          style="width: 50px;height: 50px"
        >
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item style="margin-right: 2rem">首页</b-nav-item>
          <b-nav-item style="margin-right: 2rem">产品介绍</b-nav-item>
          <b-nav-item style="margin-right: 2rem">新闻中心</b-nav-item>
          <b-nav-item style="margin-right: 2rem">关于我们</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import compIcon from "../assets/compIcon.jpg";
export default {
  name: "Nav",
  data() {
    return {
      compIcon
    };
  }
};
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link {
  color: #000;
}
.bg-light {
  background-color: #fff !important;
}
@media (min-width: 992px) {
  .navbar-nav {
    margin: 0 auto;
  }
  .navbar-brand {
    margin-left: 10rem;
  }
  .navbar-light .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:focus {
    color: #2f70dc;
  }
}
</style>