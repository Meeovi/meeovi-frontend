<template>
  <div class="contentPage">
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else-if="result?.products?.items?.length > 0">
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-carousel>
              <v-carousel-item :src="result?.products?.items[0]?.image?.url" cover>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="6">
            <section class="md:max-w-[640px]">
              <h1 class="mb-1 font-bold typography-headline-4">{{ result?.products?.items[0]?.name }}</h1>
              <div class="headline-2">
                By:
              </div>
              <strong
                class="block font-bold typography-headline-3">{{ result?.products?.items[0]?.price_range?.minimum_price?.regular_price?.currency }}
                {{ result?.products?.items[0]?.price_range?.minimum_price?.regular_price?.value }}</strong>
              <div class="inline-flex items-center mt-4 mb-2">
                <SfRating size="xs" :value="result?.products?.items[0]?.rating_summary" :max="5" half-increment />
                <SfCounter class="ml-1" size="xs">{{result?.products?.items[0]?.review_count}}</SfCounter>
                <SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500"> {{result?.products?.items[0]?.review_count}} reviews </SfLink>
              </div>
              <ul class="mb-4 font-normal typography-text-sm">
                <strong>Category: </strong><li style="display: inline-block; padding-right: 5px;" v-for="(category, index) in result?.products?.items[0]?.categories" :key="index">
                  {{ category.name }}
                </li>

                <li><strong>Format: </strong>{{ result?.products?.items?.format }}</li>
                <li><strong>Sku: </strong>{{ result?.products?.items[0]?.sku }}</li>
                <li></li>
              </ul>
              <div class="py-4 mb-4 border-gray-200 border-y">
                <div
                  class="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md">
                  <SfIconShoppingCartCheckout />
                  1 in cart
                </div>
                <div class="items-start xs:flex">
                  <div class="flex flex-col items-stretch xs:items-center xs:inline-flex">
                    <div class="flex border border-neutral-300 rounded-md">
                      <SfButton variant="tertiary" :disabled="count <= min" square class="rounded-r-none p-3"
                        :aria-controls="inputId" aria-label="Decrease value" @click="dec()">
                        <SfIconRemove />
                      </SfButton>
                      <input :id="inputId" v-model="count" type="number"
                        class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                        :min="min" :max="max" @input="handleOnChange" />
                      <SfButton variant="tertiary" :disabled="count >= max" square class="rounded-l-none p-3"
                        :aria-controls="inputId" aria-label="Increase value" @click="inc()">
                        <SfIconAdd />
                      </SfButton>
                    </div>
                    <p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
                      <strong class="text-neutral-900">{{ result?.products?.items[0]?.only_x_left_in_stock }}</strong> in
                      stock
                    </p>
                  </div>
                  <SfButton size="lg" class="w-full xs:ml-4">
                    <template #prefix>
                      <SfIconShoppingCart size="sm" />
                    </template>
                    Add to cart
                  </SfButton>
                </div>
                <div class="flex justify-center mt-4 gap-x-4">
                  <SfButton size="sm" variant="tertiary">
                    <template #prefix>
                      <SfIconCompareArrows size="sm" />
                    </template>
                    Compare
                  </SfButton>
                  <SfButton size="sm" variant="tertiary">
                    <SfIconFavorite size="sm" />
                    Add to list
                  </SfButton>
                </div>
              </div>
              <div class="flex first:mt-4">
                <SfIconPackage size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
                <p class="text-sm">
                  Free shipping, arrives by Thu, Apr 7. Want it faster?
                  <SfLink href="#" variant="secondary" class="mx-1"> Add an address </SfLink>
                  to see options
                </p>
              </div>
              <div class="flex mt-4">
                <SfIconWarehouse size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
                <p class="text-sm">
                  Pickup not available at your shop.
                  <SfLink href="#" variant="secondary" class="ml-1"> Check availability nearby </SfLink>
                </p>
              </div>
              <div class="flex mt-4">
                <SfIconSafetyCheck size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
                <p class="text-sm">
                  Free 30-days returns.
                  <SfLink href="#" variant="secondary" class="ml-1"> Details </SfLink>
                </p>
              </div>
            </section>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-card elevation="0">
          <v-tabs v-model="tab" bg-color="info">
            <v-tab value="one">Description</v-tab>
            <v-tab value="two">Reviews</v-tab>
            <v-tab value="three">Specifications</v-tab>
            <!-- <v-tab value="four">FAQS</v-tab>
            <v-tab value="five">Compare</v-tab>-->
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <!--Product Description-->
              <v-window-item value="one">
                <v-card variant="text">
                  <v-card-text style="font-size: 20px;" v-html="result?.products?.items[0]?.description?.html"></v-card-text>
                </v-card>
              </v-window-item>

              <!--Product Reviews-->
              <v-window-item value="two">
                <div v-if="result?.products?.items[0]?.reviews?.items?.length > 0">
                  <div v-for="(review, index) in result?.products?.items[0]?.reviews?.items" :key="index">
                    <productReviews :review="review" />
                  </div>
                </div>
              </v-window-item>

              <!--Product Specifications-->
              <v-window-item value="three">
                <productSpecs :product="result?.products?.items[0]" />
              </v-window-item>

              <!--Product FAQs-->
              <v-window-item value="four">
                <v-expansion-panels v-for="(faqs, index) in result?.products?.items[0]?.faqs?.faqs_id" :key="index">
                  <v-expansion-panel :title="faqs.question" :text="faqs.answer">
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-window-item>

              <!--Product Compare List-->
              <v-window-item value="five">
                <productCompare />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <!--Crossell Products-->
          <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
            <h4>This product goes great together with...</h4>
          <!--Crossell Products-->
            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
              <v-slide-group-item v-for="(crossSell, index) in result?.products?.items[0]?.crosssell_products" :key="index" v-slot="{ isSelected, toggle, selectedClass }">
                <productCard :product="crossSell"  :class="['ma-4', selectedClass]" @click="toggle" />
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                  </v-scale-transition>
                </div>
              </v-slide-group-item>
            </v-slide-group>
        </v-sheet>

        <!--Related Products-->
        <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
          <h4>Related Products</h4>
          <div v-if="result?.products?.items[0]?.related_products?.length > 0">
            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
              <v-slide-group-item v-for="(relatedProduct, index) in result?.products?.items[0]?.related_products" :key="index" v-slot="{ isSelected, toggle, selectedClass }">
                <productCard :product="relatedProduct" :class="['ma-4', selectedClass]" @click="toggle" />
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                  </v-scale-transition>
                </div>
              </v-slide-group-item>
            </v-slide-group>
          </div>
          <div v-else>
            <p>No related products available.</p>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
  <div v-else>No product found</div>
  </div>
