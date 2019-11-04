<template>
  <section v-if="experiences.length !== 0" id="experiences" class="experiences">
    <p class="title is-2 header">Experiences</p>
    <experienceCard
      v-for="(experience, index) in experiences"
      :key="experience.title"
      :experience="experience"
      :index="index % 2"
    />
  </section>
</template>

<script>
import experienceCard from '~/components/experienceCard'
export default {
  components: { experienceCard },
  props: {
    experiences: {
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
.experiences {
  text-align: center;
  margin-top: 2%;
  margin-bottom: 5%;
  animation: 1s ease-out slideInFromBottom;
}
#cards {
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 10%;
  grid-template-columns: 1fr 1fr;
}
</style>
