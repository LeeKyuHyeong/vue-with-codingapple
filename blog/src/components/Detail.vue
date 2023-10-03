<template>
  $route.params.id
  <div>
    <h4>상세 페이지</h4>
    <h5>{{ Projects[$route.params.id].title }}</h5>
    <p>{{ Projects[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
  },
  props : {
    Projects : Array,
  }
}
</script>

<style>

</style>