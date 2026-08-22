<template>
  <div class="contentPage">
    <Pagebar v-if="page?.type !== 'Page'" />

    <br>

    <div class="contentSection">
      <v-card elevation="0">
        <v-img class="align-end text-white" height="200" src="assets/images/background4.jpg" cover>
          <v-card-title style="font-size: 35px;">{{ page?.name }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          Published: {{ page?.date_created ? new Date(page.date_created).toLocaleDateString() : '' }}
        </v-card-subtitle>

        <v-card-text v-html="page?.content"></v-card-text>

        <v-card-actions>
          <share />
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script setup>
  import {
    ref,
    watch
  } from 'vue'
  import Pagebar from '../components/menus/page/pagebar.vue'
  import share from '#social/app/components/blocks/share.vue'

  const route = useRoute()
  const {
    $directus,
    $readItems,
  } = useNuxtApp()

  const {
    data: page
  } = await useAsyncData('page', async () => {
    const result = await $directus.request($readItems('pages', {
      filter: {
        slug: {
          _eq: `${route.params.slug}`
        }
      },
      fields: '*',
      limit: 1
    }))
    return Array.isArray(result) ? result[0] : null
  })

  watch(() => route.params.slug, async () => {
    await refreshNuxtData('page')
  })

  useHead({
    title: () => page.value?.name || 'Page',
  })

  useSeoMeta({
    title: () => page.value?.name || 'Page',
    description: () => page.value?.description || 'E-Commerce application built with Nuxt & Shopify',
    ogTitle: () => page.value?.name || 'Page',
    ogDescription: () => page.value?.description || 'E-Commerce application built with Nuxt & Shopify',
    twitterCard: 'summary_large_image',
  })

  defineOgImageComponent('Nuxt', {
    title: () => page.value?.name || 'Nuxt Commerce',
    description: () => page.value?.description ||
      'A high-performance, server-rendered E-commerce app built with Nuxt & Shopify',
    theme: '#4ADE80',
    headline: '',
    colorMode: 'dark',
  })

  definePageMeta({
    layout: 'nolive',
  })
</script>