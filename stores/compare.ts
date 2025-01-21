import { defineStore } from 'pinia'

interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  quantity?: number;
}

export const useCompareStore = defineStore('compare', {
  state: () => ({
    items: [] as Product[]
  }),

  actions: {
    addToCompare(product: Product) {
      if (!this.items.some(item => item.sku === product.sku)) {
        this.items.push(product)
      }
    },

    removeFromCompare(sku: string) {
      this.items = this.items.filter(item => item.sku !== sku)
    },

    clearCompare() {
      this.items = []
    }
  },

  getters: {
    compareCount: (state) => state.items.length,
    isInCompare: (state) => (sku: string) => state.items.some(item => item.sku === sku)
  }
})
