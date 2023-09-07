<template>

  <div v-if="modalOpen" class="black-bg">
    <div class="white-bg">
      <button v-on:click="changeState">닫기</button>
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
    </div>
  </div>

  
  <div class="menu">
    <a v-for="menu,i in menus" :key="i">
      {{ menu }}
    </a>
  </div>
  
  <div v-for="img, i in imgPath" :key="i">
    <img :src="img">
    <h4 v-on:click="changeState">{{ content[i].title }}</h4>
    <p>{{ prices[i] }} 만원</p>
  </div>
</template>

<script>

import content from './data/post.js';
console.log(content);

export default {
  name: 'App',
  data() {
    return {
      modalOpen : false,
      menus : ["Home", "Shop", "About"],
      imgPath : [require("./assets/room0.jpg"), require("./assets/room1.jpg"), require("./assets/room2.jpg")],
      prices : [60, 70, 80],
      fakeCnt : [0, 0, 0],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      content : content,
    }
  },
  methods : {
    addFakeCnt(num) {
      this.fakeCnt[num]++;
    },
    changeState() {
      this.modalOpen = !this.modalOpen;
    }
  },
  components: {
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
