<template>
  <div class="accountBar">
    <v-toolbar :color="accountBar?.color" class="helloBar"
      :style="`color: ${accountBar?.colortext}`">
      <v-toolbar-title>{{ accountBar?.name }}</v-toolbar-title>

      <div v-for="(menu, index) in accountBar?.menus" :key="index">
        <v-toolbar-items v-if="menu?.active === 'Active'" class="helloBar-items">
          <NuxtLink :style="`color: ${accountBar?.colortext}`" :to="menu?.url">{{ menu?.name }}</NuxtLink>
        </v-toolbar-items>
      </div>
    </v-toolbar>
  </div>
</template>

<script setup>
const {
  $directus,
  $readItem
} = useNuxtApp()

const {
  data: accountBar
} = await useAsyncData('accountBar', async () => {
  const resp = await $directus.request($readItem('navigation', '25', {
    fields: ['*', {
      '*': ['*']
    }]
  }))
  return resp?.data ?? resp ?? null
})
</script>