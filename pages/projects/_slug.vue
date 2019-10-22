<template>
  <div>
    <section id="project">
      <div id="Background"><img :src="image" /></div>
      <div id="textDiv">
        {{ project.attributes.title }}
      </div>
    </section>
    <section class="markDown">
      <div class="content customColours" v-html="project.html"></div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    image() {
      return require(`../../assets/${this.project.attributes.image}`)
    }
  },
  async asyncData({ params }) {
    try {
      const project = await import(`~/content/projects/${params.slug}.md`)
      return {
        project
      }
    } catch (err) {
      return false
    }
  }
}
</script>
<style>
.content {
  width: 90%;
  margin: 3% auto;
}
code,
pre {
  background-color: #2d2d2d;
  font-weight: bold;
  color: #eeee;
}
.customColours > h1,
.customColours > h2,
p,
h2,
h3,
h4,
li {
  color: #eeee;
}
strong {
  color: white;
}
@media only screen and (max-width: 768px) {
  .content {
    width: 95%;
    margin: auto;
  }
}
</style>
<style scoped>
#project {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  height: 60vh;
  position: relative;
  margin-bottom: 1%;
}
h1 {
  color: white;
}
#Background > img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border: 2px solid inherit;
  border-radius: 25px;
}
#textDiv {
  position: absolute;
  font-size: 2em;
  overflow: hidden;
  bottom: 2vh;
  left: 2vh;
  z-index: 5;
  background-color: #181a1b;
  border: 1px solid inherit;
  border-radius: 50px;
  min-width: 20vw;
  padding: 0 2%;
  line-height: 10vh;
  color: white;
}
.markDown {
  border: 2px solid white;
  border-radius: 25px;
  width: 90%;
  margin: auto;
}
@media only screen and (max-width: 768px) {
  .markDown {
    width: 100%;
  }
}
</style>
