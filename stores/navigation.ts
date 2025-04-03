import { defineStore } from 'pinia';
import type { NavigationItem, NavigationState } from '@/types/navigation';

export const useNavigationStore = defineStore('navigation', {
    state: (): NavigationState => ({
        items: [],
        isLoading: false
    }),
    actions: {
        async fetchNavigationItems() {
            this.isLoading = true;
            try {
                const response = await $fetch<NavigationItem[]>('/api/navigation');
                this.items = response;
            } catch (error) {
                console.error('Error fetching navigation items:', error);
            } finally {
                this.isLoading = false;
            }
        },
        addNavigationItem(item: NavigationItem) {
            this.items.push(item);
        }
    }
});
