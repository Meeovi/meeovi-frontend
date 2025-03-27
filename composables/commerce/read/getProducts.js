import { useRuntimeConfig } from '#imports';
/*
export const getProducts = async () => {
  try {
    const products = await $fetch(`${config.public.wordpressUrl}/wp-json/wc/v3/products`, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret
      }
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const products = await $fetch(`${config.public.wordpressUrl}/wp-json/wc/v3/products/${id}`, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret
      }
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};*/

export default {
  async getProducts() {
    const config = useRuntimeConfig();
    const products = await $fetch(`${config.public.commerceUrl}/rest/V1/products`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return products.items;
  },

  async getProductById(sku) {
    const config = useRuntimeConfig();
    const products = await $fetch(`${config.public.commerceUrl}/rest/V1/products/${sku}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return products;
  } 
}
