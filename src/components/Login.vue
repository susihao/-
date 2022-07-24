<template>
  <div class="login">

    <!-- 卡片 -->
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>后台管理系统</span>
      </div>
      <!-- 表单 -->
      <el-form
        :model="userFrom"
        :rules="rules"
        ref="userFrom"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="name"
        >
          <el-input v-model="userFrom.name"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass"
        >
          <el-input
            type="password"
            v-model="userFrom.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="checkPass"
        >
          <el-input
            type="password"
            v-model="userFrom.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('userFrom')"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>
<script >
import { userNameRule, userPassRule } from "../utils/validater.js";
// import service from "@/servivce.js";
import { setToken, getToken } from "../utils/changtoken.js";
import { loginApi } from "@/api/api.js";

export default {
  name: "Login",
  data() {
    const userCheckPassRule = (rule, value, callback) => {
      if (value != this.userFrom.pass) {
        callback(new Error("两次密码不相同"));
      } else {
        callback();
      }
    };

    return {
      // 表单信息
      userFrom: {
        name: "",
        pass: "",
        checkPass: "",
      },
      // 验证规则
      rules: {
        name: [{ validator: userNameRule, trigger: "blur" }],
        pass: [{ validator: userPassRule, trigger: "blur" }],
        checkPass: [{ validator: userCheckPassRule, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 校验
    submitForm(params) {
      this.$refs[params].validate((vali) => {
        if (vali) {
          //  123465Aa!
          loginApi(this.userFrom).then((res) => {
            // this.$service.post("/login", this.userFrom).then((res) => {
            // this.$axios
            //   .post("http://1.116.64.64:5004/api2/login", this.form)
            //   .then((res) => {
            if (res.data.status === 200) {
              setToken("userName", this.userFrom.name);
              console.log(getToken("userName"));
              setToken("userpass", this.userFrom.pass);
              setToken("token", res.data.token);
              this.$message({ message: res.data.message, type: "success" });
              this.$router.push("/home");
            }
            console.log(res);
          });
        } else {
          console.error(this.params);
        }
      });
    },
  },

  components: {},
};
</script>
<style lang='scss'>
.login {
  display: inline-block;
  width: 100vw;
  height: 100vh;
  background: url("../assets/goodafternoon.jpg") center no-repeat;
  background-size: cover;
  .el-card {
    background: rgb(231, 217, 27);
    opacity: 0.8;
  }
  .box-card {
    box-sizing: border-box;
    width: 40vw;
    min-width: 15.25rem;
    margin: 20vh auto;
    color: blue;
    font-weight: 800;
    label {
      font-weight: 400;
      color: rgb(8, 8, 184);
    }
    .clearfix {
      text-align: center;
      font-size: 2vw;
    }
    .el-button {
      width: 100%;
    }
  }
}
.text {
  font-size: 0.875rem;
}

.item {
  padding: 1.125rem 0;
}

.box-card {
  width: 30rem;
}
</style>