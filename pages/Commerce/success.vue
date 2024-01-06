<template>
  <section class="contentPage flex flex-col align-center md:mt-16 mb-8" v-for="pages in pages" :key="pages">
    <img :src="`${url}assets/${pages.image.filename_disk}`" :alt="pages.name">
    <p class="mt-8 text-center" v-html="pages.content"></p>
    <v-btn color="green" prepend-icon="fas fa-shopping-cart" href="/">Continue Shopping</v-btn>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        url: process.env.DIRECTUS_URL,
      }
    },
  }
</script>

<script setup>
  const {
    getItems
  } = useDirectusItems()

  const pages = await getItems({
    collection: "pages",
    params: {
      filter: {
        name: {
          _eq: "Success"
        }
      }
    }
  });
/*import query from '../../apollo/Custom/Queries/success'

const { data } = await useAsyncQuery(query)*/

    useHead({
        title: 'Order Success'
    })
</script>
