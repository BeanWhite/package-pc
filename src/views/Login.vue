<template>
  <div class="login">
    <div class="form-title" style="margin-bottom: 30px;">
      <span style="color: white;">神经心理辅助诊疗系统</span>
    </div>
    <input type="text" v-model="user.id" id="user" placeholder="账号" class="login-block login-input" />
    <input
      type="password"
      v-model="user.pwd"
      id="pwd"
      placeholder="密码"
      class="login-block login-input"
    />
    <input type="button" class="login-block login-buttom" value="登录" @click="submitForm()" />
  </div>
</template>

<script>
import apiData from "../assets/apiData";

export default {
  data() {
    return {
      user: {
        id: "",
        pwd: ""
      }
    };
  },
  methods: {
    //使用async+await将请求同步化，原因：axios请求方式为Promis异步请求
    submitForm: async function() {
      var b = await apiData.banner.post(this.user, "/login/doc");
      b = b.data;
      if (b.msg == "登录成功") {
        //
        this.$router.replace("/home");
      } else {
        //
      }
      console.log(b);
      console.log(b.msg)
      // this.$router.replace('/about')
    }
  }
};
</script>

<style scoped lang="less">
.login {
  position: absolute;
  width: 100%;
  height: 340px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
input::placeholder {
  text-align: center;
  color: rgb(102, 165, 219);
}
.login-block {
  width: 330px;
  height: 60px;
}

.login-input {
  display: inline-block;
  outline: none;
  background-color: rgba(255, 255, 255, 0.45);
  border-color: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  color: rgb(102, 165, 219);
  border-radius: 5px;
  font-size: 20px;
  padding: 0px;
  text-align: center;
  line-height: 40px;
  font-weight: normal;
  font-style: normal;
  opacity: 1;
}
.login-buttom {
  display: inline-block;
  outline: none;
  border-width: 1px;
  color: rgb(255, 255, 255);
  border-style: solid;
  background-color: rgb(102, 165, 219);
  border-color: rgb(102, 165, 219);
  border-radius: 5px;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  opacity: 1;
}
.login-buttom:hover {
  background-color: rgb(15, 127, 223);
}
.form-title {
  font-size: 50px;
  color: rgba(16, 112, 193, 1);
}
.exit {
  position: fixed;
  right: 20px;
  top: 20px;
}
</style>