export interface Notification {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
    timestamp: number;
}

export interface NotificationsState {
    notifications: Notification[];
}
