// stores/cart.ts
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => 
      sum + (item.product.price * item.quantity), 0
    ),
  },

  actions: {
    async addToCart({ product, quantity }) {
      this.loading = true
      this.error = null
      
      try {
        // Your existing cart API logic here
        const cartId = localStorage.getItem('cart_id')
        
        if (!cartId) {
          throw new Error('No cart ID found')
        }

        const response = await fetch(`/rest/V1/guest-carts/${cartId}/items`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cartItem: {
              sku: product.sku,
              qty: quantity,
              quote_id: cartId
            }
          })
        })

        if (!response.ok) {
          throw new Error('Failed to add item to cart')
        }

        // Update local state
        const existingItem = this.items.find(item => item.product.id === product.id)
        if (existingItem) {
          existingItem.quantity += quantity
        } else {
          this.items.push({ product, quantity })
        }

        this.saveCart()
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to add item to cart'
        throw this.error
      } finally {
        this.loading = false
      }
    },

    removeFromCart(productId) {
      this.items = this.items.filter(item => item.product.id !== productId)
      this.saveCart()
    },

    clearCart() {
      this.items = []
      this.saveCart()
    },

    saveCart() {
      localStorage.setItem('cart-items', JSON.stringify(this.items))
    },

    loadCart() {
      const savedCart = localStorage.getItem('cart-items')
      if (savedCart) {
        this.items = JSON.parse(savedCart)
      }
    }
  }
})
