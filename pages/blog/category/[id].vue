<template>
    <div class="contentPage">
        <blogbar />
        <section class="features3 cid-so8Ntjy8wX" id="features3-29">
            <div class="container">
                <h1 style="text-align: center; padding: 10px;">{{ result?.category?.name }}</h1>
                <div class="row mt-4">
                    <div v-for="post in result?.category?.posts?.nodes" :key="post.id" class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <NuxtImg loading="lazy" :src="`${post?.featuredImage?.node?.sourceUrl}`" :alt="post?.title" cover />
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-7">
                                    <strong>{{ post?.title }}</strong>
                                </h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                    <em>Published: {{ new Date(post?.date).toLocaleDateString() }}</em>
                                </h6>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                    <em>Author: {{ post?.author?.node?.username }}</em>
                                </h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7" v-html="post?.excerpt"></p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><NuxtLink
                                    :href="`/blog/${post?.id}`"
                                    class="btn btn-primary item-btn display-7">Read More&gt;</NuxtLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
  import blogbar from '~/components/menus/blogbar.vue'
  import blogCategory from '~/graphql/cms/queries/id/blogCategory'
  import { ref } from 'vue'
  import {
    useQuery
  } from '@vue/apollo-composable'

  const tab = ref(null);
  const route = useRoute();

  const {
        result,
    } = useQuery(blogCategory, {
        id: route.params.id // Pass variables inside the 'variables' object
    }, {
        context: {
            clientName: 'secondary' // This will use the secondary endpoint
        }
    });

    useHead({
        title: result?.category?.name,
    })
</script>