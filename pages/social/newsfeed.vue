<template>
  <div class="contentPage">
    <!--<profilebar />-->

    <v-card elevation="0" style="min-height: 100vh !important;">
      <v-layout>
        <v-app-bar color="transparent" prominent>
          <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> Filters-->

          <v-spacer></v-spacer>
          <v-toolbar title="Social Feed" color="transparent" elevation="0">
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
          <v-tabs class="searchSection" center-active v-model="tab" bg-color="transparent">
            <v-tab value="one">All Posts</v-tab>
            <!--<v-tab value="two">Facebook</v-tab>
            <v-tab value="three">Twitter</v-tab>-->
            
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <v-row>
                  <v-col cols="4" v-if="result?.blogPosts?.items && result?.blogPosts?.items.length"
                    v-for="(activity, index) in result.blogPosts?.items" :key="index">
                    <div style="padding-top: 10px;">
                      <activity :activity="activity" />
                    </div>
                  </v-col>
                </v-row>
              </v-tabs-window-item>

              <!--<v-tabs-window-item value="two">
                <v-row>
                  <v-col cols="4" v-if="result?.blogPosts?.items && result?.blogPosts?.items.length"
                    v-for="(activity, index) in result.members.nodes" :key="index">
                    <div style="padding-top: 10px;" v-for="(activities, index) in activity?.activities?.nodes"
                      :key="index">
                      <activity :activity="activities" />
                    </div>
                  </v-col>
                </v-row>
              </v-tabs-window-item>

              <v-tabs-window-item value="three">
                <v-row>
                  <v-col cols="4" v-if="result?.blogPosts?.items && result?.blogPosts?.items.length"
                    v-for="(activity, index) in result.members.nodes" :key="index">
                    <div style="padding-top: 10px;" v-for="(activities, index) in activity?.activities?.nodes"
                      :key="index">
                      <activity :activity="activities" />
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
    onMounted
  } from 'vue';
  import {
    useQuery
  } from '@vue/apollo-composable'
  //import profilebar from '~/components/menus/profilebar.vue';
  import activity from '~/components/cms/related/posts.vue'
  import notes from '~/graphql/commerce/queries/notes'
  //import { getActivity } from '~/composables/cms/social/getActivity'; // Import the composable

  const tab = ref(null);
  const {
    result
  } = useQuery(notes)
  /*const activities = ref([]); 

  onMounted(async () => {
    activities.value = await getActivity(); 
  });
*/

  const addLike = () => {
    /* Implement like functionality */
  };
  const addBookmark = () => {
    /* Implement bookmark functionality */
  };

  useHead({
    title: 'Social Feed',
  });

  definePageMeta({
    //middleware: ['auth-logged-in'],
  });
</script>