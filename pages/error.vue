<template>
  <div>
    <div>
      <section data-bs-version="5.1" class="header4 cid-u48BYncuPn mbr-fullscreen" id="header4-87"
        data-sortbtn="btn-primary">
        <div class="container">
          <div class="row">
            <div class="content-wrap">
              <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">
                <strong>{{ page.name }}</strong></h1>

              <p class="mbr-fonts-style mbr-text mbr-white mb-3 display-7" style="color: white !important;" v-text="page.content"></p>

              <div class="mbr-section-btn"><a class="btn btn-primary display-4" href="/">Go Back</a></div>
            </div>
          </div>
        </div>
      </section>
      <productCard :query="productQuery" />
    </div>
    <!---->
  </div>
</template>

<script>
import gql from 'graphql-tag'
import productCard from '../components/Pages/commerce/productCard.vue'

const CUSTOM_QUERY = gql`
query {
  products(filter: {price: {to: "999.99"}}, pageSize: 10){
    items {
      categories {
        name
      }
      format
      image {
        url
      }
      price {
        regularPrice {
          amount {
            currency
            value
          }
        }
      }
      manufacturer
      name
      rating_summary
      sale
      special_price
      uid
    }
  }
}`

export default {
  components: { productCard },
  data() {
    return {
      productQuery: CUSTOM_QUERY
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

  const {
    getItemById
    } = useDirectusItems()

    const page = await getItemById({
        collection: "pages",
        id: 16
    });
</script>