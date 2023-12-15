<template>
    <div>
        <h4>Articles and Journals from the community</h4>
        <v-sheet class="mx-auto" elevation="0" color="transparent">
            <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
                selected-class="bg-primary" show-arrows="true">
                <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="articles in data.articles"
                    :key="articles">
                    <v-card :class="['ma-4', selectedClass]" height="580" width="250" @click="toggle">
                        <v-img class="align-end text-white" height="280"
                            :src="`${url}assets/${articles.image.filename_disk}`" :alt="articles.name" cover>
                            <v-card-title>{{ articles.name }}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Published: {{articles.created_at}}
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Type:<div v-html="articles.type"></div>
                            </div>
                            <div>From:
                                {{ articles.customers.first_name }} {{ articles.customers.last_name }}
                                <!---->
                            </div>

                            <div>{{ articles.excerpt }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="orange" :href="`/blog/${articles.id}`">
                                Read More
                            </v-btn>
                        </v-card-actions>

                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="fas fa-circle-xmark">
                                </v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: null,
                url: process.env.DIRECTUS_URL,
            }
        }
    }
</script>

<script setup>
    const query = gql `
query {
  articles (filter: {isPublic: {_eq: true}}) {
    id
    name
    excerpt
    content
    image {
      filename_disk
    }
    comments {
      comments_id {
        id
        response
        media {
          filename_disk
        }
      }
    }
    customers {
      customers_id {
        id
        first_name
        last_name
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