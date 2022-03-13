<template>
  <div class="doctor_register">
    <div class="bImg">
      <span class="log-title">{{ log_title }}</span>
    </div>
    <div class="login-div">
      <div class="login-content">
        <span class="log-name">{{ log_name }}</span>
        <input class="login-input" type="text" placeholder="请输入账号" v-model="userName">
        <i class="fa fa-user"></i>
        <input class="login-input" :type="inputType" placeholder="请输入密码" v-model="userPwd" @keyup.enter="loginHandler">
        <i class="fa fa-lock"></i>
        <i :class="[iconName,'fa']" @click="changePwdType"></i>
        <span class="login-forget">忘记密码？</span>
        <span class="login-btn" @click="loginHandler">登 录</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  name:'Home',
  data () {
    return {
      log_title:'医疗管理后台',
      log_name:'医生登录',
      userName: '',
      userPwd: '',
      inputType: 'password',
      iconName: 'fa-eye',
      isPwdShow: false,
    }

  },
  methods: {

    changePwdType(){
      this.isPwdShow = !this.isPwdShow
      if (this.isPwdShow) {
        this.inputType = 'text'
        this.iconName = 'fa-eye-slash'
      } else {
        this.inputType = 'password'
        this.iconName = 'fa-eye'
      }
    },
    loginHandler() {
      if (this.userName.length > 0 && this.userPwd.length > 0) {
        // 重定向对象不存在则返回顶层路径
        this.$router.replace(this.$route.query.redirect || '/index')
      } else {
        alert("账号密码不能为空")
      }
    }
  },
  created () {
    // 阻止登录页面后退
    history.pushState(null,null, document.URL);
    window.addEventListener('popstate',function(){
      history.pushState(null,null, document.URL);
    });
  }
}
</script>
<style lang="less" scoped>
  @import '../../../../src/components/d2-icon/font-awesome-4.7.0/css/font-awesome.min.css';

  html,body{
    font-size: 15px;
  }
  body, ul, li, dl, dt, dd, p {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  input {
    border: 1px solid #999;
    outline-style: none;
    text-shadow: none;
    text-indent: 5px;
  }
  a {
    text-decoration: none;
  }
  .doctor_register{
    position: relative;
    width: 1040px;
    height: 700px;
    margin: 0 auto;
    .bImg{
      margin-top: 100px  ;
      width: 700px;
      height: 600px;
      position: absolute;
      background: url("./image/login.png");
      background-size: cover;
      z-index: 2;
      .log-title {
        font-size: 25px;
        position: absolute;
        /*margin-top: 100px;*/
        top: 12px;
        left: 275px;
        /*z-index: 3;*/
        color: #fff;
      }
    }
    .login-div {
      /*background-color: red;*/
      width: 600px;
      height: 500px;
      position: absolute;
      background-color: #F5F5F5;
      margin-top: 150px;
      right: 0;
      z-index: 1;
      border-radius: 6px;
    }
    .login-content {
      position: relative;
      width: 300px;
      height: 300px;
      margin-top: 100px;
      margin-left: 250px;
      /*border: 1px solid red;*/
      .log-name{
        font-size: 25px;
        color: rgb(49, 192, 229);
        padding-bottom: 5px;
        border-bottom: 2px solid rgb(49, 192, 229);
      }
      .login-input{
        margin-top: 25px;
        display: block;
        width: 220px;
        height: 40px;
        border-radius: 22px;
        box-shadow: #999 -1px 4px 5px;
        padding-left: 40px;
      }
      i.fa {
        position: absolute;
        color: #777;
      }
      .fa-user {
        top: 75px;
        left: 20px;
        border-right: 1px solid #777;
        padding-right: 5px;
      }
      .fa-lock {
        top: 145px;
        left: 20px;
        border-right: 1px solid #777;
        padding-right: 5px;
      }

      .fa-eye,
      .fa-eye-slash {
        top: 143px;
        left: 235px;
        cursor: pointer;
      }
      .login-forget {
        color: rgb(49, 192, 229);
        font-size: 14px;
        cursor: pointer;
        display: block;
        margin-top: 15px;
      }
      .login-btn {
        background: -webkit-linear-gradient(left, rgb(49, 192, 229), rgb(22, 219, 184));
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, rgb(49, 192, 229), rgb(22, 219, 184));
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, rgb(49, 192, 229), rgb(22, 219, 184));
        /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, rgb(49, 192, 229), rgb(22, 219, 184));
        /* 标准的语法 */
        margin-top: 15px;
        display: block;
        width: 260px;
        height: 40px;
        border-radius: 22px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        line-height: 40px;
        box-shadow: rgb(49, 192, 229) 2px -1px 5px;
      }
    }
  }
</style>
