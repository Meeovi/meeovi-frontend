import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

export const useUserStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
  }),
  
  actions: {
    setUser(user) {
      this.user = user
    },
    
    clearUser() {
      this.user = null
    },

    async signOut() {
      try {
        this.loading = true
        const supabase = createClient(
          process.env.SUPABASE_URL,
          process.env.SUPABASE_KEY
        )
        
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        
        this.clearUser()
        return { error: null }
      } catch (error) {
        return { error }
      } finally {
        this.loading = false
      }
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.user
  }
})
