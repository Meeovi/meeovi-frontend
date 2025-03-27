<template>
  <div>
    <h5 class="menuh5">{{ social?.name }}</h5>
    <v-list v-for="item in social?.menus" :key="item">
      <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url"></v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: social } = await useAsyncData('social', () => {
  return $directus.request($readItem('navigation', '4'))
})
</script>