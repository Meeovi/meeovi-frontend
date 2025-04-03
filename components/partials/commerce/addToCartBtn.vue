<template>
  <div>
    <SfButton size="lg" class="w-full xs:ml-4" @click="handleAddToCart"
      :disabled="loading || hasItem(productVariantId)">
      <template #prefix>
        <SfIconShoppingCart size="sm" />
      </template>
      {{ loading ? "Adding..." : hasItem(productVariantId) ? "In Cart" : "Add to Cart" }}
    </SfButton>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from "vue";
  import {
    SfButton
  } from "@storefront-ui/vue";
  import {
    useCookie
  } from "#imports";
  import {
    GET_CART,
    ADD_TO_CART,
    CREATE_CART
  } from "~/graphql/commerce/mutations/cart/cart.js";

  const config = useRuntimeConfig();
  const cartIdCookie = useCookie("cart_id"); // Store cart ID in cookies
  const loading = ref(false);
  const cartItems = ref([]);
  const cartQuantity = ref(0);

  const props = defineProps({
    productVariantId: {
      type: String,
      required: true,
    },
  });

  // ✅ Check if product is already in cart
  const hasItem = (variantId) => cartItems.value.some(item => item.variant_id === variantId);

  // ✅ Fetch Cart Data from Magento GraphQL
  async function getCurrentCart() {
    if (!cartIdCookie.value) return;

    const response = await $fetch(`${config.public.commerceUrl}/graphql`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: GET_CART,
        variables: {
          cartId: cartIdCookie.value
        },
      }),
    });

    if (response?.data?.cart) {
      cartItems.value = response.data.cart.items.map(item => ({
        id: item.id,
        title: item.product.name,
        variant_id: item.product.sku,
        thumbnail: item.product.image.url,
        quantity: item.quantity,
        unit_price: item.product.price_range.minimum_price.regular_price.value,
      }));

      cartQuantity.value = cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
    }
  }

  // 🛒 Add Product to Cart
  async function addToCart(productVariantId, quantity = 1) {
    if (!cartIdCookie.value) {
      const createCartResponse = await $fetch(`${config.public.commerceUrl}/graphql`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${config.public.commerceApiToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: CREATE_CART
        }),
      });

      cartIdCookie.value = createCartResponse?.data?.createEmptyCart || null;
      console.log("Created New Cart:", cartIdCookie.value);
    }

    console.log("Adding to Cart:", productVariantId);

    const response = await $fetch(`${config.public.commerceUrl}/graphql`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: ADD_TO_CART,
        variables: {
          cartId: cartIdCookie.value,
          cartItems: [{
            sku: productVariantId,
            quantity,
          }, ],
        },
      }),
    });

    console.log("Add to Cart Response:", response);
    console.log("Cart ID before adding:", cartIdCookie.value);
    console.log("Created New Cart Response:", createCartResponse);

    if (response.errors) {
      console.error("GraphQL Error:", JSON.stringify(response.errors, null, 2));
    }

    if (response?.data?.addProductsToCart) {
      await getCurrentCart(); // Refresh cart after adding
    }
  }

  async function handleAddToCart() {
    try {
      loading.value = true;
      if (!cartIdCookie.value) {
        await getCurrentCart();
      }

      await addToCart(props.productVariantId, 1);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      loading.value = false;
    }
  }

  onMounted(async () => {
    await getCurrentCart(); // Ensure cart exists when component mounts
  });
</script>