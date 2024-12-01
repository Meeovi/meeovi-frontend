<template>
  <v-card class="mx-auto" max-width="400">
    <nuxt-img loading="lazy" class="align-end text-white" height="200" :src="`${$directus.url}assets/${short?.thumbnail?.filename_disk}`" :alt="short?.name" cover />

    <v-card-subtitle class="pt-4">
      {{ short?.name }}
    </v-card-subtitle>

    <v-card-text>
      <div>Type: {{ short?.type }}</div>

      <div>{{ short?.description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="View" :href="`/social/vibe/${short?.id}`"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

  const model = ref(null);

  const props = defineProps({
    short: {
      type: Object,
      required: true,
    },
  });
  const {
    short
  } = props;
</script>