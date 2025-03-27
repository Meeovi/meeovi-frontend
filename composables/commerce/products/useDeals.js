import { useRuntimeConfig } from '#imports';
const config = useRuntimeConfig();
const baseURL = config.public.shopwareUrl;
const token = config.public.shopwareAccessToken;

export const useProductByCategory = (categoryId) => {
  const products = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchProductsByCategory = async () => {
    try {
      const response = await fetch(`${baseURL}/store-api/product?category_id[]=${categoryId}`, {
        credentials: "include",
        headers: {
          "sw-access-key": token,
        },
      });
      const data = await response.json();
      products.value = data.products || [];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchProductsByCategory);

  return { products, loading, error };
};