<template>
  <v-card>
    <v-card-title>Personalization</v-card-title>
    <v-card-text>
      <v-select
        v-model="preferredCategories"
        :items="categories"
        label="Preferred Categories"
        multiple
        chips
      ></v-select>
      <v-select
        v-model="preferredBrands"
        :items="brands"
        label="Preferred Brands"
        multiple
        chips
      ></v-select>
      <v-switch
        v-model="enableRecommendations"
        label="Enable Product Recommendations"
      ></v-switch>
      <v-btn @click="savePersonalization" color="primary">Save Preferences</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const preferredCategories = ref([]);
const preferredBrands = ref([]);
const enableRecommendations = ref(true);

// These would typically come from your backend
const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Books'];
const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];

const savePersonalization = () => {
  // Implement save logic here
  console.log('Saving personalization preferences');
};
</script>
