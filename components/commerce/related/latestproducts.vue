<template>
  <div>
    <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Latest Products
        </h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>

        <!-- Products Display -->
        <v-sheet v-if="products?.length" class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-group-item v-for="(product, index) in products" :key="index"
              v-slot="{ isSelected, toggle, selectedClass }">
              <productCard :product="product" :class="['ma-4', selectedClass]" @click="toggle" />
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="fas fa-x" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>

        <!-- No Products State -->
        <div v-else>No products found</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import productCard from '~/components/commerce/product/productCard'
import { ref, onMounted } from 'vue';
import {
    useProducts
  } from '@/composables/commerce/products/useProducts';

  const model = ref(null)

  const { products } = useProducts(
    ref({
      limit: 10,
      sort: 'created_at:desc',
    })
  );
</script>
