<template>
    <div class="contentPage" v-for="pages in data.pages" :key="pages.id">
        <v-card :title="pages.name" :subtitle="pages.type"><div v-html="pages.list.name"></div></v-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'Payments',
    })

const query = gql`
    query {
    pages (filter: {name: {_starts_with: "Allowed Products"}}) {
      id
      status
      sort
      name
      content
      link
      list
      type
      date_created
    }
  }
`
const { data } = await useAsyncQuery(query)

   /* const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Terms and Conditions"}}}});*/
</script>