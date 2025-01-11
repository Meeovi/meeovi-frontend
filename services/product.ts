// services/product.ts
export const useProductService = () => {
    const cache = useCache()
  
    const getProduct = async (sku: string) => {
      // Check cache first
      const cachedProduct = cache.getCacheItem(`product_${sku}`)
      if (cachedProduct) return cachedProduct
  
      // If not in cache, fetch from API
      const response = await fetch(`${process.env.MAGENTO_API_URL}/products/${sku}`)
      const product = await response.json()
  
      // Cache the result
      cache.setCacheItem(`product_${sku}`, product)
  
      return product
    }
  
    return {
      getProduct
    }
  }