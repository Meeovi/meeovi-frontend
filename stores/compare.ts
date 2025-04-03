// stores/compare.ts
import { defineStore } from 'pinia';
import type {
  ComparableAttribute,
  ComparableItem,
  ComparableProduct,
  CompareList,
} from '~/graphql/queries-mutations_subscriptions/types/ProductCompare.type';

export const useCompareStore = defineStore('compare', {
  state: () => ({
    isLoading: false,
    count: 0,
    attributes: [] as ComparableAttribute[],
    products: [] as ComparableProduct[],
    productSkus: [] as string[],
    items: [] as ComparableItem[]
  }),

  actions: {
    toggleLoader(isLoading: boolean) {
      this.isLoading = isLoading;
    },

    setCompareList(payload: CompareList) {
      this.attributes = payload.attributes || [];
      this.products = payload.products || [];
      this.items = payload.items || [];
    },

    removeComparedProduct(productSku: string) {
      this.products = this.products.filter(product => product.sku !== productSku);
      this.productSkus = this.productSkus.filter(sku => sku !== productSku);
      this.items = this.items.filter(item => item.product.sku !== productSku);
    },

    clearComparedProducts() {
      this.products = [];
      this.productSkus = [];
      this.items = [];
      this.count = 0;
    },

    setCompareListSkus(productSkus: string[]) {
      this.productSkus = productSkus;
    },

    addComparedProductSku(productSku: string) {
      if (!this.productSkus.includes(productSku)) {
        this.productSkus.push(productSku);
      }
    },

    updateCompareTotals(compareTotals: string) {
      this.count = parseInt(compareTotals, 10); // Convert string to number
    }
  },

  getters: {
    getCompareCount: (state) => state.count,
    getComparedProducts: (state) => state.products,
    getComparedProductSkus: (state) => state.productSkus,
    getIsLoading: (state) => state.isLoading
  }
});
