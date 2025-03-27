<template>
  <div class="contentPage">
    <v-card elevation="0">
      <v-toolbar title="Shops on Meeovi" color="green"></v-toolbar>
      <v-tabs v-model="tab" bg-color="green">
        <v-tab value="one">All Shops</v-tab>
        <!--<v-tab value="two">Local Shops</v-tab>
        <v-tab value="three">Integrations</v-tab>-->
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <v-row>
              <v-col cols="4" v-for="(stores, index) in stores" :key="index">
                <store :store="stores" />
              </v-col>
            </v-row>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <v-row>
              <v-col cols="4" v-for="(store, index) in stores" :key="index">
                <store v-if="store" :store="store" />
              </v-col>
            </v-row>
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            <v-row>
              <v-col cols="4" v-for="(store, index) in stores" :key="index">
                <store v-if="store" :store="store" />
              </v-col>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import store from '~/components/shops/stores.vue'

const tab = ref(null)
const stores = ref([])

const fetchStores = async () => {
  try {
    const response = await $fetch('/api/commerce/marketplace/stores')
    stores.value = Array.isArray(response) ? response : []
  } catch (error) {
    console.error('Error fetching stores:', error)
    stores.value = []
  }
}

onMounted(() => {
  fetchStores()
})

useHead({
  title: 'Shops',
})
</script>
