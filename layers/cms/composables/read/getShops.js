import { useRuntimeConfig } from '#imports';

export const getShops = async () => {
  const config = useRuntimeConfig();
    try {
      const shops = await $fetch(`${config.public.wordpressUrl}/wp-json/dokan/v1/stores`, {
        headers: {
          'Authorization': `Bearer ${config.public.wordpressToken}`
        }
      });
      return shops;
    } catch (error) {
      console.error('Error fetching shops:', error);
      return [];
    }
  };

  export const useShopById = async (id) => {
    try {
      const shop = await $fetch(`${config.public.wordpressUrl}/wp-json/dokan/v1/stores/${id}`, {
        headers: {
          'Authorization': `Bearer ${config.public.wordpressToken}`
        }
      });
      return shop;
    } catch (error) {
      console.error(`Error fetching shop with ID ${id}:`, error);
      return null;
    }
  };