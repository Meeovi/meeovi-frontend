<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel title="Outlets" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <div v-for="child in result?.categories?.items" :key="child.uid">
            <v-list v-for="child in child?.children" :key="child.uid" class="ml-4">
              <v-list-item :title="child.name" :value="child.name" :href="`/outlets/${child.uid}`">
              </v-list-item>
            </v-list>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import {
    useQuery
  } from '@vue/apollo-composable'
  import outlets from '~/graphql/commerce/queries/outlets.js'

  const {
    result
  } = useQuery(outlets)
</script>