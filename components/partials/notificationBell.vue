<template>
    <div class="notification-bell">
        <v-badge :content="unreadCount" :model-value="unreadCount > 0" color="error">
            <v-btn icon @click="toggleNotifications">
                <v-icon start icon="fas fa-bell"></v-icon>
            </v-btn>
        </v-badge>

        <v-menu v-model="showNotifications" :close-on-content-click="false" location="bottom end">
            <v-list max-height="400" class="notification-list">
                <v-list-item v-for="notification in recentNotifications" :key="notification.id"
                    :title="notification.subject" :subtitle="notification.message">
                    <template v-slot:prepend>
                        <v-icon icon="fas fa-bell" :color="notification.status === 'unread' ? 'primary' : 'grey'">
                        </v-icon>
                    </template>
                </v-list-item>

                <v-list-item @click="navigateToNotifications">
                    <v-btn block>View All Notifications</v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script setup>
    import {
        ref,
        computed
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'
    import {
        useNotifications
    } from '~/composables/commerce/useNotification'

    const router = useRouter()
    const showNotifications = ref(false)
    const {
        notifications
    } = useNotifications()

    const unreadCount = computed(() => {
        return notifications.value.filter(n => n.status === 'unread').length
    })

    const recentNotifications = computed(() => {
        return notifications.value.slice(0, 5)
    })

    const toggleNotifications = () => {
        showNotifications.value = !showNotifications.value
    }

    const navigateToNotifications = () => {
        showNotifications.value = false
        router.push('/notifications')
    }
</script>