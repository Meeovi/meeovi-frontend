<template>
  <div class="contentPage">
    <v-row>
      <v-col cols="12">
        <section data-bs-version="5.1" class="pricing1 cid-twaUcnOkam" id="pricing1-4h">
          <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(255, 255, 255);"></div>

          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6">
                <v-carousel>
                  <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                  <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                  <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
                </v-carousel>
              </div>
              <div class="col-12 col-md-6">
                <div class="right">
                  <div class="card">
                    <p class="mbr-fonts-style display-4">
                      By: <a href="`/account/user/`">Seller</a></p>
                  </div>
                  <p class="name mbr-fonts-style display-2"><strong>Diamond Ring</strong></p>

                  <div class="price-line">
                    <p class="desc2 mbr-fonts-style display-5"><s>$145.00</s></p>
                    <p class="plus1 mbr-fonts-style display-5">
                      <strong>&nbsp;</strong>$135.00</p>
                  </div>
                  <p class="mbr-text mbr-fonts-style display-4">Dicta sunt explicabo. Nemo enim
                    ipsam voluptatem
                    voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor.
                    <br>
                    <br>Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et dolore magna
                    aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum. Stet clitain
                    vidunt ut labore eirmod tempor invidunt magna aliquyam. Stet clitain vidunt ut labore.</p>

                  <v-card variant="text" class="productVCard">
                    <v-card-actions>
                      <v-list>
                        <v-list-item>
                          <p class="desc mbr-fonts-style display-7"><strong>Size:</strong>&nbsp;<v-btn
                              variant="outlined">S</v-btn>
                          </p>
                        </v-list-item>

                        <v-list-item>
                          <p class="desc mbr-fonts-style display-7"><strong>Color:</strong>&nbsp;<v-btn variant="text">
                              <v-avatar color="surface-variant"></v-avatar>
                            </v-btn>
                          </p>
                        </v-list-item>
                      </v-list>
                    </v-card-actions>
                  </v-card>

                  <div class="mbr-section-btn"><a class="btn btn-secondary display-7" href=""><span
                        class="mobi-mbri mobi-mbri-plus mbr-iconfont mbr-iconfont-btn"></span>Add to List</a> <a
                      class="btn btn-secondary display-7" href=""><span
                        class="mobi-mbri mobi-mbri-shopping-cart mbr-iconfont mbr-iconfont-btn"></span>Add to Basket</a>
                    <a class="btn btn-secondary display-7" href="">Buy Now</a></div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Category:</strong></p>
                    <p class="plus mbr-fonts-style display-4">
                      &nbsp;Rings</p>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Tags:</strong>&nbsp;</p>
                    <p class="plus mbr-fonts-style display-4">ring</p>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Product ID:</strong></p>
                    <p class="plus mbr-fonts-style display-4">2234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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