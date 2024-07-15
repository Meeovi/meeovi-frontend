<template>
    <div class="contentPage">
      <h1 style="text-align: center;">{{ data?.page?.title }}</h1>
      <div v-html="data?.page?.content" />
    </div>
</template>

<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const route = useRoute();
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

const { data, error } = useQuery(query, { id: route.params.id });

if (error) {
    console.error('Error fetching page:', error);
}

useHead({
    title: data?.page?.title,
    })
</script>