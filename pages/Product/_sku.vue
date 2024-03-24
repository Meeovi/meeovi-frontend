<template>
  <div class="contentPage">
    <v-row>
      <v-col cols="12">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <section data-bs-version="5.1" class="pricing1 cid-twaUcnOkam" id="pricing1-4h" v-else>
          <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(255, 255, 255);"></div>

          <div class="container" v-if="product">
            <div class="row">
              <div class="col-12 col-md-6">
                <v-carousel>
                  <v-carousel-item v-if="data?.product?.image?.url" :src="data?.product?.items?.image?.url" cover></v-carousel-item>
                </v-carousel>
              </div>
              <div class="col-12 col-md-6">
                <div class="right">
                  <div class="card">
                    <p class="mbr-fonts-style display-4">
                      By: <a :href="`/account/user/`">{{ data?.product?.items?.manufacturer }}</a></p>
                  </div>
                  <p class="name mbr-fonts-style display-2"><strong>{{ data?.product?.items?.name }}</strong></p>

                  <div class="price-line">
                    <p class="desc2 mbr-fonts-style display-5" v-if="data?.product?.special_price">
                      <s>{{ data?.product?.items?.price_range?.maximum_price?.regular_price?.currency }}
                        {{ data?.product?.items?.special_price }}</s></p>
                    <p class="plus1 mbr-fonts-style display-5">
                      <strong>&nbsp;</strong>{{ data?.product?.items?.price_range?.maximum_price?.regular_price?.currency }}
                      {{ data?.product?.items?.price_range?.maximum_price?.regular_price?.value }}</p>
                  </div>
                  <p class="mbr-text mbr-fonts-style display-4" v-html="data?.product?.items?.short_description_html"></p>

                  <v-card variant="text" class="productVCard">
                    <v-card-actions>
                      <v-list>
                        <v-list-item>
                          <p class="desc mbr-fonts-style display-7"><strong>Size: </strong>&nbsp;<v-btn
                              variant="outlined">{{ data?.product?.items?.size }}</v-btn>
                          </p>
                        </v-list-item>

                        <v-list-item>
                          <p class="desc mbr-fonts-style display-7"><strong>Color:</strong>&nbsp;<v-btn variant="text">
                              <v-avatar :color="data?.product?.items?.color"></v-avatar>
                            </v-btn>
                          </p>
                        </v-list-item>
                      </v-list>
                    </v-card-actions>
                  </v-card>

                  <div class="mbr-section-btn"><a class="btn btn-secondary display-7" href="" @click="addToList"><span
                        class="mobi-mbri fas fa-plus mbr-iconfont mbr-iconfont-btn"></span>Add to List</a> <a
                      class="btn btn-secondary display-7 fas fa-shopping-cart" href="" @click="addToCart"><span
                        class=""></span>Add to
                      Basket</a>
                    <a class="btn btn-secondary display-7" href="" @click="buyNow">Buy Now</a></div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Category:</strong></p>
                    <p class="plus mbr-fonts-style display-4" v-for="(category, index) in data?.product?.categories?.items"
                      :key="index">
                      &nbsp;{{ category?.name }}</p>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Format:</strong>&nbsp;</p>
                    <p class="plus mbr-fonts-style display-4">{{ data?.product?.items?.format }}</p>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Product ID:</strong>&nbsp;</p>
                    <p class="plus mbr-fonts-style display-4">{{ data?.product?.items?.sku }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>No product found</div>
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
              <!--Product Description-->
              <v-window-item value="one">
                <v-card variant="text">
                  <v-card-text>{{data?.product?.description?.html}}</v-card-text>
                </v-card>
              </v-window-item>

              <!--Product Reviews-->
              <v-window-item value="two">
                <comments />
              </v-window-item>

              <!--Product Specifications-->
              <v-window-item value="three">
                <productSpecs />
              </v-window-item>

              <!--Product FAQs-->
              <v-window-item value="four">
                <v-expansion-panels>
                  <v-expansion-panel title="Title"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
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
  import comments from '../../components/user/comments.vue'
  import productSpecs from '../../components/commerce/product/productSpecs.vue'
  import productCompare from '../../components/commerce/product/productCompare.vue'

  export default {
    components: {
      comments,
      productSpecs,
      productCompare
    },
    data: () => ({
      tab: null,
    })
  }
</script>

<script setup>
import gql from 'graphql-tag'

  const query = gql`
          query Product($sku: String!) {
            products(filter: { sku: { eq: $sku } }) {
              items {
                id
                sku
                name
                description {
                  html
                }
                special_price
                color
                size
                manufacturer
                categories {
                  items {
                    name
                  }
                }
                price {
                  regularPrice {
                    amount {
                      value
                      currency
                    }
                  }
                }
                image {
                  url
                }
              }
            }
          }
        `;

    const variables = {
        sku: this.$route.params.sku
      }

      const {
        data
      } = await useAsyncQuery(query, variables)

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: ''
  });
</script>