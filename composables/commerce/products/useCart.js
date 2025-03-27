// composables/useCart.js
import { ref } from 'vue';

const cart = ref([]);

export function useCart() {
  const addItemToCart = (item) => {
    const existingItem = cart.value.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.value.push(item);
    }
    console.log('Item added to cart:', item);
    // Here you would typically also update your backend or local storage
  };

  const removeItemFromCart = (itemId) => {
    const index = cart.value.findIndex(item => item.id === itemId)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }
  };

  return {
    cart,
    addItemToCart,
    removeItemFromCart
  };
}
