import { useCart } from "@/composables/commerce/cart/useCart";

export default defineNuxtMiddleware(async () => {
  const { initializeCart } = useCart();
  await initializeCart();
});
