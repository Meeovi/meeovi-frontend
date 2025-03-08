import { useRuntimeConfig } from '#imports';

export const getProducts = async () => {
  const config = useRuntimeConfig();
  try {
    const response = await $fetch(`${config.public.shopware.endpoint}/store-api/product`, {
      method: 'POST',
      headers: {
        'SW-Access-Key': config.public.shopware.accessToken,
        'sw-include-seo-urls': '1',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        includes: {
          product: ['*'],
          media: ['*'],
          product_media: ['media']
        }
      })
    });

    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

export const getProductById = async (productId) => {
  const config = useRuntimeConfig();
  try {
    const response = await $fetch(`${config.public.shopware.endpoint}/store-api/product/${productId}`, {
      method: 'POST',
      headers: {
        'SW-Access-Key': config.public.shopware.accessToken,
        'sw-include-seo-urls': '1',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        includes: {
          product: ['*'],
          media: ['*'],
          product_media: ['media']
        }
      })
    });

    return response;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    return null;
  }
};
