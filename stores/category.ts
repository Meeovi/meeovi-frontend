import { defineStore } from 'pinia';
import type { Category, CategoryState } from '@/types/category';

export const useCategoryStore = defineStore('category', {
    state: (): CategoryState => ({
        categories: [],
        currentCategory: null,
        isLoading: false
    }),
    actions: {
        async fetchCategories() {
            this.isLoading = true;
            try {
                const response = await $fetch<Category[]>('/api/categories'); // Update API endpoint
                this.categories = response;
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                this.isLoading = false;
            }
        },
        setCurrentCategory(category: Category) {
            this.currentCategory = category;
        }
    }
});
