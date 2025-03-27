<template>
  <div class="resultsPage">
    <v-card elevation="0" style="min-height: 100% !important;">
      <v-layout>
        <MeiliSearchProvider :index-name="indexName">
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
            <MeiliSearchFacetFilter attribute="category" initial-sort-by="name" class="mb-5" />
            <MeiliSearchFacetFilter attribute="brand" initial-sort-by="count" class="mb-5" />
            <MeiliSearchRangeFilter attribute="price" class="mb-5" />
            <MeiliSearchRatingFilter attribute="rating_rounded" label="Rating" />
            <!--<FilterComponent :filters="filterData" @applyFilters="handleApplyFilters" />-->
          </v-navigation-drawer>

          <!-- Main Content with Search Results -->
          <v-main>
            <v-tabs class="searchSection" center-active v-model="tab" bg-color="transparent">
              <v-tab value="one">All Results</v-tab>
              <v-tab v-for="(menu, index) in searchbar?.menus" :key="index">
                <NuxtLink :to="menu?.url">{{ menu?.name }}</NuxtLink>
              </v-tab>
            </v-tabs>

            <v-card-text>
              <v-tabs-window v-model="tab">
                <!--All Results -->
                <v-tabs-window-item value="one">
                  <div class="mb-5 results-meta">
                    <MeiliSearchStats />
                    <MeiliSearchSorting :options="sortingOptions" />
                  </div>
                  <MeiliSearchLoadingProvider v-slot="{ isSearchStalled }" class="mb-5">
                    <div v-show="isSearchStalled" style="height: 80vh; display: flex; flex-direction: column;">
                      <LoadingIndicator class="m-auto" />
                    </div>
                    <MeiliSearchResults v-show="!isSearchStalled" />
                  </MeiliSearchLoadingProvider>
                </v-tabs-window-item>

                <!--Video Results -->
                <v-tabs-window-item value="two">
                  <videoSearch />
                </v-tabs-window-item>

                <!--News Results -->
                <v-tabs-window-item value="three">
                  <newsSearch />
                </v-tabs-window-item>

                <!--Images Results -->
                <v-tabs-window-item value="four">
                  <imageSearch />
                </v-tabs-window-item>

                <!--Music Results -->
                <v-tabs-window-item value="five">
                  <musicSearch />
                </v-tabs-window-item>

                <!--Spaces Results -->
                <v-tabs-window-item value="six">
                  <spaceSearch />
                </v-tabs-window-item>

                <!--Books Results -->
                <v-tabs-window-item value="seven">
                  <booksSearch />
                </v-tabs-window-item>

                <!--Travel Results -->
                <v-tabs-window-item value="eight">
                  <travelSearch />
                </v-tabs-window-item>

                <!--Finance Results -->
                <v-tabs-window-item value="nine">
                  <financeSearch />
                </v-tabs-window-item>
              </v-tabs-window>
            </v-card-text>
          </v-main>
        </MeiliSearchProvider>
      </v-layout>
    </v-card>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted,
    watch
  } from 'vue';
  import {
    useRoute
  } from 'vue-router';
  import FilterComponent from '~/components/search/filters.vue';
  import productCard from '~/components/product/productCard.vue';
  import videoSearch from '~/components/search/results/videoSearch.vue'
  import imageSearch from '~/components/search/results/imageSearch.vue'
  import musicSearch from '~/components/search/results/musicSearch.vue'
  import spaceSearch from '~/components/search/results/spaceSearch.vue'
  import travelSearch from '~/components/search/results/travelSearch.vue'
  import newsSearch from '~/components/search/results/newsSearch.vue'
  import financeSearch from '~/components/search/results/financeSearch.vue'
  import booksSearch from '~/components/search/results/booksSearch.vue'

  import {
    instantMeiliSearch
  } from "@meilisearch/instant-meilisearch";
  import "instantsearch.css/themes/satellite-min.css";

  import {
    useRuntimeConfig
  } from '#imports';

  const config = useRuntimeConfig();
  // Initialize MeiliSearch client
  const searchClient = instantMeiliSearch(
    `${config.public.meilisearch.host}`, // Replace with your MeiliSearch host
    `${config.public.meilisearch.searchApiKey}` // Replace with your MeiliSearch API key
  )

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

  const appConfig = useAppConfig()

  const indexName = appConfig.ecommerce.indexName

  const sortingOptions = [{
      value: `${indexName}`,
      label: 'Featured'
    },
    {
      value: `${indexName}:price:asc`,
      label: 'Price: Low to High'
    },
    {
      value: `${indexName}:price:desc`,
      label: 'Price: High to Low'
    },
    {
      value: `${indexName}:rating:desc`,
      label: 'Rating: High to Low'
    }
  ]

  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: searchbar
  } = await useAsyncData('searchbar', () => {
    return $directus.request($readItem('navigation', '27'))
  })

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Search Results'
  })
</script>