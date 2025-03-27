/**
 * Composable for managing gift registries in Magento
 */

// Create a new gift registry
const createGiftRegistry = async (registryData) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/giftregistry/mine`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registryData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error creating gift registry:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const newRegistry = await response.json();
      console.log('Gift registry created:', newRegistry);
      return newRegistry;
    } catch (error) {
      console.error('Error creating gift registry:', error);
      throw error;
    }
  };
  
  // Get customer's gift registries
  const getMyGiftRegistries = async () => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/giftregistry/mine`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching gift registries:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const registries = await response.json();
      console.log('Gift registries:', registries);
      return registries;
    } catch (error) {
      console.error('Error fetching gift registries:', error);
      throw error;
    }
  };
  
  // Get a specific gift registry by ID
  const getGiftRegistryById = async (registryId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/giftregistry/${registryId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching gift registry:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const registry = await response.json();
      console.log('Gift registry:', registry);
      return registry;
    } catch (error) {
      console.error('Error fetching gift registry:', error);
      throw error;
    }
  };
  
  // Update a gift registry
  const updateGiftRegistry = async (registryId, registryData) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/giftregistry/${registryId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registryData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error updating gift registry:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const updatedRegistry = await response.json();
      console.log('Gift registry updated:', updatedRegistry);
      return updatedRegistry;
    } catch (error) {
      console.error('Error updating gift registry:', error);
      throw error;
    }
  };
  
  // Delete a gift registry
  const deleteGiftRegistry = async (registryId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/giftregistry/${registryId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error deleting gift registry:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Gift registry deleted:', result);
      return result;
    } catch (error) {
      console.error('Error deleting gift registry:', error);
      throw error;
    }
  };
  
  // Add items to gift registry
  const addItemToGiftRegistry = async (registryId, itemData) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/giftregistry/${registryId}/items`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error adding item to gift registry:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Item added to gift registry:', result);
      return result;
    } catch (error) {
      console.error('Error adding item to gift registry:', error);
      throw error;
    }
  };
  
  // Remove items from gift registry
  const removeItemFromGiftRegistry = async (registryId, itemId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/giftregistry/${registryId}/items/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error removing item from gift registry:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Item removed from gift registry:', result);
      return result;
    } catch (error) {
      console.error('Error removing item from gift registry:', error);
      throw error;
    }
  };
  
  export {
    createGiftRegistry,
    getMyGiftRegistries,
    getGiftRegistryById,
    updateGiftRegistry,
    deleteGiftRegistry,
    addItemToGiftRegistry,
    removeItemFromGiftRegistry
  };
  