<template>
  <div class="header">
    <el-header>
      <span class="title">通用管理系统</span>
      <span>{{name}}</span>
    </el-header>
  </div>
</template>
<script >
import { getToken } from "@/utils/changtoken.js";
export default {
  name: "Header",
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = getToken("userName");
  },
  components: {},
};
</script>
<style lang="scss">
.header {
  height: 3.75rem;
  .el-header {
    color: #fff;
    background: #0773ee;
    line-height: 3.125rem;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 1.25rem;
    }
  }
}
</style>