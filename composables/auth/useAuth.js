import { useMutation } from '@vue/apollo-composable'
import {
  AUTH_MUTATIONS
} from '~/graphql/commerce/mutations/customer/auth'
import { useCookie } from '#app'

export function useAuth() {
  const token = useCookie('magento_token')

  const { mutate: logoutCustomer } = useMutation(AUTH_MUTATIONS.LOGOUT, {
    context: { headers: { Authorization: `Bearer ${token.value}` } }
  })

  const logout = async () => {
    await logoutCustomer()
    token.value = null
  }

  return { logout }
}
