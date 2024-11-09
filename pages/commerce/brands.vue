<template>
  <div class="contentPage">
    <v-card elevation="0">
      <v-toolbar title="Brands" color="green"></v-toolbar>
      <v-tabs v-model="tab" bg-color="green">
        <v-tab value="one">All Brands</v-tab>
        <v-tab value="two">Meeovi Brands</v-tab>
        <!--<v-tab value="three">Integrations</v-tab>-->
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <v-row>
              <v-col cols="4" v-for="brand in brands" :key="brand.brand_id">
                <brand :brand="brand" />
              </v-col>
            </v-row>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <v-row>
              <v-col cols="4" v-for="brand in brands" :key="brand.brand_id">
                <brand :brand="brand" />
              </v-col>
            </v-row>
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            <v-row>
              <v-col cols="4" v-for="brand in brands" :key="brand.brand_id">
                <brand :brand="brand" />
              </v-col>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue'
  import brand from '~/components/commerce/related/brands.vue'

  const tab = ref(null)
  const brands = ref([])

  const fetchBrands = async () => {
    try {
      // Use Nuxt's $fetch to call our API
      const response = await $fetch('/api/commerce/catalog/brands/brands')
      brands.value = response
    } catch (error) {
      console.error('Error fetching brands:', error)
      // Handle error (e.g., show an error message to the user)
    }
  }

  onMounted(() => {
    fetchBrands()
  })
</script>