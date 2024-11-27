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
          <v-list-item-title v-html="notifications?.subject"></v-list-item-title>
          <v-list-item-subtitle>{{ new Date(notifications?.timestamp).toLocaleDateString() }}</v-list-item-subtitle>
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
  const { $directus, $readItem } = useNuxtApp();

  const activities = await $directus.request(
	readNotifications({
		fields: ['*'],
	})
);

const { data: notifyNav } = await useAsyncData('notifyNav', () => {
    return $directus.request($readItem('navigation', '29'))
  })
</script>