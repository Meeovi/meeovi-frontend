<template>
  <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
    <h4>Latest Products</h4>
    <div v-for="(cmsblock, index) in data" :key="index">
      <div v-html="cmsblock.content"></div>
    </div>
  </v-sheet>
</template>

<script>
  import productCard from '../Pages/commerce/productCard.vue'

  export default {
    components: {
      productCard
    },
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
const query = gql `
query {
  cmsBlocks(identifiers: "new-block") {
    items {
      content
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
</script>