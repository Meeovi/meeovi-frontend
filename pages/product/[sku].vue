<template>
  <div class="contentPage">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="result?.products?.items?.length > 0">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <div>
                  <productDetails :productDetails="result?.products?.items[0]" />
              </div>
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
              <v-tab value="six" v-if="result?.products?.items[0]?.__typename === 'GroupedProduct'">Products</v-tab>
              <v-tab value="seven" v-if="result?.products?.items[0]?.__typename === 'BundledProduct'">Products</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <!--Product Description-->
                <v-window-item :value="productbar?.menus[0]?.value">
                  <v-card variant="text">
                    <v-card-text style="font-size: 20px;"
                      v-html="result?.products?.items[0]?.description?.html"></v-card-text>
                  </v-card>
                </v-window-item>

                <!--Product Reviews-->
                <v-window-item :value="productbar?.menus[1]?.value">
                  <!---<div v-if="result?.products?.items[0]?.reviews?.items?.length > 0">
                  <div v-for="(review, index) in result?.products?.items[0]?.reviews?.items" :key="index">
                    <productReviews :review="review" />
                  </div>
                </div>-->
                  <comments :productName="result?.products?.items[0]?.name" :productImage="result?.products?.items[0]?.image.url" :productSku="result?.products?.items[0]?.sku" />
                </v-window-item>

                <!--Product Specifications-->
                <v-window-item :value="productbar?.menus[2]?.value">
                  <productSpecs :product="result?.products?.items[0]" />
                </v-window-item>

                <!--Product FAQs-->
                <v-window-item :value="productbar?.menus[3]?.value">
                  <v-expansion-panels v-for="(faqs, index) in result?.products?.items[0]?.faqs?.faqs_id" :key="index">
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
  import {
    ref,
    computed,
    onMounted
  } from 'vue';
  import {
    useQuery, useMutation
  } from '@vue/apollo-composable'
  import {
    SfCounter,
    SfLink,
    SfRating,
    SfIconShoppingCartCheckout,
  } from '@storefront-ui/vue';
  import {
    gql
  } from 'graphql-tag'


  import productDetails from '~/components/product/productDetails.vue'

  import {
    product
  } from '~/graphql/commerce/queries/id/product'

  import productSpecs from '~/components/product/productSpecs.vue'
  import productCard from '~/components/product/productCard.vue'

  import {
    FETCH_PRODUCTS
  } from '~/graphql/commerce/queries/products.js'

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

  const {
    $directus,
    $readItem
  } = useNuxtApp()

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
    title: computed(() => result.value?.products?.items[0]?.name || 'Product Page')
  })
</script>