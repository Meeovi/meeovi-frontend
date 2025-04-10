// composables/useVendureCart.ts
import { ref } from 'vue';
import { useCookie, useRuntimeConfig } from '#imports';

const vendureToken = useCookie('vendure_token', { sameSite: 'lax' });
const cartItems = ref([]);
const cartQuantity = ref(0);
const loading = ref(false);

export const useVendureCart = () => {
  const config = useRuntimeConfig();

  const getHeaders = () => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (vendureToken.value) headers['vendure-token'] = vendureToken.value;
    return headers;
  };

  const updateTokenFromResponse = (response: any) => {
    const newToken = response?.headers?.get?.('vendure-token');
    if (newToken) vendureToken.value = newToken;
  };

  const getCurrentCart = async () => {
    try {
      const response = await $fetch(`${config.public.commerceUrl}/shop-api`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
          query: `
            query GetActiveOrder {
              activeOrder {
                id
                lines {
                  id
                  quantity
                  unitPriceWithTax
                  linePriceWithTax
                  productVariant {
                    id
                    name
                    sku
                    featuredAsset {
                      preview
                    }
                  }
                }
              }
            }
          `,
        }),
      });
  
      updateTokenFromResponse(response);
  
      const order = response?.data?.activeOrder;
      if (!order) {
        console.warn("No active order returned.");
        cartItems.value = [];
        cartQuantity.value = 0;
        return;
      }
  
      cartItems.value = order.lines.map((line: any) => ({
        id: line.id,
        variant_id: line.productVariant.id,
        title: line.productVariant.name,
        sku: line.productVariant.sku,
        thumbnail: line.productVariant.featuredAsset?.preview || null,
        quantity: line.quantity,
        unit_price: line.unitPriceWithTax / 100,
        total_price: line.linePriceWithTax / 100,
      }));
  
      cartQuantity.value = cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
    } catch (error) {
      console.error('Failed to fetch active cart:', error);
    }
  };  

  const addToCart = async (productVariantId: string, quantity: number = 1) => {
    loading.value = true;
    try {
      const response = await $fetch(`${config.public.commerceUrl}/shop-api`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
          query: `
            mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
              addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                ... on Order {
                  id
                }
                ... on ErrorResult {
                  errorCode
                  message
                }
              }
            }
          `,
          variables: { productVariantId, quantity },
        }),
      });

      updateTokenFromResponse(response);

      const result = response?.data?.addItemToOrder;
      if (result?.__typename === 'Order') {
        await getCurrentCart();
      } else {
        console.error('Add to cart failed:', result?.message);
      }
    } finally {
      loading.value = false;
    }
  };

  const updateItemQuantity = async (orderLineId: string, quantity: number) => {
    loading.value = true;
    try {
      const response = await $fetch(`${config.public.commerceUrl}/shop-api`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
          query: `
            mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
              adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                ... on Order {
                  id
                }
                ... on ErrorResult {
                  errorCode
                  message
                }
              }
            }
          `,
          variables: { orderLineId, quantity },
        }),
      });

      if (response?.data?.adjustOrderLine?.__typename === 'Order') {
        await getCurrentCart();
      }
    } finally {
      loading.value = false;
    }
  };

  const removeItem = async (orderLineId: string) => {
    loading.value = true;
    try {
      const response = await $fetch(`${config.public.commerceUrl}/shop-api`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
          query: `
            mutation RemoveOrderLine($orderLineId: ID!) {
              removeOrderLine(orderLineId: $orderLineId) {
                ... on Order {
                  id
                }
                ... on ErrorResult {
                  errorCode
                  message
                }
              }
            }
          `,
          variables: { orderLineId },
        }),
      });

      if (response?.data?.removeOrderLine?.__typename === 'Order') {
        await getCurrentCart();
      }
    } finally {
      loading.value = false;
    }
  };

  const hasItem = (variantId: string) =>
    cartItems.value.some(item => item.variant_id === variantId);

  return {
    cartItems,
    cartQuantity,
    loading,
    getCurrentCart,
    addToCart,
    updateItemQuantity,
    removeItem,
    hasItem,
  };
};
