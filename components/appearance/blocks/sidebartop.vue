<template>
    <div>
        <div v-if="user">
              <v-toolbar :title="`Welcome, ${user?.email}`" color="info"></v-toolbar>
            </div>
    </div>
</template>

<script setup>
const { user, isAuthenticated, signOut } = useSupabaseAuth()

const router = useRouter()
const route = useRoute()

// we don't need this watcher on server
onMounted(() => {
  watch(user, (user, prevUser) => {
    if (prevUser && !user) {
      // user logged out
      router.push('/login')
    } else if (user && typeof route.query.redirect === 'string') {
      // user logged in
      router.push(route.query.redirect)
    }
  })
})
</script>