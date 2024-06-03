<template>
  <v-card variant="text">
    <v-tabs style="background-color: transparent" center-active>
      <div v-for="(menu, index) in data?.menus?.nodes" :key="index">
      <v-tab v-for="items in menu?.menuItems?.nodes" :key="items.id">
        <a :href="items?.url">{{ items?.label }}</a>
      </v-tab>
      </div>
    </v-tabs>
  </v-card>
</template>

<script setup>
  const query = gql `
query NewQuery {
  menus(where: {slug: "Profile Menu"}) {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
          id
          label
          title
          url
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

  /* const {
     getItemById
   } = useDirectusItems()

   const nav = await getItemById({
     collection: "navigation",
     id: 1
   });*/
</script>