<template>
    <div>
        <v-toolbar title="Journals" color="green"></v-toolbar>
        <v-row>
            <v-col cols="3">
                <section class="features3 cid-so8Ntjy8wX" id="features3-29">


                    <div class="container">

                        <div class="row mt-4" v-for="articles in data.articles" :key="articles.id">
                            <div class="item features-image сol-12 col-md-6 col-lg-4">
                                <div class="item-wrapper">
                                    <div class="item-img">
                                        <img :src="`${url}assets/${articles.image}`" :alt="articles.name">
                                    </div>
                                    <div class="item-content">
                                        <h5 class="item-title mbr-fonts-style display-7">
                                            <strong>{{ articles.name }}</strong></h5>

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
            </v-col>
        </v-row>
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
    useHead({
        title: 'Journals'
    })

    const query = gql `
query {
  articles (search: "journal"){
    id
    name
    excerpt
    content
    comments {
      comments_id {
        id
        response
        media {
          filename_disk
        }
      }
    }
    categories {
      categories_id {
        id
        name
        content
        image {
          filename_disk
        }
      }
    }
    created_at
    type
    tags {
      tags_id {
        id
        name
      }
    }
  }
}
`
    const {
        data
    } = await useAsyncQuery(query)
</script>