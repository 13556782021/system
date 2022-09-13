<template>
  <div class="home-container">
      <Header></Header>
    <div class="home-main-box">
      <Aside></Aside>
      <div class="home-main-body">
          <router-view></router-view>
      </div>
    </div>
  
    
  </div>
</template>

<script>
import Header from "./subcomponents/Header.vue"
import Aside from "./subcomponents/Aside.vue"
export default {
    name: 'Home',
    components: { Header, Aside}
}
</script>

<style lang='less' scoped>
    .home-container {
      height: 100%;
      display: flex;
      // column 让盒子们垂直放置
      flex-direction: column;

      .home-main-box {
        height: 100%;
        display: flex;
        .home-main-body {
          padding: 15px;
          flex: 1;
        }
      }
    }
</style>