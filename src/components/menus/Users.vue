<template>
<!-- 标题 -->
  <h4 class="text-center">用户管理</h4>
    
    <!-- 用户列表 -->
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">姓名</th>
      <th scope="col">年龄</th>
      <th scope="col">操作</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in userlist" :key="item.id">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.name }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.position }}</td>
      <td>
        <a href="#" @click.prevent="onuserinfo(item.id)">详情</a>
      </td>
    </tr>
   
  </tbody>
</table>
    
</template>

<script>
export default {
    name: "User",
    data(){
        return {
            userlist: [
            { id: 1, name: '嬴政', age: 18, position: '始皇帝' },
            { id: 2, name: '李斯', age: 35, position: '丞相' },
            { id: 3, name: '吕不韦', age: 50, position: '商人' },
            { id: 4, name: '赵姬', age: 48, position: '王太后' }
            ]
        }
    },
    methods: {
      onuserinfo(id) {
        this.$router.push('/home/userinfo/'+ id)
      }
    }
}
</script>

<style lang='less' scoped>

</style>