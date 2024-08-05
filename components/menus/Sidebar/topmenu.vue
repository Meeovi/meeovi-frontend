<template>
    <div v-for="(menu, index) in data?.navigations?.nodes" :key="index">
        <h5 class="menuh5">{{ menu?.title }}</h5>
        <v-list-item v-for="(item, index) in menu?.navigationFields?.menu?.nodes" :key="index" :title="item?.title" :value="item?.title" :prepend-icon="item?.websiteFields?.icon" :href="item?.websiteFields?.link"></v-list-item>
    </div>
</template>

<script setup>
  import topmenu from '~/graphql/CMS/queries/menus/topmenu.gql'

const {
    data
} = useAsyncQuery(topmenu);

 /* const {
    getItemById
  } = useDirectusItems()

  const nav = await getItemById({
    collection: "navigation",
    id: 5
  });*/
</script>