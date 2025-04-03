import { defineStore } from 'pinia';
import type { Product, ProductState } from '@/types/product';

export const useProductStore = defineStore('product', {
    state: (): ProductState => ({
        products: [],
        selectedProduct: null,
        isLoading: false
    }),
    actions: {
        async fetchProducts() {
            this.isLoading = true;
            try {
                const response = await $fetch<Product[]>('/api/products'); // Update API endpoint
                this.products = response;
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                this.isLoading = false;
            }
        },
        selectProduct(product: Product) {
            this.selectedProduct = product;
        }
    }
});
