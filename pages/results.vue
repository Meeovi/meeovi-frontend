<template>
  <div class="resultsPage">
    <v-card elevation="0" style="min-height: 100% !important;">
      <v-layout>
        <v-app-bar color="transparent" prominent>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          Filters
          <v-spacer></v-spacer>
          <v-toolbar-title style="text-align: center;">
            Search Results for "{{ searchQuery }}"
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>

        <!-- Sidebar with Filters -->
        <v-navigation-drawer v-model="drawer" app temporary right class="filtersPanel">
          <FilterComponent :filters="filterData" @applyFilters="handleApplyFilters" />
        </v-navigation-drawer>

        <!-- Main Content with Search Results -->
        <v-main>
          <v-tabs class="searchSection" center-active v-model="tab" bg-color="transparent">
            <v-tab value="one">Results</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <div v-if="results.length">
                  <v-row>
                    <v-col v-for="(result, index) in results" :key="index">
                      <productCard :product="result" />
                    </v-col>
                  </v-row>
                </div>

                <p v-else>No results found.</p>

                <v-pagination v-model="currentPage" :length="totalPages" :total-visible="5"
                  @update:modelValue="fetchSearchResults"></v-pagination>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import FilterComponent from '~/components/search/filters.vue';
import productCard from '~/components/commerce/commerce/product/productCard.vue';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();
const searchClient = algoliasearch(config.public.appId, config.public.apiKey);

const tab = ref(null);
const drawer = ref(null);
const route = useRoute();
const results = ref([]);
const searchQuery = ref('');
const currentPage = ref(1);
const totalPages = ref(1);
const pageSize = ref(10);
const filterData = ref({});
const appliedFilters = ref({});

const fetchSearchResults = async () => {
  if (route.query.q) {
    searchQuery.value = route.query.q;
    try {
      const facetFilters = Object.entries(appliedFilters.value).map(([facet, values]) => 
        values.map(value => `${facet}:${value}`)
      ).flat();

      const response = await searchClient.search([
        {
          indexName: config.public.indexName,
          query: searchQuery.value,
          page: currentPage.value - 1,
          hitsPerPage: pageSize.value,
          facets: ['categories'], // Adjust this based on your filterable attributes
          facetFilters: facetFilters,
        },
      ]);
      
      if (response.results && response.results[0]) {
        results.value = response.results[0].hits;
        totalPages.value = response.results[0].nbPages;
        currentPage.value = response.results[0].page + 1;
        updateFilters(response.results[0].facets);
      } else {
        results.value = [];
        totalPages.value = 0;
        currentPage.value = 1;
        updateFilters({});
      }
    } catch (err) {
      console.error('Search error:', err);
    }
  }
};

const updateFilters = (facets) => {
  filterData.value = { ...facets };
};

const handleApplyFilters = (filters) => {
  appliedFilters.value = filters;
  fetchSearchResults();
};

onMounted(fetchSearchResults);
watch(() => route.query.q, fetchSearchResults);

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Search Results'
  })
</script>