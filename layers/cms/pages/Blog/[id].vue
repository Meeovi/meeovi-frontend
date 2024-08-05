<template>
    <div class="contentPage">
        <section data-bs-version="5.1" class="header11 cid-txYTnQG6mf" id="header11-5n" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 image-wrapper">
                        <img class="w-100" :src="`${data?.post?.featuredImage?.node?.sourceUrl}`" :alt="data?.post?.title">
                    </div>
                    <div class="col-12 col-md">
                        <div class="text-wrapper text-center">
                            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1">
                                <strong>{{data?.post?.title}}</strong></h1>
                            <p class="mbr-text mbr-fonts-style display-7">
                              Published: {{ new Date(data?.post?.date).toLocaleDateString() }}</p>
                            <p class="mbr-text mbr-fonts-style display-7">
                              Author: {{data?.post?.author?.node?.username}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="content7 cid-txYTqgVHsB" id="content7-5o" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12">
                        <blockquote>
                            <h5 class="mbr-section-title mbr-fonts-style mb-2 display-7" v-for="tag in data?.post?.tags?.nodes" :key="tag.name">{{tag?.name}}</h5>
                            <p class="mbr-text mbr-fonts-style display-4" v-html="data?.post?.content"></p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
        <relatedpost />

        <DisqusCount identifier="/blog/1" />

        <DisqusComments identifier="/blog/1" />
    </div>
</template>

<script setup>
import relatedpost from '../../components/pages/homepage/blogposts.vue'
import post from '~/graphql/CMS/queries/id/post.gql'
const route = useRoute();

  const {
    data
  } = useAsyncQuery(post, { id: route.params.id });

/*    const {
        getItemById
    } = useDirectusItems()
    const route = useRoute();

    const article = await getItemById({
        collection: "articles",
        id: route.params.id
    }); */

    useHead({
        title: route.params.title,
    })

</script>