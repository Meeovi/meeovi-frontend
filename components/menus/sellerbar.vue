<template>
  <v-card variant="text">
      <v-tabs style="background-color: transparent" center-active>
          <v-tab v-for="(menu, index) in seller?.menus" :key="index"><a :href="menu?.url">{{ menu?.name }}</a></v-tab>
      </v-tabs>
  </v-card>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: seller } = await useAsyncData('seller', () => {
return $directus.request($readItem('navigation', '14'))
})
</script>