<template>
  <div class="nav container">
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
          Projects
        </a>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-success" @click="scrollOrLink('#contact')">
              <strong>Contact</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <nav id="navbar" class="is-dark mobileNavbar">
      <div class="start">
        <div class="navbar-item">
          <div class="buttons">
            <a class="navitem" @click="scrollOrLink('#intro')">
              Home
            </a>
          </div>
        </div>
      </div>
      <div class="end">
        <div class="navbar-item">
          <a class="navitem" @click="scrollOrLink('#projects')">
            Projects
          </a>
          <span class="vl"></span>
          <a class="navitem" @click="scrollOrLink('#contact')">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </div>
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
.vl {
  border: 1.2px solid white;
  height: 10px;
  width: 0px;
  margin-right: 1%;
}
.start {
  width: 50%;
  margin-right: 0;
}
.end {
  display: inline-block;
  width: 60%;
  text-align: right;
  line-height: 12px;
}
.navitem {
  margin: 2% 2%;
  color: white;
  user-select: none;
}
.mobileNavbar {
  display: none;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0%;
  z-index: 20;
  background-color: #181a1b;
  color: white;
}
@media only screen and (max-width: 1000px) {
  .navbar {
    display: none;
  }
  .mobileNavbar {
    display: flex;
  }
}
</style>
