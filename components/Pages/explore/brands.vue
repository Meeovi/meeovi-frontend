<template>
    <div>
        <v-toolbar title="Brands" color="green"></v-toolbar>
        <v-row>
            <v-col cols="3" v-for="collections in collections" :key="collections">
                <v-card class="mx-auto" max-width="400">
                    <img class="align-end text-white" height="280"
                        :src="`${url}assets/${collections.image.filename_disk}`" :alt="collections.name" cover />
                        <v-card-title>{{ collections.name }}</v-card-title>

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

    export default {
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
/*import collections from '../../../apollo/queries-mutations_subscriptions/queries/collections.gql'

const { data } = useAsyncQuery(collections); */

const { getItems } = useDirectusItems()

const collections = await getItems({ collection: "collections"});

    useHead({
        title: 'Brands'
    })
</script>