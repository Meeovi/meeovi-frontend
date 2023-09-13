<script lang="ts">

</script>

<script setup lang="ts">

</script>

<template>
  <div class="wishlist-page" data-testid="wishlist-wrapper">
    <div
      class="max-w-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <!-- Wishlist is completed -->
      <div
        v-if="isLoading"
        class="absolute inset-0 flex items-center justify-center z-10 bg-white/50"
      >
        <div
          class="h-15 w-15 i-carbon-progress-bar-round animate-spin c-gray-500"
        />
      </div>
      <div v-else-if="products.length">
        <h1 class="my-3 text-3xl font-extrabold">
          {{ $t("wishlist.header") }}
        </h1>
        <button
          class="mb-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          data-testid="clear-wishlist-button"
          @click="clearWishlistHandler"
        >
          {{ $t("wishlist.clearWishlist") }}
        </button>
        <div
          class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <!-- Empty of wishlist -->
      <div
        v-else
        class="flex flex-col items-center col mx-auto"
        data-testid="wishlist-empty"
      >
        <div class="w-48 h-48 i-carbon-favorite" />
        <h1 class="my-3 text-3xl font-extrabold">
          {{ $t("wishlist.emptyLabel") }}
        </h1>
        <p class="my-4">{{ $t("wishlist.emptyText") }}</p>
        <NuxtLink
          to="/"
          class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
          date-testid="wishlist-empty-continue-link"
        >
          {{ $t("wishlist.continueShopping") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>