// middleware/cart.js
export default defineNuxtRouteMiddleware(async () => {
    const { initializeCart } = useCart();
    await initializeCart();
  });
  