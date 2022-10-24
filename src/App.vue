<template>
  <todo-list/>
</template>

<script>
// Here for importing components
import TodoList from "./components/TodoList.vue"

export default {
  name: 'App',
  components: {
    TodoList : TodoList
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

}
#app {
  border: 2px solid green;
  
}
</style>
