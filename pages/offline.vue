<template>
  <section class="flex flex-col items-center md:mt-16 mb-8" v-for="pages in data.pages" :key="pages">
    <img :src="pages.image.filename_disk" :alt="pages.name">
    <p class="mt-8 text-center" v-html="pages.content"></p>
  </section>
</template>

<script>
export default {
  
}
</script>

<script setup>
    useHead({
        title: 'You are Offline'
    })

const query = gql`
  query {
    pages (filter: {name: {_starts_with: "InternetConnection"}}) {
      id
      status
      sort
      name
      content
      link
      list
      image {
        filename_disk
      }
      type
      date_created
    }
  }
`
const { data } = await useAsyncQuery(query)
</script>
