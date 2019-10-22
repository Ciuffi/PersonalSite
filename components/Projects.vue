<template>
  <section v-if="projects.length !== 0" class="projects">
    <p class="title is-2 header">Projects</p>
    <div id="cards">
      <card
        v-for="project in projects"
        :key="project.title"
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
  }
}
</script>
<style scoped>
.header {
  color: white;
}
#cards {
  width: 80%;
  margin: auto;
  margin-top: 4%;
}

.projects {
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
}
@media only screen and (max-width: 768px) {
  #cards {
    width: 90%;
  }
}
</style>
