// composables/useGiftWrapping.js

export const useGiftWrapping = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.commerceUrl
    const accessTokens = config.public.commerceApiToken
  
    // Get all gift wrappings
    const getGiftWrappings = async () => {
      try {
        const response = await fetch(`${baseURL}/gift-wrapping`, {
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          }
        })
        return await response.json()
      } catch (error) {
        console.error('Error fetching gift wrappings:', error)
        throw error
      }
    }
  
    // Get gift wrapping by ID
    const getGiftWrappingById = async (id) => {
      try {
        const response = await fetch(`${baseURL}/gift-wrapping/${id}`, {
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          }
        })
        return await response.json()
      } catch (error) {
        console.error('Error fetching gift wrapping:', error)
        throw error
      }
    }
  
    return {
      getGiftWrappings,
      getGiftWrappingById
    }
  }
  