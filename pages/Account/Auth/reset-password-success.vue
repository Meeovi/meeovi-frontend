<template>
  <div>
    <section data-bs-version="5.1" class="image1 cid-u476q41BK7 mbr-fullscreen" id="image1-7z"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6">
            <div class="image-wrapper" v-for="products in data?.products?.items" :key="products">
              <img :src="products?.image?.url" alt="">
              <p class="mbr-description mbr-fonts-style pt-2 align-center display-4">
                By: {{ products?.manufacturer }}</p>
            </div>
          </div>
          <div class="col-12 col-lg">
            <div class="text-wrapper">
              <h3 class="mbr-section-title mbr-fonts-style mb-3 display-5">
                <strong>Meeovi Success Page</strong></h3>
              <div v-for="(cmsblocks, index) in data?.cmsBlocks?.items" :key="index" class="mbr-text mbr-fonts-style display-7" v-html="cmsblocks?.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const query = gql`
query MyQuery {
  cmsBlocks(identifiers: "password-reset-success-block") {
    items {
      content
    }
  },
  products(filter: {price: {to: "999"}}, pageSize: 1) {
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
      manufacturer
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)

  definePageMeta({
    layout: false,
  });

  useHead({
    title: 'Reset Password Success Page'
  })
</script>