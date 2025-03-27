<template>
  <div>
      <!---->
      <v-card elevation="0">
          <v-toolbar :title="chartbar?.name" color="#1F7087">
              <v-dialog min-width="500">
                  <template v-slot:activator="{ props: activatorProps }">
                      <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create a Chart"
                          variant="flat">Create a Chart
                      </v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                      <createchart />
                  </template>
              </v-dialog>
          </v-toolbar>

          <v-tabs v-model="tab" bg-color="#1F7087">
              <div v-for="(menu, index) in chartbar?.menus" :key="index">
                  <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
              </div>
          </v-tabs>

          <v-card-text>
              <v-tabs-window v-model="tab">
                  <v-tabs-window-item value="one">
                      <v-row style="padding-top: 15px;">
                          <v-col cols="4" v-for="(charts, index) in charts" :key="index">
                              <chart :chart="charts" />
                          </v-col>
                      </v-row>
                  </v-tabs-window-item>

                  <v-tabs-window-item value="two">
                      <v-row style="padding-top: 15px;">
                          <v-col cols="4" v-for="(charts, index) in videocharts" :key="index">
                              <chart :chart="charts" />
                          </v-col>
                      </v-row>
                  </v-tabs-window-item>

                  <v-tabs-window-item value="three">
                      <v-row style="padding-top: 15px;">
                          <v-col cols="4" v-for="(charts, index) in mycharts" :key="index">
                              <chart :chart="charts" />
                          </v-col>
                      </v-row>
                  </v-tabs-window-item>
              </v-tabs-window>
          </v-card-text>
      </v-card>
  </div>
</template>

<script setup>
  import chart from '~/components/charts/chart.vue'
  import createchart from '~/components/charts/add-chart.vue'
  import { ref } from 'vue'
  import {
      useUserStore
  } from '~/stores/user'
  
  const userStore = useUserStore()

  const tab = ref(null);
  const {
      $directus,
      $readItems,
      $readItem
  } = useNuxtApp()

  const userDisplayName = computed(() => {
      return userStore.user?.name || userStore.user?.username || 'User'
  })

  const {
      data: charts
  } = await useAsyncData('charts', () => {
      return $directus.request($readItems('musicchart', {
          fields: ['*', { '*': ['*'] }]
      }))
  })

  const {
      data: videocharts
  } = await useAsyncData('videocharts', () => {
      return $directus.request($readItems('musicchart', {
          filter: {
              type: {
                  _eq: "Video"
              }
          }
      }))
  })

  const {
      data: mycharts
  } = await useAsyncData('mycharts', () => {
      return $directus.request($readItems('musicchart', {
          filter: {
              creator: {
                  _eq: `${userDisplayName.value}`
              }
          }
      }))
  })

  const {
      data: chartbar
  } = await useAsyncData('chartbar', () => {
      return $directus.request($readItem('navigation', '33'))
  })

  definePageMeta({
      middleware: ['auth'],
  })

  useHead({
      title: 'Charts',
  })
</script>