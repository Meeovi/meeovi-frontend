<template>
  <div class="contentPage">
    <section data-bs-version="5.1" class="features02 essencem5 cid-uHg1VExDxg" id="features02-aq"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-wrapper">
              <h2 class="mbr-section-title mbr-fonts-style display-2">
                <strong>{{ shop?.name }}</strong>
              </h2>
            </div>
          </div>
          <div class="col-12">
            <div class="card-wrapper">
              <div class="item-img">
                <NuxtImg loading="lazy" class="align-end text-white" v-if="shop?.image"
                  :src="`${$directus.url}assets/${shop?.image?.filename_disk}`" :alt="shop?.name" cover />
                <div class="card-box">
                  <div class="icon-wrapper">
                    <span class="mbr-iconfont mobi-mbri-contact-form mobi-mbri"></span>
                  </div>
                  <h4 class="card-title mbr-fonts-style display-5">
                    <strong>{{ shop?.name }}</strong>
                  </h4>

                  <div v-if="shop?.website">
                    <p>Email: {{ shop?.website }}</p>
                  </div>

                  <div v-if="shop?.phone">
                    <p>Phone: {{ shop?.phone }}</p>
                  </div>

                  <div v-for="policies in shop?.policies?.[0]" :key="policies">
                    <p>{{ policies?.name }}</p>

                    <div v-html="policies?.description"></div>
                  </div>

                  <div>
                    <p>Address: {{ shop?.address }}</p>
                  </div>

                  <div>
                    <p>Country: {{ shop?.countries?.countries_id?.name }}</p>
                  </div>
                  <p class="card-text mbr-fonts-style display-7" v-html="shop?.description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <v-card elevation="0">
      <v-tabs v-model="tab" bg-color="info" align-tabs="center">
        <v-tab v-for="(menu, index) in shopbar?.menus" :key="index">
          <NuxtLink :to="menu?.url">{{ menu?.name }}</NuxtLink>
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">

          <v-tabs-window-item :value="shopbar?.menus[1]?.value">
            <div v-for="(products, index) in shop?.products" :key="index">
              <productCard :product="products?.products_id" />
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item :value="shopbar?.menus[2]?.value">
            <div v-for="(showcases, index) in shop?.showcases" :key="index">
              <showcases :showcase="showcases?.showcases_id" />
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item :value="shopbar?.menus[3]?.value">
            <div v-for="(comments, index) in shop?.comments" :key="index">
              <comments :comments="comments?.comments_id" />
            </div>
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

  const route = useRoute();
  const tab = ref(null);
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: shop
  } = await useAsyncData('shop', () => {
    return $directus.request($readItem('shops', route.params.id, {
      fields: ['*',
        'media.*',
        'spaces.spaces_id.*',
        'events.events_id.*',
        'products.products_id.*',
        'products.products_id.image.*',
        'showcases.showcases_id.*',
        'comments.comments_id.*',
        'shorts.shorts_id.*',
        'image.*',
        'country.country_id.*'
      ]
    }))
  })

  const {
    data: shopbar
  } = await useAsyncData('shopbar', () => {
    return $directus.request($readItem('navigation', '55'))
  })

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: computed(() => shop.value?.name || 'Shop Page')
  })
</script>