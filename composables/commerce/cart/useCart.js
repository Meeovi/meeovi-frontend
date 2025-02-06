import { ref } from 'vue';

export const useCart = () => {
  const cartResponse = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const addToCart = async (sku, quantity, selectedOptions = {}) => {
    try {
      loading.value = true;
      error.value = null;

      const payload = {
        cartItem: {
          sku,
          qty: quantity,
          product_option: {
            extension_attributes: {
              configurable_item_options: Object.entries(selectedOptions).map(
                ([attributeCode, value]) => ({
                  option_id: attributeCode,
                  option_value: value,
                })
              ),
            },
          },
        },
      };

      const response = await $fetch('/rest/V1/carts/mine/items', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.MAGENTO_API_TOKEN}`,
        },
        body: payload,
      });

      cartResponse.value = response;
    } catch (err) {
      error.value = err.message || 'Failed to add to cart.';
    } finally {
      loading.value = false;
    }
  };

  return { cartResponse, loading, error, addToCart };
};
