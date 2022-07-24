<template>
  <div class="studentlists">
    <!-- 头部 查询 -->
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      size='mini'
    >
      <el-form-item label="姓名">
        <el-input
          v-model="formInline.name"
          placeholder="请输入姓名查询"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onFind"
        >查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onReset"
        >重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格显示 -->
    <!-- :data="tableData.slice((currentPage-1)*pageSize,currentPage * pageSize)" -->
    <el-table
      :data="ComData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="number"
        label="学号"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="sex_text"
        label="性别"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        width="180"
        align="center"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        width="180"
        align="center"
        label="手机号码"
      >
      </el-table-column>
      <el-table-column
        prop="state_text"
        label="是否入学"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            width="180"
            align="center"
            icon="el-icon-delete"
            @click="del(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 底部 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import { StudentsApi, DelStuApi } from "@/api/api.js";
export default {
  data() {
    return {
      tableData: [],
      nowData: [],

      currentPage: 1,
      pageSize: 10,
      total: 0,

      formInline: {
        name: "",
      },
    };
  },
  methods: {
    getData(params) {
      StudentsApi(params).then((res) => {
        if (res.data.status === 200) {
          this.total = res.data.total;

          this.tableData = res.data.data;
          this.tableData.forEach((el) => {
            el.sex === 1 ? (el.sex_text = "男") : (el.sex_text = "女");
            el.state === "1"
              ? (el.state_text = "已入学")
              : el.state === "2"
              ? (el.state_text = "未入学")
              : (el.state_text = "休学中");
          });
        }
      });
    },
    // 分页
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },

    // 操作
    del(row) {
      this.$alert("确定删除吗？", "提示", {
        confirmButtonText: "确定",
        callback: () => {
          DelStuApi(row.id).then((res) => {
            if (res.data.status === 200) {
              this.$message({ message: "删除数据成功！", type: "success" });
              this.getData();
            }
          });
        },
      });
    },

    onFind() {
      this.getData(this.formInline);
    },
    onReset() {
      this.formInline.name = "";
      this.getData();
    },
  },
  created() {
    this.getData();
  },
  computed: {
    ComData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
};
</script>
<style lang="scss">
.studentlists {
  .demo-form-inline {
    text-align: left;
    margin-top: 0.625rem;
    margin-left: 0.625rem;
  }
  .el-pagination {
    text-align: left;
    margin-top: 1.25rem;
  }
}
</style>