<template>
    <div>
        <v-row class="contentSection">
            <v-col cols="12" v-for="eats in data.categories" :key="eats.id">
                <v-card class="mx-auto" height="620" width="450">
                    <v-row>
                        <v-col cols="8">
                            <v-toolbar density="compact" title="Content Creator Name" color="transparent"></v-toolbar>
                        </v-col>
                        <v-col class="feedFollowBtn" cols="4">
                            <v-btn variant="text" title="Follow" href="" size="medium">Follow</v-btn>
                        </v-col>
                    </v-row>
                    <video class="align-end text-white" height="400" controls
                        :src="`${url}assets/${shorts.video.filename_disk}`" cover></video>

                    <v-card-subtitle class="pt-4">
                        {{shorts.name}}
                    </v-card-subtitle>

                    <v-card-text>
                        <div>{{ shorts.date_created }}</div>

                        <div>{{ shorts.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-row>
                            <v-col cols="3">
                                <v-btn title="Comments" prepend-icon="fas fa-comment" variant="plain"
                                    href="/social/feed/id.vue">()</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn title="Repost" prepend-icon="fas fa-repeat" variant="plain">()</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn title="Like This" prepend-icon="fas fa-heart" variant="plain">()</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn title="Bookmark" prepend-icon="fas fa-bookmark" variant="plain">()
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        components: {
            data() {
                return {
                    url: process.env.DIRECTUS_URL,
                }
            },
        }
    }
</script>

<script setup>
    const query = gql `
query {
  categories (search: "eats") {
    id
    name
    description
    content
    image {
      filename_disk
    }
    meeovistores {
      id
    }
    products {
      id
      products_id {
        id
        name
        price
        content
        image {
          filename_disk
        }
        country
      }
    }
    Space {
      id
      Space_id {
        id
        Name
        newsfeed
        date_created
        Description
        Image {
          filename_disk
        }
        product_id {
          id
          products_id {
            price
            name
            image {
              filename_disk
            }
            short_description
            content
            country
          }
        }
      }
    }
    shorts {
      id
        name
        description
        date_created
        video {
          filename_disk
        }
    }
  }
}`
    const {
        data
    } = await useAsyncQuery(query)

    useHead({
        title: 'Meeovi Eats'
    })
</script>