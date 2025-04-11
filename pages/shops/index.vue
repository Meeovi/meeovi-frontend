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
            <section data-bs-version="5.1" class="clients1 cid-uHg1k6KLf8" id="clients1-ap">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="card col-12 col-md-6 col-lg-4"" v-for=" (shops, index) in shops" :key="index">
                    <store :store="shops" />
                  </div>
                </div>
              </div>
            </section>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <section data-bs-version="5.1" class="clients1 cid-uHg1k6KLf8" id="clients1-ap">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="card col-12 col-md-6 col-lg-4"" v-for=" (shops, index) in shops" :key="index">
                    <store :store="shops" />
                  </div>
                </div>
              </div>
            </section>
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            <section data-bs-version="5.1" class="clients1 cid-uHg1k6KLf8" id="clients1-ap">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="card col-12 col-md-6 col-lg-4"" v-for=" (shops, index) in shops" :key="index">
                    <store :store="shops" />
                  </div>
                </div>
              </div>
            </section>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
  import store from '~/components/shops/stores.vue'
  const tab = ref(null)
  const {
    $directus,
    $readItems,
  } = useNuxtApp()

  const { user } = useSupabaseAuth()

  const {
    data: shops
  } = await useAsyncData('shops', () => {
    return $directus.request($readItems('shops', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  useHead({
    title: 'Shops on Meeovi',
  })
</script>