<template>
  <div class="contentPage">
    <profilebar />
    <v-row>
      <v-toolbar title="Your Account" color="transparent"></v-toolbar>
      <v-col cols="4">
        <v-card append-icon="fas fa-arrow-up-right-from-square" class="mx-auto" href="https://github.com/vuetifyjs/vuetify/"
          max-width="344" prepend-icon="fas fa-shopping-bag" rel="noopener" subtitle="Check out the official repository"
          target="_blank" title="Vuetify on GitHub"></v-card>
      </v-col>

      <v-divider></v-divider>

      <v-col cols="12">
        <v-card>
          <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Digital Content</v-tab>
            <v-tab value="two">Messages and Ads</v-tab>
            <v-tab value="three">Pay</v-tab>
            <v-tab value="four">Ordering and Shipping</v-tab>
            <v-tab value="five">Other Accounts</v-tab>
            <v-tab value="six">Shopping</v-tab>
            <v-tab value="seven">Memberships and Subscriptions</v-tab>
            <v-tab value="seven">Manage your data</v-tab>
            <v-tab value="eight">Financial Services</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                One
              </v-tabs-window-item>

              <v-tabs-window-item value="two">
                Two
              </v-tabs-window-item>

              <v-tabs-window-item value="three">
                Three
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import profilebar from '../../../components/menus/profilebar.vue'

  export default {
    components: { profilebar },
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>
  useHead({
    title: 'Settings'
  })

  definePageMeta({
    //middleware: ['auth-logged-in'],
  })
</script>