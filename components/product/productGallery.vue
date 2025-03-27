<template>
  <div class="relative flex w-full max-h-[600px] aspect-[4/3]">
    <v-carousel>
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        :src="image.imageSrc"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getProductById } from '~/composables/commerce/products/products';
import { useRoute } from 'vue-router';

// Fetch the product images dynamically
const fetchProductImages = async (productId: string) => {
  try {
    const product = await getProductById(productId);

    // Check if product exists and has images
    if (!product || !product.images) {
      throw new Error('Product data or images not available');
    }

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return product.images.map((image: any) => ({
      imageSrc: image.full, // Assuming 'full' is the key for the full-size image
      imageThumbSrc: image.thumb, // Assuming 'thumb' is the key for the thumbnail image
      alt: product.name, // Assuming the product name can be used as alt text
    }));
  } catch (error) {
    console.error('Failed to fetch product images:', error);
    return []; // Return an empty array in case of error
  }
};

const route = useRoute();
const images = ref<NuxtLinkny[]>([]); // Dynamic images array
const productId = route.params.sku; // Assuming the product SKU is in the route params

// Fetch product images on component mount
onMounted(async () => {
  images.value = await fetchProductImages(productId);
});
</script>
