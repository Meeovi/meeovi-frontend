import { defineStore } from 'pinia';
import type { BillingAddress, ShippingAddress } from '~/types/address'

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    billingAddress: null as BillingAddress | null,
    shippingAddress: null as ShippingAddress | null,
    cartId: null as string | null,
    loading: false,
    error: null as string | null,
  }),
  
  actions: {
    setBillingAddress(address: BillingAddress) {
      this.billingAddress = address;
    },

    setShippingAddress(address: ShippingAddress) {
      this.shippingAddress = address;
    },
    
    setCartId(id: string) {
      this.cartId = id;
    },
    
    clearCheckout() {
      this.billingAddress = null;
      this.shippingAddress = null;
      this.error = null;
    },
  },
});
