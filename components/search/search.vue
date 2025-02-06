<template>
  <div class="searchField">
    <ais-instant-search class="mainSearch" :index-name="indexName" :search-client="searchClient">
      <ais-search-box placeholder="Search Meeovi" :queryHook="queryHook" @submit="submitSearch" />
    </ais-instant-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

const router = useRouter()
const searchQuery = ref('');
const indexName = config.public.indexName;

// Initialize MeiliSearch client
const searchClient = instantMeiliSearch(
  `${config.public.meilisearch.host}`, // Replace with your MeiliSearch host
  `${config.public.meilisearch.searchApiKey}` // Replace with your MeiliSearch API key
)

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
