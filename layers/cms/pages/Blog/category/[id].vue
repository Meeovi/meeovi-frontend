<template>
    <div class="contentPage">
        <blogbar />
        <section class="features3 cid-so8Ntjy8wX" id="features3-29">
            <div class="container">
                <h1 style="text-align: center; padding: 10px;">{{ data?.category?.name }}</h1>
                <div class="row mt-4">
                    <div v-for="post in data?.category?.posts?.nodes" :key="post.id" class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img :src="`${post?.featuredImage?.node?.sourceUrl}`" :alt="post?.title" cover />
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
                            <div class="mbr-section-btn item-footer mt-2"><a
                                    :href="`/blog/${post?.id}`"
                                    class="btn btn-primary item-btn display-7">Read More&gt;</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
  import blogbar from '../../components/menus/blogbar.vue'
  import blogCategory from '~/graphql/CMS/queries/id/blogCategory.gql'
  import { ref } from 'vue'

  const tab = ref(null);
  const route = useRoute();

  const {
    data
  } = useAsyncQuery(blogCategory, { id: route.params.id });

/*    const {
        getItemById
    } = useDirectusItems()

    const route = useRoute();

    const tags = await getItemById({
        collection: "tags",
        id: route.params.id
    }); */

    useHead({
        title: data?.category?.name,
    })
</script>