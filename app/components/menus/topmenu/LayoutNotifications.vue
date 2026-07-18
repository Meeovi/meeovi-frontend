<template>
  <div>
    <!-- Badge now correctly wraps or overlays the button -->
    <v-badge
      v-if="unreadCount > 0"
      :content="unreadCount"
      color="error"
      overlap
      offset-x="10"
      offset-y="10"
    >
      <v-btn
        class="relative"
        icon="fas fa-bell"
        variant="text"
        @click.stop="drawer = !drawer"
        aria-label="Notifications"
      >
      </v-btn>
    </v-badge>
    <v-btn
      v-else
      class="relative"
      icon="fas fa-bell"
      variant="text"
      @click.stop="drawer = !drawer"
      aria-label="Notifications"
    >
    </v-btn>
    
    <!-- Flyout Menu -->
    <v-navigation-drawer v-model="drawer" location="right" temporary class="cart-flyout">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Notifications</span>
        <v-btn icon="fas fa-x" @click="drawer = false"></v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <div class="cart-items">
        <template v-if="notifications.length > 0">
          <v-list lines="two" class="notification-list">
            <v-list-item
              v-for="notification in notifications.slice(0, 5)"
              :key="notification.id"
              :href="getNotificationLink(notification)"
              :class="{ 'unread': !notification.read }"
              @click="markAsRead(notification.id)"
            >
              <template v-slot:prepend>
                <v-icon
                  :icon="getNotificationIcon(notification.category)"
                  :color="getNotificationColor(notification.category)"
                ></v-icon>
              </template>
              <v-list-item-title v-dompurify-html="notification.title"></v-list-item-title>
              <v-list-item-subtitle>
                {{ new Date(notification.createdAt).toLocaleDateString() }}
              </v-list-item-subtitle>
            </v-list-item>

            <v-divider></v-divider>
            
            <v-list-item
              title="All Notifications"
              value="All Notifications"
              append-icon="fas fa-bell"
              href="/notifications"
            >
            </v-list-item>
          </v-list>
        </template>
        <template v-else>
          <v-alert type="info" class="mt-4 mx-4">
            No new notifications
          </v-alert>
        </template>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserNotifications } from '#shared/app/composables/notifications/useUserNotifications'

const drawer = ref(false)

const {
  notifications,
  unreadCount,
  markAsRead,
} = useUserNotifications()

const getNotificationIcon = (category: string) => {
  const icons: Record<string, string> = {
    order: 'fas fa-shopping-cart',
    account: 'fas fa-user',
    social: 'fas fa-users',
    system: 'fas fa-bell',
    email: 'fas fa-envelope',
  }
  return icons[category] || 'fas fa-bell'
}

const getNotificationColor = (category: string) => {
  const colors: Record<string, string> = {
    order: 'primary',
    account: 'info',
    social: 'success',
    system: 'warning',
    email: 'secondary',
  }
  return colors[category] || 'grey'
}

const getNotificationLink = (notification: any) => {
  if (notification.payload) {
    return notification.payload.link || '/notifications'
  }
  return '/notifications'
}

onMounted(() => {
  // Refresh notifications when drawer opens
})
</script>

<style scoped>
  .notification-bell {
    position: relative;
    cursor: pointer;
  }

  .unread {
    background-color: rgba(var(--v-theme-primary), 0.1);
  }
</style>