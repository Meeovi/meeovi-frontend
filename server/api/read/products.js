// server/api/products.js
export async function getProducts() {
    try {
      const response = await fetch(process.env.SHOPWARE_ENDPOINT + '/product');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products', error);
      throw error;
    }
  }
  