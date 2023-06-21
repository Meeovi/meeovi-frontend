<template>
    <div>
        <v-row>
            <v-col v-for="products in data.products.items" :key="products.uid" cols="3">
                <a :href="`/product/${products.uid}`">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <img class="align-end text-white" height="200" :src="products.image.url" cover>

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div># of Ratings: {{ products.rating_summary }}</div>
                            <div>Category: {{ products.categories.name }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.price_range.maximum_price.regular_price.value }}</v-card-title>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    const query = gql`
query {
    products(filter: {price: {to: "99.99"}}){
    items {
      uid
      name
      rating_summary
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