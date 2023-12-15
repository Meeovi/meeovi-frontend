<template>
    <div class="contentPage">
        <v-card class="lowerbar">
            <v-tabs center-active v-for="categories in data.categories" :key="categories">
                <h5>Meeovi {{ categories.name }}</h5>
                <v-tab><a :href="`/categories/${categories.id}`">All</a></v-tab>
                <v-tab><a
                        :href="`/categories/${categories.id}`">{{ categories.name }}</a>
                </v-tab>
            </v-tabs>
        </v-card>
        <v-row class="categoryPage" style="background-color: slateblue;">
            <v-col cols="12">
                <h4 style="color: black">Latest News</h4>
                <v-sheet class="mx-auto categorySheet">
                    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                        <v-slide-group-item v-for="articles in data.categories.articles" :key="articles"
                            v-slot="{ isSelected, toggle }">
                            <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200"
                                width="100" @click="toggle" :href="`/blog/${articles.id}`">
                                <v-img class="align-end text-white" height="200"
                                    :src="`${url}assets/${articles.image.filename_disk}`" :alt="articles.name" cover>
                                </v-img>
                                <div class="d-flex fill-height align-center justify-center">
                                    <v-card-title class="pt-4">
                                        {{ articles.name }}
                                    </v-card-title>
                                    <v-scale-transition>
                                        <v-icon v-if="isSelected" color="white" size="48" icon="fas fa-circle-xmark">
                                        </v-icon>
                                    </v-scale-transition>
                                </div>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row class="productPage">
            <v-col cols="3" v-for="articles in data.categories.articles" :key="articles">
                <a href="">
                    <v-card class="mx-auto" max-width="300">
                        <v-img class="align-end text-white" height="200"
                            :src="`${url}assets/${articles.image.filename_disk}`" :alt="articles.name" cover>
                        </v-img>

                        <v-card-title class="pt-4">
                            {{ articles.name }}
                        </v-card-title>

                        <v-card-text>
                            <div>Published: {{ articles.created_at }}</div>
                            <div>Author: {{ articles.customers.name }}</div>

                            <div>{{ articles.excerpt }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="orange">
                                Read More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>

            <v-col cols="12">
            <h4>Products</h4>
            <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                <v-slide-group-item v-for="products in data.categories.products" :key="products.id"
                    v-slot="{ isSelected, toggle }">
                    <a :href="`/product/${products.id}`">
                        <v-card class="ma-4" height="580" width="250" @click="toggle">
                            <img class="align-end text-white" height="280"
                                :src="`${url}assets/${products.image.filename_disk}`" :alt="products.name" cover />

                            <v-card-title class="pt-4">
                                {{ products.name }}
                            </v-card-title>

                            <v-card-text>
                                <div>Sku: {{ products.sku }}</div>
                                <div>Category: {{ products.categories.name }}</div>
                                <div>Seller: {{ products.customers.username }}</div>
                            </v-card-text>

                            <div class="productcardrating">
                                <v-rating hover :length="5" :size="32" :model-value="products.rating"
                                    active-color="orange" />
                            </div>

                            <v-card-actions>
                                <v-card-title>Price: $ {{ products.price }}</v-card-title>
                            </v-card-actions>

                            <div class="align-center">
                                <v-btn class="align-center" color="orange" href="">Add to Cart</v-btn>
                            </div>

                            <div class="d-flex fill-height align-center justify-center">
                                <v-scale-transition>
                                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                    </v-icon>
                                </v-scale-transition>
                            </div>
                        </v-card>
                    </a>
                </v-slide-group-item>
            </v-slide-group>
        </v-col>
        </v-row>
        <latestproducts />
        <bestsellers />
    </div>
</template>

<script>
    import latestproducts from '../../../components/Related/latestproducts.vue'
    import bestsellers from '../../../components/Related/bestsellers.vue'

    export default {
        components: {
            latestproducts,
            bestsellers,
        },
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Notes'
    });

const query = gql `
query {
  categories (filter: {name: {_eq: "Notes"}}){
    id
    name
    description
    content
    brands {
      id
      brands_id {
        name
        image
      }
    }
    articles (search: "Notes") {
      articles_id {
        id
        created_at
        name
        excerpt
        content
        categories {
          categories_id {
            id
            name
          }
        }
      }
    }
    image {
      filename_disk
    }
    customers {
      customers_id {
        id
        first_name
        last_name
        image {
          filename_disk
        }
      }
    }
    products {
      id
      products_id {
        id
        name
        price
        image {
          filename_disk
        }
        sku
        Space {
          id
          Space_id {
            id
            Name
          }
        }
      }
    }
    shorts {
      shorts_id {
        id
        name
        video {
          filename_disk
        }
      }
    }
    shops {
      shops_id {
        id
        name
        media {
          directus_files_id {
            filename_disk
          }
        }
      }
    }
  }
}
`
    const {
        data
    } = await useAsyncQuery(query)

    /*
    const { getItems } = useDirectusItems()

    const products = await getItems({ collection: "products"});
    const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });*/
</script>