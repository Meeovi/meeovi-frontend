import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
const supabase = createClient(
  config.public.supabase.url,
  config.public.supabase.key
)

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    loading: true,
  }),

  actions: {
    async init() {
      this.loading = true
      try {
        // Get initial session
        const { data: { session } } = await supabase.auth.getSession()
        this.setUser(session?.user ?? null)

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          this.setUser(session?.user ?? null)
        })

        return session?.user
      } catch (error) {
        console.error('Error initializing auth:', error)
        this.clearUser()
        return null
      } finally {
        this.loading = false
      }
    },

    setUser(user) {
      this.user = user
    },

    clearUser() {
      this.user = null
    },

    async logout() {
      this.loading = true
      try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        
        this.clearUser()
        console.log('User logged out successfully')
      } catch (error) {
        console.error('Error during logout:', error)
        throw error
      } finally {
        this.loading = false
      }
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
  },
})