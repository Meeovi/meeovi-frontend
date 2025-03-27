// composables/usePurchaseOrderCart.js
export const usePurchaseOrderCart = () => {
    const loading = ref(false);
    const error = ref(null);
  
    // Get purchase order cart
    const getPurchaseOrderCart = async (cartId) => {
      try {
        loading.value = true;
        error.value = null;
        const token = localStorage.getItem('customerToken');
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/carts/mine/purchase-orders/${cartId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) throw new Error('Failed to fetch purchase order cart');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    // Create purchase order
    const createPurchaseOrder = async (cartId, purchaseOrderData) => {
      try {
        loading.value = true;
        error.value = null;
        const token = localStorage.getItem('customerToken');
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/carts/mine/purchase-orders`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cartId,
            purchaseOrderData
          })
        });
  
        if (!response.ok) throw new Error('Failed to create purchase order');
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
      getPurchaseOrderCart,
      createPurchaseOrder
    };
  };
  