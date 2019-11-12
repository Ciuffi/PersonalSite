<template>
  <nuxt-link :to="`/experiences/${experience.name}`">
    <article class="message">
      <div
        :style="`background-color: ${experience.bcolor};`"
        class="message-header"
      >
        <p :style="`color: ${experience.color};`">{{ experience.title }}</p>
      </div>
      <div class="message-body">
        <span v-line-clamp="4">
          {{ experience.description }}
        </span>
        <br />
        <nuxt-link :to="`/experiences/${experience.name}`">
          Read More
        </nuxt-link>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style scoped>
.message {
  display: inline-block;
  margin: auto;
  width: 100%;
  height: 100%;
  transition-duration: 0.5s;
  margin-bottom: 5%;
}
.message:hover {
  transform: translateY(-30px);
}
@media only screen and (max-width: 768px) {
  .message {
    margin: 5% auto;
    width: 80%;
  }
  .message:hover {
    transform: none;
  }
}
</style>
