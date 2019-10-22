<template>
  <section class="main">
    <Intro />
    <Projects :projects="projects" />
    <Contact />
  </section>
</template>

<script>
import Intro from '~/components/Intro'
import Contact from '~/components/Contact'
import Projects from '~/components/Projects'
export default {
  name: 'HomePage',
  components: { Intro, Contact, Projects },
  asyncData() {
    const resolve = require.context(`~/content/projects/`, true, /\.md$/)
    const projects = resolve.keys().map((key) => {
      const [, name] = key.match(/\/(.+)\.md$/)
      return {
        name,
        md: resolve(key)
      }
    })
    const attributes = projects.map((project) => {
      project.md.attributes.name = project.name
      return project.md.attributes
    })
    return {
      projects: attributes
    }
  }
}
</script>

<style>
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#navbar {
  animation: 1s ease-out opacity;
}
</style>

<style scoped>
#main {
  text-align: center;
}
a {
  font-size: 24px;
}
</style>
