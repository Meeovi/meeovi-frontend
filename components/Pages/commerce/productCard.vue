<template>
    <div class="productCard border border-neutral-200 rounded-md hover:shadow-lg"
      v-for="(products, index) in data.products" :key="index">
      <div class="relative">
        <SfLink :href="`/product/${products.id}`" class="block">
          <img :src="`${url}assets/${products.image.filename_disk}`" :alt="products.name"
            class="block object-cover h-auto rounded-md aspect-square" width="300" height="300" />
        </SfLink>
        <SfButton variant="tertiary" size="sm" square
          class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist">
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div class="p-4 border-t border-neutral-200">
        <SfLink href="#" variant="secondary" class="no-underline"> {{ products.name }} </SfLink>
        <div class="items-center pt-1">
          <p class="skuclass" v-for="customers in data.products[0].customers">By: {{ customers.customers_id.username }}
          </p>

          <SfRating size="xs" :value="products.rating" :max="5" />
        </div>
        <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
          {{ products.description }}
        </p>
        <span class="block pb-2 font-bold typography-text-lg productCardPrice">
          <div v-for="products in data.products[0].currency">{{ products.currency_id.symbol }}</div>{{ products.price }}
        </span>
        <SfButton size="sm">
          <template #prefix>
            <SfIconShoppingCart size="sm" />
          </template>
          Add to cart
        </SfButton>
      </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>
<script setup>
  import {
    SfRating,
    SfLink,
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite
  } from '@storefront-ui/vue';
  const query = gql `
query {
  products (limit: 6) {
    id
    name
    price
    currency {
      currency_id {
        symbol
      }
    }
    sku
    image {
      filename_disk
    }
    rating
    tax_class
    stock_status
    customers {
      customers_id {
        id
        username
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)
</script>