<!-- components/search/SearchBar.vue -->
<template>
  <form role="search" class="searchField" @submit.prevent="submitSearch">
    <v-row no-gutters class="align-center fill-width search-input-group">
      <!-- 1. Dynamic Index Selector (Only shows if you have multiple indexes configured) -->
      <v-col v-if="indexes.length > 1" cols="auto" class="pe-1">
        <v-select
          v-model="activeIndex"
          :items="indexes"
          density="comfortable"
          variant="solo-inverted"
          hide-details
          class="index-selector"
          :disabled="pending"
        />
      </v-col>

      <!-- 2. Search Text Input -->
      <v-col>
        <v-text-field
          v-model="inputValue"
          type="search"
          class="sf-search-input"
          placeholder="Search items, categories, or brands..."
          wrapper-class="sf-search-input-wrapper"
          variant="solo-inverted"
          append-inner-icon="fas fa-search"
          hide-details
          clearable
          @click:append-inner="submitSearch"
        />
      </v-col>
    </v-row>
  </form>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

// 1. Resolve configured multi-indexes dynamically from runtime application configuration
const indexes = computed<string[]>(() => {
  const value = config.public.alternateSearchIndexes
  return Array.isArray(value) && value.length > 0 ? value : ['products']
})

// 2. Component internal state
const inputValue = ref(typeof route.query.q === 'string' ? route.query.q : '')
const activeIndex = ref(typeof route.query.index === 'string' ? route.query.index : indexes.value[0] || 'products')

// 3. Keep the search inputs reactively synchronized with URL state changes 
watch(
  () => route.query,
  (nextQuery) => {
    inputValue.value = typeof nextQuery.q === 'string' ? nextQuery.q : ''
    if (typeof nextQuery.index === 'string' && indexes.value.includes(nextQuery.index)) {
      activeIndex.value = nextQuery.index
    }
  },
  { deep: true }
)

// 4. Multi-index execution submission handling
const submitSearch = async () => {
  const normalized = inputValue.value.trim()
  
  // Strip old query filters on explicit execution to prevent cross-index data pollutions
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
.search-input-group {
  max-width: 720px;
  margin: 0 auto;
}

.index-selector {
  width: 130px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

:deep(.index-selector .v-field) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

:deep(.sf-search-input .v-field) {
  /* Soft connection edge styling if dropdown selector precedes input fields */
  border-top-left-radius: v-bind("indexes.length > 1 ? '0' : 'inherit'");
  border-bottom-left-radius: v-bind("indexes.length > 1 ? '0' : 'inherit'");
}
</style>