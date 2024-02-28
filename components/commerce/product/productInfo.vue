<template>
  <v-card variant="text">
    <v-card-text v-html="products?.description?.html"></v-card-text>
  </v-card>
</template>

<script>

  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>
const query = gql `
query {
  products(filter: {url_key: {eq: ""}}) {
    items {
      description {
        html
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
</script>