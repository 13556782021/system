<template>
    <div class="login-container">
        <div class="login-box">
          <!-- 头像区域 -->
          <!-- <div class="text-center avatar-box">
            <img src="../assets/logo.png" alt="" class="img-thumbnail avatar" >
          </div> -->

          <!-- 表单区域 -->
          <div class="form-login p-4">
            <!-- 登录名称 -->
            <div class="form-group form-inline">
              <label for="username">登录名称</label>
              <input type="text" class="form-control ml-2" id="username" placeholder="请输入登录名称" autocomplete="off" v-model="username">
            </div>
            <!-- 登录密码 -->
            <div class="form-group form-inline">
              <label for="password">登录密码</label>
              <input type="password" class="form-control ml-2" id="password" placeholder="请输入登录密码" v-model="password">
            </div>
            <!-- 登录和重置按钮 -->
            <div class="form-group form-inline d-flex justify-content-end">
                <button type="button" class="btn btn-outline-info mr-2" @click="onanew">重置</button>
                <button type="button" class="btn btn-outline-primary" @click="onlogin">登录</button>
            </div>
          </div>
          
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
      return {
        password: '',
        username: '',
      }
    },
    methods: {
      onlogin(){
        if(this.username === "admin" || this.password === '123456') {
            localStorage.setItem('token', 'Bearer xxxx')
              this.$router.push('/home')
        }else {
          localStorage.removeItem('token')
          alert("请输入正确密码")
          this.username = ''
          this.password = ''
          return
        }
      },
      onanew() {
        this.username = ''
        this.password = ''
      }
    },



    // beforeCreate () {
    // document.querySelector('body').setAttribute('style', 'background:#35495e')
    // },
    // beforeDestroy () {
    // document.querySelector('body').removeAttribute('style')
    // }
}
</script>

<style lang='less' scoped>
  .login-container{
    height: 1000px;
    width: 1519px;
    // background-color: #35495e;
    background-image: url("../assets/beijing.png");
    .login-box{
      width: 400px;
      height: 250px;
      color: #efefef;
      background-color: rgba(18, 15, 15, 0.5);
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      // box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
      .form-login {
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
      }
  }
}

.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>