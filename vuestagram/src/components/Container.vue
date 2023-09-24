
<template>
  <div>
    <div class="page1" v-if="step == 1">
      <Post v-for="(info, i) in userInfo" :key="i" :info="info" :i="i" />
      <!-- <Post :userInfo="userInfo[0]" /> -->
    </div>

    <div class="page2" v-if="step == 2">
      <div
        :class="filter"
        class="upload-image"
        :style="{ backgroundImage: `url(${url})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="(filter, i) in filters"
          :key="i"
          :url="url"
          :filter="filter"
        >
          {{ filter }}</FilterBox
        >
      </div>
    </div>

    <div class="page3" v-if="step == 3">
      <div
        :class="filter"
        class="upload-image"
        :style="`background-image:url(${url})`"
      ></div>
      <div class="write">
        <textarea @input="textVal" class="write-box">write!</textarea>
      </div>
    </div>

    <div v-if="step == 4">
      <MyPage :step="step" />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";
import filters from "../assets/filters";
import followers from "../assets/followers";

export default {
  name: "Container",
  data() {
    return {
      filters: filters,
      followers: followers,
    };
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  props: {
    userInfo: Array,
    step: Number,
    url: String,
    filter: String,
  },
  methods: {
    textVal(e) {
      let cont = e.target.value;
      this.$emit("setCont", cont);
    },
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: #000;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>