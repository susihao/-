<template>
  <div class="infolists">
    <!-- 按钮 -->
    <el-form
      :inline="true"
      :model="newForm"
      class="demo-form-inline"
      size='mini'
    >

      <el-form-item>
        <el-button
          type="primary"
          @click="add"
        >新增</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格  -->
    <el-table
      :data="ComData"
      border
      style="width: 100%"
    >

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
        prop="father"
        label="父亲姓名"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="mather"
        label="母亲姓名"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        width="180"
        align="center"
        label="家庭住址"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        width="180"
        align="center"
        label="联系方式"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="入校时间"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            width="90"
            align="center"
            icon="el-icon-delete"
            @click="del(scope.row)"
          >删除</el-button>
          <el-button
            type="success"
            size="mini"
            width="90"
            align="center"
            icon="el-icon-edit"
            @click="mod(scope.row)"
          >修改</el-button>
        </template>
        <template>

        </template>

      </el-table-column>
    </el-table>

    <!-- 添加 弹框 -->
    <el-dialog
      :title="state?'添加学生信息':'修改学生信息'"
      :visible.sync="dialogFormVisible"
      width="31rem"
    >
      <el-form
        :model="newForm"
        :rules="rules"
        ref="newForm"
      >
        <el-form-item
          label="学生姓名"
          prop="name"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="newForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="年龄"
          prop="age"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="newForm.age"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          prop="sex"
          :label-width="formLabelWidth"
        >
          <el-radio
            v-model="newForm.sex"
            label="1"
            autocomplete="off"
          >男</el-radio>
          <el-radio
            v-model="newForm.sex"
            label="2"
            autocomplete="off"
            prop="name"
          >女</el-radio>
        </el-form-item>
        <el-form-item
          prop="father"
          label="父亲姓名"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="newForm.father"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="mather"
          label="母亲姓名"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="newForm.mather"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="入校时间"
          prop="t"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="newForm.time"
            format="yyyy年 MM月 dd日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          prop="address"
          label="家庭住址"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="newForm.address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="联系方式"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="newForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="onCancle">取 消</el-button>
        <el-button
          type="primary"
          @click="onSure('newForm')"
        >确 定</el-button>
      </div>
    </el-dialog>
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
import { getData, changeInfo, delData } from "@/utils/table.js";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 1,

      dialogFormVisible: false,

      state: true,

      newForm: {
        name: "",
        age: "",
        sex: "1",
        father: "",
        mather: "",
        time: "",
        address: "",
        phone: "",
      },

      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ require: true, message: "请输入年龄" }],
        sex: [{ required: true }],
        time: [{ required: true, message: "请输入入学日期" }],
        address: [{ required: true, message: "请输入家庭地址" }],
        phone: [{ required: true, message: "请输入联系方式" }],
      },

      formLabelWidth: "5rem",
    };
  },
  methods: {
    // 分页函数
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },

    // 操作方法
    onSure(newForm) {
      this.$refs[newForm].validate((valid) => {
        if (valid) {
          // 判断新增 / 修改
          if (this.state) {
            changeInfo(this, "/info", "post", this.newForm);
            this.dialogFormVisible = false;
          } else {
            changeInfo(this, "/info", "put", this.newForm);
            this.dialogFormVisible = false;
          }
        }
      });
      this.$refs["newForm"].resetFields();
    },
    onCancle() {
      this.dialogFormVisible = false;
      this.$refs["newForm"].resetFields();
    },
    add() {
      (this.dialogFormVisible = true),
        (this.state = true),
        (this.newForm = {
          name: "",
          age: "",
          sex: "1",
          father: "",
          mather: "",
          time: "",
          address: "",
          phone: "",
        });
    },
    del(row) {
      delData(this, "/info", row.id, getData);
    },
    mod(row) {
      (this.state = false),
        (this.dialogFormVisible = true),
        (this.newForm = { ...row });
    },
  },
  created() {
    // 获取数据
    getData(this, "/info");
  },
  computed: {
    // 计算 分页
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
.infolists {
  .el-form {
    text-align: left;
    margin-top: 0.625rem;
  }
}
</style>