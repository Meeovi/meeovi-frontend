<template>
    <div class="contentPage">
        <section data-bs-version="5.1" class="header11 cid-txYTnQG6mf" id="header11-5n">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 image-wrapper">
                        <NuxtImg loading="lazy" class="w-100" :src="result?.blogPost?.featured_image" :alt="result?.blogPost?.title" />
                    </div>
                    <div class="col-12 col-md">
                        <div class="text-wrapper text-center">
                            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1">
                                <strong>{{ result?.blogPost?.title }}</strong>
                            </h1>
                            <p class="mbr-text mbr-fonts-style display-7">By: {{ result?.blogPost?.author?.name }}</p>
                            <p class="mbr-text mbr-fonts-style display-7">Categories: {{ result?.blogPost?.categories[0]?.title }}</p>
                            <ul class="flex justify-center mt-4 gap-x-4">
                                <li><div>Share: <share /></div></li>
                                <li><div>Add to List: <createListBtn class="articlePageListBtn" :productId="result?.blogPost?.post_id" /></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="content7 cid-txYTqgVHsB" id="content7-5o">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12">
                        <blockquote>
                            <h5 class="mbr-section-title mbr-fonts-style mb-2 display-7"><strong>Published: {{ new Date(result?.blogPost?.publish_time).toLocaleDateString() }}</strong></h5>
                            <p class="mbr-text mbr-fonts-style display-4" v-html="result?.blogPost?.content"></p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        <comments />

        <br>
        <relatedarticles />
    </div>
</template>

<script setup>
    import {
        useQuery
    } from '@vue/apollo-composable'
    //import profilebar from '~/components/menus/profilebar.vue'
    //import repost from '~/components/cms/social/repost.vue'
    import reactions from '~/components/cms/social/reactions.vue'
    import comments from '~/components/partials/comments.vue'
    import createListBtn from '~/components/partials/createListBtn.vue'
    import share from '~/components/partials/shareDialog.vue'
    import relatedarticles from '~/components/cms/related/relatedarticles.vue'
    //import { getActivityById } from '~/composables/cms/social/getActivity';
    import post from '~/graphql/commerce/queries/id/blogpost'

    const route = useRoute();
    const {
        result,
        loading,
        error
    } = useQuery(post, {
        id: `${route.params.id}` // Pass variables inside the 'variables' object
    });
    useHead({
        title: computed(() => result.value?.blogPost?.title || 'Article Page')
    })
</script>