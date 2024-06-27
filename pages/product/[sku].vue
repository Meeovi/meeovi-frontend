<template>
  <div class="contentPage">
    <v-row>
      <v-col cols="12">
        <section data-bs-version="5.1" class="pricing1 cid-twaUcnOkam" id="pricing1-4h">
          <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(255, 255, 255);"></div>

          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6">
                <img :src="data?.product?.image?.url" :alt="data?.product?.name" cover />
              </div>
              <div class="col-12 col-md-6">
                <div class="right">
                  <div class="card">
                    <p class="mbr-fonts-style display-4">
                      By: <a :href="`/account/user/`"></a></p>
                  </div>
                  <p class="name mbr-fonts-style display-2"><strong>{{ data?.product?.name }}</strong></p>

                  <div class="price-line">
                    <p class="desc2 mbr-fonts-style display-5">
                      <s>{{ data?.product?.productTypes?.nodes?.name }}</s></p>
                    <p class="plus1 mbr-fonts-style display-5">
                      <strong>{{ data?.product?.price_range?.minimum_price?.regular_price?.currency }}&nbsp;</strong>{{ data?.product?.price_range?.minimum_price?.regular_price?.value }}</p>
                  </div>
                  <p class="mbr-text mbr-fonts-style display-4" v-html="data?.product?.short_description?.html"></p>

                  <v-card variant="text" class="productVCard">
                    <v-card-actions>
                      <v-list>
                        <v-list-item>
                          <p class="desc mbr-fonts-style display-7"><strong>Size: </strong>&nbsp;<v-btn
                              variant="outlined"></v-btn>
                          </p>
                        </v-list-item>

                        <v-list-item>
                          <p class="desc mbr-fonts-style display-7"><strong>Color:</strong>&nbsp;<v-btn variant="text">
                              <v-avatar color=""></v-avatar>
                            </v-btn>
                          </p>
                        </v-list-item>
                      </v-list>
                    </v-card-actions>
                  </v-card>

                  <div class="d-flex justify-space-around" style="padding-bottom: 25px;">
                    <addtolist />

                    <v-btn color="primary" size="large">
                      Add to Cart
                    </v-btn>

                    <v-btn color="primary" size="large">
                      Buy Now
                    </v-btn>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Category:</strong></p>
                    <p class="plus mbr-fonts-style display-4"
                      v-for="(category, index) in data?.product?.productCategories?.nodes" :key="index">
                      &nbsp;{{ category?.name }}</p>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Format:</strong>&nbsp;</p>
                    <p class="plus mbr-fonts-style display-4">{{ data?.product?.format }}</p>
                  </div>
                  <div class="price-line1">
                    <p class="desc mbr-fonts-style display-7"><strong>
                        Product ID:</strong>&nbsp;</p>
                    <p class="plus mbr-fonts-style display-4">{{ data?.product?.sku }}</p>
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
              <!--Product Description-->
              <v-window-item value="one">
                <v-card variant="text">
                  <v-card-text>{{data?.product?.description?.html}}</v-card-text>
                </v-card>
              </v-window-item>

              <!--Product Reviews-->
              <v-window-item value="two">
                <disqus />
              </v-window-item>

              <!--Product Specifications-->
              <v-window-item value="three">
                <productSpecs />
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
  import disqus from '../../components/social/disqus.vue'
  import productSpecs from '../../components/commerce/product/productSpecs.vue'
  import productCompare from '../../components/commerce/product/productCompare.vue'
  import addtolist from '../../components/partials/addtolist.vue'

  export default {
    components: {
      disqus,
      productSpecs,
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
query NewQuery ($id: ID!) {
  product(id: $id) {
    attributes {
      nodes {
        name
      }
    }
    averageRating
    content
    date
    description
    galleryImages {
      nodes {
        sourceUrl
      }
    }
    id
    image {
      sourceUrl
    }
    name
    onSale
    productCategories {
      nodes {
        id
        name
      }
    }
    productTypes {
      nodes {
        name
      }
    }
    productTags {
      nodes {
        name
      }
    }
    sku
    slug
    status
    type
    ... on SimpleProduct {
      id
      name
      downloadable
      price
      stockQuantity
    }
    excerpt
  }
}
`

  const {
    data
  } = useAsyncQuery(query, {
    id: route.params.id
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
      title: data?.value?.product?.name,
    })
</script>