<template>
    <div>
      <v-carousel hide-delimiters show-arrows="hover" :continuous="true" v-for="pages in data.pages" :key="pages.id">
            <v-carousel-item :src="`${url}assets/${pages.image.filename_disk}`" :alt="pages.name" cover></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
  export default {
      data: () => ({
        url: process.env.DIRECTUS_URL,
      }),
  }
</script>

<script setup>
const query = gql`
query {
    pages (search: "homepage slider") {
      id
      status
      sort
      name
      content
      link
      image {
        filename_disk
      }
      list
      type
      date_created
    }
  }
`
const { data } = await useAsyncQuery(query)

/*const { getItems } = useDirectusItems()

const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Homepage Slider"}} }}); */
</script>