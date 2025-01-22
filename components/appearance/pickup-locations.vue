<template>
  <div class="customerDashboard">
    <v-row>
      <v-toolbar title="Pickup Locations" color="orange"></v-toolbar>
      <v-col cols="4">
        <template v-if="result?.pickupLocations?.items?.length">
          <v-card class="mx-auto mb-4" prepend-icon="$vuetify" subtitle="Meeovi" width="100%"
            v-for="location in result?.pickupLocations?.items" :key="location?.id" @click="selectLocation(location)">
            <template v-slot:title>
              <span class="font-weight-black">{{ location?.name }}</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
              <div>Street: {{ location?.street }}</div>
              <div>City: {{ location?.city }}</div>
              <div>Postcode: {{ location?.postcode }}</div>
              <div>Phone: {{ location?.phone }}</div>
              <div>Email: {{ location?.email }}</div>
              <div>Region: {{ location?.region }}</div>
              <div>Description: {{ location?.description }}</div>
            </v-card-text>
          </v-card>
        </template>
        <template v-else>
          <v-card class="mx-auto mb-4" width="100%">
            <v-card-text class="text-center">
              <p class="text-h6">No locations available</p>
            </v-card-text>
          </v-card>
        </template>
      </v-col>

      <v-col cols="8">
        <client-only>
          <Map style="height: 600px" :zoom="12" :center="mapCenter" :use-global-leaflet="false">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; 'https://www.openstreetmap.org'; contributors" layer-type="base"
              name="OpenStreetMap" />
            <template v-if="result?.pickupLocations?.items?.length">
              <Marker v-for="location in result?.pickupLocations?.items" :key="location.id"
                :lat-lng="[location?.latitude, location?.longitude]">
                <Popup>{{ location?.name }}</Popup>
              </Marker>
            </template>
          </Map>
        </client-only>
      </v-col>
    </v-row>
  </div>
</template>


<script setup>
  import {
    ref,
    computed
  } from 'vue';
  import StoreInPickUpQuery from '~/query/StoreInPickUp.query';
  import {
    useApolloClient
  } from '@vue/apollo-composable';

  // Apollo Client for GraphQL
  const {
    resolveClient
  } = useApolloClient();
  const apolloClient = resolveClient();

  // Reactive state for pickup locations
  const pickup_locations = ref([]);
  const selectedLocation = ref(null);

  // Fetch Pickup Locations
  async function fetchPickupLocations() {
    try {
      const country = 'US'; // Example: Adjust as per your requirement
      const search = ''; // Optional search term
      const productsInfo = []; // Optional product info if needed

      const query = StoreInPickUpQuery.getStores(country, search, productsInfo);

      const response = await apolloClient.query({
        query: query.getGQL(), // Convert the query to a GraphQL query
        variables: query.getVariables(), // Add variables if any
      });

      pickup_locations.value = response.data.getStores.stores;
    } catch (error) {
      console.error('Failed to fetch pickup locations:', error);
    }
  }

  // Fetch locations on component mount
  fetchPickupLocations();

  // Handle location selection
  const selectLocation = (location) => {
    selectedLocation.value = location;
  };

  // Center map based on the selected location
  const mapCenter = computed(() => {
    if (selectedLocation.value) {
      return [selectedLocation.value.latitude, selectedLocation.value.longitude];
    }
    if (pickup_locations.value?.length) {
      const firstLocation = pickup_locations.value[0];
      return [firstLocation.latitude, firstLocation.longitude];
    }
    return [47.21322, -1.559482]; // Default center
  });

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Pickup Locations',
  });
</script>