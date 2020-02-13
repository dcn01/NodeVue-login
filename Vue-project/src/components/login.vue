<template>
  <div class="content">
    <el-form :model="ruleForm" :rules="formVall" ref="loginRef">
      <el-form-item prop="user">
        <el-input v-model="ruleForm.user" prefix-icon="iconfont icon-user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="ruleForm.pwd"
          type="password"
          show-password
          placeholder="密码"
          prefix-icon="iconfont icon-mimacopy"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
        <router-link
          type="warning"
          tag="button"
          to="/register"
          class="el-button el-button--warning"
        >去注册</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: { user: "", pwd: "" },
      formVall: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 18, min: 4, message: "用户名长度不对", trigger: "blur" }
        ],
        pwd: [
          { max: 18, min: 6, message: "密码长度不对", trigger: "blur" },
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) {
          return;
        }
        const { data: res } = await this.$http.post("login", this.ruleForm);
        if (res.code == -1) {
          return this.$message.error("登录失败");
        }
          this.$message.success("登录成功");
          var tokens = window.sessionStorage
          tokens.setItem("token",res.token)
          this.$router.push('/success')
      });
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 400px;
  height: 210px;
  border-radius: 10px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 0px 15px;
  .el-form {
    margin-top: 25px;
    .el-form-item {
      text-align: center;
    }
  }
}
</style>