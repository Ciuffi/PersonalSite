<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'

export default {
  components: { Navbar }
}
</script>
<style>
html {
  background-color: #181a1b;
}
p,
h1,
h2,
h3,
h4 {
  color: white;
}
</style>
