<template>
  <section class="flex flex-col items-center md:mt-16 mb-8" v-for="pages in pages" :key="pages">
    <img :src="pages.image.filename_disk" :alt="pages.name" cover />
    <p class="mt-8 text-center" v-html="pages.content"></p>
  </section>
</template>

<script>
export default {
  
}
</script>

<script setup>
const { getItems } = useDirectusItems()

const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Offline"}}}});

/*import query from '../apollo/Custom/Queries/offline'
import { definePageMeta } from '#imports'

definePageMeta({
  auth: false
})*/

    useHead({
        title: 'You are Offline'
    })

</script>
