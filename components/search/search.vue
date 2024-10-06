<template>
  <div class="searchField">
    <ais-instant-search class="mainSearch" :index-name="indexName" :search-client="searchClient">
      <ais-search-box placeholder="Search Meeovi" :queryHook="queryHook" @submit="submitSearch" />
    </ais-instant-search>
    <!--<v-text-field id="searchQuery" class="mainSearch" density="compact" variant="solo" label="Search Meeovi" append-inner-icon="fas fa-search" single-line hide-details v-model="searchQuery" @keyup.enter="submitSearch"></v-text-field>-->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

// Use environment variables for Algolia credentials
const searchClient = algoliasearch(
  config.public.appId,
  config.public.apiKey
);

const searchQuery = ref('');
const router = useRouter();
const indexName = config.public.indexName;

// Query hook to capture the input query
const queryHook = (query, refine) => {
  searchQuery.value = query;
  refine(query);
};

// Function to submit search on "Enter"
const submitSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/results',
      query: { q: searchQuery.value.trim() }
    });
  }
};
</script>