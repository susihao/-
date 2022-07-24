<template>
  <div class="worklist">
    <el-table
      :data="tableData"
      border
      v-loading="loading"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="用户id"
        align="center"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="userId"
        label="所属班级"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="作业名称"
        align="center"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="completed_text"
        label="完成情况"
        align="center"
        width="180"
      ></el-table-column>
    </el-table>

    <!-- 底部 分页 -->
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
  data() {
    return {
      tableData: [],

      total: 0,
      page: 1,
      size: 10,

      loading: true,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      (this.loading = true),
        getDataWorks(this, "/works", { page: this.page, size: this.size }, [
          "completed",
        ]);
    },
    handleCurrentChange(val) {
      this.page = val;
      (this.loading = true),
        getDataWorks(this, "/works", { page: this.page, size: this.size }, [
          "completed",
        ]);
    },
  },
  created() {
    (this.loading = true),
      getDataWorks(this, "/works", { page: this.page, size: this.size }, [
        "completed",
      ]);
  },
};
</script>
<style lang="scss">
.worklist {
  .el-pagination {
    text-align: left;
    margin-top: 1.25rem;
  }
}
</style>