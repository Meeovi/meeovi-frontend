<template>
  <div class="accountMenu">
    <v-btn class="relative" icon="fas fa-user-circle" variant="text" @click.stop="drawer = !drawer"
      aria-label="Account"></v-btn>
    <!-- Flyout Menu -->
    <v-navigation-drawer v-model="drawer" location="right" temporary class="cart-flyout">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Account</span>
        <v-btn icon="fas fa-x" @click="drawer = false">
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <div class="cart-items">
        <template>
          <v-list>
            <v-row v-if="loggedIn">
              <v-col cols="12">
                <v-toolbar :title="`Welcome, ${user?.name || user?.email}`" color="info"></v-toolbar>
              </v-col>
              <v-col cols="12">
                <v-sheet elevation="0">
                  <v-tabs color="cyan">
                    <v-tab value="one">{{ navSocial?.name }}</v-tab>
                    <v-tab value="two">{{ navcomm?.name }}</v-tab>
                    <v-tab value="three" v-if="user?.isSeller">Seller Dashboard</v-tab><!---->
                  </v-tabs>

                  <v-divider></v-divider>

                  <v-tabs-window v-model="tab">
                    <!--Social Links-->
                    <v-tabs-window-item value="one">
                      <div v-for="(item, index) in navSocial?.menus" :key="index">
                        <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon"
                          :href="item?.url"></v-list-item>
                      </div>
                    </v-tabs-window-item>

                    <!--Commerce Links-->
                    <v-tabs-window-item value="two">
                      <div v-for="(item, index) in navcomm?.menus" :key="index">
                        <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon"
                          :href="item?.url"></v-list-item>
                      </div>
                    </v-tabs-window-item>

                    <!-- Links-->
                    <v-tabs-window-item value="three">
                      <v-sheet class="pa-5" color="brown">Three</v-sheet>
                    </v-tabs-window-item>
                  </v-tabs-window>
                </v-sheet>
              </v-col>

              <v-col cols="12">
                <v-list-item prepend-icon="fas fa-upload" title="Upload Center" href="/upload"></v-list-item>
              </v-col>
              <logoutButton />
            </v-row>

            <v-row v-else>
              <v-list-item prepend-icon="fas fa-sign-in-alt">
                <v-list-item-title>
                  <NuxtLink to="/login">Login</NuxtLink>
                </v-list-item-title>
              </v-list-item>
            </v-row>
          </v-list>
        </template>
      </div>
    </v-navigation-drawer>

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
    ref,
    computed,
    onMounted,
  } from 'vue'
  import logoutButton from '#auth/app/components/blocks/logoutButton.vue'

  const tab = ref(null)
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

  const gateway = useGateway()
  const content = gateway.content

  const {
    data: navSocial
  } = await useAsyncData('navSocial', () => {
    return content.readItem('navigation', '2')
  })

  const {
    data: navcomm
  } = await useAsyncData('navcomm', () => {
    return content.readItem('navigation', '3')
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