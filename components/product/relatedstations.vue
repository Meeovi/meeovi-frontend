<template>
  <div>
    <v-sheet class="mx-auto row align-items-stretch items-row">
      <v-toolbar title="Radio Stations within the community" color="transparent">
        <NuxtLink to="/departments/categories/stations/">All Radio Stations</NuxtLink>
      </v-toolbar>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ toggle, selectedClass }" v-for="(result, index) in stationSlide" :key="index">
          <stations style="margin: 10px;" :radio="result" :class="['ma-4', selectedClass]" @click="toggle" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup>
  import {
    ref,
  } from 'vue';
  import stations from '~/components/product/radiostation.vue'

  const model = ref(null);
  const {
    $directus,
    $readItems
  } = useNuxtApp()

  const {
    data: stationSlide
  } = await useAsyncData('stationSlide', () => {
    return $directus.request($readItems('radios', {
      fields: ['*', { '*': ['*'] }]
    }))
  })
</script>