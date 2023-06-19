<template>
    <div>
        <section data-bs-version="5.1" class="features10 cid-tAGUNThbsj" id="features10-61">




            <div class="container">
                <h2 class="mbr-section-title align-left mbr-fonts-style display-2">
                    Blogs from Meeovi</h2>


                <div v-for="posts in data.blogPosts.items" :key="posts"
                    class="row justify-content-center align-items-start">

                    <div class="card px-3 py-4 col-md-4">
                        <div class="card-wrapper flip-card">
                            <div class="card-img">
                                <img :src="posts.featured_image" alt="" title="">
                                <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">
                                    {{ posts.categories.content }}</div>
                            </div>
                            <div class="card-box">
                                <h5 class="mbr-title mbr-fonts-style mbr-black align-center display-4">
                                    {{ posts.creation_time }}</h5>
                                <p class="mbr-card-text mbr-fonts-style align-center display-5" v-html="posts.title">
                                </p>
                                <div class="mbr-section-btn align-center pt-3">
                                    <a :href="`/blog/${posts.post_id}`" class="btn btn-md btn-info display-4">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    const query = gql `
    query {
    blogPosts {
        items {
            post_id
            title
            categories {
                content
            }
            creation_time
            featured_image
            tags {
                content
            }
            short_content
            }
    }
}`

    const {
        data
    } = useAsyncQuery(query);
</script>