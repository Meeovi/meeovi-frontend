// composables/useGuestCart.js
export const useGuestCart = () => {
    const loading = ref(false);
    const error = ref(null);
  
    // Create guest cart
    const createGuestCart = async () => {
      try {
        loading.value = true;
        error.value = null;
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/guest-carts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) throw new Error('Failed to create guest cart');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    // Get guest cart
    const getGuestCart = async (cartId) => {
      try {
        loading.value = true;
        error.value = null;
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/guest-carts/${cartId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) throw new Error('Failed to fetch guest cart');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    // Add item to guest cart
    const addItemToGuestCart = async (cartId, productData) => {
      try {
        loading.value = true;
        error.value = null;
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/guest-carts/${cartId}/items`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(productData)
        });
  
        if (!response.ok) throw new Error('Failed to add item to guest cart');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    return {
      loading,
      error,
      createGuestCart,
      getGuestCart,
      addItemToGuestCart
    };
  };
  