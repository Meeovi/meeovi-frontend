<template>
    <div>
        <v-card class="lowerbar">
            <v-tabs center-active>
                <h5>Meeovi {{ data.collection.name }}</h5>
                <v-tab><a :href="`/collection/${data.collection.id}`">All</a></v-tab>
                <v-tab><a :href="`/categories/${data.collection.children[0].name}`">{{ data.collection.children[0].name }}</a></v-tab>
            </v-tabs>
        </v-card>

        <v-carousel>
            <img :src="`${data.collection.featuredAsset.preview}`" :alt="data.collection.name" cover />
        </v-carousel>

        <v-row class="productPage">
            <v-col cols="3">
                <a href="">
                    <v-card class="ma-4" height="380" width="250">
                        <img class="align-end text-white" height="200" :src="`${data.collection.productVariants[0].featuredAsset.preview}`" cover />

                        <v-card-title class="pt-4">
                            {{ data.collection.productVariants[0].name }}
                        </v-card-title>

                        <v-card-subtitle>
                            Sku: <div v-html="data.collection.productVariants[0].sku"></div>
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-card-title>$ {{ data.collection.productVariants[0].variants.price }}</v-card-title>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row>
        <latestproducts />
        <bestsellers />
        <relatedcreators />
    </div>
</template>

<script>
    //import videobar from '../../components/Menus/videobar.vue'
    import live from '../../components/Catbar/live.vue'
    import latestproducts from '../../components/Related/latestproducts.vue'
    import bestsellers from '../../components/Related/bestsellers.vue'
    import relatedcreators from '../../components/Creators/relatedcreators.vue'

    export default {
        components: {
            //videobar,
            live,
            latestproducts,
            bestsellers,
            relatedcreators
        },
        data() {
            return {
                url: 'http://meeovicms.com:8011'
            }
        },
    }
</script>

<script setup>
const query = gql`
 query ($slug: String!) {
  collection(slug: $slug) {
    id
    createdAt
    updatedAt
    name
    description
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    children {
      id
      name
    }
    productVariants {
      items {
        product {
          id
          name
          featuredAsset {
            id
            preview
          }
          variants {
            price
          }
        }
        sku
      }
    }
  }
}
`
const { data } = await useAsyncQuery(query)
  /*  const { getItemById, getItems } = useDirectusItems()

    const collection = await getItemById({ collection: "collection", id: 28});
    const products = await getItems({ collection: "products"}); */

    useHead({
        title: 'data.collection.name',
    })
</script>