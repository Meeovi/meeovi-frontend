<template>
    <div class="contentPage">
        <profilebar /><!---->
        <v-row class="centralfeed">
            <v-col cols="10">
                <v-row>
                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <v-row>
                                <v-col cols="10">
                                    <v-list lines="two">
                                        <v-list-item :title="data?.activity?.creator?.username" :prepend-avatar="data?.activity?.creator?.avatar?.url">
                                        </v-list-item>
                                    </v-list>
                                </v-col>

                                <v-col cols="1">
                                    <v-dialog min-width="500">
                                        <template v-slot:activator="{ props: activatorProps }">
                                            <v-btn v-bind="activatorProps" icon="fas fa-gear" title="Update Post" class="rightAddBtn" variant="flat"></v-btn>
                                        </template>

                                        <template v-slot:default="{ isActive }">
                                            <updatepost :id="activityId" />
                                        </template>
                                    </v-dialog>
                                </v-col>
                            </v-row>


                            <v-card-text class="pt-4" v-html="data?.activity?.content"></v-card-text>

                            <v-card-subtitle class="pt-4">
                                Posted: {{ new Date(data?.activity?.date).toLocaleDateString() }}
                            </v-card-subtitle>

                            <v-card-text class="pt-4" v-html="data?.activity?.status"></v-card-text>

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
        data() {
            return {
                activityId: this.$route.params.id,
                //url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
    import profilebar from '../../../components/menus/profilebar.vue'
    import disqus from '~/components/partials/disqus.vue'
    import comments from '../../../components/social/comments.vue'
    import repost from '../../../components/social/repost.vue'
    import reactions from '../../../components/social/reactions.vue'
    import bookmark from '../../../components/social/bookmark.vue'
    import share from '../../../components/social/share.vue'
    import updatepost from '../../../components/update/social/updatepost.vue'

    import activity from '~/graphql/CMS/queries/id/activity.gql'
    import { ref } from 'vue'

    const model = ref(null);
    const route = useRoute();
    const { data } = useAsyncQuery(activity, {
        id: route.params.id
    });

/*import { getActivityById } from '~/composables/social/getActivity';

const activity = ref(null);

onMounted(async () => {
    const id = route.params.id;
    try {
        activity.value = await getActivityById(id);
        console.log(activity.value);  // Check the fetched data in the console
    } catch (error) {
        console.error("Failed to fetch activity data:", error);
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
        title: data?.activity?.title,
    })

    definePageMeta({
        //middleware: ['auth-logged-in'],
    })
</script>