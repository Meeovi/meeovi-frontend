<template>
  <div>
    <div v-if="loggedIn">
      <v-toolbar :title="`${barTop?.description} ${user?.name || user?.email}`" color="info"></v-toolbar>
    </div>

    <div v-else style="padding-top: 10px;">
      <v-btn variant="text" title="Sign In to Meeovi" text="Sign In" href="/login" style="width: 100%;"></v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    computed,
    onMounted
  } from 'vue'
  const auth = useAuth()
  await auth.fetchSession()

  const loggedIn = computed(() => Boolean(auth.loggedIn.value))
  const user = computed(() => auth.user.value ?? null)

  const { $sdk } = useNuxtApp()

  const {
    data: barTop
  } = await useAsyncData('barTop', () => {
    return $sdk.content.getItem('navigation', '50')
  })
</script>