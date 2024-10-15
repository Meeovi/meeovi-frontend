<template>
  <div>
    <v-row class="productCard">
      <v-col>
        <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
          <div class="relative">
            <SfLink :href="`/product/${product?.sku}`" class="block">
              <img :src="`${product?.image?.url}`" :alt="product?.name" class="block object-cover h-auto rounded-md aspect-square" width="300"
                height="300" />
            </SfLink>
            <createListBtn :productId="product?.uid" />
          </div>
          <div class="p-4 border-t border-neutral-200">
            <SfLink :href="`/product/${product?.sku}`" variant="secondary" class="no-underline">{{product?.name}}</SfLink>
            <div class="flex items-center pt-1">
              <SfRating size="xs" :value="product?.rating_summary" :max="5" />

              <SfLink :href="`/product/${product?.sku}`" variant="secondary" class="pl-1 no-underline">
                <SfCounter size="xs">{{ product?.review_count }}</SfCounter>
              </SfLink>
            </div>
            <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
              Sku: {{ product?.sku }}
              Category: {{ product?.categories?.name }}
            </p>
            <span class="block pb-2 font-bold typography-text-lg">{{ product?.price_range?.minimum_price?.regular_price?.currency }} {{ product?.price_range?.minimum_price?.regular_price?.value }}</span>
            <SfButton size="sm">
              <template #prefix>
                <SfIconShoppingCart size="sm" />
              </template>
              Add to cart
            </SfButton>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SfRating, SfCounter, SfLink, SfButton, SfIconShoppingCart } from '@storefront-ui/vue';
import createListBtn from '~/components/commerce/partials/createListBtn.vue';

  const rating = ref(null)
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  const {
    product
  } = props;
</script>