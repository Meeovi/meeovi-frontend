<template>
    <div class="contentPage">
       <blogbar />
        <section class="features3 cid-so8Ntjy8wX" id="features3-29">
            <div class="container">
                <div class="row mt-4">
                    <div class="item features-image сol-12 col-md-6 col-lg-4" v-for="posts in result?.posts?.nodes" :key="posts.id">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <NuxtImg loading="lazy" :src="posts?.featuredImage?.node?.sourceUrl" :alt="posts?.title" cover />
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-7">
                                    <strong>{{ posts?.title }}</strong>
                                </h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                    <em>Published: {{ new Date(posts?.date).toLocaleDateString() }}</em>
                                </h6>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7" v-for="posts in result?.posts?.nodes" :key="posts.id">
                                    <em>Author: {{ posts?.author?.node?.username }}</em>
                                </h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7" v-html="posts?.excerpt"></p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><NuxtLink :to="`/blog/${posts?.id}`" class="btn btn-primary item-btn display-7">Read More&gt;</NuxtLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import blogbar from '~/components/menus/blogbar.vue'
import {posts} from '~/graphql/cms/queries/posts'
import {
    useQuery
  } from '@vue/apollo-composable'
import { ref } from 'vue'

const tab = ref(null);

const {
    result
  } = useQuery(posts, null, {
    context: {
      clientName: 'secondary' // This will use the secondary endpoint
    }
  })

    useHead({
        title: 'Blog',
    })
</script>