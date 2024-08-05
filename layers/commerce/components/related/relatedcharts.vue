<template>
  <v-sheet class="mx-auto sliderProducts">
    <h4>Related Charts</h4>
    <v-slide-group v-model="model" class="pa-4" center-active>
      <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="(chart, index) in data?.charts?.nodes" :key="index">
        <v-card width="300px" @click="toggle" :href="`/chart/${chart?.id}`">
          <img :src="`${chart?.chartFields?.image?.sourceUrl}`" :alt="chart?.chartFields?.name" class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover />
          <v-card-title class="text-black">{{ chart?.chartFields?.name }}</v-card-title>

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
const query = gql `
query NewQuery {
  charts {
    nodes {
      chartFields {
        name
        image {
          node {
            sourceUrl
          }
        }
        products {
          nodes {
            id
            ... on SimpleProduct {
              id
              name
              price
            }
          }
        }
        color
      }
      id
      date
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

/*const {
        getItems
    } = useDirectusItems()

    const musicchart = await getItems({
        collection: "musicchart"
    });*/
</script>