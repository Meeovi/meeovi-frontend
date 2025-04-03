<template>
  <div>
    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <a variant="flat" v-bind="props">
          <v-icon start icon="fas fa-bell"></v-icon>
        </a>
      </template>
      <v-list lines="two">
        <v-list-item v-for="notifications in activities" :key="notifications?.id" :href="notifications?.id">
          <v-list-item-title v-html="notifications?.title"></v-list-item-title>
          <v-list-item-subtitle>{{ new Date(notifications?.date).toLocaleDateString() }}</v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="All Notifications" value="All Notifications" append-icon="fas fa-bell"
          href="/notifications">
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import { getActivity } from '~/composables/cms/social/getActivity'; // Import the composable

  const location = ref('bottom');
  const activities = ref([]); // Reactive variable to store activity data

  onMounted(async () => {
     activities.value = await getActivity(); // Fetch activity data on component mount
   });

  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: notifyNav
  } = await useAsyncData('notifyNav', () => {
    return $directus.request($readItem('navigation', '29'))
  })
</script>