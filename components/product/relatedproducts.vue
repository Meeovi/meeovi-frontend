<template>
  <div>
    <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
      data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Related Products
        </h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center">
          <v-progress-circular indeterminate></v-progress-circular>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center text-error">
          {{ error.message }}
        </div>

        <!-- Products Display -->
        <v-sheet v-else class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-group-item v-for="product in getProducts" :key="product.id"
              v-slot="{ isSelected, toggle, selectedClass }">
              <productCard :product="product" :class="['ma-4', selectedClass]" @click="toggle" />

              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </section>
  </div>
</template>

<script setup>


</script>

<style scoped>
  .text-error {
    color: red;
    padding: 1rem;
  }
</style>