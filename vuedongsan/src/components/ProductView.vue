<template>
  <div >
    <img :src="원룸.image" class="main-img">
    <!-- <h4 v-on:click="this.modalOpen = !this.modalOpen; selNum=i">{{ b.title }}</h4> -->
    <!-- <h4 v-on:click="changeState(), changeSelNum(i)">{{ 원룸.title }}</h4> -->
    <h4 @click="$emit('openModal', 원룸.id)">{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }} 원</p>
  </div>
</template>

<script>
export default {
  name: 'ProductView',
  props: {
    원룸: Object,
    showNum: Number,
  }
}
</script>

<style>
  .main-img {
    width: 100%;
  }
</style>