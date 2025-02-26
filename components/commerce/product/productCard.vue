<template>
  <div>
    <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]" style="margin-left: 15px;">
      <div class="relative">
        <SfLink :href="`/product/${product?.id}`" class="block">
          <NuxtImg v-if="product?.thumbnail" :src="product?.thumbnail" :alt="product?.title"
            class="block object-cover h-auto rounded-md aspect-square" width="300" height="300" />
        </SfLink>
        <createListBtn :product_id="product?.id" />
      </div>
      <div class="p-4 border-t border-neutral-200">
        <SfLink :href="`/product/${product?.id}`" variant="secondary" class="no-underline"> {{ product?.title }}
        </SfLink>
        <div class="flex items-center pt-1">
          <SfRating size="xs" :value="5" :max="5" />

          <SfLink :href="`/product/${product?.id}`" variant="secondary" class="pl-1 no-underline">
            <p>{{ product?.type?.value }}</p>
          </SfLink>
        </div>
        <span class="block pb-2 font-bold typography-text-lg">{{ product?.variants?.calculated_price?.currency_code }} {{ product.variants?.calculated_price?.calculated_amount }}</span>
        <addToCartBtn :addToCart="product?.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    SfRating,
    SfCounter,
    SfLink,
  } from '@storefront-ui/vue';
  import createListBtn from '~/components/partials/globals/createListBtn.vue'
  import addToCartBtn from '~/components/partials/commerce/addToCartBtn.vue'
  
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });

</script>