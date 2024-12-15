<template>
  <v-card variant="text">
    <v-tabs style="background-color: transparent" center-active>
      <div v-for="(menu, index) in profilebar?.menus" :key="index">
      <v-tab>
        <NuxtLink to="/account/user/profile">Profile</NuxtLink>
      </v-tab>
      <v-tab>
        <NuxtLink :to="menu?.url">{{ menu?.name }}</NuxtLink>
      </v-tab>
      </div>
    </v-tabs>
  </v-card>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: profilebar } = await useAsyncData('profilebar', () => {
  return $directus.request($readItem('navigation', '1'))
})
</script>