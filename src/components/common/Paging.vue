<template>
  <div class="paging">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import { getDataWorks } from "@/utils/table.js";

export default {
  name: "Paging",
  props: { total: Number, url: String },
  data() {
    return {
      page: 1,
      size: 10,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      (this.loading = true),
        getDataWorks(
          this.$parent,
          this.url,
          { page: this.page, size: this.size },
          ["completed"]
        );
    },
    handleCurrentChange(val) {
      this.page = val;
      (this.loading = true),
        getDataWorks(
          this.$parent,
          this.url,
          { page: this.page, size: this.size },
          ["completed"]
        );
    },
  },
  created() {
    console.log(this.$parent);
    console.log(this.url);
    (this.loading = true),
      getDataWorks(
        this.$parent,
        this.url,
        { page: this.page, size: this.size },
        ["completed"]
      );
  },
};
</script>
<style lang="scss">
.paging {
  .el-pagination {
    text-align: left;
    margin-top: 1.25rem;
  }
}
</style>