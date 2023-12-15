<template>
    <div>
        <v-toolbar title="Collections" color="green"></v-toolbar>
        <v-row>
            <v-col cols="3" v-for="collections in collections" :key="collections">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" height="280"
                        :src="`${url}assets/${collections.image.filename_disk}`" :alt="collections.name" cover>
                        <v-card-title>{{ collections.name }}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        {{ collections.created_at }}
                    </v-card-subtitle>

                    <v-card-text>
                        <div>{{ collections.type }}</div>

                        <div>{{ collections.description }}</div>
                    </v-card-text>

                    <v-card-actions>

                        <v-btn color="orange" :href="`/commerce/lists/${collections.id}`">
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import collections from '../../apollo/queries-mutations_subscriptions/queries/collections.gql'

    export default {
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
            collections: [],
        }),
        apollo: {
            collections: {
                prefetch: true,
                query: collections
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Collections'
    })

    /*const query = gql `
    query {
      products (limit: 12, sort: "-created_at") {
        id
        name
        price
        sku
        image {
          filename_disk
        }
        rating
        tax_class
        stock_status
        websites {
          websites_id {
            name
            url
          }
        }
        weight
        height
        content
        part_number
        format
        file {
          filename_disk
        }
        type
        visibility
        size
        attributes {
          attributes_id {
            id
            default_label
          }
        }
        categories {
          categories_id {
            id
            name
          }
        }
        customers {
          customers_id {
            id
            username
          }
        }
        shops {
          shops_id {
            id
            name
          }
        }
      }
    }
    `
      const {
        data
      } = await useAsyncQuery(query) */
</script>