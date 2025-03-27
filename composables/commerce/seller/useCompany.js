// composables/useCompany.js

export const useCompany = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.commerceUrl
    const accessTokens = config.public.commerceApiToken
  
    // Get company information
    const getCompany = async (companyId) => {
      try {
        const response = await fetch(`${baseURL}/company/${companyId}`, {
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          }
        })
        return await response.json()
      } catch (error) {
        console.error('Error fetching company:', error)
        throw error
      }
    }
  
    // Create company
    const createCompany = async (companyData) => {
      try {
        const response = await fetch(`${baseURL}/company`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(companyData)
        })
        return await response.json()
      } catch (error) {
        console.error('Error creating company:', error)
        throw error
      }
    }
  
    return {
      getCompany,
      createCompany
    }
  }
  