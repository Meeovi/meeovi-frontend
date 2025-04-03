<template>
  <NuxtLayout
    name="nolive"
    :back-href="`/`"
    :back-label-desktop="$t('backToShopping')"
    :back-label-mobile="$t('back')"
    :heading="$t('myCart')"
  >
    <CartPageContent />
  </NuxtLayout>
</template>

<script setup lang="ts">
import CartPageContent from "~/components/cart/CartPageContent/CartPageContent.vue";

definePageMeta({
  layout: false,
});
</script>
