<template>
    <div class="contentPage">
        <profilebar />
        <section class="header6 cid-sBXV7XsZQm" id="header6-2i"
            :style="`background-image: url(${data?.group?.attachmentCover?.full})`">
            <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(68, 121, 217);"></div>
        </section>

        <section class="features1 cid-sBXVhMMeXw" id="features2-2k">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1" style="text-align: center !important;">
                            <strong>{{ data?.group?.name }}</strong></h1>

                        <p class="mbr-text mbr-white mbr-fonts-style display-7 spaceDescr" v-html="data?.group?.description"></p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-credit-card mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Status</strong><br><br>{{ data?.group?.status }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-sites mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Date Created</strong><br><br>{{ data?.group?.dateCreated }}
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
                                    <strong># of Members</strong><br><br>{{ data?.group?.totalMemberCount }}
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
                                    <strong>Created By</strong><br><br><a :href="`/account/user/${data?.group?.creator?.username}`"><v-avatar :image="`${data?.group?.creator?.avatar?.url}`"></v-avatar></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Shorts for Space -->
        <shorts />

        <!--Tabs for Space -->
        <v-card min-height="500px">
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">Social Feed</v-tab>
                <v-tab value="two">Products</v-tab>
                <v-tab value="three">Events</v-tab>
                <v-tab value="four">Media</v-tab>
                <v-tab value="five">Members</v-tab>
                <v-tab>
                    <v-btn style="padding-top: 5px; float: right; right: 5px; position: fixed;">Leave Space</v-btn>
                </v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <!--Space Social Feed-->
                    <v-window-item value="one" v-for="activities in data?.group?.activities?.nodes" :key="activities">
                        <section class="features3 cid-sBXVvu6lmJ" id="features3-2l">


                            <div class="container">
                                <div class="mbr-section-head">
                                    <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                        <strong>{{ activities.title }}</strong></h4>

                                </div>
                                <div class="row mt-4">
                                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                                        <div class="item-wrapper">
                                            <div class="item-img">
                                                <a :href="`/account/user/${activities?.creator?.username}`"><v-avatar :image="`${activities?.creator?.avatar?.url}`"></v-avatar></a>
                                            </div>
                                            <div class="item-content">
                                                <p class="mbr-text mbr-fonts-style mt-3 display-7"
                                                    v-html="activities?.content"></p>
                                            </div>
                                            <div class="mbr-section-btn item-footer mt-2"><a
                                                    :href="`/social/feed/${activities?.id}`"
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
                                :src="`${data?.group?.media?.filename_disk}`" :alt="data?.group?.name" cover />
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
                            <h3>Creator of {{ group?.name }}</h3>
                            <v-list-item>
                                <v-row align="center" class="spacer" no-gutters>
                                    <v-col cols="4" sm="2" md="1">
                                        <v-avatar size="50">
                                            <img :src="`${group?.creator?.avatar?.url}`" :alt="group?.creator?.username" />
                                        </v-avatar>
                                    </v-col>

                                    <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                        <p>{{ group?.creator?.username }}</p>
                                    </v-col>

                                    <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                                        <v-btn prepend-icon="fas fa-user-plus" color="primary">Add Friend</v-btn>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>

                        <v-list lines="two">
                            <h3>Admins of {{ group?.name }}</h3>
                            <v-list-item v-for="admins in data?.group?.admins?.nodes" :key="admins">
                                <v-row align="center" class="spacer" no-gutters>
                                    <v-col cols="4" sm="2" md="1">
                                        <v-avatar size="50">
                                            <img :src="`${admins?.avatar?.url}`" :alt="admins?.username" />
                                        </v-avatar>
                                    </v-col>

                                    <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                        <p>{{ admins?.username }}</p>
                                    </v-col>

                                    <v-col class="text-no-wrap text-left" cols="5" sm="3">
                                        <p>admins?.description</p>
                                    </v-col>

                                    <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                                        <v-btn prepend-icon="fas fa-user-plus" color="primary">Add Friend</v-btn>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>

                        <v-list lines="two">
                            <h3>Moderators of {{ group?.name }}</h3>
                            <v-list-item v-for="admins in data?.group?.mods?.nodes" :key="admins">
                                <v-row align="center" class="spacer" no-gutters>
                                    <v-col cols="4" sm="2" md="1">
                                        <v-avatar size="50">
                                            <img :src="`${admins?.avatar?.url}`" :alt="admins?.username" />
                                        </v-avatar>
                                    </v-col>

                                    <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                        <p>{{ admins?.username }}</p>
                                    </v-col>

                                    <v-col class="text-no-wrap text-left" cols="5" sm="3">
                                        <p>admins?.description</p>
                                    </v-col>

                                    <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                                        <v-btn prepend-icon="fas fa-user-plus" color="primary">Add Friend</v-btn>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>

                        <v-list lines="two">
                            <h3>All Members of {{ group?.name }}</h3>
                            <v-list-item v-for="members in data?.group?.members?.nodes" :key="members">
                                <v-row align="center" class="spacer" no-gutters>
                                    <v-col cols="4" sm="2" md="1">
                                        <v-avatar size="50">
                                            <img :src="`${members?.avatar?.url}`" :alt="members?.username" />
                                        </v-avatar>
                                    </v-col>

                                    <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                        <p>{{ members?.username }}</p>
                                    </v-col>

                                    <v-col class="text-no-wrap text-left" cols="5" sm="3">
                                        <p>members?.description</p>
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
    import profilebar from '../../../components/menus/profilebar.vue'
    import comments from '../../../components/social/comments.vue'
    import productCard from '../../../components/commerce/product/productCard.vue'
    import shorts from '../../../components/related/shorts.vue'

    export default {
        components: {
            profilebar,
            productCard,
            comments,
            shorts
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
const route = useRoute();
const query = gql`
query NewQuery ($id: ID!) {
group(id: $id){
    creator {
      avatar {
        url
      }
      username
    }
    dateCreated
    description
    id
    lastActivity
    name
    slug
    status
    totalMemberCount
    mods {
      avatar {
        url
      }
      username
      description
    }
    members {
      nodes {
        avatar {
          url
        }
        username
        description
      }
    }
    attachmentCover {
      full
    }
    attachmentAvatar {
      full
    }
    admins {
      avatar {
        url
      }
      username
      description
    }
    activities {
      nodes {
        content
        creator {
          avatar {
            url
          }
          username
        }
        date
        id
        status
        title
        type
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });

/*    const {
        getItemById
    } = useDirectusItems()

    const space = await getItemById({
        collection: "Space",
        id: route.params.id
    }); 

    const page = await getItemById({
        collection: "pages",
        id: route.params.id
    });*/

    useHead({
        title: data?.group?.name
    })

    definePageMeta({
	  //middleware: ['auth-logged-in'],
	})/**/
</script>