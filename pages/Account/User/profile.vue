<template>
    <div class="contentPage">
        <profilebar />
        <section data-bs-version="5.1" class="people3 cid-u1nMLE9Ke9 mbr-fullscreen mbr-parallax-background"
            id="apeople3-6r">

            <div class="mbr-overlay" style="opacity: 0; background-color: rgb(255, 255, 255);">
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <div class="content-container">
                            <div class="img-wrap">
                                <div class="item-img">
                                    <img src="assets/images/team4.jpg">
                                </div>
                            </div>
                            <div class="text-wrap align-left">
                                <h4 class="mbr-text-name mbr-fonts-style display-5">
                                    <strong>{{ customer?.firstname }} {{ customer?.lastname }}</strong>
                                </h4>
                                <h4 class="mbr-text mbr-fonts-style display-7" style="">
                                    <v-list style="background: transparent; color: white;">
                                        <v-list-item title="Member Since">{{ customer?.created_at }}</v-list-item>
                                    </v-list>
                                </h4>
                                <h4 class="mbr-text mbr-fonts-style display-7">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam que.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <v-card variant="text">
            <v-tabs v-model="tab" bg-color="transparent">
                <v-tab value="one">Posts</v-tab>
                <v-tab value="two">Followers</v-tab>
                <v-tab value="three">Products</v-tab>
                <v-tab value="four">Comments</v-tab>
                <v-tab value="five">Media</v-tab>
                <v-tab value="six">Likes</v-tab>
                <v-tab value="seven">Bookmarks</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <posts />
                    </v-window-item>

                    <v-window-item value="two">
                        <followers />
                    </v-window-item>

                    <v-window-item value="three">
                        <products />
                    </v-window-item>

                    <v-window-item value="four">
                        <comments />
                    </v-window-item>

                    <v-window-item value="five">
                        <media />
                    </v-window-item>

                    <v-window-item value="six">
                        <likes />
                    </v-window-item>

                    <v-window-item value="seven">
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
        }),
    }
</script>

<script setup>
const query = gql `
query MyQuery {
  customer {
    created_at
    firstname
    lastname
    prefix
    suffix
    taxvat
  }
}
`

    const {
        data
    } = useAsyncQuery(query);

    useHead({
        title: 'My Profile',
    })
</script>