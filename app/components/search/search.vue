<template>
  <form role="search" class="searchField" @submit.prevent="submitSearch">
    <v-text-field
      v-model="inputValue"
      type="search"
      class="sf-search-input"
      placeholder="Search"
      wrapper-class="sf-search-input-wrapper"
      variant="solo-inverted"
      append-inner-icon="fas fa-search"
    >
    </v-text-field>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'

const inputValue = ref('')
const config = useRuntimeConfig()

const indexes = computed(() => {
  const value = config.public.alternateSearchIndexes
  return Array.isArray(value) && value.length > 0 ? value : ['products']
})

const activeIndex = computed(() => indexes.value[0] || 'products')

const submitSearch = async () => {
  const normalized = inputValue.value.trim()
  await navigateTo({
    path: '/results',
    query: {
      ...(normalized ? { q: normalized } : {}),
      index: activeIndex.value,
      page: '1',
    },
  })
}
</script>

<style scoped>

</style>