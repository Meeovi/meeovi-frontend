<template>
    <div class="contentPage">
        <!--<profilebar />-->

        <v-card elevation="0">
            <v-img class="align-end text-white" height="250" :src="`${space?.image?.filename_disk}`" :alt="space?.name" cover></v-img>
            <v-toolbar color="info" dark>
                <v-toolbar-title style="width: 100%; text-align: center; font-size: 30px;">{{ space?.name }}</v-toolbar-title>
            </v-toolbar>
        </v-card>

        <v-card min-height="500px">
            <!--Shorts for Space 
            <shorts />-->
            <v-tabs v-model="tab" align-tabs="center" bg-color="warning" stacked>
                <v-tab value="tab-1">
                    <v-btn variant="text" stacked prepend-icon="fas fa-home">Home</v-btn>
                </v-tab>

                <v-tab value="tab-2">
                    <v-btn variant="text" stacked prepend-icon="fas fa-pencil">About</v-btn>
                </v-tab>

                <v-tab value="tab-3">
                    <v-btn variant="text" stacked prepend-icon="fas fa-users">Members</v-btn>
                </v-tab>

                <v-tab value="tab-4">
                    <v-btn variant="text" stacked prepend-icon="fas fa-shop">Products</v-btn>
                </v-tab>

                <v-tab value="tab-5">
                    <v-btn variant="text" stacked prepend-icon="fas fa-photo-film">Media</v-btn>
                </v-tab>

                <v-tab value="tab-6">
                    <v-btn variant="text" stacked prepend-icon="fas fa-calendar-days">Events</v-btn>
                </v-tab>

                <v-tab value="tab-7">
                    <v-btn variant="text" stacked prepend-icon="fas fa-gear">Settings</v-btn>
                </v-tab>

                <v-tab value="tab-8" align-tabs="end">
                    <v-btn variant="text" stacked prepend-icon="fas fa-right-from-bracket">Leave Space</v-btn>
                </v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-window v-model="tab">
                        <!--Space Social Feed-->
                        <v-tabs-window-item value="tab-1" v-for="newsfeed in space?.newsfeed?.newsfeed_id"
                            :key="newsfeed">
                            <v-row>
                                <v-col cols="4">
                                    <v-card class="mx-auto" elevated="0">
                                        <v-list lines="one">
                                            <v-list-item :title="newsfeed?.user_created?.username"
                                                :prepend-avatar="newsfeed?.user_created?.avatar?.filename_disk">
                                            </v-list-item>
                                        </v-list>

                                        <v-card-text>
                                            <div>
                                                <p v-html="newsfeed?.post"></p>
                                            </div>
                                        </v-card-text>

                                        <v-card-subtitle><em>Posted:
                                                {{ new Date(newsfeed?.date_created).toLocaleDateString() }}</em>
                                        </v-card-subtitle>

                                        <v-card-actions>
                                            <v-row>
                                                <v-col cols="3">
                                                    <v-btn title="Comments" prepend-icon="fas fa-comment"
                                                        variant="plain" :href="`/social/feed/${newsfeed.id}`">()</v-btn>
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
                                                    <v-btn title="Bookmark" prepend-icon="fas fa-bookmark"
                                                        variant="plain" @click="addBookmark">()
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>

                        <!--About Tab-->
                        <v-tabs-window-item value="tab-2">
                            <section data-bs-version="5.1" class="features1 cid-sBXVhMMeXw" id="features2-2k">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-12 col-md-6 col-lg-3">
                                            <div class="card-wrapper">
                                                <div class="card-box align-center">
                                                    <h4
                                                        class="card-title align-center mbr-black mbr-fonts-style display-7">
                                                        <strong>
                                                            <v-avatar size="80" rounded="0"
                                                                :image="`${space?.image?.filename_disk}`"></v-avatar>
                                                        </strong><br><br>{{ space?.name }}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3">
                                            <div class="card-wrapper">
                                                <div class="card-box align-center">
                                                    <span class="mbr-iconfont mobi-mbri-calendar mobi-mbri"
                                                        style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                                    <h4
                                                        class="card-title align-center mbr-black mbr-fonts-style display-7">
                                                        <strong>Group
                                                            Created</strong><br><br>{{ new Date(space?.date_created).toLocaleDateString() }}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3">
                                            <div class="card-wrapper">
                                                <div class="card-box align-center">
                                                    <span class="mbr-iconfont mobi-mbri-users mobi-mbri"
                                                        style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                                    <h4
                                                        class="card-title align-center mbr-black mbr-fonts-style display-7">
                                                        <strong># of
                                                            Members</strong><br><br>{{ space?.numberOfMembers }}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3">
                                            <div class="card-wrapper">
                                                <div class="card-box align-center">
                                                    <v-avatar size="50">
                                                        <img :src="`${space?.user_created?.avatar?.filename_disk}`"
                                                            :alt="space?.user_created?.username" />
                                                    </v-avatar>
                                                    <h4
                                                        class="card-title align-center mbr-black mbr-fonts-style display-7">
                                                        <strong>Created By</strong><br><br><a
                                                            :href="`/account/user/${space?.user_created?.username}`"></a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-10">
                                            <div class="card-wrapper">
                                                <div class="card-box align-center">
                                                    <h4 class="card-title align-center mbr-black mbr-fonts-style display-7"
                                                        v-html="space?.description"></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </v-tabs-window-item>

                        <!--Space People-->
                        <v-tabs-window-item value="tab-3">
                            <v-list lines="one">
                                <v-list-item :title="`${space?.numberOfMembers} Members`"></v-list-item>
                            </v-list>

                            <v-text-field label="Find a Member" prepend-inner-icon="fas fa-search" variant="solo">
                            </v-text-field>

                            <v-list lines="two">
                                <h5>Creator of {{ space?.name }}</h5>
                                <v-list-item>
                                    <v-row align="center" class="spacer" no-gutters>
                                        <v-col cols="4" sm="2" md="1">
                                            <v-avatar size="50">
                                                <img :src="`${space?.user_created?.avatar?.filename_disk}`"
                                                    :alt="space?.user_created?.username" />
                                            </v-avatar>
                                        </v-col>

                                        <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                            <p>{{ space?.user_created?.username }}</p>
                                        </v-col>

                                        <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                                            <v-btn prepend-icon="fas fa-user-plus" color="primary">Add Friend</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                            </v-list>

                            <v-list lines="two">
                                <h5>Admins of {{ space?.name }}</h5>
                                <v-list-item v-for="admins in space?.space_admins?.space_admin_id" :key="admins">
                                    <v-row align="center" class="spacer" no-gutters
                                        v-for="admins in admins?.users?.directus_users_id" :key="admins">
                                        <v-col cols="4" sm="2" md="1">
                                            <v-avatar size="50">
                                                <img :src="`${admins?.avatar?.filename_disk}`"
                                                    :alt="admins?.username" />
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
                                <h5>Moderators of {{ space?.name }}</h5>
                                <v-list-item v-for="mods in space?.space_mods?.space_admin_id" :key="mods">
                                    <v-row align="center" class="spacer" no-gutters
                                        v-for="mods in mods?.users?.directus_users_id" :key="mods">
                                        <v-col cols="4" sm="2" md="1">
                                            <v-avatar size="50">
                                                <img :src="`${mods?.avatar?.filename_disk}`" :alt="mods?.username" />
                                            </v-avatar>
                                        </v-col>

                                        <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                            <p>{{ mods?.username }}</p>
                                        </v-col>

                                        <v-col class="text-no-wrap text-left" cols="5" sm="3">
                                            <p>mods?.description</p>
                                        </v-col>

                                        <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                                            <v-btn prepend-icon="fas fa-user-plus" color="primary">Add Friend</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                            </v-list>

                            <v-list lines="two">
                                <h5>All Members of {{ space?.name }}</h5>
                                <v-list-item v-for="members in space?.user_created" :key="members">
                                    <v-row align="center" class="spacer" no-gutters>
                                        <v-col cols="4" sm="2" md="1">
                                            <v-avatar size="50">
                                                <img :src="`${members?.avatar?.filename_disk}`"
                                                    :alt="members?.username" />
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
                        <v-tabs-window-item value="tab-4">
                            <v-card class="mx-auto" max-width="400">
                                <img class="align-end text-white" height="200" :src="`${space?.media?.filename_disk}`"
                                    :alt="space?.name" cover />
                            </v-card>
                        </v-tabs-window-item>

                        <!--Space Products-->
                        <v-tabs-window-item value="tab-5">
                            <section class="features3 cid-sBXVblMrWB" id="features3-2j">
                                <div class="container" v-for="products in space?.products?.products_id"
                                    :key="products?.id">
                                    <productCard :product="products" />
                                </div>
                            </section>
                        </v-tabs-window-item>

                        <!--Space Events-->
                        <v-tabs-window-item value="tab-6">
                            <section class="features3 cid-sBXVblMrWB" id="features3-2j">
                                <div class="container" v-for="products in space?.products?.products_id"
                                    :key="products?.id">
                                    <relatedevents :product="products" />
                                </div>
                            </section>
                        </v-tabs-window-item>

                        <!--Settings-->
                        <v-tabs-window-item value="tab-7">
                            <settings :id="groupId" />
                        </v-tabs-window-item>
                    </v-window>
                </v-tabs-window>
            </v-card-text>
        </v-card>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                //url: process.env.DIRECTUS_URL,
                groupId: this.$route.params.id
            }
        },
    }
</script>

<script setup>
    import {
        useQuery
    } from '@vue/apollo-composable'
    //import profilebar from '~/components/menus/profilebar.vue'
    import member from '~/components/cms/related/member.vue'
    import comments from '~/components/cms/social/comments.vue'
    import settings from '~/components/crud/update/update-space.vue'
    import productCard from '~/components/commerce/commerce/product/productCard.vue'
    import shorts from '~/components/cms/related/shorts.vue'
    import post from '~/components/cms/related/posts.vue'
    import relatedevents from '~/components/commerce/related/relatedevents.vue'
    import {
        getGroupById
    } from '~/composables/cms/social/getGroups'; // Import the composable function
    import group from '~/graphql/cms/queries/id/group'
    import {
        ref
    } from 'vue'

    const tab = ref(null);
    const route = useRoute();

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: space
    } = await useAsyncData('spaces', () => {
        return $directus.request($readItem('spaces', route.params.id))
    })

    useHead({
        title: computed(() => space.value?.spaces?.name || 'Space Page')
    })

    definePageMeta({
        middleware: ['authenticated'],
    }) /**/
</script>