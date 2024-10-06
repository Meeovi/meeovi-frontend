<template>
  <div class="filters">
    <v-btn @click="applyFilters" color="info" class="mt-4">Apply Filters</v-btn>
    <template v-for="(facetValues, facetName) in filters" :key="facetName">
      <h3>{{ formatFacetName(facetName) }}</h3>
      <ul>
        <li v-for="(count, value) in facetValues" :key="value">
          <v-checkbox
            :label="`${value} (${count})`"
            :value="value"
            v-model="selectedFilters[facetName]"
          />
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps(['filters']);
const emit = defineEmits(['applyFilters']);

const selectedFilters = ref({});

watch(() => props.filters, (newFilters) => {
  // Initialize selectedFilters with empty arrays for each facet
  selectedFilters.value = Object.keys(newFilters).reduce((acc, facet) => {
    acc[facet] = [];
    return acc;
  }, {});
}, { immediate: true });

const formatFacetName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const applyFilters = () => {
  emit('applyFilters', selectedFilters.value);
};
</script>
