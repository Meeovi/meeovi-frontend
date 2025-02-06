// composables/useReturns.js

export const useReturns = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.commerceUrl
    const accessTokens = config.public.commerceApiToken
  
    // Get list of returns
    const getReturns = async () => {
      try {
        const response = await fetch(`${baseURL}/returns`, {
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          }
        })
        return await response.json()
      } catch (error) {
        console.error('Error fetching returns:', error)
        throw error
      }
    }
  
    // Get specific return by ID
    const getReturnById = async (id) => {
      try {
        const response = await fetch(`${baseURL}/returns/${id}`, {
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          }
        })
        return await response.json()
      } catch (error) {
        console.error('Error fetching return:', error)
        throw error
      }
    }
  
    // Create new return
    const createReturn = async (returnData) => {
      try {
        const response = await fetch(`${baseURL}/returns`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(returnData)
        })
        return await response.json()
      } catch (error) {
        console.error('Error creating return:', error)
        throw error
      }
    }
  
    return {
      getReturns,
      getReturnById,
      createReturn
    }
  }
  