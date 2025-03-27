<template>
  <div>
    <v-sheet class="mx-auto row align-items-stretch items-row">
      <v-toolbar title="Vibez within the community" color="transparent">
        <NuxtLink to="/social/vibez/">All Vibez</NuxtLink>
      </v-toolbar>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ toggle, selectedClass }" v-for="(result, index) in short" :key="index">
          <shorts style="margin: 10px;" :short="result" :class="['ma-4', selectedClass]" @click="toggle" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup>
  import {
    ref,
  } from 'vue';
  import shorts from '~/components/vibez/shorts.vue'

  const model = ref(null);
  const {
    $directus,
    $readItems
  } = useNuxtApp()

  const {
    data: short
  } = await useAsyncData('short', () => {
    return $directus.request($readItems('shorts', {
      fields: ['*', { '*': ['*'] }]
    }))
  })
</script>