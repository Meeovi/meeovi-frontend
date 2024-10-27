<template>
  <div>
    <v-sheet class="mx-auto row align-items-stretch items-row">
      <h4>Related Spaces</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(result, index) in result?.groups?.nodes" :key="index">
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
    import {groups} from '~/graphql/cms/queries/groups'
    //import { getGroups } from '~/composables/cms/social/getGroups.js'; // Import the composable function
  

    const tab = ref(null);
    const model = ref(null);
   /* const groups = ref([]); 

    onMounted(async () => {
        groups.value = await getGroups();
    }); */

    const {
    result
  } = useQuery(groups, null, {
    context: {
      clientName: 'secondary' // This will use the secondary endpoint
    }
  })
</script>