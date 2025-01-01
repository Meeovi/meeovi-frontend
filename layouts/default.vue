<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav">
      <template v-slot:prepend>
        <v-btn variant="flat" color="transparent" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>

      <!-- v-for="siteoverview in data?.pages?.nodes" :key="siteoverview.id"-->
      <v-app-bar-title>
        <NuxtLink class="logobrand" href="/">
          <v-icon start icon="fas fa-shopping-bag" color="orange">
            <!--<img :src="siteoverview?.featuredImage?.node?.sourceUrl" :alt="siteoverview?.title" />-->
          </v-icon>
          <!--{{ siteoverview?.title }}-->Meeovi
        </NuxtLink>
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
            <div v-if="userStore.isLoggedIn">
              <v-toolbar :title="`Welcome, ${userEmail}`" color="info"></v-toolbar>
            </div>
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
                  <v-btn variant="text" stacked title="Change Background"
                    :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick" size="x-small">Dark
                    Mode</v-btn>
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
            <v-row>
              <v-col>
                <live />
              </v-col>
            </v-row>
            <div>
              <slot />
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
  import BottomFooter from '~/components/BottomFooter'
  import FooterNav from '~/components/FooterNav'
  import cart from '~/components/menus/topmenu/cart.vue'
  import announcements from '~/components/partials/announcements.vue'
  import {
    ref
  } from 'vue';
  //import logout from '~/components/authentication/logout'
  import {
    useUserStore
  } from '~/stores/user'
  import {
    useRouter
  } from 'vue-router'

  const userStore = useUserStore()

// Initialize user state
await userStore.init()
const drawer = ref(null);
const rail = ref(true);
const location = ref('bottom');
const loaded = ref(false);
const loading = ref(false);

const router = useRouter()
const route = useRoute()
const user = useCurrentUser()

const userDisplayName = computed(() => {
    return userStore.user?.name || userStore.user?.username || 'User'
  })

  const userEmail = computed(() => {
    return userStore.user?.email || ''
  })

// we don't need this watcher on server
onMounted(() => {
  watch(user, (user, prevUser) => {
    if (prevUser && !user) {
      // user logged out
      router.push('/login')
    } else if (user && typeof route.query.redirect === 'string') {
      // user logged in
      router.push(route.query.redirect)
    }
  })
})

  const theme = ref('light')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };

  useHead({
    title: 'Meeovi',
    htmlAttrs: {
      // uncomment this line to simulate dark mode
      // class: 'dark',
    },
  });
</script>