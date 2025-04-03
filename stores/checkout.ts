import { defineStore } from 'pinia';
import type { CheckoutState } from '@/types/checkout';

export const useCheckoutStore = defineStore('checkout', {
    state: (): CheckoutState => ({
        shippingAddress: null,
        paymentMethod: null,
        orderId: '',
        isLoading: false
    }),
    actions: {
        setShippingAddress(address: string) {
            this.shippingAddress = address;
        },
        setPaymentMethod(method: string) {
            this.paymentMethod = method;
        }
    }
});
