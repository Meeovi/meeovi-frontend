<template>
    <div>
      <v-carousel hide-delimiters show-arrows="hover" :continuous="true">
            <v-carousel-item v-for="pages in data.collections.items" :key="pages.id" :src="`${pages.featuredAsset.preview}`" :alt="pages.name" cover></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
  export default {
      data: () => ({
          url: 'http://meeovicms.com:3000'
      }),
  }
</script>

<script setup>
const query = gql`
  query {
  collections (options: {topLevelOnly: false, filter: {name: {eq: "Homepage-Slider"}}}){
    items {
      name
      featuredAsset {
        id
        preview
      }
    }
  }
}
`
const { data } = await useAsyncQuery(query)

/*const { getItems } = useDirectusItems()

const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Homepage Slider"}} }}); */
</script>