<template>
  <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
    <h4>Recently Viewed</h4>
    <v-sheet class="mx-auto" elevation="0" color="transparent">
      <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
        selected-class="bg-primary">
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
          <section data-bs-version="5.1" class="features3 cid-u2ZnbOWSjB" id="features3-7e"
                data-sortbtn="btn-primary">
                <div class="container">
                    <div class="row mt-4">
                        <div class="item features-image сol-12 col-md-6 col-lg-4"
                            v-for="(products, index) in data?.recentViewedProducts?.items" :key="index">
                            <div class="item-wrapper">
                                <div class="item-img">
                                    <img :src="products?.image?.url" :alt="products?.name">
                                </div>
                                <div class="item-content">
                                    <h5 class="item-title mbr-fonts-style display-7">
                                        <strong>{{ products?.name }}</strong></h5>
                                    <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                        <em>Category: {{ products?.categories?.name }}</em>
                                    </h6>
                                    <p class="mbr-text mbr-fonts-style mt-3 display-7">
                                        <v-rating hover :length="5" :size="32" :model-value="3"
                                            active-color="primary" />({{ products?.rating_summary }})</p>
                                    <p class="mbr-text mbr-fonts-style mt-3 display-7">
                                        {{ products?.price_range?.maximum_price?.regular_price?.currency }}
                                        {{ products?.price_range?.maximum_price?.regular_price?.value }}</p>
                                </div>
                                <div class="mbr-section-btn item-footer mt-2">
                                    <a href="" class="btn btn-primary item-btn display-7">Add to Cart</a>
                                    <a href="" class="btn btn-primary item-btn display-7">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-sheet>
</template>

<script>
  import productCard from '../Pages/commerce/productCard.vue'

  export default {
    components: {
      productCard
    },
    data: () => ({
      model: null,
    }),
  }
</script>

<script setup>
const query = gql `
query{
  recentViewedProducts(search: "", pageSize: 5, currentPage: 1) {
    total_count
    currentPage
    pageSize
    totalPages
    items {
      id
      sku
      uid
      name
      url_key
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
      image {
        url
        label
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
</script>