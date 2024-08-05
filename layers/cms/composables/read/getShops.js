const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const wordpressToken = process.env.WORDPRESS_TOKEN ||
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZW92aS5tZWVvdmljbXMuY29tIiwiaWF0IjoxNzE4MjkxMTg0LCJuYmYiOjE3MTgyOTExODQsImV4cCI6MTcxODg5NTk4NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.pER2LWpuRBgMUqqvD6pcZfb185nULQV_dq-ml67AFZc'

export const getShops = async () => {
    try {
      const shops = await $fetch(`${apiUrl}/wp-json/dokan/v1/stores`, {
        headers: {
          'Authorization': `Bearer ${wordpressToken}`
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
      const shop = await $fetch(`${apiUrl}/wp-json/dokan/v1/stores/${id}`, {
        headers: {
          'Authorization': `Bearer ${wordpressToken}`
        }
      });
      return shop;
    } catch (error) {
      console.error(`Error fetching shop with ID ${id}:`, error);
      return null;
    }
  };