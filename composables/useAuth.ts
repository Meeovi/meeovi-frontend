// composables/useAuth.ts
export const useAuth = () => {
    const token = useCookie('magento_token')
    const refreshToken = useCookie('magento_refresh_token')
    const tokenExpiry = useCookie('magento_token_expiry')
  
    const isTokenExpired = () => {
      return Date.now() >= parseInt(tokenExpiry.value || '0')
    }
  
    const refreshAccessToken = async () => {
      try {
        const response = await fetch(`${process.env.MAGENTO_API_URL}/refresh-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            refresh_token: refreshToken.value
          })
        })
  
        if (!response.ok) throw new Error('Failed to refresh token')
  
        const data = await response.json()
        token.value = data.access_token
        refreshToken.value = data.refresh_token
        tokenExpiry.value = (Date.now() + data.expires_in * 1000).toString()
      } catch (error) {
        throw new CartError('Session expired', 'AUTH_ERROR')
      }
    }
  
    return {
      token,
      refreshToken,
      isTokenExpired,
      refreshAccessToken
    }
  }
  