<template>
    <div>
        <h1>Logging out...</h1>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = () => {
  // Remove the token (stored in localStorage or cookies)
  localStorage.removeItem('jwtToken');  // Assuming the token is stored in localStorage

  // Optional: Clear any other user data from state or storage
  // For example: localStorage.removeItem('userDetails');

  // Redirect to the login page or homepage
  router.push('/api/auth/login');
}
</script>