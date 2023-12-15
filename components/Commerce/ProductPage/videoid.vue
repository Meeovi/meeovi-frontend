<template>
    <div class="productPage">
        <v-row>
            <v-col cols="6">
                <video autoplay controls loop>
                    <source src="" type="video/mp4">
                </video>
            </v-col>

            <v-col cols="6">
                <v-card title="Card title" subtitle="Subtitle" text="..." variant="text">
                    <v-item-group v-model="model" class="d-flex justify-sm-space-between px-6 pt-2 pb-6">
                        <v-item v-for="n in 5" :key="n">
                            <template v-slot:default="{ toggle }">
                                <v-btn :icon="`mdi-numeric-${n}`" :active="model != null && model + 1 >= n" border
                                    height="40" variant="text" width="40" @click="toggle"></v-btn>
                            </template>
                        </v-item>
                    </v-item-group>

                    <p>Product Excerpt</p>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card variant="text">
                    <v-tabs v-model="tab" bg-color="crimson">
                        <v-tab :value="one">About</v-tab>
                        <v-tab :value="two">Comments</v-tab>
                        <v-tab :value="three">FAQS</v-tab>
                        <v-tab :value="four">Also from Seller</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <!--About Product-->
                            <v-window-item :value="one">
                                <v-card title="Card title" subtitle="Subtitle" text="..." variant="text"></v-card>
                            </v-window-item>

                            <!--Comments-->
                            <v-window-item :value="two">
                                <v-list lines="two">
                                    <v-list-item v-for="n in 3" :key="n" :title="'Item ' + n"
                                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                                        prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"></v-list-item>
                                </v-list>
                            </v-window-item>

                            <!--FAQS-->
                            <v-window-item :value="three">
                                <v-expansion-panels variant="accordion">
                                    <v-expansion-panel v-for="i in 3" :key="i" title="Item"
                                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-window-item>

                            <!--Also from Seller-->
                            <v-window-item :value="four">
                                Four
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
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
    import relatedproducts from '../../components/Related/relatedproducts.vue'
    import recentlyviewed from '../../components/Related/recentlyviewed.vue'

    export default {
        components: {
            relatedproducts,
            recentlyviewed
        },
        data: () => ({
            model: null,
            tab: null,
        }),
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