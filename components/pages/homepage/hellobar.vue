<template>
  <div>
    <v-toolbar v-if="isAuthenticated" :color="hellobar?.color" class="helloBar"
      :style="`color: ${hellobar?.colortext}`">
      <v-toolbar-title>{{ hellobar?.description }} {{ user?.email }}</v-toolbar-title>

      <div v-for="(menu, index) in hellobar?.menus" :key="index">
        <v-toolbar-items v-if="menu?.active === 'Active'" class="helloBar-items">
          <NuxtLink :style="`color: ${hellobar?.colortext}`" :to="menu?.url">{{ menu?.name }}</NuxtLink>
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

  const { user, isAuthenticated } = useSupabaseAuth()

  const {
    data: hellobar
  } = await useAsyncData('hellobar', () => {
    return $directus.request($readItem('navigation', '50'))
  })
</script>