<template>
  <div class="layout-aside-container">
     <!-- 左测边栏表 -->
     <ul class="user-select-none menu">
        <li class="menu-item">
          <router-link to='/home/'>用户管理</router-link>
        </li>
        <li class="menu-item">
          <router-link to='/home/rights'>权限管理</router-link>
        </li>
        <li class="menu-item">
          <router-link to='/home/goods'>商品管理</router-link>
        </li>
        <li class="menu-item">
          <router-link to='/home/orders'>订单管理</router-link>
        </li>
        <li class="menu-item">
          <router-link to='/home/settings'>系统设置</router-link>
        </li>
     </ul>
  </div>
</template>

<script>
export default {
    name: 'Aside'
}
</script>

<style lang="less" scoped>
  .layout-aside-container {
    width: 250px;
    height: 100%;
    border-right: 1px solid #eaeaea;
  }
  .menu {
    list-style-type: none;
    padding: 0;
    .menu-item {
      line-height: 50px;
      font-weight: bold;
      font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      &:hover {
        background-color: #eaeaea;
        // 光标样式
        cursor: pointer;
      }
      a {
        display: block;
        color: black;
        padding-left: 30px;
        &:hover{
          text-decoration: none;
        }
      }
    }
  }

  // 设置路由高亮
  .router-link-active {
    background-color: #dfefef;
    // 自动计算盒子宽高 border-box 是将边框也算在宽高里面
    box-sizing: border-box;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #42b983;
    }
  }
</style>