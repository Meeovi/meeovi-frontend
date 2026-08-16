<template>
  <div>
    <div v-if="session">
      <v-toolbar :title="barTopText + ' ' + session.user.name" color="info"></v-toolbar>
    </div>

    <div v-else style="padding-top: 10px;">
      <v-btn variant="text" title="Sign In to Meeovi" text="Sign In" href="/login" style="width: 100%;"></v-btn>
    </div>
  </div>
</template>

<script setup>
  import {
    computed,
    onMounted
  } from 'vue'

  const auth = useAuth()
  const {
    data: session
  } = await auth.getSession()

  const {
    $directus,
    $readItem,
  } = useNuxtApp()

  const {
    data: barTop
  } = await useAsyncData('barTop', async () => {
    const resp = await $directus.request($readItem('navigation', '50'))
    return resp?.data || resp || {}
  })

  const barTopText = computed(() => {
    const d = barTop?.value?.description ?? barTop?.description
    if (!d) return ''
    if (typeof d === 'string' || typeof d === 'number') return String(d)
    return ''
  })

  const userName = computed(() => {
    const n = user?.value?.name ?? user?.name ?? user?.email
    if (!n) return ''
    if (typeof n === 'string' || typeof n === 'number') return String(n)
    return ''
  })
</script>
