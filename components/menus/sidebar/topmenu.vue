<template>
  <div v-for="item in result?.menus?.nodes" :key="item">
    <h5 class="menuh5">{{ item?.name }}</h5>
    <v-list v-for="item in item?.menuItems?.nodes" :key="item">
      <v-list-item :title="item?.label" :value="item?.label" :prepend-icon="item?.icon" :href="item?.path"></v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import topmenu from '~/graphql/cms/queries/menus/topmenu'

const { result } = useQuery(topmenu, null, {
  context: {
    clientName: 'secondary' // This will use the secondary endpoint
  }
})
</script>