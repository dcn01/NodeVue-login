<template>
  <div class="content">
    <div class="abbox">
      <h3>登录成功,欢迎进入</h3>
      <a href="https://github.com/dillonleader" target="_blank">demo地址</a>
      <h5>
        还有
        <h1>30</h1>秒离开此页面
      </h5>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  created(){
    this.countDown();
  },
  methods: {
    countDown() {
        var _this = this
      var t = 30;
      function times() {
        t--;
        $("h1").text(t);
        if (t == 0) {
          clearInterval(setime);
          $("h1").text("30");
          _this.$router.push('/login')

        }
      }
      var setime = setInterval(times, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background: url(../assets/xz.gif);
}
.abbox {
  width: 300px;
  height: 200px;
  background: #41dd97;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;text-align: center;
  left: 0;
  margin: auto;
  border-radius: 8px;
  a{color: #fff;text-decoration: none;}
  h3 {
    text-align: center;
    padding: 20px 0;
    color: #333;
  }
  h5 {
    text-align: center;
    padding: 30px 0 0 0;
    color: #eeeeee;
  }
}
</style>