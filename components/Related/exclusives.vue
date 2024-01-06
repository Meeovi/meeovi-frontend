<template>
  <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
    <h4>Exclusives on Meeovi</h4>
    <v-sheet class="mx-auto" elevation="0" color="transparent">
      <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
        selected-class="bg-primary">
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
          <productCard />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-sheet>
</template>

<script>
  import productCard from '../Pages/commerce/productCard.vue'

  export default {
    components: {
      productCard
    },
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
  /*import query from '../../apollo/Custom/Queries/bestsellers'

  const {
    data
  } = await useAsyncQuery(query)*/

  const {
    getItems
  } = useDirectusItems()

  const products = await getItems({
    collection: "products",
    limit: 6
  });
</script>