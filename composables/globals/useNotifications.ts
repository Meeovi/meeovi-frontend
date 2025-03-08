import { ref } from 'vue';

interface NotificationOptions {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  timeout?: number;
}

export function useNotification() {
  const notification = ref<NotificationOptions | null>(null);

  const showNotification = (options: NotificationOptions) => {
    notification.value = options;
    if (options.timeout !== 0) {
      setTimeout(() => {
        notification.value = null;
      }, options.timeout || 3000);
    }
  };

  return {
    notification,
    showNotification,
  };
}
