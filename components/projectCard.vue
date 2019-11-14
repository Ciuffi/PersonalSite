<template>
  <nuxt-link :to="`/projects/${project.name}`">
    <div class="card">
      <header
        :style="project.bcolor ? `background-color: ${project.bcolor};` : ''"
        class="card-header"
      >
        <span class="header-image">
          <img :src="langImage" alt="language image" />
        </span>
        <p
          :style="project.color ? `color: ${project.color};` : ''"
          :class="`title is-5 ${project.lang ? 'language' : ''}`"
        >
          {{ project.lang || '' }}
        </p>
      </header>
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
          <span v-line-clamp="2" style="word-break: normal;">
            {{ project.description }}
          </span>
          <br />
          <nuxt-link :to="`/projects/${project.name}`">Read More</nuxt-link>
        </div>
      </div>
    </div>
  </nuxt-link>
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
    },
    langImage() {
      return require(`../assets/${this.project.limage}`)
    }
  }
}
</script>
<style scoped>
.header-image {
  margin: 1% 2%;
  width: 5%;
}
.language {
  margin: auto 0;
}
.mainImage {
  object-fit: cover;
}
.card {
  margin: 2%;
  min-width: 30vw;
  max-width: 35vw;
  transition-duration: 0.5s;
}
.card:hover {
  transform: translateY(-30px);
}
@media only screen and (max-width: 768px) {
  .card {
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 8%;
  }
  .card:hover {
    transform: none;
  }
}
</style>
