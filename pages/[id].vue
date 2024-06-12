<template>
    <div class="contentPage">
      <h1 style="text-align: center;">{{ data?.page?.title }}</h1>
      <div v-html="data?.page?.content" />
    </div>
</template>

<script setup>
const route = useRoute();
const query = gql`
query SinglePage($id: ID!) {
  page(id: $id) {
    content
    id
    title
    status
    slug
  }
}
`;

const { data, error } = useAsyncQuery(query, { id: route.params.id });

if (error) {
    console.error('Error fetching page:', error);
}

useHead({
        title: data?.value?.page?.title,
    })
</script>