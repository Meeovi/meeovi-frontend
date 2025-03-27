import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

export const useAuth = () => {
  const user = ref(null)
  const loading = ref(true)

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )

  onMounted(async () => {
    // Get initial session
    const { data: { session } } = await supabase.auth.getSession()
    user.value = session?.user ?? null
    loading.value = false

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      user.value = session?.user ?? null
    })

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe()
  })

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return {
    user,
    loading,
    signOut
  }
}