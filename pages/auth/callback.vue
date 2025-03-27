<template>
  <div>Processing login...</div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

onMounted(async () => {
  const { error } = await supabase.auth.getSession()
  if (error) {
    await router.push('/auth/login')
  } else {
    await router.push('/') // or your dashboard route
  }
})
</script>
