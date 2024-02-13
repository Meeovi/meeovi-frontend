<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="4">
                <v-list lines="one">
                    <v-list-item v-for="(location, index) in data?.pickupLocations?.items" :key="index">
                        <v-list-item-title>{{ location?.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ location?.phone }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ location?.street }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ location?.city }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ location?.postcode }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ location?.country_id }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ location?.region }}</v-list-item-subtitle>
                    </v-list-item>
                </v-list>
            </v-col>

            <v-col cols="8">
                <div style="height:100vh; width:100vw" v-for="location in data?.pickupLocations?.items" :key="location">
                    <LMap ref="map" :zoom="zoom" :center="[location?.longitude, location?.latitude]">
                        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                            layer-type="base" name="OpenStreetMap" />
                    </LMap>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    import {
        ref
    } from 'vue'
    const zoom = ref(6)

    const query = gql `
query MyQuery {
  pickupLocations {
    items {
      city
      contact_name
      country_id
      description
      email
      fax
      latitude
      longitude
      name
      phone
      pickup_location_code
      postcode
      region
      region_id
      street
    }
  }
}
`


    const {
        data
    } = useAsyncQuery(query);
    useHead({
        title: 'Pickup Locations'
    })
</script>