<template>
    <v-row>
        <v-col cols="12">
            <h6>Color</h6>
        </v-col>

        <v-col cols="12">
            <v-container>
                <v-row>
                    <v-col cols="auto">
                        <v-btn v-if="products?.options?.title === 'Color'" density="compact" :style="`background-color: ${values?.value}`" :aria-label="values?.value"
                            @click="selectColor(colors)">
                            <!-- Display the color name as a tooltip or for accessibility -->
                            <v-icon small v-if="selectedColor === colors?.title">mdi-check</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script setup>
  const props = defineProps({
    colors: {
      type: String,
      required: true
    }
  })
</script>