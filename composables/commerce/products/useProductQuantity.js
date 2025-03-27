import { ref } from 'vue';

export const useProductQuantity = () => {
  const quantity = ref(1);

  const incrementQuantity = () => {
    quantity.value += 1;
  };

  const decrementQuantity = () => {
    if (quantity.value > 1) quantity.value -= 1;
  };

  return { quantity, incrementQuantity, decrementQuantity };
};
