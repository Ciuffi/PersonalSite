<template>
  <article :class="`message ${index === 1 ? 'left' : 'right'}`">
    <div
      :style="`background-color: ${experience.bcolor};`"
      class="message-header"
    >
      <p :style="`color: ${experience.color};`">{{ experience.title }}</p>
    </div>
    <div class="message-body">
      {{ experience.description }}
    </div>
  </article>
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
  margin: auto;
  min-width: 30vw;
  max-width: 40vw;
  transition-duration: 0.5s;
}
.message:hover {
  transform: translateX(-30px);
}
.left {
  margin-right: 52%;
}
.left:hover {
  transform: translateX(30px);
}
.right {
  margin-left: 52%;
}
.right:hover {
  transform: translateX(-30px);
}
</style>
