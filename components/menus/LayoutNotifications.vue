<template>
  <div>
    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <NuxtLink variant="flat" v-bind="props">
          <v-icon start icon="fas fa-bell"></v-icon>
        </NuxtLink>
      </template>
      <v-list lines="two">
        <v-list-item v-for="notifications in notifyNav" :key="notifications?.id" :href="notifications?.id">
          <v-list-item-title v-html="notifications?.subject"></v-list-item-title>
          <v-list-item-subtitle>{{ new Date(notifications?.date_created).toLocaleDateString() }}</v-list-item-subtitle>
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
  import { readNotifications } from '@directus/sdk';

  const location = ref('bottom');
  const {
    $directus,
    $readItem
  } = useNuxtApp()

const { data: notifyNav } = await useAsyncData('notifyNav', () => {
    return $directus.request($readItem('navigation', '29'))
  })
</script>