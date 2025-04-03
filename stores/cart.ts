import { defineStore } from 'pinia';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalPrice: number;
}

export const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        items: [],
        totalPrice: 0
    }),
    actions: {
        updateCart(items: CartItem[], totalPrice: number) {
            this.items = items;
            this.totalPrice = totalPrice;
        },
        addToCart(item: CartItem) {
            const existingItem = this.items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                this.items.push(item);
            }
            this.totalPrice += item.price * item.quantity;
        },
        removeFromCart(itemId: string) {
            const item = this.items.find(i => i.id === itemId);
            if (item) {
                this.totalPrice -= item.price * item.quantity;
                this.items = this.items.filter(i => i.id !== itemId);
            }
        }
    }
});
