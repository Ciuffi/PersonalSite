<template>
  <section class="main">
    <intro />
    <contact />
  </section>
</template>

<script>
import Intro from '~/components/Intro'
import Contact from '~/components/Contact'
export default {
  name: 'HomePage',
  components: { Intro, Contact }
}
</script>

<style scoped>
#main {
  text-align: center;
}

a {
  font-size: 24px;
}
</style>
