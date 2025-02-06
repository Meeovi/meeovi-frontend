import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#imports'

export const useSupabaseAuth = () => {
  const session = ref(null)
  const loading = ref(true)

  const config = useRuntimeConfig()
  const supabase = createClient(
    config.public.supabase.url,
    config.public.supabase.key
  )

  const initializeAuth = async () => {
    try {
      // Get initial session
      const { data: { session: initialSession } } = await supabase.auth.getSession()
      session.value = initialSession

      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, _session) => {
        session.value = _session
      })

      return () => {
        subscription.unsubscribe()
      }
    } finally {
      loading.value = false
    }
  }

  // Add useful auth methods
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      session.value = null
    } catch (error) {
      console.error('Error signing out:', error.message)
      throw error
    }
  }

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
      session.value = data.session
      return data
    } catch (error) {
      console.error('Error signing in:', error.message)
      throw error
    }
  }

  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) throw error
      return data
    } catch (error) {
      console.error('Error signing up:', error.message)
      throw error
    }
  }

  // Computed properties
  const isAuthenticated = computed(() => !!session.value)
  const user = computed(() => session.value?.user ?? null)

  onMounted(() => {
    initializeAuth()
  })

  return {
    session,
    loading,
    user,
    isAuthenticated,
    signIn,
    signOut,
    signUp,
    supabase // Expose supabase client if needed
  }
}
