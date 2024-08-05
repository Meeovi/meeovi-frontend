<template>
    <div>
        <div class="contentPage" v-for="cmspage in data?.pages?.nodes" :key="cmspage">
            <div v-html="cmspage.content"></div>
            <productCard />
        </div>
        <!---->
    </div>
</template>

<script>
import productCard from '../../../components/commerce/product/productCard.vue'

    export default {
        components: { productCard },
    }
</script>

<script setup>
    useHead({
        title: 'Deals',
    })

const query = gql `
query NewQuery {
  products(where: {onSale: true}) {
    nodes {
      id
      image {
        sourceUrl
      }
      name
      sku
      type
      ... on SimpleProduct {
        id
        name
        date
        price
      }
    }
  }
  pages(where: {name: "Deals"}) {
    nodes {
      content
      title
    }
  }
}`

    const {
        data
    } = useAsyncQuery(query);
</script>