<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Downloads" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(downloads, index) in data?.customerDownloadableProducts?.items" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{ downloads?.status }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Downloadable Date: {{ downloads?.date }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Order Increment: {{ downloads?.order_increment_id }}</div>

                                <div># of Downloads Remaining: {{ downloads?.remaining_downloads }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange" :href="downloads?.download_url">
                                    Download
                                </v-btn>

                                <v-btn color="red">
                                    Delete
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-toolbar title="Your Uploads" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(products, index) in data?.wishlist?.items" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{ products?.name }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                # of Products: {{ products?.items?.qty }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Updated: {{ products?.updated_at }}</div>

                                <div>{{ products?.items?.description }}</div>
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
                <v-toolbar title="Your Reviews" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(reviews, index) in data?.customer?.reviews?.items" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{ reviews?.nickname }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Created: {{ reviews?.created_at }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Summary: {{ reviews?.summary }}</div>

                                <div>{{ reviews?.average_rating }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    View Product
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
  customerDownloadableProducts {
    items {
      date
      download_url
      order_increment_id
      remaining_downloads
      status
    }
  }
  customer {
    reviews {
      items {
        average_rating
        created_at
        nickname
        summary
        text
        ratings_breakdown {
          name
          value
        }
      }
    }
  }
}

`
  const {
    data
  } = await useAsyncQuery(query)

    useHead({
        title: 'My Uploads',
    })
</script>