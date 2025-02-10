// composables/useMenuLogic.js
import { ref, computed } from 'vue'
import { useCurrentUser } from '~/composables/user/useCurrentUser'

export const useMenuLogic = () => {
  const { currentUser, loading, error, init, fetchCurrentUser } = useCurrentUser()
  const { $directus, $readItem } = useNuxtApp()
  const token = useCookie('directus_token')
  const location = ref('bottom')

  // Compute authentication state with proper token check
  const isAuthenticated = computed(() => {
    const hasToken = !!token.value
    const hasUser = !!currentUser.value
    console.log('Auth Check:', { hasToken, hasUser, user: currentUser.value })
    return hasToken && hasUser
  })

  // Compute user display name with logging
  const getUserDisplayName = computed(() => {
    if (!currentUser.value) {
      console.log('No current user data')
      return 'User'
    }
    console.log('User data:', currentUser.value)
    return currentUser.value.first_name || currentUser.value.email || currentUser.value.username || 'User'
  })

  // Enhanced fetch navigation data
  const fetchNavigationData = async () => {
    try {
      if (!token.value) {
        console.log('No token available for navigation fetch')
        return { nav: null, navcomm: null }
      }

      const [nav, navcomm] = await Promise.all([
        useAsyncData('nav', () => {
          return $directus.request($readItem('navigation', '2', {
            fields: ['*', 'menus.*']
          }))
        }, { 
          watch: false,
          server: true,
          headers: {
            'Authorization': `Bearer ${token.value}`
          }
        }),
        
        useAsyncData('navcomm', () => {
          return $directus.request($readItem('navigation', '3', {
            fields: ['*', 'menus.*']
          }))
        }, { 
          watch: false,
          server: true,
          headers: {
            'Authorization': `Bearer ${token.value}`
          }
        })
      ])

      return { nav: nav.data, navcomm: navcomm.data }
    } catch (e) {
      console.error('Error fetching navigation:', e)
      return { nav: null, navcomm: null }
    }
  }

  // Initialize session
  const initSession = async () => {
    console.log('Initializing session...')
    if (token.value) {
      console.log('Token found, fetching user data...')
      try {
        await fetchCurrentUser()
        console.log('User data fetched:', currentUser.value)
      } catch (e) {
        console.error('Error fetching user data:', e)
        // Clear invalid token
        token.value = null
      }
    } else {
      console.log('No token found')
      currentUser.value = null
    }
  }

  // Debug utilities
  const debugUtils = {
    checkAuthState: () => {
      const state = {
        loading: loading.value,
        error: error.value,
        currentUser: currentUser.value,
        token: token.value,
        isAuthenticated: isAuthenticated.value,
        displayName: getUserDisplayName.value
      }
      console.log('Current Auth State:', state)
      return state
    },
    refreshUserData: async () => {
      console.log('Refreshing user data...')
      await fetchCurrentUser()
      return debugUtils.checkAuthState()
    },
    clearSession: () => {
      token.value = null
      currentUser.value = null
      console.log('Session cleared')
    }
  }

  // Watch for token changes
  if (process.client) {
    watch(() => token.value, async (newToken) => {
      console.log('Token changed:', !!newToken)
      if (newToken) {
        await initSession()
      } else {
        currentUser.value = null
      }
    })
  }

  // Auto-initialize on mount
  onMounted(() => {
    console.log('MenuLogic mounted')
    initSession()
  })

  return {
    location,
    currentUser,
    loading,
    error,
    isAuthenticated,
    getUserDisplayName,
    token,
    init: initSession,
    fetchNavigationData,
    debugUtils
  }
}
