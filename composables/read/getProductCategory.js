const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const consumerKey = 'ck_71513251ef29d6eb34d8e91337e10c5dc29785e9';
const consumerSecret = 'cs_6ab0eaa4c194e84b414cef8a25f7b3324c715b88';

export const getCategories = async () => {
  try {
    const categories = await $fetch(`${apiUrl}/wp-json/wc/v3/products/categories`, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret
      }
    });
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getCategoryById = async (id) => {
  try {
    const category = await $fetch(`${apiUrl}/wp-json/wc/v3/products/categories/${id}`, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret
      }
    });

    const subCategories = await $fetch(`${apiUrl}/wp-json/wc/v3/products/categories`, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        parent: categoryId
      }
    });

    return { ...category, children: subCategories };
  } catch (error) {
    console.error(`Error fetching category with ID ${categoryId}:`, error);
    return null;
  }
};