<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav">
      <template v-slot:prepend>
        <v-btn variant="flat" color="transparent" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>

      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start>
            <img src="../assets/images/logo512alpha-192x192.png" />
          </v-icon>Meeovi
        </a></v-app-bar-title>

      <search /><!---->
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col class="notificationsHeader">
          <LayoutNotifications />
        </v-col>

        <v-col class="ecosystemMenuIcon">
          <ecosystemmenu />
        </v-col>

        <v-col>
          <mobilesearch />
        </v-col>

        <v-col class="myaccounttopmenu">
          <myaccounttopmenu />
        </v-col>

        <v-col class="shoppingCart">
          <a variant="flat" href="/commerce/cart">
            <v-icon class="shopping-cart" start icon="fas fa-shopping-cart"></v-icon>
          </a>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <v-list-item prepend-icon="fas fa-user-circle" title="John Leider">
              <template v-slot:append>
                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>

            <v-list nav>
              <topmenu />
              <v-divider></v-divider>

              <socialmenu />

              <departmentsmenu />
              <v-divider></v-divider>

              <!----><meeovistoresmenu />
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
                  <v-btn variant="text" stacked title="Change Background"
                    :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick" size="x-small">Dark
                    Mode</v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn variant="text" stacked title="Logout" prepend-icon="fas fa-right-from-bracket" size="x-small"
                    href="/logout">Logout</v-btn>
                </v-col>
              </v-row>
            </v-list>
          </v-navigation-drawer>

          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <v-row>
              <v-col><live /></v-col>
            </v-row>
            <div>
              <slot />
            </div>
          </main>
        </v-layout>
      </v-card>
      <!--<AboveFooter />-->
      <BottomFooter />
      <FooterNav /><!---->
    </v-main>
  </v-app>
</template>

<script>
  import search from '../components/Search/search.vue'
  import ecosystemmenu from '../components/Menus/ecosystemmenu.vue'
  import live from '../components/Menus/Livebar/live.vue'
  import topmenu from '../components/Menus/Sidebar/topmenu.vue'
  import socialmenu from '../components/Menus/Sidebar/socialmenu.vue'
  import departmentsmenu from '../components/Menus/Sidebar/departmentsmenu.vue'
  import meeovistoresmenu from '../components/Menus/Sidebar/meeovistoresmenu.vue'
  import myaccountmenu from '../components/Menus/Sidebar/myaccountmenu.vue'
  import LayoutNotifications from '../components/Menus/LayoutNotifications.vue'
  import mobilesearch from '../components/Menus/TopMenu/mobilesearch.vue'
  import myaccounttopmenu from '../components/Menus/TopMenu/myaccounttopmenu.vue'
  import bottomsidebarmenu from '../components/Menus/Sidebar/bottomsidebarmenu.vue'

  export default {
    data() {
      return {
        components: {
          search,
          ecosystemmenu,
          live,
          topmenu,
          socialmenu,
          departmentsmenu,
          meeovistoresmenu,
          myaccountmenu,
          LayoutNotifications,
          mobilesearch,
          myaccounttopmenu,
          bottomsidebarmenu
        },
        drawer: null,
        rail: true,
        location: 'bottom',
        loaded: false,
        loading: false,
      }
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