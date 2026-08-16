<template>
  <div class="myaccounttopmenu">
    <v-btn class="relative" icon="fas fa-user-circle" variant="text" @click.stop="drawer = !drawer" aria-label="Account"></v-btn>
    <v-navigation-drawer v-model="drawer" location="right" temporary class="cart-flyout">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Account</span>
        <v-btn size="lg" icon="fas fa-x" @click="drawer = false"></v-btn>
      </v-card-title>

      <div v-if="session">
        <v-toolbar>
          <v-toolbar-title>
            <v-list lines="one">
              <v-list-item :prepend-avatar="`${session.user?.avatar}`" color="info">
                <v-list-item-title>
                  {{ session.user?.name || session.user?.email }}'s Account
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-toolbar-title>
        </v-toolbar>

        <v-list lines="one">
          <!-- Social Section -->
          <v-list-subheader>{{ navSocial?.name || 'Social' }}</v-list-subheader>
          <template v-for="(menu, index) in navSocial?.menus" :key="menu?.id || index">
            <v-list-item
              v-if="menu?.active === 'Active'"
              color="primary"
              :prepend-icon="menu?.icon"
              :href="menu?.url || '#'"
            >
              <v-list-item-title>{{ menu?.name }}</v-list-item-title>
            </v-list-item>
          </template>

          <v-divider></v-divider>

          <!-- Commerce Section -->
          <v-list-subheader>{{ navcomm?.name || 'Commerce' }}</v-list-subheader>
          <template v-for="(menu, index) in navcomm?.menus" :key="menu?.id || index">
            <v-list-item
              v-if="menu?.active === 'Active'"
              color="primary"
              :prepend-icon="menu?.icon"
              :href="menu?.url || '#'"
            >
              <v-list-item-title>{{ menu?.name }}</v-list-item-title>
            </v-list-item>
          </template>

          <!-- Seller Section -->
          <div v-if="session?.user?.role === 'Seller'">
            <v-divider class="my-2"></v-divider>
            <v-list-subheader>Seller</v-list-subheader>
            <v-list-item prepend-icon="fas fa-store" href="/seller">
              <v-list-item-title>Seller Dashboard</v-list-item-title>
            </v-list-item>
          </div>

          <v-divider></v-divider>

          <v-list-item style="text-align: left;" prepend-icon="fas fa-upload" href="/upload">
            <v-list-item-title>Upload Center</v-list-item-title>
          </v-list-item>
          <v-list-item style="text-align: left;">
            <logoutButton />
          </v-list-item>
        </v-list>
      </div>

      <div v-else>
        <v-card-actions class="d-flex ga-2">
          <v-btn block color="primary" variant="flat" to="/login">Login</v-btn>
          <v-btn block color="secondary" variant="outlined" to="/register">Sign Up</v-btn>
        </v-card-actions>
      </div>
    </v-navigation-drawer>

    <v-dialog v-model="showLogoutConfirmation" max-width="300">
      <v-card>
        <v-card-title class="text-h5">Confirm Logout</v-card-title>
        <v-card-text>Are you sure you want to log out?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" variant="text" @click="showLogoutConfirmation = false">Cancel</v-btn>
          <v-btn color="green darken-1" variant="text" @click="confirmLogout">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import logoutButton from '#auth/app/components/blocks/logoutButton.vue'

const auth = useAuth()
const { data: session } = await auth.getSession()
const drawer = ref(false)
const showLogoutConfirmation = ref(false)

const { $directus, $readItem } = useNuxtApp()

// Deep query parameters to ensure relational fields ('menus') are returned fully populated
const queryParams = {
  fields: ['*', 'menus.*']
}

const { data: navSocial } = await useAsyncData('navSocial', () => {
  return $directus.request($readItem('navigation', '2', queryParams))
})

const { data: navcomm } = await useAsyncData('navcomm', () => {
  return $directus.request($readItem('navigation', '3', queryParams))
})

const confirmLogout = async () => {
  try {
    await auth.signOut()
    showLogoutConfirmation.value = false
    await navigateTo('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>