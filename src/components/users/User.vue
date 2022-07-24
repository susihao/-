<template>
  <div class="user">
    <el-tree
      :data="menus"
      :props="defaultProps"
      node-key="name"
      ref="tree"
      show-checkbox
    >
    </el-tree>
    <el-button @click="getCheckedNodes">获取</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [],
      defaultProps: {
        label: "name",
        children: "children",
      },
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
    console.log(this.menus);
  },
  methods: {
    getCheckedNodes() {
      let arr = this.$refs.tree.getCheckedNodes();
      console.log(arr);
    },
  },
};
</script>