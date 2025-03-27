import { useRuntimeConfig } from '#imports';

export const getCategories = async (catName, level = 2) => {
  const config = useRuntimeConfig();
  try {
    const categories = await $fetch(`${config.public.commerceUrl}/rest/V1/categories/list`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`,
        'Content-Type': 'application/json'
      },
      params: {
        searchCriteria: JSON.stringify({
          pageSize: 1000 // Adjust this value based on your total number of categories
        })
      }
    });
    
    console.log('API Response:', categories);

    // Filter categories on the client side
    const filteredCategories = (categories.items || []).filter(category => 
      category.level === level && 
      category.parent_id && 
      categories.items.find(parent => parent.id === category.parent_id && parent.name === catName)
    );

    console.log('Filtered categories:', filteredCategories);
    return filteredCategories;
  } catch (error) {
    console.error(`Error fetching categories for ${catName} at level ${level}:`, error);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    return [];
  }
};

export const getCategoryById = async (categoryId) => {
  const config = useRuntimeConfig();

  if (!categoryId) {
    console.error('Category ID is undefined');
    return { category: null, products: [] };
  }

  try {
    // Fetch category details
    const category = await $fetch(`${config.public.commerceUrl}/rest/V1/categories/${categoryId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`,
        'Content-Type': 'application/json'
      }
    });

    // Fetch products in the category
    const products = await $fetch(`${config.public.commerceUrl}/rest/V1/products`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`,
        'Content-Type': 'application/json'
      },
      params: {
        searchCriteria: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  field: 'category_id',
                  value: categoryId,
                  conditionType: 'eq'
                }
              ]
            }
          ],
          pageSize: 50 // Adjust this value based on how many products you want to display
        })
      }
    });

    return {
      category,
      products: products.items || []
    };
  } catch (error) {
    console.error(`Error fetching category ${categoryId} with products:`, error);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    return { category: null, products: [] };
  }
};

export const getCategoriesByIds = async (ids) => {
  const config = useRuntimeConfig();
  const promises = ids.map(id => 
    $fetch(`${config.public.commerceUrl}/rest/V1/categories/${id}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    }).catch(error => {
      console.error(`Error fetching category with ID ${id}:`, error);
      return null;
    })
  );

  try {
    const categories = await Promise.all(promises);
    return categories.filter(category => category !== null);
  } catch (error) {
    console.error('Error fetching multiple categories:', error);
    return [];
  }
};

export const getLatestProducts = async () => {
  const config = useRuntimeConfig();
  try {
    const latestProducts = await $fetch(`${config.public.commerceUrl}/rest/V1/products`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      },
      params: {
        searchCriteria: JSON.stringify({
          sortOrders: [{
            field: 'created_at',
            direction: 'DESC'
          }],
          pageSize: 5
        })
      }
    });
    return latestProducts;
  } catch (error) {
    console.error('Error fetching latest products:', error);
    return [];
  }
};

export const getBestSellingProducts = async () => {
  const config = useRuntimeConfig();
  try {
    const bestSellingProducts = await $fetch(`${config.public.commerceUrl}/rest/V1/products`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      },
      params: {
        searchCriteria: JSON.stringify({
          sortOrders: [{
            field: 'sales',
            direction: 'DESC'
          }],
          pageSize: 5
        })
      }
    });
    return bestSellingProducts;
  } catch (error) {
    console.error('Error fetching best-selling products:', error);
    return [];
  }
};
