<template>
    <v-card variant="text">
        <v-tabs style="background-color: transparent" center-active>
            <v-tab v-for="(menu, index) in nav?.menus" :key="index"><a :href="menu?.url">{{ menu?.name }}</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script setup>
    import sellerbar from '~/graphql/CMS/queries/menus/sellerbar.gql'

const {
    data
} = useAsyncQuery(sellerbar);

  const {
    getItemById
  } = useDirectusItems()

  const nav = await getItemById({
    collection: "navigation",
    id: 14
  });
</script>