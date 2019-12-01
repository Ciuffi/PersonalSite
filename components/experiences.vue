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
    <a
      class="button is-rounded resume"
      :class="hover ? 'is-black' : ''"
      href="/giulio-rossi-resume.pdf"
      rel="noopener"
      target="_blank"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      >Check out my Resume. <span class="emoji">📝</span></a
    >
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
  },
  data() {
    return { hover: false }
  }
}
</script>
<style scoped>
@keyframes slideInFromBottom {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

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
.resume {
  font-size: 1.25em;
  margin: 3%;
  margin-bottom: 1%;
  transition-duration: 0.5s;
}
.emoji {
  font-size: 1.35em;
  margin-left: 0.25em;
}
</style>
