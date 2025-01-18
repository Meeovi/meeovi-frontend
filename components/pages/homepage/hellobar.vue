<template>
  <div>
    <v-toolbar v-if="userStore.isLoggedIn" :color="hellobar?.color" class="helloBar" :style="`color: ${hellobar?.colortext}`">
      <v-toolbar-title>{{ hellobar?.description }} {{ userStore?.user?.displayName }}</v-toolbar-title>

      <div v-for="(menu, index) in hellobar?.menus" :key="index">
        <v-toolbar-items v-if="menu?.active === 'Active'" class="helloBar-items"><NuxtLink :style="`color: ${hellobar?.colortext}`" :to="menu?.url">{{ menu?.name }}</NuxtLink></v-toolbar-items>
      </div>
    </v-toolbar>
  </div>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()
import {
    useUserStore
  } from '~/stores/user'

  const userStore = useUserStore()

  const userDisplayName = computed(() => {
    return userStore.user?.email || ''
  })

const { data: hellobar } = await useAsyncData('hellobar', () => {
  return $directus.request($readItem('navigation', '50'))
})
</script>