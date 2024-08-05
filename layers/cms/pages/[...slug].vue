<template>
    <div class="contentPage">
      <h1 style="text-align: center;">{{ page?.name }}</h1>
      <div v-html="page?.content" />
    </div>
</template>

<script setup>
const route = useRoute();
/*import gql from 'graphql-tag'
import { useAsyncQuery } from '@vue/apollo-composable'

const query = gql `
query NewQuery ($id: ID!) {
  page(id: $id) {
    content
    id
    title
    status
    slug
  }
}
`;

const { data, error } = useAsyncQuery(query, { id: route.params.id });

if (error) {
    console.error('Error fetching page:', error);
}*/

const {
       getItems
   } = useDirectusItems()

   const page = await getItems({
       collection: "pages",
       filter: {
        slug: {
          _eq: route.params.slug
        }
       }
   });

useHead({
    title: page?.name,
    })
</script>