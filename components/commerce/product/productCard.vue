<template>
  <div>
    <v-row class="productCard">
      <v-col cols="3" v-for="(products, index) in data?.products?.nodes" :key="index">
        <v-card class="mx-auto" max-width="400" :href="`/product/${products?.id}`">
          <img class="align-end text-white" max-height="200" :src="`${products?.image?.sourceUrl}`" :alt="products?.name" cover />

          <v-card-title>{{products?.name}}</v-card-title>
          <v-card-subtitle class="pt-4">
            Sku: {{ products?.sku }}
          </v-card-subtitle>

          <v-card-subtitle class="pt-4" v-for="categories in data?.products?.nodes?.productCategories?.nodes" :key="categories">
            Category: {{ categories?.name }}
          </v-card-subtitle>

          <v-card-text>
            <div>
              <v-rating v-model="rating" active-color="yellow-accent-4" color="white" :size="products?.averageRating" half-increments>
              </v-rating>
            </div>

            <div>{{products?.price}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">
              Add to Cart
            </v-btn>

            <v-btn color="orange">
              Buy Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      url: process.env.DIRECTUS_URL,
      rating: null,
    }),
  }
</script>
<script setup>
const query = gql`
query NewQuery {
  products {
    nodes {
      id
      image {
        sourceUrl
        id
      }
      name
      onSale
      sku
      slug
      type
      ... on SimpleProduct {
        id
        name
        regularPrice
        type
        price
        averageRating
        productCategories {
          nodes {
            name
          }
        }
        image {
          sourceUrl
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

/*  const {
    getItems
  } = useDirectusItems()
  const route = useRoute();

  const products = await getItems({
    collection: "products",
  }); */
</script>