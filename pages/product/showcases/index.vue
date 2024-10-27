<template>
  <div class="contentPage">
    <!--<profilebar />-->
    <v-toolbar title="Showcases" color="purple">
      <v-dialog min-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create Showcase" variant="text">Create Showcase
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <createshowcase />
        </template>
      </v-dialog>
    </v-toolbar>

    <v-row style="padding-top: 10px;">
      <v-col cols="4" v-for="showcase in result?.products?.items" :key="showcases">
        <a :href="`/product/showcase/${showcase?.uid}`">
          <v-card class="mx-auto" max-width="500" :title="showcase?.name">
            <productCard :product="showcase" />
          </v-card>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import {
    useQuery
  } from '@vue/apollo-composable'
  import profilebar from '~/components/menus/profilebar.vue'
  import createshowcase from '~/components/crud/create/add-showcase.vue'
  import productCard from '~/components/commerce/commerce/product/productCard.vue'
  import bookmark from '~/components/cms/social/bookmark.vue'
  import showcases from '~/graphql/commerce/queries/showcases'

  const {
    result
  } = useQuery(showcases);

  useHead({
    title: 'Showcases',
  })
</script>