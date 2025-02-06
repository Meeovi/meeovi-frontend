<template>
  <div>
    <button @click="handleLogout" class="logout-button">
      Logout
    </button>
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'vue-router'

const router = useRouter()

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    
    // Clear any user store state if you're using one
    // userStore.clearUser() // Uncomment if you're using a store
    
    // Redirect to login page or home
    await router.push('/')
  } catch (error) {
    console.error('Error logging out:', error.message)
  }
}
</script>

<style scoped>
.logout-button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ff4444;
  color: white;
  border: none;
}

.logout-button:hover {
  background-color: #cc0000;
}
</style>
