import { useRuntimeConfig } from '#imports'

export const useProducts = () => {
  const config = useRuntimeConfig()

  const getLatestProducts = async () => {
    try {
      // Using your specific Shopware endpoint from .env
      const response = await $fetch(`${config.public.shopware.endpoint}/product`, {
        method: 'GET',
        headers: {
          'SW-Access-Key': config.public.shopware.accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          limit: 10,
          includes: {
            product: [
              'id',
              'name',
              'description',
              'price',
              'cover',
              'translated'
            ],
            product_media: ['media'],
            media: ['url']
          },
          associations: {
            cover: {
              associations: {
                media: {}
              }
            }
          }
        })
      })
      
      return response
    } catch (error) {
      console.error('Error fetching products:', {
        message: error.message,
        endpoint: config.public.shopware.endpoint,
        hasAccessToken: !!config.public.shopware.accessToken
      })
      throw error
    }
  }

  return {
    getLatestProducts
  }
}
