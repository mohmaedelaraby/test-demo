<template>
<div>
  <NavBar></NavBar>
  <MultiSelection></MultiSelection>
  <CalanderV></CalanderV>
</div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import MultiSelection from './components/MultiSelection.vue';
import CalanderV from './components/CalanderV.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    MultiSelection,
    CalanderV
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
body{
  margin: 0px;
}
.homePage{
  background-color: blue;
}
</style>
