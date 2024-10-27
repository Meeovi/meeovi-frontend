<template>
  <v-card class="b-1">
    <v-card-title>
      <h3>Create New Showcase</h3>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="name" label="Name" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="description" label="Description"></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="price" label="Price" type="number"></v-text-field>
        </v-col>
      </v-row>

      <v-card-title>Select Products for Group</v-card-title>
      <v-container fluid>
        <div v-if="productsLoading">Loading products...</div>
        <div v-else-if="productsError">Error loading products: {{ productsError.message }}</div>
        <div v-else-if="products.length === 0">No products available for selection.</div>
        <v-row v-else>
          <v-col v-for="product in products" :key="product.uid" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-text>
                SKU: {{ product.sku }}<br>
                Price: {{ product.price_range.minimum_price.regular_price.value }} {{ product.price_range.minimum_price.regular_price.currency }}
              </v-card-text>
              <v-card-actions>
                <v-checkbox v-model="selectedProducts" :value="product" hide-details class="ma-2"
                  :label="`Select ${product.name}`"></v-checkbox>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div>Debug: Total products: {{ products.length }}</div>

      <v-card-text>
        <h3>Selected Products:</h3>
        <v-chip-group>
          <v-chip v-for="product in selectedProducts" :key="product.uid" closable
            @click:close="toggleProductSelection(product)">
            {{ product.name }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="handleCreateGroupedProduct" color="primary">Create Showcase</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import FETCH_PRODUCTS from '~/graphql/commerce/queries/products';
import { useGroupedProducts } from '~/composables/commerce/products/useGroupedProducts';

const name = ref('');
const description = ref('');
const price = ref('');
const selectedProducts = ref([]);

const { result: productsResult, loading: productsLoading, error: productsError } = useQuery(FETCH_PRODUCTS);

const products = computed(() => {
  console.log('Raw products result:', productsResult.value);
  if (productsResult.value && productsResult.value.products && productsResult.value.products.items) {
    console.log('Number of products:', productsResult.value.products.items.length);
    return productsResult.value.products.items;
  }
  console.log('No products found in the result');
  return [];
});

watch(productsLoading, (newValue) => {
  console.log('Products loading state:', newValue);
});

watch(productsError, (newValue) => {
  if (newValue) {
    console.error('Error in products query:', newValue);
  }
});

const { createGroupedProduct, addProductsToGroup, loading, error } = useGroupedProducts();

const toggleProductSelection = (product) => {
  const index = selectedProducts.value.findIndex(p => p.uid === product.uid);
  if (index === -1) {
    selectedProducts.value.push(product);
  } else {
    selectedProducts.value.splice(index, 1);
  }
};

function generateSku() {
  const prefix = 'GP'; // GP for Showcase
  const timestamp = Date.now().toString(36); // Convert current timestamp to base 36
  const randomStr = Math.random().toString(36).substring(2, 5); // Generate a random string
  return `${prefix}-${timestamp}-${randomStr}`.toUpperCase();
}

const handleCreateGroupedProduct = async () => {
  try {
    const generatedSku = generateSku();
    const groupedProductData = {
      sku: generatedSku,
      name: name.value,
      attribute_set_id: 4, // Adjust this value based on your Magento setup
      price: parseFloat(price.value),
      status: 1, // 1 = Enabled
      visibility: 4, // 4 = Visible in Catalog and Search
      type_id: 'grouped',
      extension_attributes: {},
      custom_attributes: [{
        attribute_code: 'description',
        value: description.value
      }]
    };

    console.log('Attempting to create grouped product with data:', groupedProductData);

    const createdProduct = await createGroupedProduct(groupedProductData);

    console.log('Created product response:', createdProduct);

    if (createdProduct) {
      // Add the selected products to the group
      const productLinks = selectedProducts.value.map((product, index) => ({
        sku: product.sku,
        qty: 1,
        position: index + 1
      }));

      console.log('Adding product links:', productLinks);

      await addProductsToGroup(createdProduct.sku, productLinks);

      console.log('Grouped product created successfully');
      // You might want to add some success feedback here
    }
  } catch (err) {
    console.error('Error creating grouped product:', err);
    if (err.response) {
      console.error('Response status:', err.response.status);
      console.error('Response data:', err.response.data);
    }
    // You might want to add some error feedback here
  }
};
</script>
