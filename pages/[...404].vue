<template>
  <div>
    <section v-for="pages in pages" :key="pages" data-bs-version="5.1" class="header3 cid-sqn8aWIxpX"
      id="header3-15" :style="`background-image: url(${url}assets/${pages.image.filename_disk});`">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(187, 187, 187);"></div>
      <div class="align-center container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6">
            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>{{ pages.name }}</strong>
            </h1>
            <p class="mbr-text mbr-fonts-style display-7" style="background-color: transparent;" v-html="pages.content">
            </p>
          </div>
        </div>
      </div>
    </section>

    <v-row class="pa-4">
      <v-col cols="3" v-for="(product, productIndex) in products" :key="productIndex">
        <v-card class="ma-4" height="580" width="250" :href="`/product/${product.id}`">
          <img class="align-end text-white" height="280" :src="`${url}assets/${product.image.filename_disk}`"
            :alt="product.name" cover />

          <v-card-title class="pt-4">
            {{ product.name }}
          </v-card-title>

          <v-card-text>
            <div>Sku: {{ product.sku }}</div>
            <!-- <div v-for="(customer, productIndex) in product.products.product_id" :key="productIndex">
                              Category:
                              {{ customer.customers.customers_id.name }}</div> -->
          </v-card-text>

          <div class="productcardrating">
            <v-rating hover :length="5" :size="32" :model-value="product.rating" active-color="orange" />
          </div><!-- -->

          <v-card-actions>
            <v-card-title>
              $ {{ product.price }}
            </v-card-title>
          </v-card-actions>

          <div class="align-center">
            <v-btn class="align-center" color="orange">Add to Cart</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: process.env.DIRECTUS_URL,
      }
    }
  }
</script>

<script setup>
const { getItems } = useDirectusItems()

const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "404"}}}});
const products = await getItems({ collection: "products", params: { limit: 12 },});

  /*    import pages from '../apollo/Custom/Queries/404'
      import products from '../apollo/Custom/Queries/relatedproducts'
    
      const {
        data
      } = await useAsyncQuery(pages)
    
      const {
        data: product
      } = await useAsyncQuery(products)*/
  useHead({
    title: 'Oops, 404 Error Page'
  })
</script>