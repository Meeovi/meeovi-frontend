<template>
  <div>
    <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
      data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Spaces within the community</h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>
        <v-sheet class="mx-auto row align-items-stretch items-row">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(result, index) in space"
              :key="index">
              <spaces :space="result" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {
    ref,
  } from 'vue';
  import {
    useQuery
  } from '@vue/apollo-composable'
  import spaces from '~/components/spaces/spaces.vue'
  import createspace from '~/components/spaces/add-space.vue'
  //import {groups} from '~/graphql/cms/queries/groups'
  //import { getGroups } from '~/composables/cms/social/getGroups.js'; // Import the composable function


  const tab = ref(null);
  const model = ref(null);
  const {
    $directus,
    $readItems
  } = useNuxtApp()

  const {
    data: space
  } = await useAsyncData('space', () => {
    return $directus.request($readItems('spaces', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })
</script>