<template>
  <div class="workMent">
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
    <Paging
      :url='url'
      :total='total'
    />
  </div>
</template>

<script>
import Paging from "@/components/common/Paging.vue";
export default {
  data() {
    return {
      tableData: [],

      total: 0,
      url: "/works",

      loading: true,
    };
  },
  components: {
    Paging,
  },
};
</script>
<style lang="scss">
.worklist {
}
</style>