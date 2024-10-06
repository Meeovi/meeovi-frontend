<template>
    <div class="contentPage">
      <v-toolbar color="transparent" title="Notification Center"></v-toolbar>  
      <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Notification Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="notifications in activities" :key="notifications?.id">
                <td v-html="notifications?.title"></td>
                <td>{{ new Date(notifications?.date).toLocaleDateString() }}</td>
            </tr>
        </tbody>
    </v-table>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '~/stores/user'

const { $io } = useNuxtApp()
const userStore = useUserStore()

const notifications = ref([])

onMounted(async () => {
  // Fetch initial notifications
  const { data } = await useFetch('/api/notifications')
  notifications.value = data.value

  $io.on('new-notification', (notification) => {
    notifications.value.unshift(notification)
  })
})

const markAsRead = async (notificationId) => {
  await $fetch(`/api/notifications/${notificationId}/read`, { method: 'POST' })
  const index = notifications.value.findIndex(n => n.id === notificationId)
  if (index !== -1) {
    notifications.value[index].read = true
  }
}

onUnmounted(() => {
  $io.off('new-notification')
})
</script>