<template>
    <div class="contentPage">
        <!--<profilebar />-->
        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col cols="12">
                        <section data-bs-version="5.1" class="features02 healthm5 cid-us2aUvDb1L" id="features02-a4">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="image-wrapper">
                                            <img :src="result?.blogPost?.featured_image" :alt="result?.blogPost?.title">
                                            <div class="recall-wrapper">
                                                <div class="icon-wrapper">
                                                    <span class="mbr-iconfont mobi-mbri-quote-right mobi-mbri"
                                                        style="color: black;"></span>
                                                </div>
                                                <p class="mbr-recall mbr-fonts-style display-7" style="color: black;">
                                                    Posted:
                                                    {{ new Date(result?.blogPost?.publish_time).toLocaleDateString() }}
                                                </p>
                                                <div class="people-wrapper" style="width: 600px;">
                                                    <div class="people-wrap">
                                                        <div class="image-wrap">
                                                            <img class="person" src="assets/images/image1.jpg"
                                                                :alt="result?.blogPost?.author?.name">
                                                        </div>
                                                        <div class="rating-content">

                                                            <p class="mbr-name mbr-fonts-style display-4">
                                                                {{ result?.blogPost?.author?.name }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="content-wrapper">
                                            <div class="content-wrap">
                                                <div class="desc-wrapper">
                                                    <p class="mbr-desc mbr-fonts-style display-4">
                                                        {{ result?.blogPost?.categories[0]?.title }}
                                                    </p>
                                                </div>
                                                <h5 class="mbr-section-title mbr-fonts-style display-5">
                                                    {{ result?.blogPost?.title }}
                                                </h5>
                                                <div class="rating-wrapper">
                                                    <div class="rating-wrap">
                                                        <v-toolbar color="transparent">
                                                            <v-toolbar-subtitle class="socialReactionButton">
                                                                <reactions />
                                                            </v-toolbar-subtitle>

                                                            <v-toolbar-subtitle class="socialShareButton">
                                                                <share />
                                                            </v-toolbar-subtitle>

                                                            <v-toolbar-subtitle class="socialListButton">
                                                                <createListBtn />
                                                            </v-toolbar-subtitle>
                                                            <v-spacer></v-spacer>
                                                        </v-toolbar>
                                                    </div>
                                                </div>
                                                <div class="text-wrapper">
                                                    <p class="mbr-text mbr-fonts-style display-7"
                                                        v-html="result?.blogPost?.content"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </v-col>

                    <v-col cols="12">
                        <comments />
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
    //import repost from '~/components/cms/social/repost.vue'
    import reactions from '~/components/cms/social/reactions.vue'
    import comments from '~/components/partials/comments.vue'
    import createListBtn from '~/components/partials/createListBtn.vue'
    import share from '~/components/partials/shareDialog.vue'
    import updatepost from '~/components/crud/update/update-post.vue'
    //import { getActivityById } from '~/composables/cms/social/getActivity';
    import post from '~/graphql/commerce/queries/id/blogpost'

    const tab = ref(null);
    const route = useRoute();
    const {
        result,
        loading,
        error
    } = useQuery(post, {
        id: `${route.params.id}` // Pass variables inside the 'variables' object
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

    useHead({
        title: computed(() => result.value?.blogPost?.title || 'Post Page')
    })

    definePageMeta({
        //middleware: ['auth-logged-in'],
    })
</script>