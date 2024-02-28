<template>
    <div class="contentPage">
        <profilebar />
        <section class="header6 cid-sBXV7XsZQm" id="header6-2i"
            :style="`background-image: url(${url}assets/${space?.image?.filename_disk})`">
            <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(68, 121, 217);"></div>
            <div class="align-center container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">
                            <strong>{{ space?.name }}</strong></h1>

                        <p class="mbr-text mbr-white mbr-fonts-style display-7" v-html="space?.description"></p>
                    </div>
                </div>
            </div>
        </section>

        <section class="features1 cid-sBXVhMMeXw" id="features2-2k">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-credit-card mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>{{ page?.repeaterTextBox[1].name }}</strong><br><br>{{ space?.status }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-sites mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>{{ page?.repeaterTextBox[2].name }}</strong><br><br>{{ space?.date_created }}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-users mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>{{ page?.repeaterTextBox[3].name }}</strong><br><br>{{ space?.numberOfMembers }}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-home mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>{{ page?.repeaterTextBox[4].name }}</strong><br><br>{{ space?.owner }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Shorts for Space -->
        <v-sheet class="mx-auto" elevation="0" min-width="800">
            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="(customers, index) in space?.shorts?.shorts_id" :key="index"
                    v-slot="{ isSelected, toggle, selectedClass }">
                    <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="200" width="100"
                        @click="toggle">
                        <div class="d-flex fill-height align-center justify-center">
                            <div class="item-img">
                                <div class="img-wrap">
                                    <img :src="`${url}assets/${customers?.customers_id?.image?.filename_disk}`"
                                        :alt="customers?.customers_id?.username" />
                                </div>
                            </div>
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                </v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>

        <!--Tabs for Space -->
        <v-card min-height="500px">
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">{{ page?.repeaterTextBox[5].name }}</v-tab>
                <v-tab value="two">{{ page?.repeaterTextBox[6].name }}</v-tab>
                <v-tab value="three">{{ page?.repeaterTextBox[7].name }}</v-tab>
                <v-tab value="four">{{ page?.repeaterTextBox[8].name }}</v-tab>
                <v-tab value="five">{{ page?.repeaterTextBox[9].name }}</v-tab>
                <v-tab>
                    <v-btn style="float: right; right: 5px; position: fixed;">Leave Space</v-btn>
                </v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <!--Space Social Feed-->
                    <v-window-item value="one">
                        <section class="features3 cid-sBXVvu6lmJ" id="features3-2l">


                            <div class="container">
                                <div class="mbr-section-head">
                                    <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                        <strong>{{ page?.repeaterTextBox[10].name }}</strong></h4>

                                </div>
                                <div class="row mt-4">
                                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <img :src="`${url}assets/${space?.image?.url}`" :alt="space?.name" />
                                            </div>
                                            <div class="item-content">
                                                <p class="mbr-text mbr-fonts-style mt-3 display-7"
                                                    v-html="space?.newsfeed?.newsfeed_id?.post"></p>
                                            </div>
                                            <div class="mbr-section-btn item-footer mt-2"><a
                                                    :href="`/social/feed/${space?.newsfeed?.newsfeed_id?.id}`"
                                                    class="btn btn-primary item-btn display-7">Learn More
                                                    &gt;</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </v-window-item>

                    <!--Space Showcases-->
                    <v-window-item value="two">
                        <section class="features3 cid-sBXVblMrWB" id="features3-2j">
                            <div class="container">
                                <div class="mbr-section-head">
                                    <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                        <strong>{{ page?.repeaterTextBox[11].name }}</strong></h4>

                                </div>
                                <productCard />
                            </div>
                        </section>
                    </v-window-item>

                    <!--Space Events-->
                    <v-window-item value="three">
                        <v-card class="mx-auto" max-width="400">
                            <img class="align-end text-white" height="200"
                                :src="`${data?.products?.items?.image?.url}`" :alt="data?.products?.items?.name" cover />
                                <v-card-title>{{ data?.products?.items?.name }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Seller: {{ data?.products?.items?.manufacturer }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div v-html="data?.products?.items?.short_description?.html"></div>

                                <div>Tickets left: {{ data?.products?.items?.only_x_left_in_stock }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Share
                                </v-btn>

                                <v-btn color="orange" :href="`/product/${data?.products?.items?.sku}`">
                                    Explore
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-window-item>

                    <!--Space Media-->
                    <v-window-item value="four">
                        <v-card class="mx-auto" max-width="400">
                            <img class="align-end text-white" height="200"
                                :src="`${space?.media?.filename_disk}`" :alt="space?.name" cover />
                        </v-card>
                    </v-window-item>

                    <!--Space People-->
                    <v-window-item value="five">
                        <v-list lines="one">
                            <v-list-item :title="`238 ${page?.repeaterTextBox[0].name}`"
                                :subtitle="`${page?.repeaterTextBox[0].subject}`"></v-list-item>
                        </v-list>

                        <v-text-field label="Find a Member" prepend-inner-icon="fas fa-search" variant="solo">
                        </v-text-field>

                        <v-list lines="two">
                            <v-list-item>
                                <v-row align="center" class="spacer" no-gutters>
                                    <v-col cols="4" sm="2" md="1">
                                        <v-avatar size="50">
                                            <img :src="`${url}assets/${space?.customers?.customers_id?.image?.filename_disk}`" :alt="space?.customers?.customers_id?.username" />
                                        </v-avatar>
                                    </v-col>

                                    <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                        <p>{{ space?.customers?.customers_id?.username }}</p>
                                    </v-col>

                                    <v-col class="text-no-wrap text-left" cols="5" sm="3">
                                        <p>space?.customers?.customers_id?.description</p>
                                    </v-col>

                                    <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                                        <v-btn prepend-icon="fas fa-user-plus" color="primary">Add Friend</v-btn>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import profilebar from '../../../components/menus/profilebar'
    import comments from '../../../components/user/comments.vue'
    import productCard from '../../../components/pages/commerce/productCard.vue'

    export default {
        components: {
            profilebar,
            productCard,
            comments
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
                tab: null,
                model: null,
                //space: null,
            }
        },
    }
</script>

<script setup>
const query = gql`
query MyQuery {
  products(filter: {price: {to: "999.99"}, format: {eq: "Events"}}) {
    items {
      categories {
        name
        image
      }
      format
      id
      is_featured
      short_description {
        html
      }
      name
      only_x_left_in_stock
      price {
        regularPrice {
          amount {
            currency
            value
          }
        }
      }
      manufacturer
      sale
      sku
      image {
        url
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)

    const route = useRoute()
    const {
        getItemById
    } = useDirectusItems()

    const space = await getItemById({
        collection: "Space",
        id: 1
    }); /**/

    const page = await getItemById({
        collection: "pages",
        id: 32
    });

    useHead({
        title: route.params.name
    })
</script>