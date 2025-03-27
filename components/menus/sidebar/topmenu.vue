<template>
  <div>
    <h5 class="menuh5">{{ topmenu?.name }}</h5>
    <v-list v-for="item in topmenu?.menus" :key="item">
      <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url"></v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: topmenu } = await useAsyncData('topmenu', () => {
  return $directus.request($readItem('navigation', '5'))
})
</script>