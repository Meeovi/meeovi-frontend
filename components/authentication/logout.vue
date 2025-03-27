<template>
  <div>
    <button @click="signOut" class="logout-button">
      {{ authStore.loading ? 'Logging out...' : 'Logout' }}
    </button>
  </div>
</template>

<script setup>
  import {
    useRouter
  } from 'vue-router'
  const { signOut } = useSupabaseAuth()

  const router = useRouter()
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