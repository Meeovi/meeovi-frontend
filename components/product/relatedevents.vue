<template>
  <v-sheet class="mx-auto sliderProducts">
    <v-toolbar title="Events you may like" color="transparent">
        <div><NuxtLink to="/departments/NTY=/">All Events</NuxtLink></div>
      </v-toolbar>
    <v-sheet class="mx-auto" elevation="0" color="transparent">
      <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
        selected-class="bg-primary">
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
          <v-row dense>
            <v-col cols="4" :class="['ma-4', selectedClass]" @click="toggle">
              <v-card>
                <NuxtImg loading="lazy" :src="product?.image?.url" :alt="products?.name" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover />
                  <v-card-title class="text-white" v-text="product?.name"></v-card-title>

                <v-card-actions>
                  {{ product?.short_description }}
                  <v-spacer></v-spacer>

                  <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-heart"></v-btn>

                  <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-bookmark"></v-btn>

                  <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-share-variant"></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
            </v-scale-transition>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-sheet>
</template>

<script setup>
  import productCard from '~/components/product/productCard.vue'

  const model = ref(null);

  const props = defineProps({
    events: {
      type: Object,
      required: true,
    },
  });
  const {
    events
  } = props;
</script>