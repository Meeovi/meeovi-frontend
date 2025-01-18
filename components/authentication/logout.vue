<template>
  <v-btn @click="logout" variant="text" text="Logout"></v-btn>
</template>

<script setup>
  import {
    useRouter
  } from 'vue-router';

  const router = useRouter();

  const logout = async () => {
    try {
      await auth.signOut(); // Logs out from Firebase
      const userStore = useUserStore(); // Access your user store
      userStore.clearUser(); // Clear user state in Pinia
      router.push('/'); // Redirect to the homepage
      showNotification('Logged out successfully!', 'success');
    } catch (error) {
      console.error('Error logging out:', error);
      showNotification('Failed to log out. Please try again.', 'error');
    }
  };
</script>