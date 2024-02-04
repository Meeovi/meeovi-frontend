<template>
    <div>
        <p v-html="data?.products_by_id?.content"></p>
    </div>
</template>

<script>
  export default {
    data: () => ({
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
const query = gql `
  query products_by_id($id: ID!){
    products_by_id(id: $id){
        id
        content
    }
}
`

    const {
        data
    } = await useAsyncQuery(query)
</script>