<template>
  <AppHeader></AppHeader>
  
  <ul class="topic-nav">
    <router-link class="topic-nav-link git-link" to="/git">Git Cheat Sheet</router-link>
    <router-link class="topic-nav-link vue-link" to="/vue">VueJS Cheat Sheet</router-link>
  </ul>

  <router-view></router-view>
  <GitNav></GitNav>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"

export default {
  name: 'App',
  components : {
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

}
#app {
  height: fit-content;
  background-color: #F8FBFF;
  
}
.topic-nav{
  display: flex;
  justify-content: space-evenly;
  margin-block: 20px;
  padding: 0;
}
.topic-nav-link{
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 8px;
}
.git-link{
  background-color: #D8E3E7;
  color: #126E82;
}
.vue-link{
  background-color: #d9e7d8;
  color: #238212;
}

</style>
