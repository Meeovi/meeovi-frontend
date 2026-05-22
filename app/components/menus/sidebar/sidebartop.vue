<template>
  <div>
    <div v-if="session">
      <v-toolbar :title="`Welcome, ${session.user?.name || session.user?.email}`" color="info"></v-toolbar>
    </div>

    <div v-else style="padding-top: 10px;">
      <v-btn variant="text" title="Sign In to Meeovi" text="Sign In" href="/login" style="width: 100%;"></v-btn>
    </div>
  </div>
</template>

<script setup>
const auth = useAuth()

const { data: session } = await useAsyncData('session', async () => {
  try {
    return (await auth.fetchSession()) ?? null
  } catch (err) {
    console.error('[fetchSession] failed', err)
    return null
  }
})
</script>