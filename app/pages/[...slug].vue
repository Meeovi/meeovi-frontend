<template>
  <div>
    <pagebar v-if="page?.type !== 'Page'" />

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
    useRoute,
    useRouter
  } from 'vue-router'
  import {
    ref,
    watch
  } from 'vue'
  import Pagebar from '../components/menus/page/pagebar.vue'
  import share from '#social/app/components/blocks/share.vue'

  const route = useRoute()
  const {
    $directus,
    $readItems
  } = useNuxtApp()

  const page = ref(null)

  async function fetchPage() {
    const result = await $directus.request($readItems('pages', {
      filter: {
        slug: {
          _eq: `${route.params.slug}`
        }
      },
      fields: '*',
      limit: 1
    }))
    page.value = Array.isArray(result) ? result[0] : null
  }

  await fetchPage()

  watch(() => route.params.slug, async () => {
    await fetchPage()
  })

  useHead({
    title: () => page.value?.name || 'Page',
  })

  definePageMeta({
    layout: 'nolive',
  })
</script>