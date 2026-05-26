import { defineStore } from '#imports'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(item) {
      this.items.push(item)
    },
    removeFromCart(itemId) {
      this.items = this.items.filter(i => i.id !== itemId)
    },
    clearCart() {
      this.items = []
    },
  },
})
