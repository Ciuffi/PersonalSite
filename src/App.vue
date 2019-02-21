<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpg">
    <HelloWorld msg="This is Giulio's personal website, a work in progress :)"/>
    <a href="https://github.com/ciuffi">Github: Ciuffi </a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  font-size: 24px;
}
</style>
