<template>
  <v-app :theme="theme">
    <NuxtPwaManifest />
    <v-app-bar id="topnav">
      <template v-slot:prepend>
        <v-btn variant="flat" color="transparent" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>

      <logo />

      <search />
      <!--<SearchHeader v-model="searchInputValue" @submit="handleFormSubmit" />-->
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col class="notificationsHeader">
          <LayoutNotifications />
        </v-col>

        <v-col class="ecosystemMenuIcon">
          <ecosystemmenu />
        </v-col>

        <v-col id="minSearch">
          <mobilesearch />
        </v-col>

        <v-col class="myaccounttopmenu">
          <myaccounttopmenu />
        </v-col>

        <v-col class="shoppingCart">
          <cart />
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <sidebartop />
            <div class="drawer-content">
              <v-list nav>

                <!---->
                <topmenu />
                <v-divider></v-divider>

                <socialmenu />

                <departmentsmenu />
                <v-divider></v-divider>

                <!---->
                <outlets />
                <v-divider></v-divider>

                <myaccountmenu />
                <v-divider></v-divider>

                <bottomsidebarmenu />
                <v-row>
                  <v-col cols="3">
                    <v-btn variant="text" stacked title="Help" prepend-icon="fas fa-question-circle" size="x-small"
                      href="/help/">Help Center</v-btn>
                  </v-col>
                  <v-col cols="3">
                    <v-btn variant="text" stacked title="Notifications" prepend-icon="fas fa-bell" size="x-small"
                      href="/account/user/notifications">Notify Center</v-btn>
                  </v-col>
                  <v-col cols="3">
                    <v-btn @click="toggleDark()" variant="text">
                      <v-icon>
                        {{ isDark ? 'fas fa-moon' : 'fas fa-sun' }}
                      </v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="3">
                    <!--<logout />-->
                  </v-col>
                </v-row>
              </v-list>
            </div>
          </v-navigation-drawer>

          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <!--<announcements />-->
            <LowerBar />
            <v-row>
              <v-col>
                <live />
              </v-col>
            </v-row>
            <div>
              <slot />
              <pwaDialog />
            </div>
          </main>
        </v-layout>
      </v-card>
      <!--<aboveFooter />-->
      <BottomFooter />
      <FooterNav />
      <!---->
    </v-main>
  </v-app>
</template>

<script setup>
  //import SearchHeader from '../components/search/SearchHeader.vue'
  import sidebartop from '~/components/menus/sidebar/sidebartop.vue'
  import logo from '~/components/blocks/logo.vue'
  import search from '../components/search/search.vue'
  import ecosystemmenu from '~/components/menus/ecosystemmenu.vue'
  import live from '~/components/menus/livebar/live.vue'
  import topmenu from '~/components/menus/sidebar/topmenu.vue'
  import socialmenu from '~/components/menus/sidebar/socialmenu.vue'
  import departmentsmenu from '~/components/menus/sidebar/departmentsmenu.vue'
  import outlets from '~/components/menus/sidebar/outletsmenu.vue'
  import myaccountmenu from '~/components/menus/sidebar/myaccountmenu.vue'
  import LayoutNotifications from '~/components/menus/LayoutNotifications.vue'
  import mobilesearch from '~/components/menus/topmenu/mobilesearch.vue'
  import myaccounttopmenu from '~/components/menus/topmenu/myaccounttopmenu.vue'
  import bottomsidebarmenu from '~/components/menus/sidebar/bottomsidebarmenu.vue'
  import LowerBar from '~/components/menus/LowerBar.vue'
  import FooterNav from '~/components/menus/FooterNav.vue'
  import cart from '~/components/menus/topmenu/cart.vue'
  import announcements from '~/components/partials/globals/announcements.vue'
  import pwaDialog from '~/components/ui/pwaDialog.vue'

  import {
    ref
  } from 'vue';
  //import logout from '~/components/authentication/logout'
  import {
    useDark,
    useToggle
  } from '@vueuse/core'
  import {
    useTheme
  } from 'vuetify'

  const theme = useTheme()
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // Sync Vuetify theme with dark mode
  watch(isDark, (dark) => {
    theme.global.name.value = dark ? 'dark' : 'light'
  }, {
    immediate: true
  })

  // Initialize user state
  const drawer = ref(null);

  useHead({
    title: 'Meeovi',
    htmlAttrs: {
      // uncomment this line to simulate dark mode
      // class: 'dark',
    },
  });
</script>