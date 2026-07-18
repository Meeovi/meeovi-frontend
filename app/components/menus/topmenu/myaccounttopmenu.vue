<template>
  <div class="myaccounttopmenu">
    <v-btn class="relative" icon="fas fa-user-circle" variant="text" @click.stop="drawer = !drawer"
      aria-label="Account"></v-btn>
    <v-navigation-drawer v-model="drawer" location="right" temporary class="cart-flyout">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Account</span>
        <v-btn icon="fas fa-x" @click="drawer = false"></v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <div class="cart-items">
        <template v-if="session">
          <v-list lines="one" density="comfortable">
            <v-list-item :title="`${session.user?.name || session.user?.email}'s Account'`" color="info"></v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-subheader>{{ navSocial?.name || 'Social' }}</v-list-subheader>
            <template v-if="socialMenus.length">
              <v-list-item v-for="(item, index) in socialMenus" :key="item?.id || item?.name || index"
                :title="item?.name" :prepend-icon="item?.icon" :href="item?.url || '#'" />
            </template>
            <v-list-item v-else title="No social menu items found."></v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-subheader>{{ navcomm?.name || 'Commerce' }}</v-list-subheader>
            <template v-if="commerceMenus.length">
              <v-list-item v-for="(item, index) in commerceMenus" :key="item?.id || item?.name || index"
                :title="item?.name" :prepend-icon="item?.icon" :href="item?.url || '#'" />
            </template>
            <v-list-item v-else title="No commerce menu items found."></v-list-item>

            <template v-if="user?.isSeller">
              <v-divider class="my-2"></v-divider>
              <v-list-subheader>Seller</v-list-subheader>
              <v-list-item prepend-icon="fas fa-store" title="Seller Dashboard" href="/seller" />
            </template>

            <v-divider class="my-2"></v-divider>

            <v-list-item style="text-align: left;" prepend-icon="fas fa-upload" title="Upload Center"
              href="/upload"></v-list-item>
            <v-list-item style="text-align: left;">
              <logoutButton />
            </v-list-item>
          </v-list>
        </template>

        <v-card-actions v-else class="d-flex ga-2">
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
          <v-btn color="green darken-1" text @click="showLogoutConfirmation = false">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="confirmLogout">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import {
    ref,
    computed,
    onMounted
  } from 'vue'
  import logoutButton from '#auth/app/components/blocks/logoutButton.vue'
  import { authClient } from "#auth/lib/auth-client";

  const { data: session } = await authClient.useSession(useFetch);  
  const drawer = ref(false)
  const showLogoutConfirmation = ref(false)

  const {
    $directus,
    $readItem,
  } = useNuxtApp()

  const {
    data: navSocial
  } = await useAsyncData('navSocial', async () => {
    const resp = await $directus.request($readItem('navigation', '2', {
      fields: ['*', {
        menus: ['*'],
      }],
    }))
    return resp?.data || resp || { menus: [] }
  })

  const {
    data: navcomm
  } = await useAsyncData('navcomm', async () => {
    const resp = await $directus.request($readItem('navigation', '3', {
      fields: ['*', {
        menus: ['*'],
      }],
    }))
    return resp?.data || resp || { menus: [] }
  })

  const socialMenus = computed(() => {
    const raw = navSocial.value?.menus
    if (Array.isArray(raw)) return raw
    if (typeof raw === 'string') {
      try {
        return JSON.parse(raw)
      } catch {
        return []
      }
    }
    return []
  })

  const commerceMenus = computed(() => {
    const raw = navcomm.value?.menus
    if (Array.isArray(raw)) return raw
    if (typeof raw === 'string') {
      try {
        return JSON.parse(raw)
      } catch {
        return []
      }
    }
    return []
  })

  const initiateLogout = () => {
    showLogoutConfirmation.value = true
  }

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