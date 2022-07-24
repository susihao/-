<template>
  <div class="home">

    <Header />
    <el-container class="container">
      <Menu />
      <el-container>
        <el-main>
          <div class="cont">
            <Breadcrumb />
            <router-view></router-view>

          </div>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import Menu from "@/components/common/Menu.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";

export default {
  name: "Home",
  components: { Header, Footer, Menu, Breadcrumb },
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  .container {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      padding: 0.625rem;
    }
  }
}
</style>