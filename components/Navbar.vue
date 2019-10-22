<template>
  <nav
    id="navbar"
    style="background-color: #181a1b;"
    class="navbar is-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-start">
      <a class="navbar-item" @click="scrollOrLink('#intro')">
        Home
      </a>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" @click="scrollOrLink('#projects')">
        projects
      </a>
      <div class="navbar-item">
        <div class="buttons">
          <a class="is-primary" @click="scrollOrLink('#contact')">
            <strong>Contact</strong>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    scrollOrLink(newRoute) {
      if (this.$nuxt.$route.path !== '/') {
        return this.$router.push({
          path: `/${newRoute}`
        })
      } else {
        this.$scrollTo(newRoute)
      }
    }
  }
}
</script>
<style scoped>
@media only screen and (max-width: 768px) {
  #navbar {
    display: none;
  }
}
</style>
