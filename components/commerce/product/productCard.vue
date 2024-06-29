<template>
  <div>
    <v-row class="productCard">
      <v-col>
        <v-card class="mx-auto" max-width="350" :href="`/product/${product?.sku}`">
          <img class="align-end text-white" style="height: 250px;" :src="`${product?.image?.url}`"
            :alt="product?.name" cover />

          <v-card-title>{{product?.name}}</v-card-title>
          <v-card-subtitle class="pt-4">
            Sku: {{ product?.sku }}
          </v-card-subtitle>

          <v-card-subtitle class="pt-4">
            Category: {{ product?.categories?.name }}
          </v-card-subtitle>

          <v-card-text>
            <div>
              <v-rating v-model="rating" active-color="yellow-accent-4" color="orange" size="5"
                half-increments>
              </v-rating>
            </div>

            <p>{{ product?.price_range?.minimum_price?.regular_price?.currency }} {{ product?.price_range?.minimum_price?.regular_price?.value }}</p>
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
      //url: process.env.DIRECTUS_URL,
      rating: null,
    }),
  }
</script>
<script setup>

  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  const {
    product
  } = props;

  /*  const {
      getItems
    } = useDirectusItems()
    const route = useRoute();

    const products = await getItems({
      collection: "products",
    }); */
</script>