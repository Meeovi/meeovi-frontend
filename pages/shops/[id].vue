<template>
  <div class="contentPage">
    <section data-bs-version="5.1" class="info3 cid-uehYEJBGCu" id="info3-9i" data-sortbtn="btn-primary"
      :style="`background-image: url(${data?.store?.storeFields?.image?.node?.sourceUrl})`">




      <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-lg-10">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                  <strong>{{ data?.store?.title }}</strong>
                </h4>
                <p class="mbr-text mbr-fonts-style mb-4 display-6" v-html="data?.store?.content"></p>
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
                <h5 class="card-text mbr-fonts-style display-4">{{ data?.store?.customers?.customers_id?.username }}
                </h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Launched on Meeovi</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ data?.store?.date }}</h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-features mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7">
                  <strong>Status</strong>
                </h4>
                <h5 class="card-text mbr-fonts-style display-4" v-html="data?.store?.storeFields?.ispublic"></h5>
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
      }
    },
  }
</script>

<script setup>
  const route = useRoute();
  const query = gql `
query NewQuery ($id: ID!) {
  store(id: $id) {
    date
    id
    status
    title
    content
    storeFields {
      colortext
      image {
        node {
          sourceUrl
        }
      }
      ispublic
      content
      products {
        nodes {
          date
          id
          ... on SimpleProduct {
            id
            name
            image {
              sourceUrl
            }
            price
            sku
            status
            type
          }
        }
      }
      showcases {
        nodes {
          ... on Showcase {
            id
            date
            excerpt
            showcaseFields {
              description
              name
              owner
              image {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
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
        title: data?.value?.store?.title,
    })
</script>