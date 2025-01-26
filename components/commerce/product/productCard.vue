<template>
  <div>
    <div class="row justify-content-center pt-5">
      <div class="card px-3 py-4 col-12">
        <a :href="`/product/${product?.sku}`" class="display-4">
          <div class="card-wrapper ">
            <div class="card-img">
              <NuxtImg :src="`${product?.image?.url}`" :alt="product?.name" class="prodImage" />
            </div>
            <div class="card-box">
              <p class="mbr-text mbr-fonts-style align-center mbr-white display-5">
                {{product?.name}}
              </p>
              <div class="prices align-center">
                <span
                  class="newPrice mbr-fonts-style mbr-bold display-5">{{ product?.price_range?.minimum_price?.regular_price?.currency }}
                  {{ product?.price_range?.minimum_price?.regular_price?.value }}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    SfCounter,
    SfLink,
    SfButton,
    SfIconShoppingCart
  } from '@storefront-ui/vue';
  import Ratings from '~/components/partials/ratings.vue';
  import createListBtn from '~/components/partials/createListBtn.vue';
  import AddToCartBtn from '~/components/partials/addToCartBtn.vue'

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