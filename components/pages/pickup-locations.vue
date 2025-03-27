<template>
  <div class="customerDashboard">
    <v-row>
      <v-toolbar :title="pickupBlocks?.content?.[0]?.name" color="transparent"></v-toolbar>

      <!-- Search and Filter Section -->
      <v-col cols="12" class="mb-4">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-text-field v-model="searchAddress" label="Search by address"
                  @keyup.enter="searchByAddress"></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-select v-model="selectedRadius" :items="radiusOptions" label="Search radius"></v-select>
              </v-col>
              <v-col cols="2">
                <v-btn color="primary" @click="searchByAddress">Search</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Locations List -->
      <v-col cols="4">
        <template v-if="locations.length">
          <v-card class="mx-auto mb-4" prepend-icon="$vuetify" :subtitle="pickupBlocks?.content?.[0]?.url_name"
            width="100%" v-for="location in locations" :key="location?.id" @click="selectLocation(location)">
            <template v-slot:title>
              <span class="font-weight-black">{{ location?.name }}</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
              <div>{{ pickupBlocks?.menus?.[0]?.name }} {{ location?.street }}</div>
              <div>{{ pickupBlocks?.menus?.[1]?.name }} {{ location?.city }}</div>
              <div>{{ pickupBlocks?.menus?.[2]?.name }} {{ location?.postcode }}</div>
              <div>{{ pickupBlocks?.menus?.[3]?.name }} {{ location?.phone }}</div>
              <div>{{ pickupBlocks?.menus?.[4]?.name }} {{ location?.email }}</div>
              <div>{{ pickupBlocks?.menus?.[5]?.name }} {{ location?.region }}</div>
              <div>{{ pickupBlocks?.menus?.[6]?.name }} {{ location?.description }}</div>
              <div v-if="location.distance">Distance: {{ formatDistance(location.distance) }}</div>
            </v-card-text>
          </v-card>
        </template>
        <template v-else>
          <v-card class="mx-auto mb-4" width="100%" elevation="0">
            <v-card-text class="text-center">
              <p class="text-h6" v-html="pickupBlocks?.content?.[0]?.content"></p>
            </v-card-text>
          </v-card>
        </template>
      </v-col>

      <!-- Map Section -->
      <v-col cols="8">
        <client-only>
          <Map style="height: 600px" :zoom="mapZoom" :center="mapCenter" :use-global-leaflet="false">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; 'https://www.openstreetmap.org'; contributors" layer-type="base"
              name="OpenStreetMap" />
            <template v-if="locations.length">
              <Marker v-for="location in locations" :key="location.id"
                :lat-lng="[location?.latitude, location?.longitude]" @click="selectLocation(location)">
                <Popup>{{ location?.name }}</Popup>
              </Marker>
            </template>
          </Map>
        </client-only>
      </v-col>

      <v-col cols="12">
        <latestproducts />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import {
    ref,
    computed,
    onMounted
  } from 'vue';
  import {
    getPickupLocations,
    searchPickupLocations,
    getPickupLocationsByDistance
  } from '~/composables/commerce/marketing/usePickupLocations';
  import latestproducts from '~/components/product/latestproducts.vue';

  // State
  const locations = ref([]);
  const selectedLocation = ref(null);
  const searchAddress = ref('');
  const selectedRadius = ref(25);
  const mapZoom = ref(12);
  const loading = ref(false);
  const error = ref(null);

  // Constants
  const radiusOptions = [{
      title: '10 miles',
      value: 10
    },
    {
      title: '25 miles',
      value: 25
    },
    {
      title: '50 miles',
      value: 50
    },
    {
      title: '100 miles',
      value: 100
    }
  ];

  // Computed
  const mapCenter = computed(() => {
    if (selectedLocation.value) {
      return [selectedLocation.value.latitude, selectedLocation.value.longitude];
    }
    if (locations.value.length) {
      return [locations.value[0].latitude, locations.value[0].longitude];
    }
    return [47.21322, -1.559482]; // Default center
  });

  // Methods
  const loadLocations = async () => {
    try {
      loading.value = true;
      const result = await getPickupLocations();
      locations.value = result.items || [];
    } catch (err) {
      error.value = err.message;
      console.error('Error loading locations:', err);
    } finally {
      loading.value = false;
    }
  };

  const searchByAddress = async () => {
    try {
      loading.value = true;
      error.value = null;

      // Get coordinates from address using browser's geolocation API
      const coordinates = await getCoordinatesFromAddress(searchAddress.value);

      const searchParams = {
        searchTerm: searchAddress.value,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        radius: selectedRadius.value
      };

      const result = await getPickupLocationsByDistance(searchParams);
      locations.value = result.items || [];

      if (locations.value.length) {
        mapZoom.value = 12;
        selectedLocation.value = locations.value[0];
      }
    } catch (err) {
      error.value = err.message;
      console.error('Error searching locations:', err);
    } finally {
      loading.value = false;
    }
  };

  const selectLocation = (location) => {
    selectedLocation.value = location;
    mapZoom.value = 15;
  };

  const formatDistance = (distance) => {
    return `${Math.round(distance * 10) / 10} miles`;
  };

  // Helper function to get coordinates from address
  const getCoordinatesFromAddress = async (address) => {
    try {
      // You might want to use a geocoding service here
      // For now, returning mock coordinates
      return {
        latitude: 47.21322,
        longitude: -1.559482
      };
    } catch (error) {
      console.error('Error getting coordinates:', error);
      throw new Error('Unable to get coordinates from address');
    }
  };

  // Directus setup
  const {
    $directus,
    $readItem
  } = useNuxtApp();

  const {
    data: pickupBlocks
  } = await useAsyncData('pickupBlocks', () => {
    return $directus.request($readItem('page_blocks', '10', {
      fields: ['*', 'media.directus_files_id.filename_disk', 'content.*'],
    }))
  });

  // Initial load
  onMounted(() => {
    loadLocations();
  });

  // Meta
  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Pickup Locations',
  });
</script>

<style scoped>
  .customerDashboard {
    padding: 20px;
  }
</style>