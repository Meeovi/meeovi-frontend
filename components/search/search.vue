<template>
  <div>
    <!--<ais-search-box>
    <template #default="{ refine, currentRefinement, isSearchStalled }">
      <input
        :value="currentRefinement"
        @input="event => refine(event.currentTarget.value)"
        placeholder="Search Meeovi"
      />
      <button @click="() => refine('')">Clear</button>
      <span v-if="isSearchStalled">Searching...</span>
    </template>
  </ais-search-box>-->
    <v-text-field id="mainSearch" density="compact" variant="solo" label="Search Meeovi" append-inner-icon="fas fa-search" single-line
        hide-details @input="fetchSearchResults"></v-text-field>
  </div>
</template>

<script lang="ts" setup>
const { result, search } = useAlgoliaSearch("headless_commerce");
const hits = ref([]);
const fetchSearchResults = async (e) => {
  await search({ query: e.target.value });
  hits.value = result.value.hits;
};
</script>