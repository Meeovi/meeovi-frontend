<template>
  <div>
    <SfButton size="lg" class="w-full xs:ml-4" :disabled="loading || hasItem(productVariantId)"
      @click="handleAddToCart">
      <template #prefix>
        <SfIconShoppingCart size="sm" />
      </template>
      {{ loading ? "Adding..." : hasItem(productVariantId) ? "In Cart" : "Add to Cart" }}
    </SfButton>
  </div>
</template>

<script setup>
  import {
    SfButton
  } from "@storefront-ui/vue";
  import {
    SfIconShoppingCart
  } from "@storefront-ui/vue";
  import {
    onMounted
  } from "vue";
  import {
    useVendureCart
  } from "@/composables/cart/useCart";

  const props = defineProps({
    productVariantId: {
      type: String,
      required: true,
    },
  });

  const {
    addToCart,
    hasItem,
    loading,
    getCurrentCart
  } = useVendureCart();

  async function handleAddToCart() {
    await addToCart(props.productVariantId, 1);
  }

  onMounted(async () => {
    await getCurrentCart();
  });
</script>