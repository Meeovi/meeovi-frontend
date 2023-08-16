<template>
    <div>
        <section data-bs-version="5.1" class="header11 cid-txYTnQG6mf" id="header11-5n" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 image-wrapper">
                        <img class="w-100" :src="`${url}/assets/${article.image}`" :alt="article.name">
                    </div>
                    <div class="col-12 col-md">
                        <div class="text-wrapper text-center">
                            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1">
                                <strong>{{article.name}}</strong></h1>
                            <p class="mbr-text mbr-fonts-style display-7">
                                {{article.created_at}}</p>

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
                            <h5 class="mbr-section-title mbr-fonts-style mb-2 display-7" v-html="article.category"></h5>
                            <p class="mbr-text mbr-fonts-style display-4">{{article.content}}</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
        <relatedpost />
    </div>
</template>

<script>
    import relatedpost from '../../components/homePage/blogposts.vue'

    export default {
        components: {
            relatedpost
        },
        data() {
            return {
                url: 'http://meeovicms.com:8011'
            }
        },
    }
</script>

<script setup>
    const { getItemById, getItems } = useDirectusItems()

    const article = await getItemById({ collection: "articles", id: "1"});
    const articles = await getItems({ collection: "articles"});

    useHead({
        title: article.name,
    })
</script>