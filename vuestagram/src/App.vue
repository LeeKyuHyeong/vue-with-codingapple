
<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step = 1">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 2" @click="step++">Next</li>
      <li v-if="step == 3" @click="addPost">등록</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <div class="sub-menu">
    <button class="sub" @click="setStep(1)">page1</button>
    <button class="sub" @click="setStep(2)">page2</button>
    <button class="sub" @click="setStep(3)">page3</button>
  </div>

  <Container :userInfo="userInfo" :step="step" :url="url" @setCont="setCont" />

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import userInfo from "./assets/info.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      userInfo: userInfo,
      step: 1,
      url: "",
      cont: "",
    };
  },
  components: {
    Container,
  },
  methods: {
    additionalInfo(num) {
      axios
        .get(`https://codingapple1.github.io/vue/more${num}.json`)
        .then((data) => {
          console.log(data.data);
          this.userInfo.push(data.data);
        });
    },
    setStep(num) {
      this.step = num;
    },
    upload(e) {
      console.log(e.target.files);
      let url = URL.createObjectURL(e.target.files[0]);

      console.log(url);
      this.url = url;
      this.setStep(2);
    },
    addPost() {
      var myData = {
        name: "Positive_Lee",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.url,
        likes: 0,
        date: "Aug 18",
        liked: false,
        content: this.cont,
        filter: "perpetua",
      };
      this.userInfo.unshift(myData);
      this.step = 1;
    },
    setCont(val) {
      this.cont = val;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.sub-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
.btn-tap {
  width: 100px;
  height: 35px;
  border: none;
  padding: 5px;
}
.btn-tap.active {
  border: 1px solid #d4d4d6;
  background: #000;
  color: #fff;
}
.cont {
  opacity: 0;
}
.cont.active {
  opacity: 1;
}
</style>
