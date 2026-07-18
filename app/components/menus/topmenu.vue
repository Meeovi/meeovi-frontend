<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="menuItem in topmenu" :key="menuItem.id" :title="menuItem?.name"
        expand-icon="fas fa-caret-down" collapse-icon="fas fa-caret-up" elevation="0">
        <v-expansion-panel-text>
          <v-list class="ml-4">
            <v-list-item v-for="pageItem in menuItem.pages" :key="pageItem?.pages_id?.id"
              :title="pageItem?.pages_id?.name" :value="pageItem?.pages_id?.name"
              :href="toPath(pageItem?.pages_id?.slug)" />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
  import {
    useRoutePath
  } from '#shared/app/composables/routing/useRoutePath'

  const {
    $directus,
    $readItems,
  } = useNuxtApp()
  const {
    normalizeRoutePath
  } = useRoutePath()

  const toPath = (slug) => normalizeRoutePath(slug)

  const {
    data: topmenu
  } = await useAsyncData('topmenu-about-departments', async () => {
    const resp = await $directus.request($readItems('about_departments', {
      fields: ['*', 'image.*', 'pages.pages_id.*'],
    }))
    return resp?.data || resp || []
  })
</script>