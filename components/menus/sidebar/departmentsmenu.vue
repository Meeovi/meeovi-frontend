<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel :title="blocksDepartment?.content?.[0]?.name" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <div v-for="child in result?.categories?.items" :key="child.uid">
            <v-list v-for="child in child?.children" :key="child.uid" class="ml-4">
              <v-list-item :title="child.name" :value="child.name" :href="`${blocksDepartment?.content?.[0]?.url}${child.uid}`">
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
  import categories from '~/graphql/commerce/queries/categories.js'

  const {
    result
  } = useQuery(categories)

  const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksDepartment
    } = await useAsyncData('blocksDepartment', () => {
        return $directus.request($readItem('page_blocks', '7', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>