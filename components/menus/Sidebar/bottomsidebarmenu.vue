<template>
  <div v-for="menu in data?.navigations?.nodes" :key="menu">
      <h5 class="menuh5">{{ menu?.title }}</h5>
      <v-list-item v-for="(item, index) in menu?.navigationFields?.menu?.nodes" :key="index" :title="item?.title" :value="item?.title" :prepend-icon="item?.websiteFields?.icon" :href="item?.websiteFields?.link"></v-list-item>
  </div>
</template>

<script setup>
  import bottomsidebarmenu from '~/graphql/CMS/queries/menus/bottomsidebarmenu.gql'

  const {
      data
  } = useAsyncQuery(bottomsidebarmenu);
 /* const {
    getItemById
  } = useDirectusItems()

  const nav = await getItemById({
    collection: "navigation",
    id: 6
  });*/
</script>