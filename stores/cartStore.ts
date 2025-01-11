// stores/cartStore.ts
import { defineStore } from 'pinia'
import { MagentoService } from '~/services/magento'

interface MagentoProduct {
  sku: string
  name: string
  price: number
  qty: number
  quote_id?: string
  item_id?: string
}

interface CartState {
  isGuest: boolean
  items: MagentoProduct[]
  total: number
  quoteId: string | null
  magentoService: MagentoService
}


export const useCartStore = defineStore('cart', {
  state: () => ({
    isGuest: true,
    items: [] as MagentoProduct[],
    total: 0,
    quoteId: null as string | null,
    magentoService: new MagentoService()
  }),

  actions: {
    async initializeCart() {
      const auth = useAuth()
      this.isGuest = !auth.token.value

      try {
        if (this.isGuest) {
          await this.createGuestCart()
        } else {
          await this.createCustomerCart()
        }
      } catch (error) {
        errorHandler.handle(error)
      }
    },

    async createGuestCart() {
      const response = await fetch(`${process.env.MAGENTO_API_URL}/guest-carts`, {
        method: 'POST'
      })
      const quoteId = await response.json()
      this.quoteId = quoteId as string
    },

    async createCustomerCart() {
      const auth = useAuth()
      const response = await fetch(`${process.env.MAGENTO_API_URL}/carts/mine`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${auth.token.value}`
        }
      })
      this.quoteId = await response.json()
    },

    async addItem(product: MagentoProduct) {
      const loading = useLoading()
      loading.startLoading('Adding to cart...')

      try {
        // Check authentication
        const auth = useAuth()
        if (auth.isTokenExpired()) {
          await auth.refreshAccessToken()
        }

        // Check inventory
        const inventory = useInventory()
        await inventory.checkInventory(product.sku, product.qty)

        // If no quote ID, create cart
        if (!this.quoteId) {
          await this.initializeCart()
        }

        // Ensure quoteId exists before proceeding
        if (!this.quoteId) {
          throw new CartError('Failed to create cart', 'CART_ERROR')
        }

        // Add to Magento cart
        const response = await fetch(`${process.env.MAGENTO_API_URL}/carts/mine/items`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${auth.token.value}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cartItem: {
              sku: product.sku,
              qty: product.qty,
              quote_id: this.quoteId
            }
          })
        })

        if (!response.ok) {
          throw new CartError('Failed to add item to cart', 'CART_ERROR')
        }

        const cartItem = await response.json()

        // Update local cart state
        const existingItem = this.items.find(item => item.sku === product.sku)
        if (existingItem) {
          existingItem.qty += product.qty
        } else {
          this.items.push({
            ...product,
            item_id: cartItem.item_id
          })
        }

        // Calculate taxes
        const tax = useTax()
        if (this.quoteId) {
          await tax.calculateTax(this.quoteId)
        }

        // Cache product data
        const cache = useCache()
        cache.setCacheItem(`cart_product_${product.sku}`, product)

        await this.calculateTotal()

        loading.stopLoading()
        const { show } = useNotification()
        show({
          type: 'success',
          message: 'Product added to cart'
        })
      } catch (error) {
        loading.stopLoading()
        errorHandler.handle(error)
      }
    },

    async removeItem(itemId: string) {
      const loading = useLoading()
      loading.startLoading('Removing item...')

      try {
        const auth = useAuth()
        if (auth.isTokenExpired()) {
          await auth.refreshAccessToken()
        }

        // Remove from Magento cart
        const response = await fetch(
          `${process.env.MAGENTO_API_URL}/carts/mine/items/${itemId}`,
          {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${auth.token.value}`
            }
          }
        )

        if (!response.ok) {
          throw new CartError('Failed to remove item from cart', 'CART_ERROR')
        }

        // Update local cart state
        this.items = this.items.filter(item => item.item_id !== itemId)
        await this.calculateTotal()

        loading.stopLoading()
        useNotification().show({
          type: 'success',
          message: 'Item removed from cart'
        })
      } catch (error) {
        loading.stopLoading()
        errorHandler.handle(error)
      }
    },

    async calculateTotal() {
      try {
        const auth = useAuth()
        if (!this.quoteId) return

        // Get cart totals from Magento
        const response = await fetch(
          `${process.env.MAGENTO_API_URL}/carts/mine/totals`,
          {
            headers: {
              'Authorization': `Bearer ${auth.token.value}`
            }
          }
        )

        if (!response.ok) {
          throw new CartError('Failed to get cart totals', 'CART_ERROR')
        }

        const totals = await response.json()
        this.total = totals.grand_total
      } catch (error) {
        console.error('Error calculating totals:', error)
        errorHandler.handle(error)
      }
    },

    // Update other methods to use the notification composable
    async clearCart() {
      const loading = useLoading()
      loading.startLoading('Clearing cart...')

      try {
        const auth = useAuth()
        if (this.quoteId) {
          const response = await fetch(`${process.env.MAGENTO_API_URL}/carts/mine/clear`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${auth.token.value}`
            }
          })

          if (!response.ok) {
            throw new CartError('Failed to clear cart', 'CART_ERROR')
          }
        }
        
        this.items = []
        this.total = 0
        this.quoteId = null

        // Clear cart-related cache
        const cache = useCache()
        this.items.forEach(item => {
          cache.setCacheItem(`cart_product_${item.sku}`, null)
        })

        loading.stopLoading()
        const { show } = useNotification()
        show({
          type: 'success',
          message: 'Cart cleared successfully'
        })
      } catch (error) {
        loading.stopLoading()
        errorHandler.handle(error)
      }
    },

    async syncCartWithMagento() {
      try {
        const auth = useAuth()
        const response = await fetch(`${process.env.MAGENTO_API_URL}/carts/mine/items`, {
          headers: {
            'Authorization': `Bearer ${auth.token.value}`
          }
        })

        if (!response.ok) {
          throw new CartError('Failed to sync cart', 'CART_ERROR')
        }

        const magentoItems = await response.json()
        this.items = magentoItems
        await this.calculateTotal()
      } catch (error) {
        errorHandler.handle(error)
      }
    },

    async validateCart() {
      try {
        // Check all items inventory
        for (const item of this.items) {
          const inventory = useInventory()
          const isAvailable = await inventory.checkInventory(item.sku, item.qty)
          if (!isAvailable) {
            throw new CartError(`${item.name} is out of stock`, 'INVENTORY_ERROR')
          }
        }

        // Validate prices
        await this.syncCartWithMagento()

        return true
      } catch (error) {
        errorHandler.handle(error)
        return false
      }
    }
  }
})
