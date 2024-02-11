<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Lists" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(list, index) in data?.wishlist?.items" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{ list?.name }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                # of Products: {{ list?.items?.qty }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Updated: {{ list?.updated_at }}</div>

                                <div>{{ list?.items?.description }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Archive Order
                                </v-btn>

                                <v-btn color="red" href="`/commerce/lists/`">
                                    Manage subscription
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-toolbar title="Lists" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(list, index) in data?.wishlist?.items" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{ list?.name }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                # of Products: {{ list?.items?.qty }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Updated: {{ list?.updated_at }}</div>

                                <div>{{ list?.items?.description }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Subscribe
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../components/Menus/profilebar.vue'
    const productModel = ref(null)

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
        setup() {
            return {
                productModel,
            }
        },
    }
</script>

<script setup>
const query = gql`
query MyQuery {
  wishlist {
    items {
      added_at
      description
      id
      qty
    }
    items_count
    name
    sharing_code
    updated_at
  }
}

`
  const {
    data
  } = await useAsyncQuery(query)

    useHead({
        title: 'Lists',
    })
</script>