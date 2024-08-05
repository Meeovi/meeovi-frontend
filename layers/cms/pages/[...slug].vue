<template>
    <div class="contentPage">
      <h1 style="text-align: center;">{{ page?.name }}</h1>
      <div v-html="page?.content" />
    </div>
</template>

<script setup>
    import page from '~/graphql/CMS/queries/id/page.gql'
    import { ref } from 'vue'

    const route = useRoute();
    const { data } = useAsyncQuery(page, {
        id: route.params.id
    });

/*const {
       getItems
   } = useDirectusItems()

   const page = await getItems({
       collection: "pages",
       filter: {
        slug: {
          _eq: route.params.slug
        }
       }
   });*/

useHead({
    title: page?.name,
    })
</script>