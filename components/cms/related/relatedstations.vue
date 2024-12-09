<template>
  <div>
    <v-sheet class="mx-auto row align-items-stretch items-row">
      <v-toolbar title="Radio Stations within the community" color="transparent">
        <v-toolbar-subtitle><a href="/departments/categories/stations/">All Radio Stations</a></v-toolbar-subtitle>
      </v-toolbar>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(result, index) in station" :key="index">
          <stations style="margin: 10px;" :radio="result" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup>
    import {
        ref,
    } from 'vue';
    import {
    useQuery
  } from '@vue/apollo-composable'
    import stations from '~/components/cms/related/stations.vue'
    import createstation from '~/components/crud/create/add-station.vue'
    //import {groups} from '~/graphql/cms/queries/groups'
    //import { getGroups } from '~/composables/cms/social/getGroups.js'; // Import the composable function
  

    const tab = ref(null);
    const model = ref(null);
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: station
    } = await useAsyncData('station', () => {
        return $directus.request($readItems('radios', {
            fields: ['*', { '*': ['*'] }]
        }))
    })
</script>