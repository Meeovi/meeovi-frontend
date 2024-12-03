<template>
  <div class="contentPage">
    <!--<profilebar />-->

    <v-card elevation="0" style="min-height: 100vh !important;">
      <v-layout>
        <v-app-bar color="transparent" prominent>
          <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> Filters-->

          <v-spacer></v-spacer>
          <v-toolbar :title="feedbar?.name" color="transparent" elevation="0">
          <!--  <v-dialog min-width="500">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create a Post" variant="flat">
                  Create a Post
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <createpost />
              </template>
            </v-dialog>-->
          </v-toolbar>

          <v-spacer></v-spacer>
        </v-app-bar>


        <!--<v-navigation-drawer class="filtersPanel" v-model="drawer"
                    :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
                    <filters />
                </v-navigation-drawer>-->

        <v-main>
          <v-tabs v-model="tab" bg-color="primary">
                <div v-for="(menu, index) in feedbar?.menus" :key="index">
                    <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
                </div>
            </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <v-row>
                  <v-col cols="4" v-for="(posts, index) in posts" :key="index" style="margin: 8px;">
                    <post :post="posts" />
                  </v-col>
                </v-row>
              </v-tabs-window-item>

              <!--<v-tabs-window-item value="two">
                <v-row>
                  <v-col cols="4" v-if="posts && posts.length"
                    v-for="(posts, index) in result.members.nodes" :key="index">
                    <div style="padding-top: 10px;" v-for="(activities, index) in posts?.activities?.nodes"
                      :key="index">
                      <posts :posts="activities" />
                    </div>
                  </v-col>
                </v-row>
              </v-tabs-window-item>

              <v-tabs-window-item value="three">
                <v-row>
                  <v-col cols="4" v-if="posts && posts.length"
                    v-for="(posts, index) in result.members.nodes" :key="index">
                    <div style="padding-top: 10px;" v-for="(activities, index) in posts?.activities?.nodes"
                      :key="index">
                      <posts :posts="activities" />
                    </div>
                  </v-col>
                </v-row>
              </v-tabs-window-item>-->
            </v-tabs-window>
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<script setup>
  import {
    ref,
  } from 'vue';
  import post from '~/components/cms/related/posts.vue'

  const tab = ref(null);
  const {
        $directus,
        $readItems
    } = useNuxtApp()
    
  const {
        data: posts
    } = await useAsyncData('posts', () => {
        return $directus.request($readItems('posts', {
            fields: ['*', { '*': ['*'] }]
        }))
    })

    const {
        data: feedbar
    } = await useAsyncData('feedbar', () => {
        return $directus.request($readItem('navigation', '32'))
    })

  useHead({
    title: 'Social Feed',
  });

  definePageMeta({
        middleware: ['authenticated'],
    })
</script>