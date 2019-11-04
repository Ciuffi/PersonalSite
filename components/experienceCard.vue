<template>
  <nuxt-link :to="`/experiences/${experience.name}`">
    <article :class="`message ${index === 0 ? 'left' : 'right'}`">
      <div
        :style="`background-color: ${experience.bcolor};`"
        class="message-header"
      >
        <p :style="`color: ${experience.color};`">{{ experience.title }}</p>
      </div>
      <div class="message-body">
        {{ experience.description }}
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
  width: 80vw;
  transition-duration: 0.5s;
  margin-bottom: 5%;
}
.message:hover {
  transform: translateX(-30px);
}
.left {
  margin-right: 10%;
}
.left:hover {
  transform: translateX(30px);
}
.right {
  margin-left: 10%;
}
.right:hover {
  transform: translateX(-30px);
}
@media only screen and (max-width: 768px) {
  .message {
    min-width: 80%;
    max-width: 80%;
    margin: 5% auto;
  }
  .message {
    transform: none;
  }
}
</style>
