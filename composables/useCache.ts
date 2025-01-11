// composables/useCache.ts
export const useCache = () => {
    const cache = useStorage('magento-cache', {})
    const config = useRuntimeConfig()
  
    const setCacheItem = (key: string, value: any, ttl = 3600) => {
      cache.value[key] = {
        value,
        expires: Date.now() + (ttl * 1000)
      }
    }
  
    const getCacheItem = (key: string) => {
      const item = cache.value[key]
      if (!item) return null
      if (Date.now() > item.expires) {
        delete cache.value[key]
        return null
      }
      return item.value
    }
  
    return {
      setCacheItem,
      getCacheItem
    }
  }