<template>
  <section class="main">
    <Intro />
    <Experiences :experiences="experiences" />
    <Projects :projects="projects" />
    <Contact />
  </section>
</template>

<script>
import Intro from '~/components/Intro'
import Contact from '~/components/Contact'
import Projects from '~/components/Projects'
import Experiences from '~/components/experiences'
export default {
  name: 'HomePage',
  components: { Intro, Contact, Projects, Experiences },
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
    const experiencesResolve = require.context(
      `~/content/experiences/`,
      true,
      /\.md$/
    )
    const experiences = experiencesResolve.keys().map((key) => {
      const [, name] = key.match(/\/(.+)\.md$/)
      return {
        name,
        md: experiencesResolve(key)
      }
    })
    const Experiencesattributes = experiences.map((project) => {
      project.md.attributes.name = project.name
      return project.md.attributes
    })
    return {
      projects: attributes,
      experiences: Experiencesattributes
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
