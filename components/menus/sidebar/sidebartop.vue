<template>
  <div>
    <div v-if="isAuthenticated">
      <v-toolbar :title="`Welcome, ${user?.email}`" color="info"></v-toolbar>
    </div>

    <div v-else style="padding-top: 10px;">
      <v-btn variant="text" title="Sign In to Meeovi" text="Sign In" href="/auth/login" style="width: 100%;"></v-btn>
    </div>
  </div>
</template>

<script setup>
  const { user, isAuthenticated } = useSupabaseAuth()
</script>