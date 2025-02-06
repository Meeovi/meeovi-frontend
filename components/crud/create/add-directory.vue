<template>
    <div>
      <!-- Loading Overlay -->
      <v-overlay v-model="isLoading" class="align-center justify-center">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
  
      <!-- Success/Error Notifications -->
      <v-snackbar
        v-model="notification.show"
        :color="notification.color"
        :timeout="3000"
      >
        {{ notification.message }}
        <template v-slot:actions>
          <v-btn
            color="white"
            variant="text"
            @click="notification.show = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
  
      <v-card>
        <v-card-title class="d-flex align-center">
          <h2>Directory Management</h2>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="refreshData"
            :loading="isRefreshing"
            :disabled="isLoading"
          >
            <v-icon>mdi-refresh</v-icon>
            Refresh
          </v-btn>
        </v-card-title>
  
        <v-tabs v-model="tab">
          <v-tab value="countries">
            <v-icon start>mdi-earth</v-icon>
            Countries
          </v-tab>
          <v-tab value="currency">
            <v-icon start>mdi-currency-usd</v-icon>
            Currency
          </v-tab>
        </v-tabs>
  
        <v-window v-model="tab">
          <v-window-item value="countries">
            <v-card-text>
              <!-- Search and Filter -->
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
                    label="Search Countries"
                    clearable
                    @update:modelValue="filterCountries"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    v-model="regionFilter"
                    :items="availableRegions"
                    label="Filter by Region"
                    clearable
                    @update:modelValue="filterCountries"
                  ></v-select>
                </v-col>
              </v-row>
  
              <v-data-table
                :headers="countryHeaders"
                :items="filteredCountries"
                :loading="isLoading"
                :search="search"
                :items-per-page="10"
                :items-per-page-options="[5, 10, 25, 50]"
                class="elevation-1"
              >
                <template v-slot:item.regions="{ item }">
                  <v-btn
                    small
                    color="primary"
                    @click="showRegions(item)"
                    :disabled="!item.regions?.length"
                  >
                    {{ item.regions?.length || 0 }} Regions
                  </v-btn>
                </template>
  
                <template v-slot:no-data>
                  <v-alert type="info" class="ma-2">
                    No countries available
                  </v-alert>
                </template>
  
                <template v-slot:loading>
                  <v-skeleton-loader
                    v-for="n in 5"
                    :key="n"
                    type="list-item-two-line"
                  ></v-skeleton-loader>
                </template>
              </v-data-table>
            </v-card-text>
          </v-window-item>
  
          <v-window-item value="currency">
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currencySearch"
                    prepend-inner-icon="mdi-magnify"
                    label="Search Currencies"
                    clearable
                  ></v-text-field>
                </v-col>
              </v-row>
  
              <v-list>
                <v-list-item
                  v-for="(rate, code) in filteredCurrencyRates"
                  :key="code"
                  :value="code"
                >
                  <v-list-item-title>{{ code }}</v-list-item-title>
                  <v-list-item-subtitle>
                    Rate: {{ formatCurrencyRate(rate) }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-window-item>
        </v-window>
      </v-card>
  
      <!-- Regions Dialog -->
      <v-dialog v-model="regionsDialog" max-width="600px">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>Regions for {{ selectedCountry?.full_name_english }}</span>
            <v-spacer></v-spacer>
            <v-btn icon @click="regionsDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
  
          <v-card-text>
            <v-data-table
              :headers="regionHeaders"
              :items="selectedCountry?.regions || []"
              :search="regionSearch"
            >
              <template v-slot:top>
                <v-text-field
                  v-model="regionSearch"
                  prepend-inner-icon="mdi-magnify"
                  label="Search Regions"
                  clearable
                  class="mx-4"
                ></v-text-field>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from 'vue';
  import { useDirectory } from '~/composables/commerce/sales/useDirectory';
  
  // State Management
  const tab = ref('countries');
  const search = ref('');
  const regionSearch = ref('');
  const currencySearch = ref('');
  const regionFilter = ref(null);
  const isLoading = ref(false);
  const isRefreshing = ref(false);
  const countries = ref([]);
  const currencyRates = ref({});
  const regionsDialog = ref(false);
  const selectedCountry = ref(null);
  
  // Notification System
  const notification = ref({
    show: false,
    message: '',
    color: 'success',
  });
  
  // Table Headers
  const countryHeaders = [
    { title: 'Country Code', key: 'id', sortable: true },
    { title: 'Name', key: 'full_name_english', sortable: true },
    { title: '2-Letter Code', key: 'two_letter_abbreviation', sortable: true },
    { title: '3-Letter Code', key: 'three_letter_abbreviation', sortable: true },
    { title: 'Regions', key: 'regions', sortable: false },
  ];
  
  const regionHeaders = [
    { title: 'Region Code', key: 'code', sortable: true },
    { title: 'Name', key: 'name', sortable: true },
  ];
  
  // Composable
  const { getCountries, getCurrencyInfo } = useDirectory();
  
  // Computed Properties
  const filteredCountries = computed(() => {
    let filtered = [...countries.value];
    
    if (search.value) {
      const searchLower = search.value.toLowerCase();
      filtered = filtered.filter(country => 
        country.full_name_english.toLowerCase().includes(searchLower) ||
        country.id.toLowerCase().includes(searchLower)
      );
    }
  
    if (regionFilter.value) {
      filtered = filtered.filter(country => 
        country.regions.some(region => region.code === regionFilter.value)
      );
    }
  
    return filtered;
  });
  
  const availableRegions = computed(() => {
    const regions = new Set();
    countries.value.forEach(country => {
      country.regions.forEach(region => regions.add(region.code));
    });
    return Array.from(regions).sort();
  });
  
  const filteredCurrencyRates = computed(() => {
    if (!currencySearch.value) return currencyRates.value;
    
    const searchLower = currencySearch.value.toLowerCase();
    return Object.entries(currencyRates.value)
      .filter(([code]) => code.toLowerCase().includes(searchLower))
      .reduce((acc, [code, rate]) => ({ ...acc, [code]: rate }), {});
  });
  
  // Methods
  const showNotification = (message, color = 'success') => {
    notification.value = {
      show: true,
      message,
      color,
    };
  };
  
  const fetchData = async () => {
    isLoading.value = true;
    try {
      const [countriesData, currencyData] = await Promise.all([
        getCountries(),
        getCurrencyInfo(),
      ]);
      
      countries.value = countriesData;
      currencyRates.value = currencyData.rates;
      
      showNotification('Data loaded successfully');
    } catch (error) {
      console.error('Error fetching directory data:', error);
      showNotification(
        'Failed to load directory data. Please try again.',
        'error'
      );
    } finally {
      isLoading.value = false;
    }
  };
  
  const refreshData = async () => {
    isRefreshing.value = true;
    await fetchData();
    isRefreshing.value = false;
  };
  
  const showRegions = (country) => {
    selectedCountry.value = country;
    regionsDialog.value = true;
  };
  
  const formatCurrencyRate = (rate) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    }).format(rate);
  };
  
  // Watchers
  watch([search, regionFilter], () => {
    // Add debounce if needed for performance
    filterCountries();
  });
  
  // Lifecycle
  onMounted(() => {
    fetchData();
  });
  
  // Error Boundary
  onErrorCaptured((err, component, info) => {
    console.error('Error captured in directory-manager:', err, info);
    showNotification('An unexpected error occurred', 'error');
    return false; // Prevent error from propagating
  });
  </script>
  
  <style scoped>
  .v-data-table {
    width: 100%;
  }
  
  .elevation-1 {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
  }
  </style>
  