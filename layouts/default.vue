<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>
      
      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start><v-img src="/images/logo.png"></v-img></v-icon>Meeovi
        </a></v-app-bar-title>

      <v-text-field density="compact" variant="solo" label="Search Meeovi" append-inner-icon="fas fa-search" single-line
        hide-details @click:append-inner="onClick"></v-text-field>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-bell"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="All Notifications" value="notifications" href="/admin/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col>
          <ecosystemmenu />
        </v-col>

        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="Profile" value="profile" href="/user/my-account"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="Logout" value="Logout" href="/logout"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <v-btn variant="flat" href="/commerce/cart">
                <v-icon start icon="fas fa-shopping-cart"></v-icon>
              </v-btn>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
              <template v-slot:append>
                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>

            <v-list density="compact" nav>
              <v-list-item prepend-icon="fas fa-home" title="Home" value="home" href="/"></v-list-item>
              <v-list-group prepend-icon="fas fa-feather-pointed" value="content manager">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Content Manager"></v-list-item>
                </template>
                <v-list-item prepend-icon="fas fa-feather" title="Blog" value="Blog" href="/Admin/Content/Blog">
                </v-list-item>
              </v-list-group>
              <v-list-item prepend-icon="fas fa-user" title="Customers" value="Customers" href="/Admin/Customers">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-gear" title="Settings" value="settings"
                href="/Admin/Settings/general-settings"></v-list-item>
            </v-list>

            <v-spacer></v-spacer>

              <div class="pa-2">
                <v-btn block>
                  Logout
                </v-btn>
              </div>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <catbar />
            
            <slot />
          </main>
        </v-layout>
      </v-card>
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script>
import search from '../components/Search/search.vue'
import ecosystemmenu from '../components/Menus/ecosystemmenu.vue'
import catbar from '../components/Catbar/categories.vue'
import live from '../components/Catbar/live.vue'

  export default {
    data() {
      return {
        components: { search, ecosystemmenu, catbar, live },
        drawer: null,
        location: 'bottom',
        rail: true,
        loaded: false,
        loading: false,
      }
    },

    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>

<script setup>
  import {
    ref
  } from 'vue'

  const theme = ref('light')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };

</script>