</template>

<script setup lang="ts">
  import {
    ref
  } from 'vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import {
    SfButton,
    SfCounter,
    SfLink,
    SfRating,
    SfIconSafetyCheck,
    SfIconCompareArrows,
    SfIconWarehouse,
    SfIconPackage,
    SfIconFavorite,
    SfIconSell,
    SfIconShoppingCart,
    SfIconAdd,
    SfIconRemove,
    useId,
    SfIconShoppingCartCheckout,
  } from '@storefront-ui/vue';
  import {
    clamp
  } from '@storefront-ui/shared';
  import {
    useCounter
  } from '@vueuse/core';
  import {
    getProductById
  } from '~/composables/commerce/products/products';

  import {
    product
  } from '~/graphql/commerce/queries/id/product'
  /*  import {
    addToCart
  } from '~/utils/addToCart'
  import {
    buyNow
  } from '~/utils/buyNow'
  import {
    addToList
  } from '~/utils/addToList'
  import {
    bookmark
  } from '~/utils/bookmark' */
  import disqus from '~/components/partials/disqus.vue'
  import productSpecs from '~/components/commerce/commerce/product/productSpecs.vue'
  import productReviews from '~/components/commerce/commerce/product/productReviews.vue'
  import productCard from '~/components/commerce/commerce/product/productCard.vue'
  import productCompare from '~/components/commerce/commerce/product/productCompare.vue'
  import addtolist from '~/components/commerce/partials/addtolist.vue'
  //import product from '~/graphql/commerce/queries/id/product.js'
  const tab = ref(null);  
  const model = ref(null);
  const route = useRoute();
  const { result, loading, error } = useQuery(product, {
    sku: route.params.sku
  });

   const inputId = useId();
   const min = ref(1);
   const max = ref(999);
   const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });
   function handleOnChange(event: Event) {
     const currentValue = (event.target as HTMLInputElement)?.value;
     const nextValue = parseFloat(currentValue);
     set(clamp(nextValue, min.value, max.value));
   }

   watch(() => result.value, (newResult) => {
    if (newResult?.products?.items?.length > 0) {
      console.log('Product Data:', newResult.products.items[0]);
    } else {
      console.error('No product data found for SKU:', route.params.sku);
    }
  }, { immediate: true });


  console.log('Route SKU:', route.params.sku);

  /* const route = useRoute();

   const product = ref(null);

   const productId = route.params.sku

   onMounted(async () => {
     product.value = await getProductById(productId);
   }); */

  useHead({
    title: result?.products?.items[0]?.name,
  })
</script>