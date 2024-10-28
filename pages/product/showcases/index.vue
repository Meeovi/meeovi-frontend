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
      <div v-for="showcase in result?.cmsBlocks?.items" :key="showcase">
        <div v-html="showcase?.content"></div>
        <!--<a :href="`/product/showcase/${showcase?.uid}`">
          <v-card class="mx-auto" max-width="500" :title="showcase?.name">
            <productCard :product="showcase" />
          </v-card>
        </a>-->
      </div>
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
  import showcaseBlock from '~/graphql/commerce/queries/blocks/showcase'

  const {
    result
  } = useQuery(showcaseBlock);

  useHead({
    title: 'Showcases',
  })
</script>