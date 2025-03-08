<template>
    <div>
        <v-sheet class="mx-auto sliderProducts">
            <h4>News Articles worth reading..</h4>
            <v-sheet class="mx-auto" elevation="0" color="transparent">
                <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
                    selected-class="bg-primary">
                    <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
                        <v-row dense>
                            <v-col v-for="news in categories?.items" :key="news" cols="4">
                                <v-card class="mx-auto" max-width="400">
                                    <NuxtImg loading="lazy" class="align-end text-white" height="200"
                                        :src="items?.image?.sourceUrl" :alt="items?.name" cover />
                                        <v-card-title>{{ items?.name}}</v-card-title>

                                    <v-card-subtitle class="pt-4">
                                        {{ items?.sku }}
                                    </v-card-subtitle>

                                    <v-card-text>
                                        <div>{{ items?.type }}</div>

                                        <div>{{ items?.excerpt }}</div>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn color="orange" text="Read"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </v-sheet>
    </div>
</template>

<script setup>
  const props = defineProps({
    categories: {
      type: Object,
      required: true,
    },
  });
  const {
    categories
  } = props;
</script>