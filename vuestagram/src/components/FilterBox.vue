<template>
  <div
    :style="`background-image: url(${url})`"
    :class="`${filter} filter`"
    @click="fire"
  ></div>
</template>

<script>
export default {
  props: {
    url: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit("sendFilter", this.filter);
    },
  },
};
</script>

<style>
</style>