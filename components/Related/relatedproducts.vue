<template>
  <div>
    <h4>Related Products</h4>
    <div v-for="cmsblock in data?.cmsBlocks?.items" :key="cmsblock">
      <div v-html="cmsblock?.content"></div>
    </div>
  </div>
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
query MyQuery {
  cmsBlocks(identifiers: "product-block") {
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