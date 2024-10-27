import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    loading: true,
  }),
  actions: {
    async init() {
      const auth = getAuth()
      this.loading = true
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          this.user = user
          this.loading = false
          resolve(user)
        })
      })
    },
    setUser(user) {
      this.user = user
    },
    clearUser() {
      this.user = null
    },
    // Add this new logout action
    async logout() {
      const auth = getAuth()
      try {
        await signOut(auth)
        this.clearUser()
        console.log('User logged out successfully')
      } catch (error) {
        console.error('Error during logout:', error)
        throw error // Rethrow the error so it can be handled by the component if needed
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
})