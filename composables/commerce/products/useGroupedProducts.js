// composables/useGroupedProducts.js
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'

export function useGroupedProducts() {
  const config = useRuntimeConfig()
  const groupedProducts = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchGroupedProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=type_id&searchCriteria[filterGroups][0][filters][0][value]=grouped`, {
        headers: {
          'Authorization': `Bearer ${config.public.commerceApiToken}`,
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) throw new Error('Failed to fetch grouped products')
      const data = await response.json()
      groupedProducts.value = data.items
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const createGroupedProduct = async (productData) => {
    loading.value = true;
    error.value = null;
    try {
      console.log('Sending request to create grouped product:', productData);
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/products`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.public.commerceApiToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product: productData })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(`Failed to create grouped product: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Grouped product created successfully:', data);
      groupedProducts.value.push(data);
      return data;
    } catch (err) {
      console.error('Error in createGroupedProduct:', err);
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };  

  const addProductsToGroup = async (sku, productLinks) => {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/products/${sku}/links`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.public.commerceApiToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: productLinks })
      })
      if (!response.ok) throw new Error('Failed to add products to group')
      const data = await response.json()
      return data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    groupedProducts,
    loading,
    error,
    fetchGroupedProducts,
    createGroupedProduct,
    addProductsToGroup
  }
}
