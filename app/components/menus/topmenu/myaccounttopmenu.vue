<template>
  <div class="accountMenu">
    <v-btn class="relative" icon="fas fa-user-circle" variant="text" @click.stop="drawer = !drawer"
      aria-label="Account"></v-btn>
    <v-navigation-drawer v-model="drawer" location="right" temporary class="cart-flyout">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Account</span>
        <v-btn icon="fas fa-x" @click="drawer = false"></v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <div class="cart-items">
        <template v-if="loggedIn">
          <v-list>
            <v-list-item :title="`${user?.name || user?.email}'s Account'`" color="info"></v-list-item>

            <v-sheet elevation="0">
              <v-tabs v-model="tab">
                <v-tab value="one" color="cyan">{{ navSocial?.name || 'Social' }}</v-tab>
                <v-tab value="two" color="orange">{{ navcomm?.name || 'Commerce' }}</v-tab>
                <v-tab value="three" color="green" v-if="user?.isSeller">Seller Dashboard</v-tab>
              </v-tabs>

              <v-divider></v-divider>

              <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                  <v-list>
                    <v-list-item style="text-align: left;"
                      v-for="(item, index) in socialMenus"
                      :key="item?.id || item?.name || index"
                      :title="item?.name"
                      :value="item?.name"
                      :prepend-icon="item?.icon"
                      :href="item?.url || '#'"
                    ></v-list-item>
                  </v-list>
                </v-tabs-window-item>

                <v-tabs-window-item value="two">
                  <v-list>
                    <v-list-item style="text-align: left;"
                      v-for="(item, index) in commerceMenus"
                      :key="item?.id || item?.name || index"
                      :title="item?.name"
                      :value="item?.name"
                      :prepend-icon="item?.icon"
                      :href="item?.url || '#'"
                    ></v-list-item>
                  </v-list>
                </v-tabs-window-item>

                <v-tabs-window-item value="three">
                  <v-sheet class="pa-5" color="brown">Three</v-sheet>
                </v-tabs-window-item>
              </v-tabs-window>
            </v-sheet>

            <v-list-item style="text-align: left;" prepend-icon="fas fa-upload" title="Upload Center" href="/upload"></v-list-item>
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
  import { ref, computed, onMounted } from 'vue'
  import logoutButton from '#auth/app/components/blocks/logoutButton.vue'

  const tab = ref('one')
  const drawer = ref(false)
  const showLogoutConfirmation = ref(false)

  const auth = useAuth()
  const user = auth.user
  const loggedIn = computed(() => auth.loggedIn.value)

  onMounted(async () => {
    if (!auth.session.value) {
      await auth.fetchSession()
    }
  })

  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: navSocial
  } = await useAsyncData('navSocial', () => {
    return $directus.request($readItem('navigation', '2', {
      fields: ['*', {
        menus: ['*'],
      }],
    }))
  })

  const {
    data: navcomm
  } = await useAsyncData('navcomm', () => {
    return $directus.request($readItem('navigation', '3', {
      fields: ['*', {
        menus: ['*'],
      }],
    }))
  })

  const socialMenus = computed(() => {
    const raw = navSocial.value?.menus
    if (Array.isArray(raw)) return raw
    if (typeof raw === 'string') {
      try { return JSON.parse(raw) } catch { return [] }
    }
    return []
  })

  const commerceMenus = computed(() => {
    const raw = navcomm.value?.menus
    if (Array.isArray(raw)) return raw
    if (typeof raw === 'string') {
      try { return JSON.parse(raw) } catch { return [] }
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
