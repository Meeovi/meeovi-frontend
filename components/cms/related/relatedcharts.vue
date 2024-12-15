<template>
  <div>
    <v-sheet class="mx-auto row align-items-stretch items-row">
      <v-toolbar title="Charts within the community" color="transparent">
        <v-toolbar-subtitle><NuxtLink to="/departments/categories/charts/">All Charts</NuxtLink></v-toolbar-subtitle>
      </v-toolbar>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(result, index) in chart" :key="index">
          <charts style="margin: 10px;" :chart="result" />
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
    import charts from '~/components/cms/related/musicchart.vue'
    import createchart from '~/components/crud/create/add-chart.vue'
    //import {groups} from '~/graphql/cms/queries/groups'
    //import { getGroups } from '~/composables/cms/social/getGroups.js'; // Import the composable function
  

    const tab = ref(null);
    const model = ref(null);
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: chart
    } = await useAsyncData('chart', () => {
        return $directus.request($readItems('musicchart', {
            fields: ['*', { '*': ['*'] }]
        }))
    })
</script>