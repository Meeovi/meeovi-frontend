<template>
    <div class="contentPage">
        <profilebar />

        <v-card flat>
            <v-toolbar color="primary" dark extended flat height="250" :image="`${data?.group?.attachmentCover?.full}`">
            </v-toolbar>

                <section data-bs-version="5.1" class="features1 cid-sBXVhMMeXw" id="features2-2k">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card-wrapper">
                                    <div class="card-box align-center">
                                        <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                            <strong>
                                                <v-avatar size="80" rounded="0"
                                                    :image="`${data?.group?.attachmentAvatar?.full}`"></v-avatar>
                                            </strong><br><br>{{ data?.group?.name }}</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card-wrapper">
                                    <div class="card-box align-center">
                                        <span class="mbr-iconfont mobi-mbri-calendar mobi-mbri"
                                            style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                        <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                            <strong>Group Created</strong><br><br>{{ new Date(data?.group?.dateCreated).toLocaleDateString() }}</h4>
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
                                        <v-avatar size="50">
                                            <img :src="`${data?.group?.creator?.avatar?.url}`"
                                                :alt="data?.group?.creator?.username" />
                                        </v-avatar>
                                        <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                            <strong>Created By</strong><br><br><a :href="`/account/user/${data?.group?.creator?.username}`"></a></h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-10">
                                <div class="card-wrapper">
                                    <div class="card-box align-center">
                                        <h4 class="card-title align-center mbr-black mbr-fonts-style display-7"
                                            v-html="data?.group?.description"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </v-card>

        <v-divider></v-divider>
        <v-card min-height="500px">
            <!--Shorts for Space 
            <shorts />-->
            <v-tabs v-model="tab" align-tabs="center" bg-color="warning" stacked>
                <v-tab value="tab-1">
                    <v-btn variant="text" stacked prepend-icon="fas fa-home">Home</v-btn>
                </v-tab>

                <v-tab value="tab-2">
                    <v-btn variant="text" stacked prepend-icon="fas fa-users">Members</v-btn>
                </v-tab>

                <v-tab value="tab-3">
                    <v-btn variant="text" stacked prepend-icon="fas fa-shop">Products</v-btn>
                </v-tab>

                <v-tab value="tab-4">
                    <v-btn variant="text" stacked prepend-icon="fas fa-photo-film">Media</v-btn>
                </v-tab>

                <v-tab value="tab-5">
                    <v-btn variant="text" stacked prepend-icon="fas fa-calendar-days">Events</v-btn>
                </v-tab>

                <v-tab value="tab-6">
                    <v-btn variant="text" stacked prepend-icon="fas fa-gear">Settings</v-btn>
                </v-tab>

                <v-tab value="tab-7" align-tabs="end">
                    <v-btn variant="text" stacked prepend-icon="fas fa-right-from-bracket">Leave Space</v-btn>
                </v-tab>
            </v-tabs>

            <v-card-text>
            <v-tabs-window v-model="tab">
                <v-window v-model="tab">
                    <!--Space Social Feed-->
                    <v-tabs-window-item value="tab-1" v-for="activities in data?.group?.activities?.nodes"
                        :key="activities">
                        <v-row>
                            <v-col cols="4">
                                <v-card class="mx-auto" elevated="0">
                                    <v-card-title v-html="activities?.title"></v-card-title>

                                    <v-list lines="one">
                                        <v-list-item :title="activities?.creator?.username"
                                            :subtitle="activities?.capabilities"
                                            :prepend-avatar="activities?.creator?.avatar?.url">
                                        </v-list-item>
                                    </v-list>

                                    <v-card-text>
                                        <div>
                                            <p v-html="activities?.content"></p>
                                        </div>
                                    </v-card-text>

                                    <v-card-subtitle><em>Posted:
                                            {{ new Date(activities?.date).toLocaleDateString() }}</em>
                                    </v-card-subtitle>

                                    <v-card-actions>
                                        <v-row>
                                            <v-col cols="3">
                                                <v-btn title="Comments" prepend-icon="fas fa-comment" variant="plain"
                                                    :href="`/social/feed/${activities.id}`">()</v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn title="Repost" prepend-icon="fas fa-repeat" variant="plain"
                                                    @click="repost()">()
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn title="Like This" prepend-icon="fas fa-heart" variant="plain"
                                                    @click="addLike">()
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn title="Bookmark" prepend-icon="fas fa-bookmark" variant="plain"
                                                    @click="addBookmark">()
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <!--Space People-->
                    <v-tabs-window-item value="tab-2">
                        <v-list lines="one">
                            <v-list-item :title="`${data?.group?.totalMemberCount} Members`"></v-list-item>
                        </v-list>

                        <v-text-field label="Find a Member" prepend-inner-icon="fas fa-search" variant="solo">
                        </v-text-field>

                        <v-list lines="two">
                            <h5>Creator of {{ data?.group?.name }}</h5>
                            <v-list-item>
                                <v-row align="center" class="spacer" no-gutters>
                                    <v-col cols="4" sm="2" md="1">
                                        <v-avatar size="50">
                                            <img :src="`${data?.group?.creator?.avatar?.url}`"
                                                :alt="data?.group?.creator?.username" />
                                        </v-avatar>
                                    </v-col>

                                    <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                        <p>{{ data?.group?.creator?.username }}</p>
                                    </v-col>

                                    <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                                        <v-btn prepend-icon="fas fa-user-plus" color="primary">Add Friend</v-btn>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>

                        <v-list lines="two">
                            <h5>Admins of {{ data?.group?.name }}</h5>
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
                            <h5>Moderators of {{ data?.group?.name }}</h5>
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
                            <h5>All Members of {{ data?.group?.name }}</h5>
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
                    </v-tabs-window-item>

                    <!--Space Media-->
                    <v-tabs-window-item value="tab-3">
                        <v-card class="mx-auto" max-width="400">
                            <img class="align-end text-white" height="200" :src="`${data?.group?.media?.filename_disk}`"
                                :alt="data?.group?.name" cover />
                        </v-card>
                    </v-tabs-window-item>

                    <!--Space Products-->
                    <v-tabs-window-item value="tab-4">
                        <section class="features3 cid-sBXVblMrWB" id="features3-2j">
                            <div class="container" v-for="products in data?.products?.nodes" :key="products.id">
                                <productCard :product="products" />
                            </div>
                        </section>
                    </v-tabs-window-item>

                    <!--Space Events-->
                    <v-tabs-window-item value="tab-5">
                        <v-card class="mx-auto" max-width="400">
                            <img class="align-end text-white" height="200" :src="`${data?.products?.items?.image?.url}`"
                                :alt="data?.products?.items?.name" cover />
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
                    </v-tabs-window-item>

                    <!--Settings-->
                    <v-tabs-window-item value="tab-6">
                        <settings :id="data?.group?.id" />
                    </v-tabs-window-item>
                </v-window>
            </v-tabs-window>
        </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import profilebar from '../../../components/menus/profilebar.vue'
    import comments from '../../../components/social/comments.vue'
    import settings from '../../../components/create copy/social/updatespace.vue'
    import productCard from '../../../components/commerce/product/productCard.vue'
    import shorts from '../../../components/related/shorts.vue'

    export default {
        components: {
            profilebar,
            productCard,
            comments,
            settings,
            shorts
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
                tab: null,
                model: null,
                data: null,
                groupId: this.$route.params.id
                //space: null,
            }
        },
    }
</script>

<script setup>
    const route = useRoute();
    const query = gql `
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
    } = useAsyncQuery(query, {
        id: route.params.id
    });

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
    }) /**/
</script>