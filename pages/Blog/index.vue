<template>
    <div>
        <section class="info3 cid-so8NrSOKu6" id="info3-28">



            <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-10">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                                    <strong>Our Official Blog</strong></h4>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features3 cid-so8Ntjy8wX" id="features3-29">


            <div class="container">

                <div class="row mt-4" v-for="articles in articles" :key="articles.id">
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img :src="`${url}/assets/${articles.image}`">
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-7"><strong>{{ articles.name }}</strong></h5>

                                <p class="mbr-text mbr-fonts-style mt-3 display-7">{{ articles.excerpt }}
                                </p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><a :href="`/blog/${articles.id}`"
                                    class="btn btn-primary item-btn display-7">Read More
                                    &gt;</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                url: process.env.DIRECTUS_URL,
            }
        }
    }
</script>

<script setup>
const { getItems } = useDirectusItems()

const articles = await getItems({ collection: "articles"});

    useHead({
        title: 'Meeovi Blog',
    })
</script>