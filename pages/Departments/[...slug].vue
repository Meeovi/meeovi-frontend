<template>
  <div>
    <v-card class="lowerbar">
      <v-tabs center-active>
        <h5>Meeovi {{ data?.category?.name }}</h5>
        <v-tab><a :href="`/departments/${data?.category?.uid}`">All</a></v-tab>
        <v-tab><a :href="`/departments/categories/${data?.category?.children?.uid}`">{{ data?.category?.children?.name }}</a>
        </v-tab>
      </v-tabs>
    </v-card>

    <!--Department Creators Slider-->
    <section data-bs-version="5.1" class="formulam5 team1 cid-tZY2FlPq3D" id="people1-6f">
      <div class="container-fluid">
        <div class="row">
          <div class="item features-image col-12 col-md-6 col-lg-2">
            <div class="item-wrapper">
              <div class="item-img">
                <div class="img-wrap">
                  <img src="assets/images/team1.jpg" alt="">
                </div>
              </div>
              <div class="item-content">
                <h5 class="item-title mbr-fonts-style display-4"><strong>Ashley W. Wheeler</strong></h5>
                <h6 class="item-subtitle mbr-fonts-style display-4">Director</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Best Seller Product Slider-->
    <v-row class="productPage">
      <v-col cols="12">
        <h4>Best Sellers</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active="true">
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
              <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="100"
                @click="toggle">
                <img class="align-end text-white" height="200" :src="`${data?.category?.products?.image?.url}`"
                  :alt="data?.category?.products?.name" cover />
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <!--List of products in the category-->
      <div class="productPage">
        <v-col cols="3">
          <a :href="`/product/${data?.category?.products?.uid}`">
            <v-card class="ma-4" height="380" width="250">
              <img class="align-end text-white" height="200" :src="`${data?.category?.products?.image.url}`"
                :alt="data?.category?.products?.name" cover />

              <v-card-title class="pt-4">
                {{ data?.category?.products?.name }}
              </v-card-title>

              <v-card-subtitle>
                Sku: <div v-html="data?.category?.products?.sku"></div>
              </v-card-subtitle>

              <v-card-actions>
                <v-card-title>{{ data?.category?.products?.price?.regularPrice?.amount?.currency }} {{ data?.category?.products?.price?.regularPrice?.amount?.value }}</v-card-title>
              </v-card-actions>
            </v-card>
          </a>
        </v-col>
      </div>
      <!---->
    </v-row>
    <latestproducts />
    <bestsellers />
    <relatedcreators />
  </div>
</template>

<script>
  //import videobar from '../../components/Menus/videobar.vue'
  import live from '../../components/Catbar/live.vue'
  import latestproducts from '../../components/Related/latestproducts.vue'
  import bestsellers from '../../components/Related/bestsellers.vue'
  import relatedcreators from '../../components/Related/relatedcreators.vue'

  export default {
    components: {
      //videobar,
      live,
      latestproducts,
      bestsellers,
      relatedcreators
    },
    data() {
      return {
        model: null,
        url: process.env.DIRECTUS_URL,
      }
    },
  }
</script>

<script setup>
const query = gql `
query MyQuery {
  category(id: 10) {
    canonical_url
    children {
      id
      name
      path
    }
    description
    image
    landing_page
    name
    path
    uid
    products {
      items {
        image {
          url
        }
        format
        manufacturer
        name
        only_x_left_in_stock
        price {
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
        rating_summary
        sale
        size
        sku
        special_price
        stock_status
        uid
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'collection.name',
  })
</script>