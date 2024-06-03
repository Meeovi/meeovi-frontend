<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Downloads" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(downloads, index) in data?.customer?.downloadableItems?.nodes" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <img :src="downloads?.product?.image?.sourceUrl" :alt="downloads?.product?.name">
                            <v-card-title>{{ downloads?.name }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Access Expires: {{ downloads?.accessExpires }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Product Name: {{ downloads?.product?.name }}</div>

                                <div>Product Sku: {{ downloads?.product?.sku }}</div>

                                <div>Product Type: {{ downloads?.product?.type }}</div>

                                <div>Product Price: {{ downloads?.product?.price }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange" :href="downloads?.download?.file">
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
    import profilebar from '../../../components/menus/profilebar.vue'
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
const route = useRoute();
const query = gql `
query NewQuery ($id: ID!) {
  customer(id: $id) {
    displayName
    id
    username
    role
    date
    downloadableItems {
      nodes {
        id
        name
        product {
          id
          image {
            sourceUrl
          }
          name
          sku
          type
          ... on SimpleProduct {
            id
            name
            price
          }
        }
        accessExpires
        download {
          file
          fileType
          name
        }
      }
    }
  }
}
`
const {
        data
    } = useAsyncQuery(query, {
        id: route.params.id
    });

    useHead({
        title: 'My Downloads',
    })

    definePageMeta({
	  //middleware: ['auth-logged-in'],
	})
</script>