import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export const useUserStore = defineStore('user', {
  state: () => ({
    firebaseUser: null,
    magentoUser: null,
    loading: true,
  }),
  actions: {
    async init() {
      const auth = getAuth()
      this.loading = true
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          this.setFirebaseUser(user)
          this.loading = false
          resolve(user)
        })
      })
    },
    setFirebaseUser(user) {
      this.firebaseUser = user
    },
    setMagentoUser(user) {
      this.magentoUser = user
    },
    clearUser() {
      this.firebaseUser = null
      this.magentoUser = null
    },
    async logout() {
      const auth = getAuth()
      try {
        await signOut(auth)
        this.clearUser()
        console.log('User logged out successfully')
      } catch (error) {
        console.error('Error during logout:', error)
        throw error
      }
    },
    // New method to update user data after Magento authentication
    updateUserData(firebaseUser, magentoUser) {
      if (this.validateFirebaseUser(firebaseUser) && this.validateMagentoUser(magentoUser)) {
        this.setFirebaseUser(firebaseUser)
        this.setMagentoUser(magentoUser)
      } else {
        console.error('Invalid user data')
        throw new Error('Invalid user data')
      }
    },

    validateFirebaseUser(user) {
      // Basic Firebase user validation
      if (!user) return false
      if (typeof user.uid !== 'string' || user.uid.length === 0) return false
      if (typeof user.email !== 'string' || user.email.length === 0) return false
      if (typeof user.emailVerified !== 'boolean') return false

      // Add more specific validations as needed
      return true
    },

    validateMagentoUser(user) {
      // Basic Magento user validation
      if (!user) return false
      if (typeof user.id !== 'number' || user.id <= 0) return false
      if (typeof user.email !== 'string' || user.email.length === 0) return false
      if (typeof user.firstname !== 'string' || user.firstname.length === 0) return false
      if (typeof user.lastname !== 'string' || user.lastname.length === 0) return false

      // Add more specific validations as needed
      return true
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.firebaseUser && !!state.magentoUser,
    currentUser: (state) => {
      if (state.firebaseUser && state.magentoUser) {
        return {
          ...state.firebaseUser,
          ...state.magentoUser,
        }
      }
      return null
    },
  },
})