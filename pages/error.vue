<template>
  <div>
    <div class="contentPage">
      <section data-bs-version="5.1" class="header4 cid-u48BYncuPn mbr-fullscreen" id="header4-87"
        data-sortbtn="btn-primary">
        <div class="container">
          <div class="row">
            <div class="content-wrap">
              <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">
                <strong>Oops, 404</strong></h1>

              <p class="mbr-fonts-style mbr-text mbr-white mb-3 display-7">
                We apologies but you landed in the wrong place, please check the link and try again.</p>

              <div class="mbr-section-btn"><a class="btn btn-primary display-4" href="/">Go Back</a></div>
            </div>
          </div>
        </div>
      </section>
      <section data-bs-version="5.1" class="features3 cid-u2ZnbOWSjB" id="features3-7e" data-sortbtn="btn-primary">
        <div class="container">
          <div class="row mt-4">
            <div class="item features-image сol-12 col-md-6 col-lg-4" v-for="(products, index) in data.products.items"
              :key="index">
              <div class="item-wrapper">
                <div class="item-img">
                  <img :src="products.image.url" :alt="products.name">
                </div>
                <div class="item-content">
                  <h5 class="item-title mbr-fonts-style display-7"><strong>{{ products.name }}</strong></h5>
                  <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                    <em>Category: {{ products.categories.name }}</em>
                  </h6>
                  <p class="mbr-text mbr-fonts-style mt-3 display-7">
                    <v-rating hover :length="5" :size="32" :model-value="3" active-color="primary" />
                    ({{ products.rating_summary }})</p>
                  <p class="mbr-text mbr-fonts-style mt-3 display-7">
                    {{ products.price_range.maximum_price.regular_price.currency }}
                    {{ products.price_range.maximum_price.regular_price.value }}</p>
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
    </div>
    <!---->
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
  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Error',
  })

  const query = gql `
    query {
    cmsPage(identifier: "no-route") {
        title
        content
        relative_url
    }
    products(filter: {price: {from: "1"}}){
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
    }
  }
}`


  const {
    data
  } = useAsyncQuery(query);
</script>