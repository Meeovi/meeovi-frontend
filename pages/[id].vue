<template>
    <div>
      <h1 style="text-align: center;">{{ page?.name }}</h1>
      <div v-html="page?.content" />
    </div>
</template>

<script setup>
    //import page from '~/graphql/cms/queries/id/page'
    import { ref } from 'vue'

    const route = useRoute();
    const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: page
  } = await useAsyncData('page', () => {
    return $directus.request($readItem('pages', route.params.id, {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  definePageMeta({
    layout: 'nolive',
  });

useHead({
    title: page?.value?.name || 'Page',
    })
</script>