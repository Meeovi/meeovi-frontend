<template>
  <div>
    <h4>Related Showcases</h4>
    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
      <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
        <v-card class="mx-auto" max-width="400">
          <img class="align-end text-white" height="200" :src="showcases?.showcaseFields?.image?.node?.sourceUrl" :alt="showcases?.showcaseFields?.name" cover />
            <v-card-title>{{ showcases?.showcaseFields?.name }}</v-card-title>

          <v-card-subtitle class="pt-4">
            Created: {{ new Date(showcases?.date).toLocaleDateString() }}
          </v-card-subtitle>

          <v-card-text>
            <div>{{ showcases?.showcaseFields?.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text="Share"></v-btn>

            <v-btn color="orange" text="Explore" :href="`/product/showcase/${showcases?.id}`"></v-btn>
          </v-card-actions>
        </v-card>
        <v-scale-transition>
          <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
        </v-scale-transition>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(null);

  const props = defineProps({
    showcases: {
      type: Object,
      required: true,
    },
  });
  const {
    showcases
  } = props;
</script>