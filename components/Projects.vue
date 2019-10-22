<template>
  <section v-if="projects.length !== 0" id="projects" class="projects">
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
  width: 80%;
  margin: auto;
  margin-top: 4%;
  display: flex;
}

.projects {
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
  animation: 1s ease-out slideInFromBottom;
}
@media only screen and (max-width: 768px) {
  #cards {
    width: 90%;
    display: inline-block;
  }
}
</style>
