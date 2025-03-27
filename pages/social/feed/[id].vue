<template>
    <div class="contentPage">
        <!---->
        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col cols="12">
                        <section data-bs-version="5.1" class="features02 healthm5 cid-us2aUvDb1L" id="features02-a4">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="image-wrapper">
                                            <div v-if="post?.type === 'Video'"><video loading="lazy"
                                                    :src="`${$directus.url}assets/${post?.media?.filename_disk}`"
                                                    controls></video></div>
                                            <div v-if="post?.type === 'Audio'"><video loading="lazy"
                                                    :src="`${$directus.url}assets/${post?.media?.filename_disk}`"
                                                    controls></video></div>
                                            <div v-else><NuxtImg loading="lazy"
                                                    :src="`${$directus.url}assets/${post?.image?.filename_disk}`"
                                                    :alt="post?.title" /></div>
                                            <div class="recall-wrapper">
                                                <div class="icon-wrapper">
                                                    <span class="mbr-iconfont mobi-mbri-quote-right mobi-mbri" style="color: inherit"></span>
                                                </div>
                                                <p class="mbr-recall mbr-fonts-style display-7" style="color: inherit">
                                                    Posted:
                                                    {{ new Date(post?.date_created).toLocaleDateString() }}
                                                </p>
                                                <div class="people-wrapper" style="width: 600px;">
                                                    <div class="people-wrap">
                                                        <div class="image-wrap">
                                                            <NuxtImg loading="lazy" class="person" style="color: inherit"
                                                                src="assets/images/image1.jpg" :alt="post?.username" />
                                                        </div>
                                                        <div class="rating-content">

                                                            <p class="mbr-name mbr-fonts-style display-4" style="color: inherit">
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
                                                <h5 class="mbr-section-title mbr-fonts-style display-5" style="color: inherit">
                                                    {{ post?.title }}
                                                </h5>
                                                <div class="rating-wrapper">
                                                    <div class="rating-wrap">
                                                        <v-toolbar color="transparent">
                                                            <div class="socialReactionButton">
                                                                <reactions v-if="post?.id" :contentId="post?.id"
                                                                    :contentType="`post`" />
                                                            </div>

                                                            <div class="socialShareButton">
                                                                <share />
                                                            </div>

                                                            <div class="socialListButton">
                                                                <createListBtn />
                                                            </div>
                                                            <v-spacer></v-spacer>

                                                            <div class="socialSettingsButton">
                                                                <updatepost :id="id" />
                                                            </div>
                                                        </v-toolbar>
                                                    </div>
                                                </div>
                                                <div class="text-wrapper">
                                                    <p class="mbr-text mbr-fonts-style display-7" style="color: inherit"
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

<script setup>
    import {
        ref
    } from 'vue'
    //import repost from '~/components/partials/cms/repost.vue'
    import reactions from '~/components/partials/globals/reactions.vue'
    import comments from '~/components/partials/globals/comments.vue'
    import createListBtn from '~/components/partials/globals/createListBtn.vue'
    import share from '~/components/partials/globals/share.vue'
    import updatepost from '~/components/feeds/update-post.vue'

    const route = useRoute();
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const id = route.params.id

    const {
        data: post
    } = await useAsyncData('post', () => {
        return $directus.request($readItem('posts', route.params.id, {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    useHead({
        title: computed(() => post.value?.title || 'Post Page')
    })

    definePageMeta({
        middleware: ['auth'],
    })
</script>