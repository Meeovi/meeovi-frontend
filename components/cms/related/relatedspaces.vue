<template>
  <div>
    <v-sheet class="mx-auto row align-items-stretch items-row">
      <v-toolbar title="Spaces within the community" color="transparent" style="position: relative; left: -20px;">
        <div><NuxtLink to="/social/spaces/">All Spaces</NuxtLink></div>
      </v-toolbar>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(result, index) in space" :key="index">
          <spaces style="margin: 10px;" :space="result" />
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
    import spaces from '~/components/cms/related/spaces.vue'
    import createspace from '~/components/crud/create/add-space.vue'
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
            fields: ['*', { '*': ['*'] }]
        }))
    })
</script>