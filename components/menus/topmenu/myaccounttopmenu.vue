<template>
  <div class="accountMenu">
    <v-snackbar v-model="showSnackbar" :color="snackbarColor" timeout="3000">
      {{ snackbarText }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="showSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <a variant="flat" v-bind="props">
          <v-icon start icon="fas fa-user-circle"></v-icon>
        </a>
      </template>
      <v-list>
        <!-- Show menu items when user is logged in -->
        <v-row class="accountDropdown" v-if="userStore.isLoggedIn">
          <v-col cols="12">
            <v-toolbar :title="`Welcome, ${userStore.currentUser?.firstname}`"></v-toolbar>
          </v-col>
          <v-col cols="6">
            <h6>{{ nav?.name }}</h6>
            <br>
            <v-divider></v-divider>
            <div v-for="(item, index) in nav?.menus" :key="index">
              <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
              </v-list-item>
            </div>
          </v-col>

          <v-col cols="6">
            <h6>{{ navcomm?.name }}</h6>
            <br>
            <v-divider></v-divider>
            <div v-for="(item, index) in navcomm?.menus" :key="index">
              <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
              </v-list-item>
            </div>
          </v-col>
          <v-col cols="12">
            <v-list-item prepend-icon="fas fa-upload" title="Upload Center" href="/upload"></v-list-item>
          </v-col>
          <v-list-item @click="initiateLogout" prepend-icon="fas fa-sign-out-alt">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-row>

        <!-- Show login/register options when user is not logged in -->
        <v-row v-else>
          <v-col cols="12">
            <v-list-item @click="navigateToLogin" prepend-icon="fas fa-sign-in-alt">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item @click="navigateToRegister" prepend-icon="fas fa-user-plus">
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </v-col>
        </v-row>
      </v-list>
    </v-menu>

    <!-- Logout confirmation dialog -->
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
  import {
    ref
  } from 'vue'
  import {
    useUserStore
  } from '~/stores/user'
  import {
    useRouter
  } from 'vue-router'

  const userStore = useUserStore()
  const router = useRouter()

  const showSnackbar = ref(false)
  const snackbarText = ref('')
  const snackbarColor = ref('success')

  const {
    $directus,
    $readItem
  } = useNuxtApp()
  const route = useRoute()

  // Fetch navigation data
  const {
    data: nav
  } = await useAsyncData('nav', () => {
    return $directus.request($readItem('navigation', '2'))
  })

  const {
    data: navcomm
  } = await useAsyncData('navcomm', () => {
    return $directus.request($readItem('navigation', '3'))
  })

  const location = ref('bottom')
  const showLogoutConfirmation = ref(false)

  // Navigation functions
  const navigateToLogin = () => {
    router.push('/auth/login')
  }

  const navigateToRegister = () => {
    router.push('/auth/register')
  }

  const initiateLogout = () => {
    showLogoutConfirmation.value = true
  }

  const confirmLogout = async () => {
    try {
      await userStore.logout()
      showLogoutConfirmation.value = false
      router.push('/') // Redirect to home page after logout
    } catch (error) {
      console.error('Logout failed:', error)
      // Show error to user
      // You can add a notification system here
    }
  }
</script>

<style scoped>
  .accountMenu {
    /* Add your styling here */
  }

  .accountDropdown {
    min-width: 300px;
    padding: 1rem;
  }
</style>