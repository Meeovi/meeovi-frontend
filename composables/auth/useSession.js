import { useQuery } from '@vue/apollo-composable'
import { AUTH_MUTATIONS } from '~/graphql/commerce/mutations/customer/auth'
import { useCookie } from '#app'
import { ref, computed, watch } from 'vue'

export function useSession() {
  const token = useCookie('magento_token')
  const user = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const { result, refetch, onResult, onError } = useQuery(AUTH_MUTATIONS.SESSION, {
    context: { headers: { Authorization: `Bearer ${token.value}` } },
    fetchPolicy: 'network-only', // Ensure fresh session data
  })

  onResult(({ data }) => {
    console.log("GraphQL Response:", data) // Debugging

    if (data?.customer) {
      user.value = data.customer
    } else {
      token.value = null
      user.value = null
    }
    loading.value = false
  })

  onError((err) => {
    console.error("GraphQL Error:", err)
    token.value = null
    user.value = null
    loading.value = false
  })

  watch(token, (newToken) => {
    if (!newToken) {
      user.value = null
    } else {
      refetch()
    }
  })

  const isAuthenticated = computed(() => !!user.value)

  return { user, isAuthenticated, loading, error, refetch }
}
