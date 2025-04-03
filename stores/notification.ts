import { defineStore } from 'pinia';
import type { Notification, NotificationsState } from '@/types/notification';

export const useNotificationsStore = defineStore('notifications', {
    state: (): NotificationsState => ({
        notifications: []
    }),
    actions: {
        addNotification(message: string, type: 'success' | 'error' | 'info') {
            const newNotification: Notification = {
                id: Math.random().toString(36).substr(2, 9),
                message,
                type,
                timestamp: Date.now()
            };
            this.notifications.push(newNotification);
            setTimeout(() => this.removeNotification(newNotification.id), 5000);
        },
        removeNotification(id: string) {
            this.notifications = this.notifications.filter((n: { id: string; }) => n.id !== id);
        }
    }
});
