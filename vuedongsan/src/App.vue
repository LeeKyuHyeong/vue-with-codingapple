<template>
  
  <Modal @closeModal="modalOpen = false;" :selNum="selNum" :content="content" :modalOpen="modalOpen" />

  <div class="menu">
    <a v-for="menu,i in menus" :key="i">
      {{ menu }}
    </a>
  </div>

  <DisCount />

  <Product @openModal="modalOpen = true; selNum = $event;" v-for="(원룸, i) in content" :key="i" :원룸="content[i]" />
  


</template>

<script>

import content from './data/post.js';
import DisCount from './components/DiscountDiv';
import Modal from './components/ModalView';
import Product from './components/ProductView';

export default {
  name: 'App',
  data() {
    return {
      modalOpen : false,
      menus : ["Home", "Shop", "About"],
      fakeCnt : [0, 0, 0],
      content : content,
      selNum : 0,
    }
  },
  methods : {
    changeState() {
      this.modalOpen = !this.modalOpen;
    },
    changeSelNum(num) {
      this.selNum = num;
    },
  },
  components: {
    DisCount : DisCount,
    Modal : Modal,
    Product : Product,
  }
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.discount {
  background: #eee;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 40px;
  color: #d4d4d6;
  background: #000;
}
.menu a:hover {
  opacity: 0.8;
}
</style>
