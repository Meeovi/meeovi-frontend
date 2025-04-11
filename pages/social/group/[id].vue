<template>
    <div class="contentPage">
        <!---->

        <v-card elevation="0">
            <NuxtImg loading="lazy" class="align-end text-white" height="250"
                :src="`${$directus.url}assets/${space?.image?.filename_disk}`" :alt="space?.name" cover />
            <v-toolbar color="info" dark>
                <v-toolbar-title
                    style="width: 100%; text-align: center; font-size: 30px;">{{ space?.name }}</v-toolbar-title>
            </v-toolbar>
        </v-card>

        <v-card min-height="500px" elevation="0">
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
                    <v-btn variant="text" stacked prepend-icon="fas fa-shop">Media</v-btn>
                </v-tab>

                <v-tab value="tab-5" v-if="space?.type === 'Default'">
                    <v-btn variant="text" stacked prepend-icon="fas fa-photo-film">Products</v-btn>
                </v-tab>

                <v-tab value="tab-6" v-if="space?.type === 'Default'">
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
                        <!--Posts Tab-->
                        <v-tabs-window-item value="tab-1">
                            <v-expansion-panels>
                                <v-expansion-panel title="Create a Post">
                                    <v-expansion-panel-text>
                                        <createpost :spaces_id="groupId" />
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>

                            <!-- Update this section to properly access posts -->

                            <!-- Audio Groups -->
                            <div v-if="space?.type === 'Audio'">
                                <div v-if="space?.posts.length">
                                    <div v-for="post in space.posts" :key="post.id">
                                        <audiogroup :post="post?.posts_id" style="padding-top: 15px;" />
                                    </div>
                                </div>

                                <div v-else style="padding-top: 15px;">
                                    <p style="text-align: center; font-size: 20px;">No audio posts in this space yet</p>
                                </div>
                            </div>

                            <!-- Video Groups -->
                            <div v-if="space?.type === 'Video'">
                                <div v-if="space?.posts.length">
                                    <div v-for="post in space.posts" :key="post.id">
                                        <video loading="lazy"group :post="post?.posts_id" style="padding-top: 15px;" />
                                    </div>
                                </div>

                                <div v-else style="padding-top: 15px;">
                                    <p style="text-align: center; font-size: 20px;">No video posts in this space yet</p>
                                </div>
                            </div>

                            <!-- Default Groups -->
                            <div v-else>
                                <div v-if="space?.posts.length">
                                    <div v-for="post in space.posts" :key="post.id">
                                        <posts :post="post?.posts_id" style="padding-top: 15px;" />
                                    </div>
                                </div>

                                <div v-else style="padding-top: 15px;">
                                    <p style="text-align: center; font-size: 20px;">No posts in this space yet</p>
                                </div>
                            </div>
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
                                                                :image="`${$directus.url}assets/${space?.image?.filename_disk}`"></v-avatar>
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
                                                        <NuxtImg loading="lazy" :src="`${space?.user_created?.avatar?.filename_disk}`"
                                                            :alt="space?.creator" />
                                                    </v-avatar>
                                                    <h4
                                                        class="card-title align-center mbr-black mbr-fonts-style display-7">
                                                        <strong>Created By</strong><br><br><NuxtLink
                                                            :href="`/account/user/${space?.creator}`">{{ space?.creator }}</NuxtLink>
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
                                                <NuxtImg loading="lazy" :src="`${space?.user_created?.avatar?.filename_disk}`"
                                                    :alt="space?.creator" />
                                            </v-avatar>
                                        </v-col>

                                        <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                            <NuxtLink :to="`/account/user/${space?.creator}`">{{ space?.creator }}</NuxtLink>
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
                                                <NuxtImg loading="lazy" :src="`${admins?.avatar?.filename_disk}`"
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
                                                <NuxtImg loading="lazy" :src="`${mods?.avatar?.filename_disk}`" :alt="mods?.username" />
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
                                                <NuxtImg loading="lazy" :src="`${members?.avatar?.filename_disk}`"
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
                                <div v-if="space?.media?.filename_disk"><video loading="lazy" class="align-end text-white" height="200"
                                        :src="`${$directus.url}assets/${space?.media?.filename_disk}`"
                                        :alt="space?.name"></video></div>

                                <div v-else="space?.image?.filename_disk"><NuxtImg loading="lazy" class="align-end text-white" height="200"
                                        :src="`${$directus.url}assets/${space?.image?.filename_disk}`"
                                        :alt="space?.name" cover /></div>

                            </v-card>
                        </v-tabs-window-item>

                        <!--Space Products-->
                        <v-tabs-window-item value="tab-5">
                            <section class="features3 cid-sBXVblMrWB" id="features3-2j">
                                <div class="container" v-for="products in space?.products" :key="products?.id">
                                    <productCard :product="products?.products_id" />
                                </div>
                            </section>
                        </v-tabs-window-item>

                        <!--Space Events-->
                        <v-tabs-window-item value="tab-6">
                            <section class="features3 cid-sBXVblMrWB" id="features3-2j">
                                <div class="container" v-for="products in space?.products" :key="products?.id">
                                    <relatedevents :product="products?.products_id" />
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
    import member from '~/components/contacts/member.vue'
    import createpost from '~/components/feeds/add-post.vue'
    import settings from '~/components/spaces/update-space.vue'
    import productCard from '~/components/product/productCard.vue'
    import shorts from '~/components/vibez/shorts.vue'
    import posts from '~/components/feeds/posts.vue'
    import relatedevents from '~/components/product/relatedevents.vue'
    import audiogroup from '~/components/blocks/audiogroup.vue'
    import videogroup from '~/components/blocks/videogroup.vue'
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
    } = await useAsyncData('space', () => {
        return $directus.request($readItem('spaces', route.params.id, {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    useHead({
        title: computed(() => space?.value?.name || 'Space Page')
    })

    definePageMeta({
        middleware: ['authenticated'],
    }) /**/
</script>