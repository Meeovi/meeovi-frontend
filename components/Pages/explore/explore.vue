<template>
  <div>
    <v-toolbar title="Explore" color="green"></v-toolbar>
    <div v-for="(cmspage, index) in data" :key="index">
      <div v-html="cmspage.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       // url: process.env.DIRECTUS_URL,
      }
    }
  }
</script>

<script setup>
const query = gql `
query {
  cmsPage (identifier: "Explore"){
    content
  }
}`

  const {
    data
  } = useAsyncQuery(query);

  useHead({
    title: 'Explore'
  })
</script>