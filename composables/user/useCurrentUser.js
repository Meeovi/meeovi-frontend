import { ref, onMounted } from 'vue'
import { createDirectus, rest, staticToken, readMe } from '@directus/sdk'
import { useRuntimeConfig } from '#imports'
import { useRouter } from 'vue-router'

export const useCurrentUser = () => {
  const config = useRuntimeConfig()
  const router = useRouter()
  const currentUser = ref(null)
  const loading = ref(true)
  const error = ref(null)

  // Initialize Directus client with static token authentication
  const directus = createDirectus(config.public.directus.url)
    .with(rest())
    .with(staticToken())

  // Format date helper function
  const formatDate = (date) => {
    if (!date) return 'Never'
    return new Date(date).toLocaleString()
  }

  // Get avatar URL
  const getAvatarUrl = (avatarId) => {
    if (!avatarId) return null
    return `${config.public.directus.url}assets/${avatarId}`
  }

  // Fetch current user data
  const fetchCurrentUser = async () => {
    console.log('fetchCurrentUser called')
    try {
      loading.value = true
      console.log('Setting loading to true')
      error.value = null

      // Get token from cookie
      const token = useCookie('directus_token')
      console.log('Token present:', !!token.value)

      if (!token.value) {
        throw new Error('No authentication token found')
      }

      // Create a new client instance with the token
      const authenticatedClient = createDirectus(config.public.directus.url)
        .with(rest())
        .with(staticToken(token.value))

      console.log('Attempting to fetch user data...')

      // Fetch user data with authenticated client
      const me = await authenticatedClient.request(
        readMe({
          fields: [
            '*',
            'role.*'
          ],
          deep: {
            role: {
              _limit: -1
            }
          }
        })
      )

      if (!me) {
        throw new Error('No user data returned')
      }

      console.log('User data fetched successfully:', me)
      currentUser.value = me

    } catch (e) {
      console.error('Error in fetchCurrentUser:', e)
      error.value = e.message || 'Failed to load user data'

      // Log detailed error information
      console.error('Full error details:', {
        message: e.message,
        response: e.response,
        status: e.response?.status
      })

      if (e.response?.status === 401) {
        console.log('Unauthorized access, clearing token')
        // Clear invalid token
        const token = useCookie('directus_token')
        token.value = null
        
        // Redirect to login
        await router.push('/auth/login')
      }
    } finally {
      console.log('Setting loading to false')
      loading.value = false
    }
  }

  // Initialize data
  const init = () => {
    console.log('init called')
    const token = useCookie('directus_token')
    console.log('Token present in init:', !!token.value)
    
    if (token.value) {
      console.log('Token found, fetching user data')
      fetchCurrentUser()
    } else {
      console.log('No token found in init')
      currentUser.value = null
      loading.value = false
    }
  }

  // Watch for token changes
  const token = useCookie('directus_token')
  if (process.client) {
    watch(() => token.value, (newToken) => {
      console.log('Token changed:', !!newToken)
      if (newToken) {
        fetchCurrentUser()
      } else {
        currentUser.value = null
        loading.value = false
      }
    })
  }

  // Utility function to check if user is logged in
  const isLoggedIn = computed(() => {
    return !!currentUser.value && !!token.value
  })

  // Utility function to check if user has a specific role
  const hasRole = (roleId) => {
    return currentUser.value?.role?.id === roleId
  }

  // Utility function to get user's full name
  const getFullName = computed(() => {
    if (!currentUser.value) return ''
    return `${currentUser.value.first_name || ''} ${currentUser.value.last_name || ''}`.trim()
  })

  // Debug function
  const debugUserState = () => {
    console.log('Current User State:', {
      isLoading: loading.value,
      hasError: !!error.value,
      errorMessage: error.value,
      userData: currentUser.value,
      hasToken: !!token.value,
      isLoggedIn: isLoggedIn.value
    })
  }

  // Return values and methods that should be available to components
  return {
    currentUser,
    loading,
    error,
    formatDate,
    getAvatarUrl,
    fetchCurrentUser,
    init,
    isLoggedIn,
    hasRole,
    getFullName,
    debugUserState
  }
}
