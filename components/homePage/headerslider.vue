<template>
    <div>
        <v-carousel v-for="pages in pages" :key="pages.id">
            <img :src="`${url}/assets/${pages.image}`" :alt="pages.name" cover />
        </v-carousel>
    </div>
</template>

<script>
  export default {
      data: () => ({
          url: 'http://meeovicms.com:8011'
      }),
  }
</script>

<script setup>
const { getItems } = useDirectusItems()

const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Homepage Slider"}} }});
</script>