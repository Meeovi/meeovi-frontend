<template>
  <section class="md:max-w-[640px]">
    <div
      class="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4"
    >
      <SfIconSell size="sm" class="mr-1.5" />
      Sale
    </div>
    <h1 class="mb-1 font-bold typography-headline-4">{{data?.products_by_id?.name}}</h1>
    <h3 class="mb-1 font-bold typography-headline-4">By: {{data?.products_by_id?.customers.customers_by_id.username}}</h3>
    <h3 class="mb-1 font-bold typography-headline-4">Shop: {{data?.products_by_id?.shops.shops_by_id.username}}</h3>
    <h3 class="mb-1 font-bold typography-headline-4">Category: {{data?.products_by_id?.categories.categories_by_id.name}}</h3>
    <strong class="block font-bold typography-headline-3">{{data?.products_by_id?.currency?.currency_id?.symbol}}{{data?.products_by_id?.price}} </strong>
    <div class="inline-flex items-center mt-4 mb-2">
      <v-rating hover :size="28" :model-value="data?.products_by_id?.rating" :length="5" active-color="orange" />
      <SfCounter class="ml-1" size="xs"><SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500"> 123 reviews </SfLink></SfCounter>
    </div>
    <ul class="mb-4 font-normal typography-text-sm">
      <li>Sku: {{data?.products_by_id?.sku}}</li>
      <li>
        Size:  
        <v-btn :title="data?.products_by_id?.size">{{data?.products_by_id?.size}}</v-btn></li>
    </ul>
    <div class="py-4 mb-4 border-gray-200 border-y">
      <div
        class="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md"
      >
        <SfIconShoppingCartCheckout />
        1 in cart
      </div>
      <div class="items-start xs:flex">
        <div class="flex flex-col items-stretch xs:items-center xs:inline-flex">
          <div class="flex border border-neutral-300 rounded-md">
            <SfButton
              variant="tertiary"
              :disabled="count <= min"
              square
              class="rounded-r-none p-3"
              :aria-controls="inputId"
              aria-label="Decrease value"
              @click="dec()"
            >
              <SfIconRemove />
            </SfButton>
            <input
              :id="inputId"
              v-model="count"
              type="number"
              class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
              :min="min"
              :max="max"
              @input="handleOnChange"
            />
            <SfButton
              variant="tertiary"
              :disabled="count >= max"
              square
              class="rounded-l-none p-3"
              :aria-controls="inputId"
              aria-label="Increase value"
              @click="inc()"
            >
              <SfIconAdd />
            </SfButton>
          </div>
          <p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
            <strong class="text-neutral-900">{{data?.products_by_id?.stock_status}}</strong> in stock
          </p>
        </div>
        <SfButton size="lg" class="w-full xs:ml-4">
          <template #prefix>
            <SfIconShoppingCart size="lg" />
          </template>
          Add to cart
        </SfButton>
      </div>
      <div class="flex justify-center mt-4 gap-x-4">
        <SfButton size="sm" variant="tertiary">
          <template #prefix>
            <SfIconCompareArrows size="sm" />
          </template>
          Compare
        </SfButton>
        <SfButton size="sm" variant="tertiary">
          <SfIconFavorite size="sm" />
          Add to list
        </SfButton>
      </div>
    </div>
    <div class="flex first:mt-4">
      <SfIconPackage size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Free shipping, arrives by Thu, Apr 7. Want it faster?
        <SfLink href="#" variant="secondary" class="mx-1"> Add an address </SfLink>
        to see options
      </p>
    </div>
    <div class="flex mt-4">
      <SfIconWarehouse size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Pickup not available at your shop.
        <SfLink href="#" variant="secondary" class="ml-1"> Check availability nearby </SfLink>
      </p>
    </div>
    <div class="flex mt-4">
      <SfIconSafetyCheck size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Free 30-days returns.
        <SfLink href="#" variant="secondary" class="ml-1"> Details </SfLink>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  SfButton,
  SfCounter,
  SfLink,
  SfRating,
  SfIconSafetyCheck,
  SfIconCompareArrows,
  SfIconWarehouse,
  SfIconPackage,
  SfIconFavorite,
  SfIconSell,
  SfIconShoppingCart,
  SfIconAdd,
  SfIconRemove,
  useId,
  SfIconShoppingCartCheckout,
} from '@storefront-ui/vue';
import { clamp } from '@storefront-ui/shared';
import { useCounter } from '@vueuse/core';

const inputId = useId();
const min = ref(1);
const max = ref(999);
const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });
function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}

const query = gql `
  query products_by_id($id: ID!){
    products_by_id(id: $id){
      id
    name
    price
    sku
    rating
    stock_status
    size
    attributes {
      attributes_id {
        id
        default_label
      }
    }
    categories {
      categories_id {
        id
        name
      }
    }
    customers {
      customers_id {
        id
        username
      }
    }
    currency {
      currency_id {
        symbol
      }
    }
    shops {
      shops_id {
        id
        name
      }
    }
  }
}
`

    const {
        data
    } = await useAsyncQuery(query)
</script>
