import { defineStore } from 'pinia';
import type { SearchState } from '@/types/searchBar';

export const useSearchStore = defineStore('search', {
    state: (): SearchState => ({
        query: '',
        results: [],
        isLoading: false
    }),
    actions: {
        setSearchQuery(query: string) {
            this.query = query;
            this.isLoading = true;
        },
        async fetchSearchResults() {
            if (!this.query) return;
            try {
                const response = await $fetch(`/api/search?q=${this.query}`);
                this.results = response;
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                this.isLoading = false;
            }
        }
    }
});
