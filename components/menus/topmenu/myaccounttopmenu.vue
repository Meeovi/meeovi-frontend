<template>
  <div class="accountMenu">
    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <NuxtLink variant="flat" v-bind="props">
          <v-icon start icon="fas fa-user-circle"></v-icon>
        </NuxtLink>
      </template>
      <v-list>
        <v-row class="accountDropdown" v-if="isAuthenticated">
          <v-col cols="12">
            <v-toolbar :title="`Welcome, ${user?.email}`" color="info"></v-toolbar>
          </v-col>
          <v-col cols="6">
            <h6>{{ nav?.name }}</h6>
            <br>
            <v-divider></v-divider>
            <div v-for="(item, index) in nav?.menus" :key="index">
              <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon"
                :href="item?.url"></v-list-item>
            </div>
          </v-col>

          <v-col cols="6">
            <h6>{{ navcomm?.name }}</h6>
            <br>
            <v-divider></v-divider>
            <div v-for="(item, index) in navcomm?.menus" :key="index">
              <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon"
                :href="item?.url"></v-list-item>
            </div>
          </v-col>
          <v-col cols="12">
            <v-list-item prepend-icon="fas fa-upload" title="Upload Center" href="/upload"></v-list-item>
          </v-col>
          <v-list-item @click="initiateLogout" prepend-icon="fas fa-sign-out-alt">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-row>
        <v-row v-else>
          <v-list-item prepend-icon="fas fa-sign-in-alt">
            <v-list-item-title><NuxtLink to="/auth/login">Login</NuxtLink></v-list-item-title>
          </v-list-item>
        </v-row>
      </v-list>
    </v-menu>

    <v-dialog v-model="showLogoutConfirmation" max-width="300">
      <v-card>
        <v-card-title class="text-h5">
          Confirm Logout
        </v-card-title>
        <v-card-text>Are you sure you want to log out?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="showLogoutConfirmation = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="confirmLogout">
            Logout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const location = ref('bottom')
const showLogoutConfirmation = ref(false)

// Use the auth composable
const { user, isAuthenticated, signOut } = useSupabaseAuth()

const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: nav } = await useAsyncData('nav', () => {
  return $directus.request($readItem('navigation', '2'))
})

const { data: navcomm } = await useAsyncData('navcomm', () => {
  return $directus.request($readItem('navigation', '3'))
})

const initiateLogout = () => {
  showLogoutConfirmation.value = true
}

const confirmLogout = async () => {
  try {
    await signOut()
    showLogoutConfirmation.value = false
    await router.push('/auth/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>