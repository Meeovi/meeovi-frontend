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
                <v-row>
                  <v-col cols="10">
                    <h2 class="productTitle">{{ result?.products?.items[0]?.name }}</h2>
                  </v-col>

                  <v-col cols="2">
                    <share />
                  </v-col>
                  <v-col cols="12">
                    <div class="inline-flex items-center mt-4 mb-2">
                      <SfRating size="xs" :value="result?.products?.items[0]?.rating_summary" :max="5" half-increment />
                      <SfCounter class="ml-1" size="xs">{{result?.products?.items[0]?.review_count}}</SfCounter>
                      <SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500">
                        {{result?.products?.items[0]?.review_count}} reviews </SfLink>
                    </div>
                  </v-col>

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

                      <h5 style="padding-top: 5px;">
                        {{ result?.products?.items[0]?.price_range?.minimum_price?.regular_price?.currency }}
                        {{ result?.products?.items[0]?.price_range?.minimum_price?.regular_price?.value }}</h5>
                    </v-toolbar>
                  </div>

                  <div class="d-flex align-center gap-4">

                    <addToCartBtn v-if="productData && cartId" :product="productData" :cartId="cartId"
                      :quantity="count" :loading="loading" @add-to-cart="handleAddToCart" />
                    <v-btn v-else disabled variant="outlined">
                      Unable to add to cart
                    </v-btn>

                    <compareProductBtn v-if="isValidProduct" :product="productData" />
                    <createListBtn class="productPageListBtn" :productId="result?.products?.items[0]?.uid" />
                  </div>
                </div>

                <div class="flex mt-4">

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
                  <comments />
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
  import {
    gql
  } from 'graphql-tag'
  import {
    useMutation
  } from '@vue/apollo-composable'

  import share from '~/components/partials/shareDialog.vue'
  import comments from '~/components/partials/comments.vue'
  import addToCartBtn from '~/components/partials/addToCartBtn.vue'
  import compareProductBtn from '~/components/partials/compareBtn.vue'
  import colorOptions from '~/components/commerce/product/colorOptions.vue'
  import sizeOptions from '~/components/commerce/product/sizeOptions.vue'
  import shippingOptions from '~/components/commerce/product/shippingOptions.vue'
  //import productQty from '~/components/commerce/product/productQty.vue'

  import {
    product
  } from '~/graphql/commerce/queries/id/product'
  import createListBtn from '~/components/partials/createListBtn.vue';
  import productSpecs from '~/components/commerce/product/productSpecs.vue'
  //import productReviews from '~/components/commerce/product/productReviews.vue'
  import productCard from '~/components/commerce/product/productCard.vue'
  import productCompare from '~/components/commerce/product/productCompare.vue'
  import {
    FETCH_PRODUCTS
  } from '~/graphql/commerce/queries/products.js'
  import {
    useCart
  } from '~/composables/commerce/useCart';

  const isValidProduct = computed(() => !!productData.value);
  const cartId = ref(null)
  const count = ref(1); // Example quantity
  const tab = ref(null);
  const model = ref(null);
  const sizes = ref([]);
  const colors = ref([]);
  const selectedSize = ref(null);
  const selectedColor = ref(null);
  // Add mutation for creating cart
  const CREATE_CART = gql`
  mutation createEmptyCart {
    createEmptyCart
  }
`

  const {
    mutate: createCart
  } = useMutation(CREATE_CART)

  // Initialize cart
  const initializeCart = async () => {
    try {
      // Check for existing cart ID in storage
      const existingCartId = localStorage.getItem('cartId')

      if (existingCartId) {
        cartId.value = existingCartId
      } else {
        // Create new cart
        const {
          data
        } = await createCart()
        cartId.value = data.createEmptyCart
        localStorage.setItem('cartId', cartId.value)
      }
    } catch (error) {
      console.error('Error initializing cart:', error)
    }
  }

  // Call initializeCart when component mounts
  onMounted(() => {
    initializeCart()
  })

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

  // Prepare product data for add to cart
  const productData = computed(() => {
    if (!result.value?.products?.items?.[0]) return null

    const product = result.value.products.items[0];

    // Format the product data to match what AddToCartBtn expects
    return {
      id: product.uid,
      sku: route.params.sku,
      name: product.name,
      price: product.price_range.minimum_price.regular_price.value,
      quantity: count.value,
      // Include any other required fields your AddToCartBtn component expects
      image: product.image?.url,
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

  function onSizeSelected(size) {
    selectedSize.value = size;
  }

  function onColorSelected(color) {
    selectedColor.value = color;
  }

  async function fetchProductDetails(productId) {
    try {
      const {
        result
      } = useQuery(FETCH_PRODUCTS, {
        id: productId
      });
      const fetchedProduct = result.value.product;

      product.value = fetchedProduct;

      sizes.value =
        fetchedProduct.options.find((option) => option.attribute_code === 'size')
        ?.values.map((value) => ({
          value: value.value_index,
          label: value.label,
        })) || [];

      colors.value =
        fetchedProduct.options.find((option) => option.attribute_code === 'color')
        ?.values.map((value) => ({
          value: value.value_index,
          label: value.label,
        })) || [];
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  async function addToCart() {
    if (!selectedSize.value || !selectedColor.value) {
      alert('Please select a size and color.');
      return;
    }

    await addToCart({
      sku: product.value.sku,
      qty: 1,
      product_options: {
        extension_attributes: {
          configurable_item_options: [{
              option_id: sizes.value.find(
                (size) => size.value === selectedSize.value
              ).value,
              option_value: selectedSize.value,
            },
            {
              option_id: colors.value.find(
                (color) => color.value === selectedColor.value
              ).value,
              option_value: selectedColor.value,
            },
          ],
        },
      },
    });

    alert('Product added to cart!');
  }

  onMounted(() => {
    const productId = 'sample-product-id'; // Replace with your product ID
    fetchProductDetails(productId);
  });

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