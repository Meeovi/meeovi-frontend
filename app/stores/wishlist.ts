import { defineStore } from '#imports'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [],
    products: [],
    isLoading: false,
  }),
  actions: {
    addToWishlist(productId) {
      if (!this.items.includes(productId)) {
        this.items.push(productId)
      }
    },
    removeFromWishlist(productId) {
      this.items = this.items.filter(id => id !== productId)
    },
    async fetchWishlistProducts() {
      this.isLoading = true
      // Simulate async fetch
      await new Promise(r => setTimeout(r, 500))
      this.products = this.items.map(id => ({ id, name: `Product ${id}` }))
      this.isLoading = false
    },
  },
})
