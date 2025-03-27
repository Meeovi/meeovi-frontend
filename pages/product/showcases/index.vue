<template>
  <div class="contentPage">
    <v-card elevation="0">
      <v-toolbar :title="showcasebar?.name" :color="showcasebar?.color">
        <v-dialog min-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" :title="productBlocks?.content?.[5]?.content" variant="text">{{ productBlocks?.content?.[5]?.content }}</v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <createshowcase />
          </template>
        </v-dialog>
      </v-toolbar>

      <v-tabs v-model="tab" bg-color="purple">
        <div v-for="(menu, index) in showcasebar?.menus" :key="index">
                <v-tab v-if="menu?.active === 'Active'" :value="menu?.value">{{ menu?.name }}</v-tab>
              </div>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <v-row v-if="groupedProducts && groupedProducts.length">
              <v-col cols="4" v-for="(product, index) in groupedProducts" :key="index">
                <productCard :product="product" />
              </v-col>
            </v-row>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <v-row v-if="bundledProducts && bundledProducts.length">
              <v-col cols="4" v-for="(product, index) in bundledProducts" :key="index">
                <productCard :product="product" />
              </v-col>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import createshowcase from '~/components/product/add-showcase.vue'
import productCard from '~/components/product/productCard.vue'
import showcases from '~/graphql/commerce/queries/showcases'

const tab = ref(null);
const { result } = useQuery(showcases);

// Filter products to only include grouped products
const groupedProducts = computed(() => 
  result.value?.products?.items.filter(
    (item) => item.__typename === 'GroupedProduct'
  )
);

// Filter products to only include grouped products
const bundledProducts = computed(() => 
  result.value?.products?.items.filter(
    (item) => item.__typename === 'BundledProduct'
  )
);

const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: productBlocks
  } = await useAsyncData('productBlocks', () => {
    return $directus.request($readItem('page_blocks', '8', {
      fields: ['*', 'media.directus_files_id.filename_disk', 'content.*'],
    }))
  })

  const {
    data: showcasebar
  } = await useAsyncData('showcasebar', () => {
    return $directus.request($readItem('navigation', '54'))
  })

useHead({
  title: 'Showcases',
});
</script>
