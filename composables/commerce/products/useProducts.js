import { ref, onMounted } from "vue";
import { medusa } from "@/utils/medusa";

export const useProducts = () => {
  const config = useRuntimeConfig();
  const products = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchProducts = async () => {
    try {
      const response = await medusa.store.product.list({
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey, // Ensure this is set correctly
        },
      });

      products.value = response?.products || [];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchProducts);

  return { products, loading, error };
};

export const useProduct = (id) => {
  const product = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchProduct = async () => {
    try {
      const response = await medusa.store.product.retrieve(id, {
        fields: "*.*",
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey, // Ensure this is set correctly
        },
      });

      product.value = response?.product || [];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const fetchProductBundle = async () => {
    try {
      const response = await medusa.store.product.retrieve(id, {
        fields: {
          products: {
            type: "Bundle"
          }
        },
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey, // Ensure this is set correctly
        },
      });

      events.value = response?.product_product || [];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchProduct, fetchProductBundle);

  return { product, events, loading, error };
};