<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="검색" />
    <div class="post-header" v-for="info in follower" :key="info.id">
      <div
        class="profile"
        :style="`background-image: url(${info.image})`"
      ></div>
      <span class="profile-name">{{ info.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  props: {
    step: Number,
  },
  setup() {
    let follower = ref([]);
    let followerOriginal = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    function search(e) {
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(e) != -1;
      });
      follower.value = [...newFollower];
    }
    return { follower, search };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>