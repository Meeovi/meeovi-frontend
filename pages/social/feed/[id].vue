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
                                            <img :src="post?.image?.filename_disk" :alt="post?.title">
                                            <div class="recall-wrapper">
                                                <div class="icon-wrapper">
                                                    <span class="mbr-iconfont mobi-mbri-quote-right mobi-mbri"
                                                        style="color: black;"></span>
                                                </div>
                                                <p class="mbr-recall mbr-fonts-style display-7" style="color: black;">
                                                    Posted:
                                                    {{ new Date(post?.date_created).toLocaleDateString() }}
                                                </p>
                                                <div class="people-wrapper" style="width: 600px;">
                                                    <div class="people-wrap">
                                                        <div class="image-wrap">
                                                            <img class="person" src="assets/images/image1.jpg"
                                                                :alt="post?.username">
                                                        </div>
                                                        <div class="rating-content">

                                                            <p class="mbr-name mbr-fonts-style display-4">
                                                                {{ post?.username }}
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
                                                    <p class="mbr-desc mbr-fonts-style display-4" v-html="post?.type">
                                                    </p>
                                                </div>
                                                <h5 class="mbr-section-title mbr-fonts-style display-5">
                                                    {{ post?.title }}
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

                                                            <v-toolbar-subtitle class="socialListButton">
                                                                <updatepost :id="activityId" />
                                                            </v-toolbar-subtitle>
                                                        </v-toolbar>
                                                    </div>
                                                </div>
                                                <div class="text-wrapper">
                                                    <p class="mbr-text mbr-fonts-style display-7"
                                                        v-html="post?.content"></p>
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
    //import repost from '~/components/cms/social/repost.vue'
    import reactions from '~/components/cms/social/reactions.vue'
    import comments from '~/components/partials/comments.vue'
    import createListBtn from '~/components/partials/createListBtn.vue'
    import share from '~/components/partials/shareDialog.vue'
    import updatepost from '~/components/crud/update/update-post.vue'

    const tab = ref(null);
    const route = useRoute();
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: post
    } = await useAsyncData('post', () => {
        return $directus.request($readItem('posts', route.params.id))
    })

    useHead({
        title: computed(() => post.value?.posts?.name || 'Post Page')
    })

    definePageMeta({
      middleware: ['authenticated'],
    })
</script>