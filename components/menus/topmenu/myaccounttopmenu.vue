<template>
  <div>
    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <a variant="flat" v-bind="props">
          <v-icon start icon="fas fa-user-circle"></v-icon>
        </a>
      </template>
      <v-list>
        <v-row class="accountDropdown" v-if="userStore.isLoggedIn">
          <v-col cols="12">
            <v-toolbar :title="`Welcome, ${userEmail}`"></v-toolbar>
          </v-col>
          <v-col cols="6" v-for="(menu, index) in result?.menus?.nodes" :key="index">
            <h6>{{ menu?.name }}</h6>
            <br>
            <v-divider></v-divider>
            <div v-for="(item, index) in menu?.menuItems?.nodes" :key="index">
              <v-list-item :title="item?.label" :value="item?.label" :prepend-icon="item?.icon" :href="item?.path">
              </v-list-item>
            </div>
          </v-col>

          <v-col cols="6" v-for="(menu, index) in social?.menus?.nodes" :key="index">
            <h6>{{ menu?.name }}</h6>
            <br>
            <v-divider></v-divider>
            <div v-for="(item, index) in menu?.menuItems?.nodes" :key="index">
              <v-list-item :title="item?.label" :value="item?.label" :prepend-icon="item?.websiteFields?.icon"
                :href="item?.path"></v-list-item>
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
          <v-list-item @click="login" prepend-icon="fas fa-sign-in-alt">
            <v-list-item-title>Login</v-list-item-title>
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
  import {
    ref
  } from 'vue';
  import {
    useQuery
  } from '@vue/apollo-composable'
  import {
    AccountCommerce,
    AccountSocial
  } from '~/graphql/cms/queries/menus/myaccounttopmenu'
  import {
    useUserStore
  } from '~/stores/user'
  import {
    useRouter
  } from 'vue-router'

  const userStore = useUserStore()
  const router = useRouter()

  const {
    result
  } = useQuery(AccountCommerce, null, {
    context: {
      clientName: 'secondary'
    }
  })
  const {
    result: social
  } = useQuery(AccountSocial, null, {
    context: {
      clientName: 'secondary'
    }
  })

  const location = ref('bottom');
  const showLogoutConfirmation = ref(false)

  const userDisplayName = computed(() => {
    return userStore.user?.name || userStore.user?.username || 'User'
  })

  const userEmail = computed(() => {
    return userStore.user?.email || ''
  })

  const login = () => {
    router.push('/auth/login')
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
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  }
</script>