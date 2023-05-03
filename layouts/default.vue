<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>

      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start>
            <v-img src="/images/logo.png"></v-img>
          </v-icon>Meeovi
        </a></v-app-bar-title>

      <v-text-field density="compact" variant="solo" label="Search Meeovi" append-inner-icon="fas fa-search" single-line
        hide-details @click:append-inner="onClick"></v-text-field>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <a variant="flat" v-bind="props">
                <v-icon start icon="fas fa-bell"></v-icon>
              </a>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="All Notifications" value="notifications" append-icon="fas fa-bell"
                href="/admin/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <ecosystemmenu />
        </v-col>

        <v-col>
          <myaccounttopmenu />
        </v-col>

        <v-col>
          <a variant="flat" href="/commerce/cart">
            <v-icon color="orange" start icon="fas fa-shopping-cart"></v-icon>
          </a>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <v-list-item prepend-icon="fas fa-user-circle" title="John Leider" nav>
              <template v-slot:append>
                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>

            <v-list density="compact" nav>
              <h5>Trending</h5>
              <v-list-item title="What's New" prepend-icon="fas fa-cart-plus" href="/categories/new"></v-list-item>
              <v-list-item title="Deals" prepend-icon="fas fa-money-bill" href="/deals"></v-list-item>
              <v-list-item title="Exclusives" prepend-icon="fas fa-key" href="/categories/exclusives"></v-list-item>
              <v-divider></v-divider>
              <h5>Social</h5>
              <v-row>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Social Feed" prepend-icon="fas fa-feed" size="x-small"
                    href="/social/newsfeed">Feed</v-btn>
                </v-col>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Spaces" prepend-icon="fas fa-people-group" size="x-small"
                    href="/social/spaces">Spaces</v-btn>
                </v-col>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Meeovi Live" prepend-icon="fas fa-video" size="x-small"
                    href="/categories/live">Live</v-btn>
                </v-col>
              </v-row>

              <departmentsmenu />
              <v-divider></v-divider>

              <myaccountmenu />
              <v-divider></v-divider>

              <v-row>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Help" prepend-icon="fas fa-question-circle" size="x-small"
                    href="https://help.meeovi.com">Help</v-btn>
                </v-col>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Change Background"
                    :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick" size="x-small">Dark
                    Mode</v-btn>
                </v-col>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Logout" prepend-icon="fas fa-right-from-bracket" size="x-small"
                    href="/logout">Logout</v-btn>
                </v-col>
              </v-row>
            </v-list>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <lowerbar />
            <live />
            <slot />
            <BottomFooter />
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
  import lowerbar from '../components/Menus/lowerbar.vue'
  import live from '../components/Catbar/live.vue'
  import departmentsmenu from '../components/Menus/Sidebar/departmentsmenu.vue'
  import myaccountmenu from '../components/Menus/Sidebar/myaccountmenu.vue'
  import myaccounttopmenu from '../components/Menus/TopMenu/myaccounttopmenu.vue'

  export default {
    data() {
      return {
        components: {
          search,
          ecosystemmenu,
          lowerbar,
          live,
          departmentsmenu,
          myaccountmenu,
          myaccounttopmenu
        },
        drawer: null,
        rail: true,
        location: 'bottom',
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

  /*  const {
      $directus
    } = useNuxtApp()

    const {
      data: categories
    } = await useAsyncData('categories', () => {
      return $directus.items('categories').readByQuery({
        fields: ['id', 'name']
      })
    }) */
</script>