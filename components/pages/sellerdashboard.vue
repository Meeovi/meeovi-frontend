<template>
    <div class="resultsPage">
      <v-card elevation="0" style="min-height: 100% !important;">
        <v-layout>
          <v-app-bar color="transparent" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
              Seller Dashboard
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>
  
          <!-- Sidebar with Filters -->
          <v-navigation-drawer v-model="drawer" app temporary right class="filtersPanel">
            <sellerbar />
          </v-navigation-drawer>

        </v-layout>
      </v-card>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import sellerbar from '~/components/menus/sellerbar.vue'
  import { useRuntimeConfig } from '#imports';
  
  const config = useRuntimeConfig();
  
  const tab = ref(null);
  const drawer = ref(null);
  const route = useRoute();
  
    definePageMeta({
      layout: 'nolive',
    });
  
    useHead({
      title: 'Seller Dashboard'
    })
  </script>