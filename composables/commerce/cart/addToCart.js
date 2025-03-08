// useCartActions.js
import { ref } from "vue";
import { useNuxtApp } from "#app";
import useCart from "./useCart";

export default function useCartActions() {
  const config = useRuntimeConfig()  
  const nuxtApp = useNuxtApp();
  const isLoading = ref(false);
  const cartError = ref(null);
  const { initializeCart } = useCart();

  // Base API URL should point to your Magento installation
  const API_BASE_URL = config.public.commerceUrl;
  const accessTokens = config.public.commerceApiToken
  
  // Add to Cart
  const addToCart = async (productData) => {
    isLoading.value = true;
    cartError.value = null;

    try {
      if (!productData?.sku || !productData?.quantity) {
        throw new Error("Product SKU and quantity are required");
      }

      const cartId = await initializeCart();
      
      if (!cartId) {
        throw new Error("Could not initialize cart");
      }

      // Using Magento 2 REST API endpoint for adding items to cart
      const response = await fetch(`${API_BASE_URL}/rest/V1/carts/${cartId}/items`, {
        method: 'POST',
        headers: {
         'Authorization': `Bearer ${accessTokens}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          cartItem: {
            sku: productData.sku,
            qty: parseInt(productData.quantity),
            quote_id: cartId
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to add item to cart`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Cart error details:', err);
      cartError.value = err.message || "Failed to add product to cart";
      throw new Error(cartError.value);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    cartError,
    addToCart
  };
}
