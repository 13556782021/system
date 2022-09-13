<template>
  <div>
    <!-- 这个后退要点两下才能退，目测是刚转到页面时不会默认选中，所以要点两下 -->
    <!-- 解：得把 a 标签默认跳转取消掉 -->
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">后退</button>
    <!-- 拿到 id 是有两种方法的 -->
    <!-- <h4 class="text-center">用户详情---{{this.$route.params.id}}</h4> -->
    <h4 class="text-center">用户详情---{{id}}</h4>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: ['id']
}
</script>

<style lang="less" scoped></style>