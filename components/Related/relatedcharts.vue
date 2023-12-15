<template>
  <v-sheet class="mx-auto sliderProducts">
    <h4>Related Charts</h4>
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="chart in data.musicchart" :key="chart.id">
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
  const query = gql `
query {
  musicchart {
    id
    name
    description
    image {
      filename_disk
    }
    categories {
      categories_id {
        id
        name
      }
    }
    products {
      products_id {
        id
        name
        price
        content
        image {
          filename_disk
        }
        sku
        customers {
          customers_id {
            id
            username
            image {
              filename_disk
            }
          }
        }
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)


  /*  const { getItems } = useDirectusItems()

    const products = await getItems({ collection: "products"});
    const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });*/
</script>