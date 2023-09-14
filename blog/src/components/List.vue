<template>
  <div class="Card" v-for="(project) in Projects" :key="project.number">
    <h5>{{ project.title }}</h5>
    <span>{{ project.content }}</span>
    <p>{{ project.date }}</p>
  </div>
</template>

<script>
export default {
  name : 'List',
  props : {
    Projects : Array,
  }

}
</script>

<style>

</style>