<template>
  <section v-if="experiences.length !== 0" id="experiences" class="experiences">
    <p class="title is-2 header">Experiences 💻</p>
    <div class="columns is-multiline is-centered is-desktop">
      <experienceCard
        v-for="(experience, index) in experiences"
        :key="experience.title"
        :experience="experience"
        :index="index % 2"
        class="column"
      />
    </div>
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
  margin-bottom: 4%;
}
.experiences {
  text-align: center;
  margin: 0 2%;
  margin-top: 2%;
  margin-bottom: 5%;
  animation: 1s ease-out slideInFromBottom;
}
</style>
