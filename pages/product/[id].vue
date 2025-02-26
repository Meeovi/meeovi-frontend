<template>
  <div class="contentPage">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="product?.length > 0">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <div>
                <div v-if="product?.type?.value === 'Digital'">
                  <videoProduct :category="product?.format" />
                </div>
                <div v-else>
                  <v-carousel>
                    <v-carousel-item :src="product?.images?.url" cover>
                    </v-carousel-item>
                  </v-carousel>
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <section class="md:max-w-[640px]">
                <v-row>
                  <v-col cols="10">
                    <h2 class="productTitle">{{ product?.title }}</h2>
                  </v-col>

                  <v-col cols="2">
                    <share />
                  </v-col>
                  <v-col cols="12">
                    <div class="inline-flex items-center mt-4 mb-2">
                      <SfRating size="xs" :value="product?.ratingAverage" :max="5" half-increment />
                      <SfCounter class="ml-1" size="xs">{{product?.review_count}}</SfCounter>
                    </div>
                  </v-col>

                  <v-col cols="6">
                    <colorOptions v-for="option in options" :key="option.id" :colors="product?.id" />
                  </v-col>

                  <v-col cols="6">
                    <sizeOptions v-for="option in options" :key="option.id" :sizes="product?.id" />
                  </v-col>

                  <v-col cols="6">
                    <div v-if="cartId">
                      <shippingOptions :cart-id="cartId" />
                    </div>
                    <p v-else v-html="productBlocks?.content[0]?.content"></p>
                  </v-col>

                  <v-col cols="6">
                    <h6 v-html="productBlocks?.content[3]?.content"></h6>

                    <br>
                    <div
                      class="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md">
                      <SfIconShoppingCartCheckout />
                      1 <div style="top: 7px; position: relative;" v-html="productBlocks?.content[1]?.content"></div>
                    </div>
                  </v-col>
                </v-row>
                <div class="py-4 mb-4 border-gray-200 border-y">
                  <div class="flex mt-4">
                    <v-toolbar color="transparent">
                      <v-toolbar-title v-html="productBlocks?.content[2]?.content"></v-toolbar-title>

                      <v-spacer></v-spacer>

                      <h5 style="padding-top: 5px;">{{ getFormattedPrice(unitPrice) }}</h5>
                    </v-toolbar>
                  </div>

                  <div class="d-flex align-center gap-4">
                    <v-col>
                      <v-text-field v-model="quantity" type="number" label="Quantity" min="1"></v-text-field>
                    </v-col><!---->

                    <addToCartBtn :product="product?.id" />

                    <compareProductBtn v-if="isValidProduct" :product="product?.id" />
                    <createListBtn class="productPageListBtn" :productId="product?.id" />
                  </div>
                </div>

                <div class="flex mt-4">
                  <v-chip>
                    <NuxtLink :to="`/tags/${product?.tags?.value}`">#{{ product?.tags?.value }}</NuxtLink>
                  </v-chip>
                </div>
              </section>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-card elevation="0">
            <v-tabs v-model="tab" :bg-color="productbar?.color">
              <div v-for="(menu, index) in productbar?.menus" :key="index">
                <v-tab v-if="menu?.active === 'Active'" :value="menu?.value">{{ menu?.name }}</v-tab>
              </div>
              <!-- <v-tab value="four">FAQS</v-tab>
            <v-tab value="five">Compare</v-tab>-->
              <v-tab value="six" v-if="product?.type?.value === 'Bundle'">Products</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <!--Product Description-->
                <v-window-item :value="productbar?.menus[0]?.value">
                  <v-card variant="text">
                    <v-card-text style="font-size: 20px;" v-html="product?.description"></v-card-text>
                  </v-card>
                </v-window-item>

                <!--Product Reviews-->
                <v-window-item :value="productbar?.menus[1]?.value">
                  <!---<div v-if="product?.reviews?.items?.length > 0">
                  <div v-for="(review, index) in product?.reviews?.items" :key="index">
                    <productReviews :review="review" />
                  </div>
                </div>-->
                  <comments />
                </v-window-item>

                <!--Product Specifications-->
                <v-window-item :value="productbar?.menus[2]?.value">
                  <productSpecs :product="product" />
                </v-window-item>

                <!--Product FAQs-->
                <v-window-item :value="productbar?.menus[3]?.value">
                  <v-expansion-panels v-for="(faqs, index) in product?.faqs?.faqs_id" :key="index">
                    <v-expansion-panel :title="faqs.question" :text="faqs.answer">
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-window-item>

                <!--Product Compare List-->
                <v-window-item :value="productbar?.menus[4]?.value">
                  <productCompare />
                </v-window-item>

                <!-- Group Products List -->
                <v-window-item value="six" v-if="groupedProduct">
                  <v-row v-if="groupedProduct.items && groupedProduct.items.length > 0">
                    <v-col cols="4" v-for="item in groupedProduct.items" :key="item.product.uid">
                      <productCard :product="item.product" />
                    </v-col>
                  </v-row>

                  <v-row v-else>
                    <v-col cols="12">
                      <p>No products in this showcase.</p>
                    </v-col>
                  </v-row>
                </v-window-item>

                <!--Bundle Products List
                <v-window-item value="seven">
                  <v-row v-if="product?.__typename === 'BundledProduct'">
                    <v-col cols="4" v-for="(product, index) in bundledProducts" :key="index">
                      <productCard :product="product" />
                    </v-col>
                  </v-row>
                </v-window-item>-->
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
              <v-slide-group-item v-for="(crossSell, index) in product?.crossSellings" :key="index"
                v-slot="{ isSelected, toggle, selectedClass }">
                <productCard :product="crossSell" :class="['ma-4', selectedClass]" @click="toggle" />
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
            <div v-if="product?.related_products?.length > 0">
              <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="(relatedProduct, index) in product?.related_products" :key="index"
                  v-slot="{ isSelected, toggle, selectedClass }">
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

    <!-- Enhanced success snackbar -->
    <v-snackbar v-model="showSuccessSnackbar" color="success" timeout="3000" :loading="cartStore.loading">
      <template v-if="cartStore.error">
        {{ cartStore.error }}
      </template>
      <template v-else>
        Item added to cart successfully!
      </template>
      <template v-slot:actions>
        <v-btn variant="text" @click="showSuccessSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
  import videoProduct from '~/components/appearance/videoproduct.vue'
  import {
    ref,
    computed,
    onMounted
  } from 'vue';
  import {
    SfCounter,
    SfLink,
    SfRating,
    SfIconShoppingCartCheckout,
  } from '@storefront-ui/vue';

  import share from '~/components/partials/globals/share.vue'
  import comments from '~/components/partials/globals/comments.vue'
  import addToCartBtn from '~/components/partials/commerce/addToCartBtn.vue'
  import compareProductBtn from '~/components/partials/commerce/compareBtn.vue'
  import colorOptions from '~/components/commerce/product/colorOptions.vue'
  import sizeOptions from '~/components/commerce/product/sizeOptions.vue'
  import shippingOptions from '~/components/commerce/product/shippingOptions.vue'

  import createListBtn from '~/components/partials/globals/createListBtn.vue';
  import productSpecs from '~/components/commerce/product/productSpecs.vue'
  //import productReviews from '~/components/commerce/product/productReviews.vue'
  import productCard from '~/components/commerce/product/productCard.vue'
  import productCompare from '~/components/commerce/product/productCompare.vue'
  import {
    getProductById
  } from '~/composables/commerce/products/useProducts'
  import {
    useProduct
  } from '@/composables/commerce/products/useProducts';

  const tab = ref(null);
  const model = ref(null);
  const loading = ref(true);
  const error = ref(null);

  // Get route params
  const route = useRoute();
  const productId = route.params.id;

  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    product
  } = useProduct(productId);

  // Inside script setup
  const lowestPrice = computed(() => {
    if (!product.value?.variants) return { amount: 10, currency_code: 'usd' };
    
    const lowestPrice = product.value.variants.reduce((acc, curr) => {
      return curr.prices.reduce((lowest, current) => {
        if (lowest.amount > current.amount) {
          return current;
        }
        return lowest;
      });
    }, { amount: 0 });

    return lowestPrice || { amount: 10, currency_code: 'usd' };
  });

  const options = computed(() => {
    if (!product.value?.options) return [];
    
    return product.value.options.map((option) => {
      option.values = option.values.reduce((acc, curr) => {
        if (!acc.find(val => val.value === curr.value)) {
          return [...acc, { ...curr }];
        }
        return acc;
      }, []);

      return option;
    });
  });

  const {
    data: productBlocks
  } = await useAsyncData('productBlocks', () => {
    return $directus.request($readItem('page_blocks', '8', {
      fields: ['*', 'media.directus_files_id.filename_disk', 'content.*'],
    }))
  })

  const {
    data: productbar
  } = await useAsyncData('productbar', () => {
    return $directus.request($readItem('navigation', '52'))
  })

  useHead({
    title: computed(() => product?.value?.title || 'Product Page')
  })
</script>