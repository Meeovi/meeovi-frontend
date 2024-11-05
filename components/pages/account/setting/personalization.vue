<template>
  <v-card>
    <v-card-title>Personalization</v-card-title>
    <v-card-text>
      <v-select
        v-model="preferredCategories"
        :items="categories"
        item-title="title"
        item-value="value"
        label="Preferred Categories"
        multiple
        chips
        :loading="!categories.length"
      ></v-select>
      <v-select
        v-model="preferredBrands"
        :items="brands"
        item-title="title"
        item-value="value"
        label="Preferred Brands"
        multiple
        chips
        :loading="!brands.length"
      ></v-select>
      <v-switch
        v-model="enableRecommendations"
        label="Enable Product Recommendations"
      ></v-switch>
      <v-btn @click="savePersonalization" color="primary" :loading="loading">
        Save Preferences
      </v-btn>
      <v-alert v-if="successMessage" type="success" class="mt-3">
        {{ successMessage }}
      </v-alert>
      <v-alert v-if="errorMessage" type="error" class="mt-3">
        {{ errorMessage }}
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';

const config = useRuntimeConfig();
const preferredCategories = ref([]);
const preferredBrands = ref([]);
const enableRecommendations = ref(true);

// These would typically come from your backend
const categories = ref([]);
const brands = ref([]);

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const fetchCategories = async () => {
  try {
    const response = await $fetch(`${config.public.commerceUrl}/V1/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // If your API requires authentication for this endpoint, include the token
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });

    // Magento returns a category tree, so we need to flatten it
    const flattenCategories = (category) => {
      let result = [{
        value: category.id,
        title: category.name
      }];
      if (category.children_data) {
        category.children_data.forEach(child => {
          result = result.concat(flattenCategories(child));
        });
      }
      return result;
    };

    categories.value = flattenCategories(response);
  } catch (error) {
    console.error('Error fetching categories:', error);
    errorMessage.value = 'Failed to load categories. Please refresh the page.';
  }
};

// New function to fetch brands
const fetchBrands = async () => {
  try {
    const response = await $fetch('/api/commerce/catalog/brands')
    brands.value = response.map(brand => ({
      value: brand.brand_id,
      title: brand.brand_name
    }))
  } catch (error) {
    console.error('Error fetching brands:', error)
    errorMessage.value = 'Failed to load brands. Please refresh the page.'
  }
}

// Fetch categories when the component is mounted
onMounted(() => {
  fetchCategories();
  fetchBrands()
});

const savePersonalization = async () => {
  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await $fetch(`${config.public.commerceUrl}/V1/customers/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.public.commerceApiToken}` // You need to obtain and store the customer token
      },
      body: JSON.stringify({
        customer: {
          custom_attributes: [
            {
              attribute_code: 'preferred_categories',
              value: JSON.stringify(preferredCategories.value)
            },
            {
              attribute_code: 'preferred_brands',
              value: JSON.stringify(preferredBrands.value)
            },
            {
              attribute_code: 'enable_recommendations',
              value: enableRecommendations.value ? '1' : '0'
            }
          ]
        }
      })
    });

    successMessage.value = 'Personalization preferences saved successfully!';
  } catch (error) {
    console.error('Error saving personalization preferences:', error);
    errorMessage.value = 'Failed to save preferences. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

