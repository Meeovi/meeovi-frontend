<template>
  <div class="relative flex w-full max-h-[600px] aspect-[4/3]">
    <v-carousel>
      <v-carousel-item
        :src="image.featuredAsset?.preview"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
  const props = defineProps({
    image: {
      type: String,
      required: true,
    },
  });
</script>
