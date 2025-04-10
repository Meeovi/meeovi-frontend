<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <v-list v-for="child in departments" :key="child.id" class="ml-4">
            <v-list-item :title="child.name" :value="child.name" :href="`/departments/${child.id}`">
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
  const {
    $directus,
    $readItems
  } = useNuxtApp()
  
  const {
    data: departments
  } = await useAsyncData('departments', () => {
    return $directus.request($readItems('departments', {
      filter: {
        active: {
          _eq: 'active'
        }
      },
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })
</script>