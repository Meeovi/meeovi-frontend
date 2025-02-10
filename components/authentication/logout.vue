<template>
  <div>
    <button @click="handleLogout" class="logout-button" :disabled="authStore.loading">
      {{ authStore.loading ? 'Logging out...' : 'Logout' }}
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/auth'

const router = useRouter()
const authStore = useUserStore()

const handleLogout = async () => {
  try {
    const { error } = await authStore.signOut()
    if (error) throw error
    
    await router.push('/auth/login')
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

.logout-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>