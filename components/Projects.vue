<template>
  <section v-if="projects.length !== 0" id="projects" class="projects">
    <p class="title is-2 header">Projects</p>
    <div id="cards" class="columns is-desktop is-multiline is-centered">
      <card
        v-for="project in sortedProjects"
        :key="project.title"
        class="column is-one-third"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import card from '~/components/projectCard'
export default {
  components: { card },
  props: {
    projects: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      visible: true
    }
  },
  computed: {
    sortedProjects() {
      const sortedProjects = [...this.projects]
      return sortedProjects.sort((x, y) => {
        if (x.weight < y.weight) return 1
        if (x.weight > y.weight) return -1
        if (x.weight === y.weight) return 0
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll())
  },
  methods: {
    handleScroll() {
      let lastScroll = 0
      return (event) => {
        const scroll = window.pageYOffset || document.documentElement.scrollTop
        if (scroll > lastScroll) {
          this.visible = false
        } else {
          this.visible = true
        }
        lastScroll = scroll
      }
    }
  }
}
</script>
<style scoped>
@keyframes slideInFromBottom {
  0% {
    transform: translateY(25%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.header {
  color: white;
}
#cards {
  width: 100%;
  margin: auto;
  margin-top: 4%;
  /* display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 1%;
  grid-template-columns: 1fr 1fr 1fr; */
}

.projects {
  text-align: center;
  margin: 2% 2%;
  animation: 1s ease-out slideInFromBottom;
}
@media only screen and (max-width: 768px) {
  #cards {
    width: 90%;
    display: inline-block;
  }
}
</style>
