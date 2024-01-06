<template>
    <div class="contentPage">
        <profilebar />
        <section data-bs-version="5.1" class="people5 cid-tApxFdIkda" id="people5-5q">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 col-lg-6">
                        <div class="right-side">
                            <h5 class="mbr-section-title mbr-fonts-style display-2">
                                <strong>{{ profile.username }}</strong></h5>
                            <p class="mbr-text mbr-fonts-style display-4">{{ profile.description }}</p>
                            <div class="button-align">
                                <div class="mbr-section-btn"><a class="btn btn-primary display-4" href=""><span
                                            class="mobi-mbri mobi-mbri-plus mbr-iconfont mbr-iconfont-btn"></span>Follow</a>

                                    <a class="btn btn-secondary display-4" :href="`/admin/user/account`">Edit Profile</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="left-side">
                            <div class="shadow">
                                <img :src="`${url}assets/${profile.image.filename_disk}`" :alt="profile.name" class="align">
                                <h5 class="card-title mbr-fonts-style display-2">
                                    <strong>{{ profile.first_name }} {{ profile.last_name}}</strong></h5>
                                <h5 class="card-subtitle mbr-fonts-style display-4">
                                    @{{profile.username}}</h5>
                                <h5 class="card-text mbr-fonts-style display-4">{{profile.cities.cities_id.name}}&nbsp; <a :href="`${profile.websites.websites_id.url}`"
                                        class="text-primary">{{ profile.websites.websites_id.name}}</a>&nbsp; Joined {{ profile.created_at }}<br><a href="/"
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
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
import customer from '../../../apollo/queries-mutations_subscriptions/queries/customers_by_id.gql'

const { data } = useAsyncQuery(customer);
const profile = data ? data.customer : [];

    useHead({
        title: 'My Profile',
    })
</script>