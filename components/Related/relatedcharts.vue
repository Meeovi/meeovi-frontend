<template>
  <v-sheet class="mx-auto sliderProducts">
    <h4>Related Charts</h4>
    <v-slide-group v-model="model" class="pa-4" center-active>
      <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="chart in charts" :key="chart.id">
          <v-card width="300px" @click="toggle" :href="`/chart/${chart.id}`">
            <v-img :src="`${url}assets/${chart.image.filename_disk}`" :alt="chart.name" class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
              <v-card-title class="text-white">{{ chart.name }}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-bookmark"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-share-variant"></v-btn>
            </v-card-actions>

            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" size="48" icon="fas fa-circle-xmark"></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
/*import query from '../../apollo/Custom/Queries/relatedcharts'

  const {
    data
  } = await useAsyncQuery(query)*/


    const { getItems } = useDirectusItems()

    const charts = await getItems({ collection: "musicchart", limit: 6});
</script>