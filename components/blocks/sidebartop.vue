<template>
  <div>
    <div v-if="userStore.isLoggedIn">
      <v-toolbar :title="`Welcome, ${userEmail}`" color="info"></v-toolbar>
    </div>
  </div>
</template>

<script setup>
  import {
    useUserStore
  } from '~/stores/user'
  import {
    useRouter
  } from 'vue-router'

  const userStore = useUserStore()

    const userEmail = computed(() => {
      return userStore.user?.email || ''
    })
</script>