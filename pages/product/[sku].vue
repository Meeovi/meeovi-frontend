<template>
  <div class="contentPage">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="result?.products?.items?.length > 0">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <div>
                <div v-if="result?.products?.items[0]?.__typename === 'VirtualProduct'">
                  <videoProduct :category="result?.products?.items[0]?.format" />
                </div>
                <div v-else-if="result?.products?.items[0]?.__typename === 'DownloadableProduct'">
                  <videoProduct :category="result?.products?.items[0]?.format" />
                </div>
                <div v-else>
                  <v-carousel>
                    <v-carousel-item :src="result?.products?.items[0]?.image?.url" cover>
                    </v-carousel-item>
                  </v-carousel>
                </div>
              </div>
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
                  <SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500">
                    {{result?.products?.items[0]?.review_count}} reviews </SfLink>
                </div>
                <v-row>
                  <v-col cols="6">
                    <colorOptions />
                  </v-col>

                  <v-col cols="6">
                    <sizeOptions />
                  </v-col>

                  <v-col cols="6">
                    <div v-if="cartId">
                      <shippingOptions :cart-id="cartId" />
                    </div>
                    <p v-else>No cart available. Please create a cart to view shipping options.</p>
                  </v-col>


                  <v-col cols="6">
                    <productQty />
                  </v-col>
                </v-row>
                <div class="py-4 mb-4 border-gray-200 border-y">
                  <div
                    class="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md">
                    <SfIconShoppingCartCheckout />
                    1 in cart
                  </div>
                  <div class="d-flex align-center gap-4">
                    <addToCartBtn v-if="isValidProduct" :product="productData" :cart-id="cartId" :quantity="count"
                      :loading="loading" />

                    <compareProductBtn v-if="isValidProduct" :product="productData" />
                    <createListBtn class="productPageListBtn" :productId="result?.products?.items[0]?.uid" />
                  </div>
                </div>
                <!--<div class="flex first:mt-4">
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
                </div>-->

                <div class="flex mt-4">
                  <share />
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
              <v-tab value="six" v-if="result?.products?.items[0]?.__typename === 'GroupedProduct'">Products</v-tab>
              <v-tab value="seven" v-if="result?.products?.items[0]?.__typename === 'BundledProduct'">Products</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <!--Product Description-->
                <v-window-item value="one">
                  <v-card variant="text">
                    <v-card-text style="font-size: 20px;"
                      v-html="result?.products?.items[0]?.description?.html"></v-card-text>
                  </v-card>
                </v-window-item>

                <!--Product Reviews-->
                <v-window-item value="two">
                  <!---<div v-if="result?.products?.items[0]?.reviews?.items?.length > 0">
                  <div v-for="(review, index) in result?.products?.items[0]?.reviews?.items" :key="index">
                    <productReviews :review="review" />
                  </div>
                </div>-->
                  <comments />
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

                <!--Bundle Products List-->
                <v-window-item value="seven">
                  <v-row v-if="result?.products?.items[0]?.__typename === 'BundledProduct'">
                    <v-col cols="4" v-for="(product, index) in bundledProducts" :key="index">
                      <productCard :product="product" />
                    </v-col>
                  </v-row>
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
              <v-slide-group-item v-for="(crossSell, index) in result?.products?.items[0]?.crosssell_products"
                :key="index" v-slot="{ isSelected, toggle, selectedClass }">
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
            <div v-if="result?.products?.items[0]?.related_products?.length > 0">
              <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="(relatedProduct, index) in result?.products?.items[0]?.related_products"
                  :key="index" v-slot="{ isSelected, toggle, selectedClass }">
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

<script setup>
  import videoProduct from '~/components/appearance/videoproduct.vue'
  import {
    ref,
    computed,
    onMounted
  } from 'vue';
  import {
    useQuery
  } from '@vue/apollo-composable'
  import {
    SfCounter,
    SfLink,
    SfRating,
    SfIconShoppingCartCheckout,
  } from '@storefront-ui/vue';

  import share from '~/components/partials/share.vue'
  import comments from '~/components/partials/comments.vue'
  import addToCartBtn from '~/components/partials/addToCartBtn.vue'
  import compareProductBtn from '~/components/partials/compareBtn.vue'
  import colorOptions from '~/components/commerce/commerce/product/colorOptions.vue'
  import sizeOptions from '~/components/commerce/commerce/product/sizeOptions.vue'
  import shippingOptions from '~/components/commerce/commerce/product/shippingOptions.vue'
  import productQty from '~/components/commerce/commerce/product/productQty.vue'

  import {
    product
  } from '~/graphql/commerce/queries/id/product'
  import createListBtn from '~/components/partials/createListBtn.vue';
  import productSpecs from '~/components/commerce/commerce/product/productSpecs.vue'
  //import productReviews from '~/components/commerce/commerce/product/productReviews.vue'
  import productCard from '~/components/commerce/commerce/product/productCard.vue'
  import productCompare from '~/components/commerce/commerce/product/productCompare.vue'
  import {
    useCart
  } from '~/composables/commerce/useCart';


  const {
    cartId,
    initializeCart
  } = useCart();
  onMounted(async () => {
    await initializeCart(); // Ensure cartId is initialized
  });

  const isValidProduct = computed(() => !!productData.value);
  const count = ref(1); // Example quantity
  const tab = ref(null);
  const model = ref(null);

  // Product query
  const route = useRoute()
  const {
    result,
    loading,
    error
  } = useQuery(product, {
    sku: route.params.sku
  });

  const groupedProduct = computed(() => {
    const products = result.value?.products?.items
    const product = products ? products.find(p => p.__typename === 'GroupedProduct') : null
    console.log('Grouped Product:', JSON.stringify(product, null, 2))
    return product
  })

  // Filter products to only include bundled products
  const bundledProduct = computed(() => {
    const products = result.value?.products?.items
    const product = products ? products.find(p => p.__typename === 'BundledProduct') : null
    console.log('Bundled Product:', JSON.stringify(product, null, 2))
    return product
  })

  // Computed properties
  const productData = computed(() => {
    if (!result.value?.products?.items[0]) return null

    const product = result.value.products.items[0]
    return {
      id: product.uid,
      sku: product.sku,
      name: product.name,
      price: product.price_range.minimum_price.final_price,
      stock_status: product.stock_status
    }
  })

  const isProductAvailable = computed(() => {
    return productData.value?.stock_status === 'IN_STOCK'
  })

  // Cart initialization
  onMounted(async () => {
    if (!cartId.value) {
      try {
        const {
          data
        } = await createCart()
        cartId.value = data.createEmptyCart
        localStorage.setItem('cart_id', cartId.value)
      } catch (error) {
        console.error('Failed to initialize cart:', error)
      }
    }
  })

  useHead({
    title: computed(() => result.value?.products?.items[0]?.name || 'Product Page')
  })
</script>