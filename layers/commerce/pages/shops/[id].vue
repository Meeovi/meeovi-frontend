<template>
  <div class="contentPage">
    <section data-bs-version="5.1" class="info3 cid-uehYEJBGCu" id="info3-9i" data-sortbtn="btn-primary"
      :style="`background-image: url(${shop?.banner})`">




      <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-lg-10">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                  <strong><v-avatar icon="$vuetify" :image="shop?.gravatar" size="80"></v-avatar></strong>
                </h4>
                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                  <strong>{{ shop?.store_name }}</strong>
                </h4>
                <p class="mbr-text mbr-fonts-style mb-4 display-6" v-html="shop?.email"></p>
                <v-rating v-model="rating" active-color="yellow-accent-4" color="white" :size="shop?.rating" half-increments>
                </v-rating>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-bs-version="5.1" class="features14 cid-uehYKMMZRU" id="features15-9j" data-sortbtn="btn-primary">





      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont mobi-mbri-protect mobi-mbri m-auto"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Owner</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ shop?.first_name }} {{ shop?.last_name }}
                </h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Launched on Meeovi</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ new Date(shop?.registered).toLocaleDateString() }}</h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-features mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7">
                  <strong>Contact</strong>
                </h4>
                <h5 class="card-text mbr-fonts-style display-4" v-html="shop?.email"></h5>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    <v-row>
      <productCard />

      <v-col cols="3">
        <showcases />
      </v-col>
    </v-row>
    <!---->
  </div>
</template>

<script>
  import showcases from '../../components/related/relatedshowcases.vue'
  import productCard from '../../components/commerce/product/productCard.vue'

  export default {
    components: {
      showcases,
      productCard
    },
    data() {
      return {
        //url: process.env.DIRECTUS_URL,
        rating: null,
      }
    },
  }
</script>

<script setup>
import { useShopById } from '~/composables/read/getShops';

const shop = ref(null);
const route = useRoute();

onMounted(async () => {
  const id = route.params.id;
  shop.value = await useShopById(id);
});

  /*const {
      getItemById
    } = useDirectusItems()
    const route = useRoute();

    const meeovistores = await getItemById({
      collection: "meeovistores",
      id: route.params.id,
      filter: {
        products: {
          products_id: {
            visibility: {
              _eq: true,
            }
          }
        }
      }
    });*/

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
        title: shop?.name,
    })
</script>~/server/api/read/getShops