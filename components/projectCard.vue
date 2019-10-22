<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img class="mainImage" :src="image" :alt="`${project.title} image`" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ project.title }}</p>
        </div>
      </div>
      <div class="content">
        {{ project.description }}
        <br />
        <a :href="`projects/${project.name}`">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    image() {
      return require(`../assets/${this.project.image}`)
    }
  }
}
</script>
<style scoped>
.mainImage {
  object-fit: cover;
}
.card {
  margin: auto;
  min-width: 40vw;
  max-width: 60vw;
  transition-duration: 0.5s;
}
.card:hover {
  transform: translateY(-30px);
}
@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>
