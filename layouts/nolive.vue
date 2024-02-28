<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav">
      <template v-slot:prepend>
        <v-btn variant="flat" color="transparent" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>

      <v-app-bar-title>
        <a v-for="store in data?.availableStores" :key="store" class="logobrand" :href="store?.secure_base_url">
          <v-icon start>
            <img :src="store?.head_shortcut_icon" :alt="store?.logo_alt" />
          </v-icon>{{ store.default_title }}
        </a>
      </v-app-bar-title>

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
                    href="">Logout</v-btn>
                </v-col>
              </v-row>
            </v-list>
          </v-navigation-drawer>

          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
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
  //import SearchHeader from '../components/search/SearchHeader.vue'
  import search from '../components/search/search.vue'
  import ecosystemmenu from '../components/menus/ecosystemmenu.vue'
  //import live from '../components/menus/Livebar/live.vue'
  import topmenu from '../components/menus/Sidebar/topmenu.vue'
  import socialmenu from '../components/menus/Sidebar/socialmenu.vue'
  import departmentsmenu from '../components/menus/Sidebar/departmentsmenu.vue'
  import meeovistoresmenu from '../components/menus/Sidebar/meeovistoresmenu.vue'
  import myaccountmenu from '../components/menus/Sidebar/myaccountmenu.vue'
  import LayoutNotifications from '../components/menus/LayoutNotifications.vue'
  import mobilesearch from '../components/menus/TopMenu/mobilesearch.vue'
  import myaccounttopmenu from '../components/menus/TopMenu/myaccounttopmenu.vue'
  import bottomsidebarmenu from '../components/menus/Sidebar/bottomsidebarmenu.vue'

  export default {
    data() {
      return {
        components: {
          //SearchHeader,
          search,
          ecosystemmenu,
          //live,
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
import { ref } from 'vue'
import query from '../apollo/commerce/queries/stores/availableStores.js'

const { data } = useAsyncQuery(query);

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
};


</script>../apollo/commerce/queries/availableStores.js