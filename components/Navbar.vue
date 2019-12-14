<template>
  <div class="nav container">
    <nav
      id="navbar"
      style="background-color: #181a1b;"
      class="navbar is-dark is-fixed-top"
      :class="{ visible: visible }"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-start">
        <img class="navbar-item logo" src="~/assets/logo.png" alt="logo" />
        <a class="navbar-item" @click="scrollOrLink('#intro')">
          Home
        </a>
      </div>
      <div class="navbar-end">
        <a class="navbar-item" @click="scrollOrLink('#experiences')">
          Experiences
        </a>
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
    <nav id="navbar" :class="{ visible: visible }" class="is-dark mobileNavbar">
      <div class="start">
        <a class="navitem" @click="scrollOrLink('#intro')">
          Home
        </a>
      </div>
      <div class="end">
        <a class="navitem" @click="scrollOrLink('#experiences')">
          Experiences
        </a>
        <a class="navitem" @click="scrollOrLink('#projects')">
          Projects
        </a>
        <span class="vl"></span>
        <a class="navitem" @click="scrollOrLink('#contact')">
          Contact
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll())
  },
  methods: {
    handleScroll() {
      let lastScroll = 0
      return (event) => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop
        scroll = scroll > 0 ? scroll : 0
        if (scroll > lastScroll) {
          this.visible = false
        } else {
          this.visible = true
        }
        lastScroll = scroll
      }
    },
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
.navbar {
  opacity: 0;
  transition-duration: 0.5s;
}
.logo {
  width: 10%;
  height: 100%;
}
.vl {
  border: 1.5px solid white;
  height: 10px;
  width: 0px;
  margin-right: 1%;
}
.start {
  display: inline-block;
  width: 10%;
  margin: auto 2%;
}
.end {
  display: inline-block;
  width: 90%;
  text-align: right;
  margin: auto;
}
.navitem {
  height: 100%;
  margin: auto 2%;
  color: white;
  user-select: none;
}
.mobileNavbar {
  opacity: 0;
  transition-duration: 0.5s;
  display: none;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0%;
  z-index: 20;
  background-color: #181a1b;
  color: white;
}
.visible {
  opacity: 1;
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
