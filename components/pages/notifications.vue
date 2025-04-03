<template>
  <div class="contentPage">
    <v-toolbar color="transparent" title="Notification Center"></v-toolbar>  
    <v-table>
      <thead>
          <tr>
              <th class="text-left">
                  Name
              </th>
              <th class="text-left">
                  Notification Date
              </th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="notifications in activities" :key="notifications?.id">
              <td v-html="notifications?.title"></td>
              <td>{{ new Date(notifications?.date).toLocaleDateString() }}</td>
          </tr>
      </tbody>
  </v-table>
  </div>
</template>

<script setup>
import { getActivity } from '~/composables/cms/social/getActivity'; // Import the composable

const activities = ref([]); // Reactive variable to store activity data

onMounted(async () => {
  activities.value = await getActivity(); // Fetch activity data on component mount
});
</script>