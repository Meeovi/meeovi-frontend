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

<script setup lang="ts">
import { computed, onMounted } from 'vue'
// Use auto-imported composables or root import from alternate-auth
let session: any
try {
  session = useSession()
} catch {
  // fallback if not auto-imported
  const nuxtApp = useNuxtApp()
  session = nuxtApp.$auth?.useSession?.() || null
}
const user = computed(() => session?.value?.user)

onMounted(async () => {
  if (session && !session.value) {
    await session.fetch?.()
  }
})
</script>