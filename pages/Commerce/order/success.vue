<template>
  <div class="px-4 md:px-0" data-testid="order-success-page">
    <div
      class="border border-1 border-neutral-200 mt-10 mb-20 rounded p-4 md:p-6 flex flex-col items-center max-w-2xl mx-auto"
    >
      <img src="/images/order-success.svg" :alt="('orderSuccessfulImageAlt')" width="192" height="192" />
      <h1 class="mt-6 mb-1 text-2xl">{{ ('successInfoHeader') }}</h1>
      <span class="font-medium">{{ ('successInfoMessage') }}</span>
      <div class="border border-1 border-neutral-200 rounded bg-neutral-100 p-4 w-full my-4 text-sm">
        <h2 class="font-medium text-base">{{ ('etaDelivery') }}</h2>
        <p class="capitalize">{{ ('tomorrow') }}</p>
        <h2 class="font-medium text-base mt-4">{{ ('orderNumber') }}</h2>
        <p>123456789</p>
      </div>
      <SfButton :tag="NuxtLink" href="/" class="max-md:w-full" variant="secondary">
        {{ ('continueShopping') }}
      </SfButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';

const NuxtLink = resolveComponent('NuxtLink');
</script>
