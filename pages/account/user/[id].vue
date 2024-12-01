<template>
    <div>
        <!--<profilebar />-->
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
                                    <nuxt-img loading="lazy" :src="`${user?.picture}`" :alt="user?.username" />
                                </div>
                            </div>
                            <div class="text-wrap align-left">
                                <h4 class="mbr-text-name mbr-fonts-style display-5">
                                    <strong>@{{ user?.username }}</strong>
                                </h4>
                                <h4 class="mbr-text mbr-fonts-style display-7" style="">
                                    <v-list style="background: transparent; color: white;">
                                        <v-list-item title="Member Since">{{ user?.created_at }}</v-list-item>
                                    </v-list>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <v-card variant="text">
            <v-tabs v-model="tab" bg-color="transparent" align-tabs="center">
                <v-tab value="one">Posts</v-tab>
                <v-tab value="two">Followers</v-tab>
                <v-tab value="three">Products</v-tab>
                <v-tab value="four">Comments</v-tab>
                <v-tab value="five">Media</v-tab>
                <v-tab value="six">Likes</v-tab>
                <v-tab value="seven">Archives</v-tab>
                <v-tab value="eight"><v-btn variant="text" href="/account/user/settings" prepend-icon="fas fa-gear">Settings</v-btn></v-tab>
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
                        <replies />
                    </v-window-item>

                    <v-window-item value="five">
                        <media />
                    </v-window-item>

                    <v-window-item value="six">
                        <likes />
                    </v-window-item>

                    <v-window-item value="seven">
                        <archives />
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import profilebar from '~/components/menus/profilebar.vue'
import posts from '~/components/pages/profile/posts.vue'
import followersfollowing from '~/components/pages/profile/followersfollowing.vue'
import products from '~/components/pages/profile/products.vue'
import replies from '~/components/pages/profile/replies.vue'
import media from '~/components/pages/profile/media.vue'
import likes from '~/components/pages/profile/likes.vue'

//const user = useLogtoUser();

/*import { useFetch } from '#imports'

const route = useRoute()
const { data: user, error } = await useFetch(`/api/commerce/customers/${route.params.id}`)

if (error && error.value.statusCode === 404) {
  // Handle not found
} */

    useHead({
        title: user?.username,
    })

    definePageMeta({
        auth: false,
        middleware: ['authenticated'],
        layout: "nolive",
    });
</script>