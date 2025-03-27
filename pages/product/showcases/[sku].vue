<template>
  <div class="contentPage">
    <!---->
    <v-toolbar :title="result?.products?.items[0]?.name" :style="`background: ${result?.products?.items[0]?.color}`">
      <v-dialog min-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Update Showcase" variant="flat">Update
            Showcase
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <updateshowcase />
        </template>
      </v-dialog>

      <v-btn prepend-icon="fas fa-x" variant="text" title="Delete Showcase">Delete Showcase</v-btn>
    </v-toolbar>
    <section data-bs-version="5.1" class="header7 cid-twaHyROL0Y mbr-fullscreen" id="header7-43"
      :style="`background: ${result?.products?.items[0]?.color}`">
      <div class="animated-text-background display-7"
        style="color: rgb(239, 239, 239); opacity: 0.2; font-size: 10rem;">
        <span class="animated-element" data-word="Meet the new collection" data-speed="60">
        </span>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 align-left img-block"
            :style="`background-color: ${result?.products?.items[0]?.color};`">
            <div class="mbr-figure">
              <NuxtImg loading="lazy" :src="`${result?.products?.items[0]?.image?.url}`"
                :alt="result?.products?.items[0]?.name" />
            </div>
          </div>
          <div class="mbr-white col-md-6" :style="`color: ${result?.products?.items[0]?.colortext} !important`">
            <v-list lines="one" style="background-color: transparent !important;">
              <v-list-item :prepend-avatar="`${result?.products?.items[0]?.author?.node?.avatar?.url}`"
                :title="result?.products?.items[0]?.author?.node?.username"></v-list-item>
            </v-list>
            <h4 class="mbr-section-subtitle mbr-fonts-style align-left pb-2 display-5"
              :style="`color: ${result?.products?.items[0]?.colortext} !important`">
              {{ result?.products?.items[0]?.description?.html }}</h4>
            <h6 class="mbr-section-title mbr-white mbr-bold mbr-fonts-style align-left display-5"
              :style="`color: ${result?.products?.items[0]?.colortext} !important`">Created:
              {{ new Date(result?.products?.items[0]?.created_at).toLocaleDateString() }}</h6>
          </div>
        </div>
      </div>
    </section>

    <v-card>
      <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
        <v-tab :value="1">Products</v-tab>
        <v-tab :value="2">Reviews</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item>
          <v-container fluid>
            <div style="padding-top: 10px;" v-for="products in result?.products?.items"
              :key="products.id">
              <productCard :product="products" />
            </div>
          </v-container>
        </v-tabs-window-item>

        <v-tabs-window-item>
          <v-container fluid>
            <comments />
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>

  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import productCard from '~/components/product/productCard.vue'
  import comments from '~/components/partials/globals/comments.vue'
  import updateshowcase from '~/components/product/update-showcase.vue'
  import showcase from '~/graphql/commerce/queries/id/showcase'

  const tab = ref(null);
  const { result, loading, error } = useQuery(showcase, {
    sku: route.params.sku
  });

  useHead({
    title: computed(() => result.value?.products?.items[0]?.name || 'Showcase Page')
  })
</script>