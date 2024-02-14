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
                  <v-carousel-item :src="data?.products?.image?.url" cover></v-carousel-item>
                </v-carousel>
              </div>
              <div class="col-12 col-md-6">
                <div class="right">
                  <div class="card">
                    <p class="mbr-fonts-style display-4">
                      By: <a :href="`/account/user/`">{{ data?.products?.items?.manufacturer }}</a></p>
                  </div>
                  <p class="name mbr-fonts-style display-2"><strong>{{ data?.products?.items?.name }}</strong></p>

                  <div class="price-line">
                    <p class="desc2 mbr-fonts-style display-5"><s>${{ data?.products?.items?.special_price }}</s></p>
                    <p class="plus1 mbr-fonts-style display-5">
                      <strong>&nbsp;</strong>{{ data?.products?.items?.price_range?.maximum_price?.regular_price?.currency }} {{ data?.products?.items?.price_range?.maximum_price?.regular_price?.value }}</p>
                  </div>
                  <p class="mbr-text mbr-fonts-style display-4" v-html="data?.products?.items?.short_description_html"></p>

                  <v-card variant="text" class="productVCard">
                    <v-card-actions>
                      <v-list>
                        <v-list-item>
                          <p class="desc mbr-fonts-style display-7"><strong>Size: </strong>&nbsp;<v-btn
                              variant="outlined">{{ data?.products?.items?.size }}</v-btn>
                          </p>
                        </v-list-item>

                        <v-list-item>
                          <p class="desc mbr-fonts-style display-7"><strong>Color:</strong>&nbsp;<v-btn variant="text">
                              <v-avatar :color="data?.products?.items?.color"></v-avatar>
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
                      &nbsp;{{ data?.products?.items?.categories?.name }}</p>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Format:</strong>&nbsp;</p>
                    <p class="plus mbr-fonts-style display-4">{{ data?.products?.items?.format }}</p>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Product ID:</strong>&nbsp;</p>
                    <p class="plus mbr-fonts-style display-4">{{ data?.products?.items?.sku }}</p>
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
  import productInfo from '../../components/Pages/commerce/product/productInfo.vue'
  import comments from '../../components/user/comments.vue'
  import productSpecs from '../../components/Pages/commerce/product/productSpecs.vue'
  import productFaqs from '../../components/Pages/commerce/product/productFaqs.vue'
  import productCompare from '../../components/Pages/commerce/product/productCompare.vue'

  export default {
    components: {
      productInfo,
      comments,
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
const query = gql `
query {
  products(filter: {url_key: {eq: ""}}) {
    items {
      uid
      name
      categories {
        name
      }
      price_range {
        maximum_price {
          regular_price {
            currency
            value
          }
        }
      }
      image {
        url
      }
      rating_summary
      color
      created_at
      description {
        html
      }
      format
      manufacturer
      media_gallery {
        url
      }
      only_x_left_in_stock
      review_count
      reviews {
        items {
          nickname
          summary
          text
          average_rating
          created_at
          ratings_breakdown {
            name
            value
          }
        }
      }
      short_description {
        html
      }
      size
      sku
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
    title: ''
  });
</script>