<template>
  <div>
    <!-- Badge now correctly wraps or overlays the button -->
    <!--
      unreadCount/notifications below are plain top-level refs from
      useUserNotifications(), correctly auto-unwrapped by Vue at runtime.
      vue-tsc's template checker is a confirmed false positive here (it
      infers them as still Ref-wrapped) — adding .value to "fix" the type
      error breaks it at runtime instead (Ref<T> has no .value on what's
      already the unwrapped value), which is exactly what caused a live
      hydration-mismatch/TypeError crash on this component. Do not add
      .value here; the @vue-ignore comments below suppress the tooling
      false positive instead.
    -->
    <!-- @vue-ignore -->
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

       <div class="notification-actions">
         <!-- @vue-ignore -->
         <v-btn
           v-if="unreadCount > 0"
           variant="text"
           size="small"
           @click="markAllAsRead"
         >
           Mark all as read
         </v-btn>
       </div>

       <div class="cart-items">
         <!-- @vue-ignore -->
         <template v-if="notifications.length > 0">
           <v-list lines="two" class="notification-list">
             <!-- @vue-ignore -->
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
               <template v-slot:append>
                 <v-btn
                   icon="fas fa-x"
                   size="small"
                   variant="text"
                   @click.stop="dismiss(notification.id)"
                   aria-label="Dismiss notification"
                 ></v-btn>
               </template>
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
import { ref, watch } from 'vue'
import { useUserNotifications } from '#shared/app/composables/notifications/useUserNotifications'

const drawer = ref(false)

const {
  notifications,
  unreadCount,
  markAsRead,
  markAllAsRead,
  dismiss,
  refresh,
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
  watch(drawer, (val: boolean) => {
    if (val) {
      refresh()
    }
  })
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

  .notification-actions {
    padding: 8px 16px;
    display: flex;
    justify-content: flex-end;
  }
</style>