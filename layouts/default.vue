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
        <a class="logobrand" href="/">
          <v-icon start icon="fas fa-shopping-bag" color="orange">
            <!--<img :src="siteoverview?.featuredImage?.node?.sourceUrl" :alt="siteoverview?.title" />-->
          </v-icon><!--{{ siteoverview?.title }}-->Meeovi
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
          <a variant="flat" href="/commerce/checkout">
            <v-icon class="shopping-cart" start icon="fas fa-shopping-cart"></v-icon>
          </a>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <accountDetails />

            <v-list nav>
             <!----> <topmenu />
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
                  <v-btn variant="text" stacked title="Logout" prepend-icon="fas fa-right-from-bracket"
                    size="x-small" href="">Logout</v-btn>
                </v-col>
              </v-row>
            </v-list>
          </v-navigation-drawer>

          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
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
      <!--<AboveFooter />-->
      <BottomFooter />
      <FooterNav />
      <!---->
    </v-main>
  </v-app>
</template>

<script>
  //import SearchHeader from '../components/search/SearchHeader.vue'
  import search from '../components/search/search.vue'
  import ecosystemmenu from '../components/menus/ecosystemmenu.vue'
  import live from '../components/menus/Livebar/live.vue'
  import topmenu from '../components/menus/Sidebar/topmenu.vue'
  import socialmenu from '../components/menus/Sidebar/socialmenu.vue'
  import departmentsmenu from '../components/menus/Sidebar/departmentsmenu.vue'
  import outlets from '../components/menus/Sidebar/outletsmenu.vue'
  import myaccountmenu from '../components/menus/Sidebar/myaccountmenu.vue'
  import LayoutNotifications from '../components/menus/LayoutNotifications.vue'
  import mobilesearch from '../components/menus/TopMenu/mobilesearch.vue'
  import myaccounttopmenu from '../components/menus/TopMenu/myaccounttopmenu.vue'
  import bottomsidebarmenu from '../components/menus/Sidebar/bottomsidebarmenu.vue'
  import accountDetails from '../components/menus/Sidebar/accountDetails.vue'

  export default {
    data() {
      return {
        components: {
          //SearchHeader,
          search,
          ecosystemmenu,
          live,
          topmenu,
          socialmenu,
          departmentsmenu,
          outlets,
          myaccountmenu,
          LayoutNotifications,
          mobilesearch,
          myaccounttopmenu,
          bottomsidebarmenu,
          accountDetails
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
  } from 'vue';

const query = gql `
query NewQuery {
  pages(where: {name: "Meeovi"}) {
    nodes {
      pageType
      id
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

  /*const {
          getItems
      } = useDirectusItems()

      const { getSingletonItem } = useDirectusItems();

      const siteoverview = await getSingletonItem({
          collection: "siteoverview"
      });*/

  const theme = ref('light')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };
</script>