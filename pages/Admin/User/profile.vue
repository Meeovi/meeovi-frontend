<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-card max-height="500" variant="text" class="profileBanner"><img
                        src="../../../assets/images/jumbotron.jpg" alt="User Cover" cover /></v-card>

                <v-card variant="text" class="profileAvatar">
                    <v-avatar size="180" class="avatarBorder"><img src="../../../assets/images/face6.jpg"
                            alt="User Avatar"></v-avatar>
                    <ul class="profileInfo">
                        <li class="profileUsername">Lorem Ipusm (@Lorem)</li>
                        <li>4.5M Followers &bull; 35k Following</li>
                        <li><a href="">www.website.com</a></li>
                    </ul>

                    <ul class="profileActions">
                        <li>
                            <v-btn>Follow</v-btn>
                        </li>
                        <li>
                            <v-btn prepend-icon="fas fa-plus">Add a Story</v-btn>
                        </li>
                        <li>
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props">
                                        <v-icon icon="fas fa-caret-down"></v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title><a href="">Edit Profile</a></v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </li>
                    </ul>

                   <v-border></v-border> 
                </v-card>

            </v-col>

            <v-col cols="12">

            </v-col>
        </v-row>

        <v-card variant="text">
            <v-tabs v-model="tab" bg-color="transparent">
                <v-tab value="one">Posts</v-tab>
                <v-tab value="two">About</v-tab>
                <v-tab value="three">Followers</v-tab>
                <v-tab value="four">Products</v-tab>
                <v-tab value="five">Comments</v-tab>
                <v-tab value="six">Media</v-tab>
                <v-tab value="seven">Likes</v-tab>
                <v-tab value="eight">Bookmarks</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <posts />
                    </v-window-item>

                    <v-window-item value="two">
                        <about />
                    </v-window-item>

                    <v-window-item value="two">
                        <followers />
                    </v-window-item>

                    <v-window-item value="four">
                        <products />
                    </v-window-item>

                    <v-window-item value="five">
                        <comments />
                    </v-window-item>

                    <v-window-item value="six">
                        <media />
                    </v-window-item>

                    <v-window-item value="seven">
                        <likes />
                    </v-window-item>

                    <v-window-item value="eight">
                        <bookmarks />
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import profilebar from '../../../components/Menus/profilebar.vue'
    import posts from '../../../components/Pages/Profile/posts.vue'
    import about from '../../../components/Pages/Profile/aboutProfile.vue'
    import followersfollowing from '../../../components/Pages/Profile/followersfollowing.vue'
    import products from '../../../components/Pages/Profile/products.vue'
    import comments from '../../../components/user/comments.vue'
    import media from '../../../components/Pages/Profile/media.vue'
    import likes from '../../../components/Pages/Profile/likes.vue'
    import bookmarks from '../../../components/Pages/Profile/bookmarks.vue'

    export default {
        components: {
            profilebar,
            posts,
            about,
            followersfollowing,
            products,
            comments,
            media,
            likes,
            bookmarks
        },
        data: () => ({
            tab: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
    import customer from '../../../apollo/queries-mutations_subscriptions/queries/customers_by_id.gql'

    const {
        data
    } = useAsyncQuery(customer);
    const profile = data ? data.customer : [];

    useHead({
        title: 'My Profile',
    })
</script>