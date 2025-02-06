<template>
  <div class="contentPage">
    <v-toolbar color="transparent" title="Notification Center"></v-toolbar>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Timestamp</th>
          <th class="text-left">Status</th>
          <th class="text-left">Sender</th>
          <th class="text-left">Subject</th>
          <th class="text-left">Message</th>
          <th class="text-left">Related to</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="notification in mergedNotifications" :key="notification?.id">
          <td v-html="notification?.id"></td>
          <td>{{ new Date(notification?.timestamp).toLocaleDateString() }}</td>
          <td v-html="notification?.status"></td>
          <td v-html="notification?.sender"></td>
          <td v-html="notification?.subject"></td>
          <td v-html="notification?.message"></td>
          <td v-html="notification?.collection"></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '~/stores/user'
import { readNotifications } from '@directus/sdk'
import { useNotifications } from '~/composables/commerce/useNotification'

const { $directus } = useNuxtApp()
const { notifications: realtimeNotifications } = useNotifications()

// Fetch Directus notifications
const directusNotifications = await $directus.request(
  readNotifications({
    fields: ['*'],
  })
)

// Merge both real-time and Directus notifications
const mergedNotifications = computed(() => {
  return [...directusNotifications, ...realtimeNotifications.value].sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp)
  })
})
</script>
