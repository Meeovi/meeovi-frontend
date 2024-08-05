import { ref } from 'vue';
import { useRuntimeConfig } from '#imports';

export function useCategoryProducts() {
  const config = useRuntimeConfig();
  const products = ref([]);
  const latestProducts = ref([]); // Ensure latestProducts is defined

  const fetchCategoryProducts = async (uid) => {
    try {
      const response = await $fetch(`${config.public.commerceUrl}/rest/V1/products`, {
        params: {
          'searchCriteria[filter_groups][0][filters][0][field]': 'category_id',
          'searchCriteria[filter_groups][0][filters][0][value]': uid,
          'searchCriteria[filter_groups][0][filters][0][condition_type]': 'eq'
        }
      });
      products.value = response.items;
    } catch (error) {
      console.error('Error fetching category products:', error);
    }
  };

  const fetchLatestCategoryProducts = async (uid) => {
    try {
      const response = await $fetch(`${config.public.commerceUrl}/rest/V1/products`, {
        params: {
          'searchCriteria[filter_groups][0][filters][0][field]': 'category_id',
          'searchCriteria[filter_groups][0][filters][0][value]': uid,
          'searchCriteria[filter_groups][0][filters][0][condition_type]': 'eq',
          'searchCriteria[sortOrders][0][field]': 'created_at', // Sort by creation date
          'searchCriteria[sortOrders][0][direction]': 'DESC'    // Descending order for latest products
        }
      });
      latestProducts.value = response.items;
    } catch (error) {
      console.error('Error fetching latest category products:', error);
    }
  };

  const fetchProductsByCategory = async (uid) => {
    const specificCategoryProducts = ref([]);
    try {
      const response = await $fetch(`${config.public.commerceUrl}/rest/V1/products`, {
        params: {
          'searchCriteria[filter_groups][0][filters][0][field]': 'category_id',
          'searchCriteria[filter_groups][0][filters][0][value]': uid,
          'searchCriteria[filter_groups][0][filters][0][condition_type]': 'eq'
        }
      });
      specificCategoryProducts.value = response.items;
    } catch (error) {
      console.error('Error fetching products for specific category:', error);
    }
    return specificCategoryProducts;
  };

  return {
    products,
    latestProducts,
    fetchCategoryProducts,
    fetchProductsByCategory,
    fetchLatestCategoryProducts 
  };
}
