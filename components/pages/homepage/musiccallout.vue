<template>
  <div>
    <section data-bs-version="5.1" class="features2 cid-tAGUH8o3YK" id="features2-5z" v-for="category in result?.categories?.items" :key="category">

      <div class="container">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element ">
            <div class="img-wrap">
              <NuxtImg loading="lazy" :src="`${category?.image}`" :alt="category?.name" />
            </div>
          </div>
          <div class="col-md-6 text-element">
            <div class="text-content">

              <h2 class="mbr-title pt-2 mbr-fonts-style align-center mbr-white display-2">{{ category?.name }}</h2>
              <div class="mbr-section-text">
                <h4 class="mbr-text pt-3 mbr-light mbr-fonts-style align-center mbr-white display-4" v-html="category?.description">
                  </h4>
                  <br>
                  <br>
              </div>
              <div class="mbr-section-btn pt-3 align-center"><NuxtLink class="btn btn-md btn-white display-4"
                :href="`/departments/${category?.uid}`">Start Listening</NuxtLink></div>
            </div>
          </div>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
  import {
    useQuery
  } from '@vue/apollo-composable'
import categoryMusic from '~/graphql/commerce/queries/music.js'

  const {
    result
  } = useQuery(categoryMusic);
/*import { getCategoryById } from '@/composables/commerce/categories/getCategories.js';

const category = ref({});
const description = ref('');
const image = ref('');

const findCustomAttribute = (attributes, code) => {
  return attributes.find(attr => attr.attribute_code === code)?.value || '';
};

onMounted(async () => {
  // Fetch the category data by ID
  category.value = await getCategoryById(42);
  
  // Access custom attributes like description and image
  if (category.value?.custom_attributes) {
    description.value = findCustomAttribute(category.value.custom_attributes, 'description');
    image.value = findCustomAttribute(category.value.custom_attributes, 'image');
  }
}); */
</script>