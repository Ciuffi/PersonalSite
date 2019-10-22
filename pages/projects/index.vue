<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in projects" :key="post.attributes.title">
        <p>Post: {{ post.attributes.title }}</p>
        <nuxt-link to="#"></nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  asyncData() {
    const resolve = require.context(`~/content/projects/`, true, /\.md$/)
    const projects = resolve.keys().map((key) => {
      key.match(/\/(.+)\.md$/)
      return resolve(key)
    })
    return {
      projects
    }
  }
}
</script>
