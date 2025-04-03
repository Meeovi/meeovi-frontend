import { defineStore } from 'pinia';
import type { StorePickupState } from '@/types/storeInPickUp';

export const useStoreInPickupStore = defineStore('storeInPickUp', {
    state: (): StorePickupState => ({
        selectedStoreId: null,
        stores: []
    }),
    actions: {
        setSelectedStore(storeId: string) {
            this.selectedStoreId = storeId;
        },
        async fetchStores() {
            try {
                const response = await $fetch('/api/stores');
                this.stores = response;
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        }
    }
});
