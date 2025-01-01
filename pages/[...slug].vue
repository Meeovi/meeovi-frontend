<template>
    <div class="contentPage">
      <h1 style="text-align: center;">{{ page?.name }}</h1>
      <div v-html="page?.content" />
    </div>
</template>

<script setup>
    import page from '~/graphql/cms/queries/id/page'
    import { ref } from 'vue'
    import {
    useQuery
  } from '@vue/apollo-composable'

    const route = useRoute();
    const { data } = useQuery(page, {
        id: route.params.id
    });

useHead({
    title: page?.name,
    })
</script>