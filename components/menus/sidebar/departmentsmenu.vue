<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel :title="blocksDepartment?.content?.[0]?.name" expand-icon="fas fa-plus"
        collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <div>
            <v-list v-for="category in categories" :key="category.id" class="ml-4">
              <v-list-item :title="category.name" :value="category.id"
                :href="`${blocksDepartment?.content?.[0]?.url}${category.id}`">
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
    useCategories
  } from '@/composables/commerce/categories/useCategories';

  const { categories, loading, error } = useCategories();

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