import { useSession } from '~/composables/auth/useSession'

export default defineNuxtPlugin(() => {
  const { refetch } = useSession()

  if (process.client) {
    refetch()
  }
})
