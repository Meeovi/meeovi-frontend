<template>
  <div>
    <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
      <div class="relative">
        <SfLink :href="`/product/${product.sku}`" class="block">
          <NuxtImg v-if="product?.image?.url" :src="product?.image?.url" :alt="product.name"
            class="block object-cover h-auto rounded-md aspect-square" width="300" height="300" />
        </SfLink>
        <createListBtn :product_id="product" />
      </div>
      <div class="p-4 border-t border-neutral-200">
        <SfLink :href="`/product/${product?.sku}`" variant="secondary" class="no-underline"> {{ product?.name }}
        </SfLink>
        <div class="flex items-center pt-1">
          <ratings :rating="product?.rating_summary" />

          <SfLink :href="`/product/${product?.sku}`" variant="secondary" class="pl-1 no-underline">
            <SfCounter size="xs">123</SfCounter>
          </SfLink>
        </div>
        <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700" v-if="isInCart">
          {{ count }} in cart
        </p>
        <span class="block pb-2 font-bold typography-text-lg">{{ product?.calculatedPrice?.totalPrice }}</span>
        <addToCartBtn v-if="is_in_stock === true" :productVariantId="product.sku" @item-added="handleItemAdded" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    SfRating,
    SfCounter,
    SfLink,
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite
  } from '@storefront-ui/vue';
  import Ratings from '~/components/partials/commerce/ratings.vue';
  import createListBtn from '~/components/partials/globals/createListBtn.vue';
  import AddToCartBtn from '~/components/partials/commerce/addToCartBtn.vue'

  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>