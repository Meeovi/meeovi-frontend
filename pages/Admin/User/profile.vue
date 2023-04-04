<template>
    <div>
        <profilebar />
        <section data-bs-version="5.1" class="people5 cid-tApxFdIkda" id="people5-5q">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 col-lg-6">
                        <div class="right-side">
                            <h5 class="mbr-section-title mbr-fonts-style display-2">
                                <strong>About the host</strong></h5>
                            <p class="mbr-text mbr-fonts-style display-4">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim aliquam.
                                Gravida augue
                                arcu duis turpis nisl. Sed tellus quis nisl, est ridiculus. Gravida faucibus in ut
                                hendrerit.
                                Eget sed sit.
                                <br>
                                <br>Egestas pretium aenean pharetra magna ac placerat vestibulum. Nulla pharetra diam
                                sit amet
                                nisl suscipit adipiscing bibendum.</p>
                            <div class="button-align">
                                <div class="mbr-section-btn"><a class="btn btn-primary display-4" href=""><span
                                            class="mobi-mbri mobi-mbri-plus mbr-iconfont mbr-iconfont-btn"></span>Follow</a>

                                    <a class="btn btn-secondary display-4" href="">Edit Profile</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="left-side">
                            <div class="shadow">
                                <img src="../../../assets/images/team1.jpg" alt="" class="align">
                                <h5 class="card-title mbr-fonts-style display-2">
                                    <strong>Johanna Carter</strong></h5>
                                <h5 class="card-subtitle mbr-fonts-style display-4">
                                    @Creator</h5>
                                <h5 class="card-text mbr-fonts-style display-4">London, England&nbsp; <a href="/"
                                        class="text-primary">meeovi.com</a>&nbsp; Joined October 1, 1986<br><a href="/"
                                        class="text-primary">43</a> Following <a href="/" class="text-primary">19</a>
                                    Followers</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <v-card>
            <v-tabs v-model="tab" bg-color="transparent" fixed-tabs center-active>
                <v-tab value="one">Products</v-tab>
                <v-tab value="two">Comments</v-tab>
                <v-tab value="three">Media</v-tab>
                <v-tab value="four">Likes</v-tab>
                <v-tab value="five">Recommendations</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <products />
                    </v-window-item>

                    <v-window-item value="two">
                        <replies />
                    </v-window-item>

                    <v-window-item value="three">
                        <media />
                    </v-window-item>

                    <v-window-item value="four">
                        <likes />
                    </v-window-item>

                    <v-window-item value="five">
                        <recommendations />
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import profilebar from '../../../components/Menus/profilebar.vue'
    import products from '../../../components/Profile/products.vue'
    import replies from '../../../components/Profile/replies.vue'
    import media from '../../../components/Profile/media.vue'
    import likes from '../../../components/Profile/likes.vue'
    import recommendations from './recommendations.vue'
    
    export default {
        components: {
            profilebar,
            products,
            replies,
            media,
            likes,
            recommendations
        },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'My Profile',
    })
</script>