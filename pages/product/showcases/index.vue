<template>
  <div class="contentPage">
    <v-card elevation="0">
      <v-toolbar title="Showcases" color="purple">
        <v-dialog min-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create Showcase" variant="text">Create Showcase</v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <createshowcase />
          </template>
        </v-dialog>
      </v-toolbar>

      <v-tabs v-model="tab" bg-color="purple">
        <v-tab value="one">All Showcases</v-tab>
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
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import createshowcase from '~/components/crud/create/add-showcase.vue'
import productCard from '~/components/commerce/commerce/product/productCard.vue'
import showcases from '~/graphql/commerce/queries/showcases'

const tab = ref(null);
const { result } = useQuery(showcases);

// Filter products to only include grouped products
const groupedProducts = computed(() => 
  result.value?.products?.items.filter(
    (item) => item.__typename === 'GroupedProduct'
  )
);

useHead({
  title: 'Showcases',
});
</script>
