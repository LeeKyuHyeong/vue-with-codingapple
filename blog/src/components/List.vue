<template>
  <div class="Card" v-for="(project) in Projects" :key="project.number">
    <router-link to="/detail"><h5>{{ project.title }}</h5></router-link>
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