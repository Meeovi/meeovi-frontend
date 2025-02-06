// composables/useCompanyCredit.js

export const useCompanyCredit = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.commerceUrl
    const accessTokens = config.public.commerceApiToken
  
    // Get company credit information
    const getCompanyCredit = async (companyId) => {
      try {
        const response = await fetch(`${baseURL}/company/${companyId}/credit`, {
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          }
        })
        return await response.json()
      } catch (error) {
        console.error('Error fetching company credit:', error)
        throw error
      }
    }
  
    // Update company credit
    const updateCompanyCredit = async (companyId, creditData) => {
      try {
        const response = await fetch(`${baseURL}/company/${companyId}/credit`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${accessTokens}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(creditData)
        })
        return await response.json()
      } catch (error) {
        console.error('Error updating company credit:', error)
        throw error
      }
    }
  
    return {
      getCompanyCredit,
      updateCompanyCredit
    }
  }
  