<template>
  <div>
  <transition name="modalUi">
    <Modal @closeModal="modalOpen = false;" :selNum="selNum" :content="contentChange" :modalOpen="modalOpen" />
  </transition>


  <div class="menu">
    <a v-for="menu,i in menus" :key="i">
      {{ menu }}
    </a>
  </div>

  <Discount v-if="showDiscount" :discountNum="discountNum"/>

  <button @click="sortPrice">가격오름차순</button>
  <button @click="reverseSortPrice">가격내림차순</button>
  <button @click="sortTitle">제목내림차순</button>
  <button @click="sortBack">되돌리기</button>

  <Product @openModal="modalOpen = true; selNum = $event;" v-for="(원룸, i) in contentChange" :key="i" :원룸="contentChange[i]" />
  

</div>
</template>

<script>

import content from './data/post.js';
import Discount from './components/DiscountDiv';
import Modal from './components/ModalView';
import Product from './components/ProductView';

export default {
  name: 'App',
  data() {
    return {
      contentOrigin : [...content],
      modalOpen : false,
      showDiscount : true,
      menus : ["Home", "Shop", "About"],
      fakeCnt : [0, 0, 0],
      contentChange : content,
      selNum : 0,
      discountNum : 20,
    }
  },
  methods : {
    changeState() {
      this.modalOpen = !this.modalOpen;
    },
    changeSelNum(num) {
      this.selNum = num;
    },
    sortBack() {
      this.contentChange = [...this.contentOrigin];
    },
    sortPrice() {
      this.contentChange.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    sortTitle() {
      this.contentChange.sort(function(a, b) {
        // return a.title - b.title;
        return a.title.localeCompare(b.title);
      });
    },
    reverseSortPrice() {
      this.contentChange.sort(function(a, b) {
        return b.price - a.price;
      });
    },
  },

  created() {

  },

  mounted() {
    setInterval(() => {this.discountNum--;}, 1000);
  },

  components: {
    Discount : Discount,
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
.modalUi-enter-from {
  /* 시작 */
  transform: translateY(-100vh);
}
.modalUi-enter-active {
  transition: all 1s;
}
.modalUi-enter-to {
  /* 끝 */
  transform: translateY(0vh);
}
.modalUi-leave-from {
  /* 시작 */
  scale: 1;
}
.modalUi-leave-active {
  transition: all 1s;
}
.modalUi-leave-to {
  /* 끝 */
  scale: 0;
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
