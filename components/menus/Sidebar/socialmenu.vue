<template>
  <div v-for="(menu, index) in data?.navigations?.nodes" :key="index">
      <h5 class="menuh5">{{ menu?.title }}</h5>
      <v-list-item v-for="(item, index) in menu?.navigationFields?.menu?.nodes" :key="index" :title="item?.title" :value="item?.title" :prepend-icon="item?.websiteFields?.icon" :href="item?.websiteFields?.link"></v-list-item>
  </div>
</template>

<script setup>
import { gql } from 'nuxt-graphql-request/utils';

const { $graphql } = useNuxtApp();

const query = gql `
query NewQuery {
navigations(where: {title: "Account Social"}) {
  nodes {
    title
    navigationFields {
      menu {
        nodes {
          ... on Website {
            id
            websiteFields {
              link
              type
              icon
              description
            }
            title
          }
        }
      }
    }
  }
}
}
`

const { data } = await useAsyncData('navigations', async () => {
  const data = await $graphql.default.request(query);
  return data;
});

/* const {
  getItemById
} = useDirectusItems()

const nav = await getItemById({
  collection: "navigation",
  id: 5
});*/
</script>