/*const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const consumerKey = 'ck_71513251ef29d6eb34d8e91337e10c5dc29785e9';
const consumerSecret = 'cs_6ab0eaa4c194e84b414cef8a25f7b3324c715b88';

export const getProducts = async () => {
  try {
    const products = await $fetch(`${apiUrl}/wp-json/wc/v3/products`, {
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
    const products = await $fetch(`${apiUrl}/wp-json/wc/v3/products/${id}`, {
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
        'Authorization': `Bearer ${config.public.magentoApiToken}`
      }
    });
    return products.items;
  },

  async getProductById(sku) {
    const config = useRuntimeConfig();
    const products = await $fetch(`${config.public.commerceUrl}/rest/V1/products/${sku}`, {
      headers: {
        'Authorization': `Bearer ${config.public.magentoApiToken}`
      }
    });
    return products;
  } 
}
