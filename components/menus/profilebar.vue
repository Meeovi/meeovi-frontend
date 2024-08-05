<template>
  <v-card variant="text">
    <v-tabs style="background-color: transparent" center-active>
      <div v-for="(menu, index) in data?.navigations?.nodes" :key="index">
      <v-tab>
        <a href="/account/user/profile">Profile</a>
      </v-tab>
      <v-tab v-for="items in menu?.navigationFields?.menu?.nodes" :key="items.id">
        <a :href="items?.websiteFields?.link">{{ items?.title }}</a>
      </v-tab>
      </div>
    </v-tabs>
  </v-card>
</template>

<script setup>
    import profilebar from '~/graphql/CMS/queries/menus/profilebar.gql'

const {
    data
} = useAsyncQuery(profilebar);

  /* const {
     getItemById
   } = useDirectusItems()

   const nav = await getItemById({
     collection: "navigation",
     id: 1
   });*/
</script>