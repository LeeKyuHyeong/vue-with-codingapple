<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${info.userImage})` }"
      ></div>
      <span class="profile-name">{{ info.name }}</span>
    </div>
    <div
      :class="info.filter"
      class="post-body"
      :style="{ backgroundImage: `url(${info.postImage})` }"
    ></div>
    <div class="post-content">
      <p @click="$store.commit('changeLikes', this.i)">
        <!-- {{ info.likes }} Likes -->
        {{ $store.state.likes[this.i] }} Likes
      </p>
      <p>
        <strong>{{ info.name }}</strong> {{ info.content }}
      </p>
      <p class="date">{{ info.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    info: Object,
    i: Number,
  },
  methods: {},
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>