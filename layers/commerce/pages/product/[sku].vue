<template>
  <div class="contentPage">
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6"><productGallery :product="data?.products?.items?.image?.url" /></v-col>
          <v-col cols="6">
            <section class="md:max-w-[640px]">
              <div
                class="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4">
                <SfIconSell size="sm" class="mr-1.5" />
                Sale
              </div>
              <h1 class="mb-1 font-bold typography-headline-4">{{ data?.products?.items?.name }}</h1>
              <strong class="block font-bold typography-headline-3">{{ data?.products?.items?.price_range?.minimum_price?.regular_price?.currency }} {{ data?.products?.items?.price_range?.minimum_price?.regular_price?.value }}</strong>
              <div class="inline-flex items-center mt-4 mb-2">
                <SfRating size="xs" :value="3" :max="5" />
                <SfCounter class="ml-1" size="xs">123</SfCounter>
                <SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500"> 123 reviews </SfLink>
              </div>
              <ul class="mb-4 font-normal typography-text-sm">
                <li>Category: {{ data?.products?.items?.categories?.name }}</li>
                <li>Format: {{ data?.products?.items?.format }}</li>
                <li>Sku: {{ data?.products?.items?.sku }}</li>
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
                      <strong class="text-neutral-900">{{ data?.products?.items?.only_x_left_in_stock }}</strong> in stock
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
        <v-card>
          <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Description</v-tab>
            <v-tab value="two">Reviews</v-tab>
            <v-tab value="three">Specifications</v-tab>
            <v-tab value="four">FAQS</v-tab>
            <v-tab value="five">Compare</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <!--Product Description-->
              <v-window-item value="one">
                <v-card variant="text">
                  <v-card-text>{{data?.products?.items?.description?.html}}</v-card-text>
                </v-card>
              </v-window-item>

              <!--Product Reviews-->
              <v-window-item value="two">
                <DisqusCount identifier="/blog/1" />

                <DisqusComments identifier="/blog/1" />
              </v-window-item>

              <!--Product Specifications-->
              <v-window-item value="three">
                <productSpecs :product="$sku" />
              </v-window-item>

              <!--Product FAQs-->
              <v-window-item value="four">
                <v-expansion-panels v-for="(faqs, index) in products?.faqs?.faqs_id" :key="index">
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
    </v-row>
  </div>
</template>

<script>
  /*  import {
    addToCart
  } from '../../utils/addToCart'
  import {
    buyNow
  } from '../../utils/buyNow'
  import {
    addToList
  } from '../../utils/addToList'
  import {
    bookmark
  } from '../../utils/bookmark' */
  import disqus from '~/components/partials/disqus.vue'
  import productSpecs from '../../components/commerce/product/productSpecs.vue'
  import productGallery from '../../components/commerce/product/productGallery.vue'
  import productCompare from '../../components/commerce/product/productCompare.vue'
  import addtolist from '../../components/partials/addtolist.vue'

  export default {
    components: {
      disqus,
      productSpecs,
      productGallery,
      productCompare,
      addtolist
    },
    data: () => ({
      tab: null,
    })
  }
</script>

<script setup>
  const route = useRoute();
  const query = gql `
query($sku: String!) {
  products (filter: {sku: {eq: $sku}}) {
    items {
      uid
      name
      rating_summary
      description {
        html
      }
      short_description {
        html
      }
      image {
        url
      }
      format
      size
      color
      sku
      options_container
      only_x_left_in_stock
      price_range {
        minimum_price {
          regular_price {
            currency
            value
          }
        }
      }
      categories {
        name
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query, {
    sku: route.params.sku
  });

  /*const {
      getItemById
    } = useDirectusItems()
    const route = useRoute();

    const product = await getItemById({
      collection: "products",
      id: route.params.id,
    }); */

  useHead({
    title: data?.products?.name,
  })
</script>