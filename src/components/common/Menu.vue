<template>
  <div class="menu">

    <el-aside>
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#489eff"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item,index) in menus">
          <el-submenu
            :index="index + ''"
            :key='index'
            v-if="!item.hidden"
          >
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group
              v-for="(child,index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path"> <i :class="item.iconClass"></i>{{child.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>
<script >
export default {
  name: "Menu",
  data() {
    return {
      menus: [],
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
  },
  methods: {},
  components: {},
};
</script>
<style lang="scss">
.menu {
  .el-aside {
    height: 100%;
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
    .el-menu {
      height: 100%;
      background-color: #d3dce6;
      font-size: 1.25rem;
      .fa {
        margin-right: 0.6125rem;
      }
    }
  }
}
</style>