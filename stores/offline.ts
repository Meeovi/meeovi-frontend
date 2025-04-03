import { defineStore } from 'pinia';
import type { OfflineState } from '@/types/offline';

export const useOfflineStore = defineStore('offline', {
    state: (): OfflineState => ({
        isOffline: false
    }),
    actions: {
        setOffline(isOffline: boolean) {
            this.isOffline = isOffline;
        }
    }
});
