<template>
    <div class="contentPage">
        <!--<profilebar />-->
        <v-row class="centralfeed">
            <v-col cols="10">
                <v-row>
                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <v-row>
                                <v-col cols="10">
                                    <v-list lines="two">
                                        <v-list-item :title="result?.activity?.creator?.username"
                                            :prepend-avatar="result?.activity?.creator?.avatar?.url">
                                        </v-list-item>
                                    </v-list>
                                </v-col>

                                <v-col cols="1">
                                    <v-dialog min-width="500">
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn v-bind="activatorProps" icon="fas fa-gear" title="Update Post"
                                                class="rightAddBtn" variant="flat"></v-btn>
                                        </template>

                                        <template v-slot:default="{ isActive }">
                                            <updatepost :id="activityId" />
                                        </template>
                                    </v-dialog>
                                </v-col>
                            </v-row>


                            <v-card-text class="pt-4" v-html="result?.activity?.content"></v-card-text>

                            <v-card-subtitle class="pt-4">
                                Posted: {{ new Date(result?.activity?.date).toLocaleDateString() }}
                            </v-card-subtitle>

                            <v-card-text class="pt-4" v-html="result?.activity?.status"></v-card-text>

                            <v-row class="align-center">
                                <v-col>
                                    <reactions />
                                </v-col>
                                <v-col>
                                    <repost />
                                </v-col>
                                <v-col>
                                    <bookmark />
                                </v-col>
                                <v-col>
                                    <share />
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col cols="12">
                        <disqus />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        result() {
            return {
                activityId: this.$route.params.id,
                //url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useQuery
    } from '@vue/apollo-composable'
    //import profilebar from '~/components/menus/profilebar.vue'
    import disqus from '~/components/partials/disqus.vue'
    //import comments from '~/components/cms/social/comments.vue'
    import repost from '~/components/cms/social/repost.vue'
    import reactions from '~/components/cms/social/reactions.vue'
    import bookmark from '~/components/cms/social/bookmark.vue'
    import share from '~/components/partials/share.vue'
    import updatepost from '~/components/cms/update/social/updatepost.vue'
    //import { getActivityById } from '~/composables/cms/social/getActivity';
    import activity from '~/graphql/cms/queries/id/activity'

    const model = ref(null);
    const route = useRoute();
    const {
        result,
        loading,
        error
    } = useQuery(activity, {
        id: route.params.id // Pass variables inside the 'variables' object
    }, {
        context: {
            clientName: 'secondary' // This will use the secondary endpoint
        }
    });

    /* const activity = ref(null);

     onMounted(async () => {
         const id = route.params.id;
         try {
             activity.value = await getActivityById(id);
             console.log(activity.value);  // Check the fetched result in the console
         } catch (error) {
             console.error("Failed to fetch activity result:", error);
         }
     });*/


    /*   const {
           getItemById
         } = useDirectusItems()

         const newsfeed = await getItemById({
           collection: "newsfeed",
           id: route.params.id
         });*/

    useHead({
        title: result?.activity?.title,
    })

    definePageMeta({
        //middleware: ['auth-logged-in'],
    })
</script>