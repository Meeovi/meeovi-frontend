<template>
  <div>
    <v-card variant="text">
      <v-toolbar color="orange" title="Sellers Dashboard"></v-toolbar>
      <v-tabs v-model="tab" bg-color="orange">
        <v-tab v-for="(menu, index) in seller?.menus" :key="index"><NuxtLink style="color: white !important;"
            :href="menu?.url">{{ menu?.name }}</NuxtLink></v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script setup>
  const {
    $directus,
    $readItem
  } = useNuxtApp()
  const route = useRoute()

  const {
    data: seller
  } = await useAsyncData('seller', () => {
    return $directus.request($readItem('navigation', '14'))
  })
</script>