import { defineStore } from 'pinia';
import type { WishlistState } from '@/types/wishlist';

export const useWishlistStore = defineStore('wishlist', {
    state: (): WishlistState => ({
        items: [],
        isLoading: false
    }),
    actions: {
        addToWishlist(productId: string) {
            if (!this.items.includes(productId)) {
                this.items.push(productId);
            }
        },
        removeFromWishlist(productId: string) {
            this.items = this.items.filter(id => id !== productId);
        }
    }
});
