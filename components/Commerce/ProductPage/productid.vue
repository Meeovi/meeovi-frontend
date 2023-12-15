<template>
    <div class="productPage">
        <v-row>
            <v-col cols="6">
            <v-carousel show-arrows="hover">
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-col>

        <v-col cols="6">
            <v-card variant="text">
                <v-toolbar color="transparent" title="Product Title">
                    <v-btn icon="fas fa-bookmark" color="orange"></v-btn>
                </v-toolbar>
                <p class="productseller">By Company or Seller</p>
                <div class="productprice">$19.99 <p class="productstock">In Stock</p></div>
                <div class="sizelist">
                    <v-rating half-increments hover length="5" size="38" model-value="5" color="primary"
                        active-color="warning" />
                    <p>Size</p>
                    <v-item-group v-model="model" class="d-flex justify-sm-space-between px-6 pt-2 pb-6">
                        <v-item v-for="n in 5" :key="n">
                            <template v-slot:default="{ toggle }">
                                <v-btn :icon="`mdi-numeric-${n}`" :active="model != null && model + 1 >= n" border
                                    height="40" variant="text" width="40" @click="toggle" rounded="0"></v-btn>
                            </template>
                        </v-item>
                    </v-item-group>
                </div>

                <v-card-text class="pb-0">
                    <p class="productdescription">late 16th century (as a noun denoting a place where alms were distributed): from medieval
                        Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                    </p>
                </v-card-text>

                <v-card-actions>
                    <v-btn size="x-large" color="orange" rounded="0">Add to List</v-btn>

                    <v-btn size="x-large" color="orange" rounded="0">Add to Cart</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>

            <v-col cols="12">
                <productdetails />
            </v-col>

            <v-col cols="12">
                <!--<relatedproducts />-->
            </v-col>

            <v-col cols="12">
                <!--<recentlyviewed />-->
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import productinfo from './Sections/productinfo.vue'
    import productdetails from './Sections/productdetails.vue'
    import relatedproducts from '../../components/Related/relatedproducts.vue'
    import recentlyviewed from '../../components/Related/recentlyviewed.vue'

    export default {
        components: {
            productinfo,
            productdetails,
            relatedproducts,
            recentlyviewed
        },
        
    }
</script>

<script setup>
    /*const query = gql`
 query {
  product(id: 55) {
    id
    createdAt
    updatedAt
    name
    slug
    description
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    variants {
      id
      name
      sku
      stockLevel
      currencyCode
      price
      priceWithTax
      featuredAsset {
        id
        preview
      }
      assets {
        id
        preview
      }
    }
    collections {
        name
    }
    facetValues {
        name
    }
  }
}
`
    const {
        data
    } = await useAsyncQuery(query)  
      useHead({
           title: product.name,
       })

       const {
           getItems
       } = useDirectusItems()

       const products = await getItems({ collection: "products", id: 1});*/

    useHead({
        title: "",
    })
</script>