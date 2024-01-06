<template>
    <div class="contentPage">
        <blogbar />
        <section class="features3 cid-so8Ntjy8wX" id="features3-29">
            <div class="container">
                <div class="row mt-4">
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img :src="`${$directus.url}assets/${tags[0].articles.article_id.image.filename_disk}`" :alt="tags[0].articles.article_id.name" cover />
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-7">
                                    <strong>{{ tags[0].articles.article_id.name }}</strong>
                                </h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                    <em>{{ tags[0].articles.article_id.created_at }}</em>
                                </h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7">{{ tags[0].articles.article_id.excerpt }}
                                </p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><a :href="`/blog/${tags[0].articles.article_id.name}`"
                                    class="btn btn-primary item-btn display-7">Read More &gt;</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import blogbar from '../../../components/Menus/blogbar.vue'

    export default {
        components: {
            blogbar
        },
        data() {
            return {
                tab: null,
                url: process.env.DIRECTUS_URL,
            }
        }
    }
</script>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: tags } = await useAsyncData('tags', () => {
  return $directus.request(
    $readItem('tags', route.params.name, {
      fields: ['*', { articles: [{ articles_id: ['*']}] }]
    })
  )
})

    useHead({
        title: 'Meeovi Notes',
    })
</script>