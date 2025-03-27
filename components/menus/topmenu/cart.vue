<template>
  <div>
    <!-- Shopping Cart Button -->
    <SfButton class="relative" square variant="tertiary" @click.stop="drawer = !drawer">
      <SfIconShoppingCart />
      <SfBadge :content="cartItems?.quantity || 0" :value="cartItems?.quantity || 0" color="error" />
    </SfButton>

    <!-- Cart Notification -->
    <v-snackbar v-model="cartNotification" timeout="2000" color="success">
      {{ notificationMessage }}
    </v-snackbar>

    <!-- Flyout Menu -->
    <v-navigation-drawer v-model="drawer" location="right" temporary class="cart-flyout">
      <div class="cart-items">
        <template v-if="cartItems.length">
          <v-list>
            <v-list-item v-for="item in cartItems" :key="item.id" class="cart-item">
              <cartItem :product="item.id" />
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                Subtotal: {{ getSubTotal() }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </template>
        <template v-else>
          <v-alert type="info" class="mt-4">
            No items in the cart.
          </v-alert>
        </template>
      </div>

      <!-- Checkout Button -->
      <v-card-actions class="checkout-section">
        <v-btn color="primary" block @click="goToCheckout">Go to Checkout</v-btn>
      </v-card-actions>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCookie } from "#imports";
import { useRouter } from "vue-router";
import cartItem from '~/components/cart/cartItem.vue'
import { SfBadge, SfButton, SfIconShoppingCart } from '@storefront-ui/vue';

const config = useRuntimeConfig();
const drawer = ref(false);
const cartNotification = ref(false);
const notificationMessage = ref("");
const router = useRouter();
const cartIdCookie = useCookie("cart_id");

// 🛒 Store Cart Data
const cartItems = ref([]);
const cartQuantity = ref(0);

// ✅ Fetch Cart Data from Magento GraphQL
async function getCurrentCart() {
  if (!cartIdCookie.value) return;

  const response = await $fetch(`${config.public.commerceUrl}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: GET_CART,
      variables: { cartId: cartIdCookie.value },
    }),
  });

  if (response?.data?.cart) {
    cartItems.value = response.data.cart.items.map(item => ({
      id: item.id,
      title: item.product.name,
      variant_id: item.product.sku,
      thumbnail: item.product.thumbnail.url,
      quantity: item.quantity,
      unit_price: item.product.price_range.minimum_price.regular_price.value,
    }));

    cartQuantity.value = cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// 🛒 Update Quantity
async function updateQuantity(itemId, newQuantity) {
  if (!cartIdCookie.value) return;

  await $fetch(`${config.public.commerceUrl}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: UPDATE_CART_QUANTITY,
      variables: {
        cartId: cartIdCookie.value,
        cartItemId: itemId,
        quantity: newQuantity,
      },
    }),
  });

  getCurrentCart();
}

// 🛒 Get Subtotal
function getSubTotal() {
  return cartItems.value.reduce((total, item) => total + item.quantity * item.unit_price, 0);
}

// 🛍️ Go to Checkout
function goToCheckout() {
  router.push("/checkout");
}

onMounted(() => {
  getCurrentCart();
});
</script>
