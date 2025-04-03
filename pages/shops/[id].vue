<template>
  <div class="contentPage">
    <section data-bs-version="5.1" class="features02 essencem5 cid-uHg1VExDxg" id="features02-aq"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-wrapper">
              <h2 class="mbr-section-title mbr-fonts-style display-2">
                <strong>{{ shop?.store_name }}</strong>
              </h2>
            </div>
          </div>
          <div class="col-12">
            <div class="card-wrapper">
              <div class="item-img">
                <img :src="`${config.public.commerceUrl}/media/${shop?.store_banner}`" :alt="shop?.store_name">
                <div class="card-box">
                  <div class="icon-wrapper">
                    <span class="mbr-iconfont mobi-mbri-contact-form mobi-mbri"></span>
                  </div>
                  <h4 class="card-title mbr-fonts-style display-5">
                    <strong>{{ shop?.store_name }}</strong>
                  </h4>

                  <div>
                    <p>Email: {{ shop?.store_email }}</p>
                  </div>

                  <div>
                    <p>Phone: {{ shop?.store_phone }}</p>
                  </div>

                  <div>
                    <p>Shipping Policy: {{ shop?.store_shipping_policy }}</p>
                  </div>

                  <div>
                    <p>Address: {{ shop?.store_address }}</p>
                  </div>

                  <div>
                    <p>Country: {{ shop?.store_country }}</p>
                  </div>
                  <p class="card-text mbr-fonts-style display-7" v-html="shop?.store_description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <v-card elevation="0">
      <v-tabs v-model="tab" bg-color="info" align-tabs="center">
        <v-tab value="one">Products</v-tab>
        <v-tab value="two">Showcases</v-tab>
        <v-tab value="three">Reviews</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">

          <v-tabs-window-item value="one">
            <productCard />
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <showcases />
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
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
  import {
    useRuntimeConfig
  } from 'nuxt/app';

  const config = useRuntimeConfig();
  const route = useRoute();
  const tab = ref(null);
  const shop = ref(null)

  const fetchShop = async () => {
    try {
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