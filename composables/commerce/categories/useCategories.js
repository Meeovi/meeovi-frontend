import {
  ref,
  onMounted
} from "vue";
import {
  medusa
} from "@/utils/medusa";

export const useCategories = () => {

  const categories = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchCategories = async () => {
    try {
      const response = await medusa.store.category.list();

      if (response?.product_categories) {
        // Filter only parent categories (ones with no parent)
        categories.value = response.product_categories.filter(
          (category) => !category.parent_category_id
        );
      }
    } catch (err) {
      console.error("Error fetching parent categories:", err);
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchCategories);

  return {
    categories,
    loading,
    error
  };
};

export const useCategory = (id) => {
  const category = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchCategory = async () => {
    try {
      const response = await medusa.store.category.retrieve(id);

      category.value = response.product_category || [];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchCategory);

  return {
    category,
    loading,
    error,
  };
};

export const useCategoryProducts = (categoryId) => {
  const config = useRuntimeConfig();
  const products = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const currentPage = ref(1);
  const hasMorePages = ref(false);
  const limit = 20;

  const fetchProducts = async () => {
    try {
      const offset = (currentPage.value - 1) * limit;
      
      const searchParams = new URLSearchParams({
        limit: `${limit}`,
        offset: `${offset}`,
        "category_id[]": categoryId,
      });
      
      const response = await fetch(
        `${config.public.medusaBackendUrl}/store/products?${searchParams.toString()}`, 
        {
          credentials: "include",
          headers: {
            "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
          },
        }
      );
      
      const { products: dataProducts, count } = await response.json();
      
      products.value = currentPage.value === 1 
        ? dataProducts 
        : [...products.value, ...dataProducts];
      
      hasMorePages.value = count > limit * currentPage.value;
      
    } catch (err) {
      console.error("Error fetching products:", err);
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const loadMore = () => {
    currentPage.value++;
    loading.value = true;
    fetchProducts();
  };

  onMounted(fetchProducts);

  return {
    products,
    loading,
    error,
    hasMorePages,
    loadMore,
  };
};

