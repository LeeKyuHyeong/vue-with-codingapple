
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">게시판</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">내정보</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>


  <router-view :Projects="Projects"></router-view>

</template>

<script>
import Projects from './assets/projects';


export default {
  name: 'App',
  data() {
    return {
      Projects : Projects,
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.Card {
  width: 100%;
  height: 200px;
  line-height: 50px;
  background: #000;
  color: #fff;
  padding-top: 20px;
  margin-bottom: 20px;
}
</style>
