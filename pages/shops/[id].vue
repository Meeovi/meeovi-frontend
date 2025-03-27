<template>
  <div class="contentPage">
    <v-card :image="`${config.public.commerceUrl}/media/${shop?.store_banner}`">
      <div class="card-box align-center">
        <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
          <strong><v-avatar :image="`${config.public.commerceUrl}/media/${shop?.store_logo}`" size="80"></v-avatar></strong>
        </h4>
      </div>

      <v-toolbar color="info">
        <v-toolbar-title class="align-center">{{ shop?.store_name }}</v-toolbar-title>
      </v-toolbar>
    </v-card>

    <v-card elevation="0">
      <v-tabs v-model="tab" bg-color="info" align-tabs="center">
        <v-tab value="one">About</v-tab>
        <v-tab value="two">Products</v-tab>
        <v-tab value="three">Showcases</v-tab>
        <v-tab value="four">Reviews</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <v-card elevation="0">
              <v-card-item>
                <v-card-title>
                  <p>About {{shop?.store_name}}</p>
                </v-card-title>

                <v-card-subtitle>
                  <div><p>Email: {{ shop?.store_email }}</p></div>

                  <div><p>Phone: {{ shop?.store_phone }}</p></div>

                  <div><p>Shipping Policy: {{ shop?.store_shipping_policy }}</p></div>

                  <div><p>Address: {{ shop?.store_address }}</p></div>

                  <div><p>Country: {{ shop?.store_country }}</p></div>
                </v-card-subtitle>
              </v-card-item>

              <v-card-text v-html="shop?.store_description"></v-card-text>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <productCard />
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            <showcases />
          </v-tabs-window-item>

          <v-tabs-window-item value="four">
            <comments />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import showcases from '~/components/product/relatedshowcases.vue'
  import productCard from '~/components/product/productCard.vue'
  import comments from '~/components/partials/globals/comments.vue'
  import { useRuntimeConfig } from 'nuxt/app';

  const config = useRuntimeConfig();
  const route = useRoute();
  const tab = ref(null);
  const shop = ref(null)

  const fetchShop = async () => {
    try {
      const id = route.params.id
      const response = await $fetch(`/api/commerce/marketplace/${route.params.id}`)
      shop.value = response
    } catch (error) {
      console.error('Error fetching shop:', error)
    }
  }

  onMounted(() => {
    fetchShop()
  })

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: computed(() => shop.value?.store_name || 'Shop Page')
  })
</script>