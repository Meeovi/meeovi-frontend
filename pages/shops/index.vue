<template>
  <div class="contentPage">
    <v-toolbar title="Shops" color="transparent"></v-toolbar>
    <v-row style="padding-top: 10px; padding-bottom: 10px;">
      <v-col cols="3" v-for="(shops, index) in shops" :key="index">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="200" :src="`${shops?.gravatar}`" :alt="shops?.store_name" cover />

          <v-card-title>@{{ shops?.store_name }}</v-card-title>

          <v-card-subtitle class="pt-4">
            <div class="text-center">
              <v-rating :rating="shops?.rating" readonly></v-rating>
            </div>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text="Enter" :href="`/shops/${shops.id}`"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import followButton from '../../components/social/followButton.vue'

  export default {
    components: {
      followButton
    },
    data: () => ({
      url: process.env.DIRECTUS_URL,
    })
  }
</script>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import {
    getShops
  } from '~/composables/read/getShops';

  const shops = ref([]);

  onMounted(async () => {
    shops.value = await getShops();
  });

  useHead({
    title: 'Shops',
  })
</script>