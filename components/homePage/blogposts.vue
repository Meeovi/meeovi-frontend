<template>
    <div>
        <section data-bs-version="5.1" class="features10 cid-tAGUNThbsj" id="features10-61">




            <div class="container">
                <h2 class="mbr-section-title align-left mbr-fonts-style display-2">
                    Blogs from Meeovi</h2>


                <div v-for="articles in articles" :key="articles.id"
                    class="row justify-content-center align-items-start">

                    <div class="card px-3 py-4 col-md-4">
                        <div class="card-wrapper flip-card">
                            <div class="card-img">
                                <img :src="`${url}/assets/${articles.image}`" :alt="articles.name" />
                                <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">
                                    {{ articles.categories }}</div>
                            </div>
                            <div class="card-box">
                                <h5 class="mbr-title mbr-fonts-style mbr-black align-center display-4">
                                    {{ articles.published }}</h5>
                                <p class="mbr-card-text mbr-fonts-style align-center display-5">{{articles.name}}</p>
                                <div class="mbr-section-btn align-center pt-3">
                                    <a :href="`/blog/${articles.id}`" class="btn btn-md btn-info display-4">Read
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
        data(){
            return {
                url: 'http://meeovicms.com:8011'
            }
        }
    }
</script>

<script setup>
const { getItems } = useDirectusItems()

const articles = await getItems({ collection: "articles"});
</script>