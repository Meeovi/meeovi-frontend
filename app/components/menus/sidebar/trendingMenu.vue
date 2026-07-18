<template>
  <div>
    <h5 class="menuh5">{{ trendingMenu?.name }}</h5>
    <v-list v-for="item in trendingMenu?.menus" :key="item">
      <v-list-item v-if="item?.active === 'Active' && item?.name !== 'Departments' && item?.name !== 'Outlets'" :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url"></v-list-item>
    </v-list>
  </div>
</template>

<script setup>

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: trendingMenu
    } = await useAsyncData('trendingMenu', async () => {
        const resp = await $directus.request($readItem('navigation', '5'))
        return resp?.data || resp || { menus: [] }
    })
</script>