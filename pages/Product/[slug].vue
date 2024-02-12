<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6"><productPageGallery /></v-col>
          <v-col cols="6"><productDetails /></v-col>
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
              <v-window-item value="one">
                <productInfo />
              </v-window-item>

              <v-window-item value="two">
                <comments />
              </v-window-item>

              <v-window-item value="three">
                <productSpecs />
              </v-window-item>

              <v-window-item value="four">
                <productFaqs />
              </v-window-item>

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
import productPageGallery from '../../components/Pages/commerce/product/productPageGallery.vue'
import productDetails from '../../components/Pages/commerce/product/productDetails.vue'
import productInfo from '../../components/Pages/commerce/product/productInfo.vue'
import comments from '../../components/user/comments.vue'
import productSpecs from '../../components/Pages/commerce/product/productSpecs.vue'
import productFaqs from '../../components/Pages/commerce/product/productFaqs.vue'
import productCompare from '../../components/Pages/commerce/product/productCompare.vue'

  export default {
    components: {
      productPageGallery,
      productInfo,
      productDetails,
      productSpecs,
      productFaqs,
      productCompare
    },
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>

definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: ''
  });
</script>