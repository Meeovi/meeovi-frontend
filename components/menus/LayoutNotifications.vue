<template>
  <div>
    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <NuxtLink variant="flat" v-bind="props">
          <v-icon start icon="fas fa-bell"></v-icon>
        </NuxtLink>
      </template>
      <v-list lines="two">
        <v-list-item v-for="notifications in notifications" :key="notifications?.id" :href="notifications?.id">
          <v-list-item-title v-html="notifications?.message"></v-list-item-title>
          <v-list-item-subtitle>{{ notifications?.type }}</v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item :title="notifyNav?.name" :value="notifyNav?.name" append-icon="fas fa-bell"
          :href="notifyNav?.url">
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    useNotification
  } from '~/composables/globals/useNotifications';

  const {
    notifications
  } = useNotification();
  const location = ref('bottom');
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