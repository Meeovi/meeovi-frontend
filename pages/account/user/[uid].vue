<template>
    <div>
        <!--<LowerBar /> -->
        <div v-if="user" class="accountPage">
            <section data-bs-version="5.1" class="people5 cid-uHg5WZJiwK" id="people5-au">
                <div class="container-fluid">
                    <div class="row justify-content-between" v-if="user.isLoggedIn">
                        <div class="col-12 col-lg-6">
                            <div class="right-side">
                                <h5 class="mbr-section-title mbr-fonts-style display-2">
                                    <strong>About the host</strong>
                                </h5>
                                <p class="mbr-text mbr-fonts-style display-4">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim aliquam.
                                    Gravida augue
                                    arcu duis turpis nisl. Sed tellus quis nisl, est ridiculus. Gravida faucibus in ut
                                    hendrerit.
                                    Eget sed sit.
                                    <br>
                                    <br>Egestas pretium aenean pharetra magna ac placerat vestibulum. Nulla pharetra
                                    diam sit amet
                                    nisl suscipit adipiscing bibendum.
                                </p>
                                <div class="button-align">
                                    <div class="mbr-section-btn">
                                        <a class="btn btn-primary display-4" href="">Subscribe</a>

                                        <a class="btn btn-secondary display-4" href="">About the host</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="left-side">
                                <div class="shadow">
                                    <NuxtImg class="userProfileAvatar align" loading="lazy" :src="`${user?.picture}`"
                                        :alt="user?.username" />
                                    <h5 class="card-title mbr-fonts-style display-2">
                                        <strong>@{{ user?.username }}</strong>
                                    </h5>
                                    <OnlineStatus class="card-subtitle mbr-fonts-style display-4" :show-text="false" />
                                    <h5 class="card-text mbr-fonts-style display-4">Member Since: {{ user?.created_at }}
                                    </h5>
                                    <div class="mbr-social-likes">
                                        <span class="btn btn-social socicon-bg-youtube youtube mx-2">
                                            <span class="mbr-iconfont socicon-youtube socicon"></span>
                                        </span>
                                        <span class="btn btn-social socicon-bg-facebook facebook mx-2">
                                            <span class="mbr-iconfont socicon-facebook socicon"></span>
                                        </span>
                                        <span class="btn btn-social twitter socicon-bg-twitter mx-2">
                                            <span class="mbr-iconfont socicon-twitter socicon"></span>
                                        </span>
                                        <span class="btn btn-social pinterest socicon-bg-pinterest mx-2">
                                            <span class="mbr-iconfont socicon-pinterest socicon"></span>
                                        </span>
                                        <span class="btn btn-social mailru socicon-bg-mail mx-2">
                                            <span class="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
                                        </span>
                                    </div>
                                    <!-- Conditionally render the follow button -->
                                    <followButton v-if="user.id !== loggedInUserId" :entityId="user.id"
                                        entityType="user" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <v-card variant="text">
                <v-tabs v-model="tab" bg-color="transparent" align-tabs="center">
                    <div v-for="(menu, index) in profile?.menus" :key="index">
                        <v-tab :value="menu?.value" v-if="menu?.active === 'Active'">{{ menu?.name }}</v-tab>
                    </div>

                    <div v-for="(menu, index) in profile?.submenus" :key="index">
                        <v-tab :value="menu?.value"><v-btn variant="text" :href="menu?.url"
                                :prepend-icon="`fas fa-${menu?.icon}`">{{ menu?.name }}</v-btn></v-tab>
                    </div>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item :value="profile?.menus[0]?.value">
                            <v-row>
                                <v-col cols="4" v-for="(posts, index) in myposts" :key="index" style="margin: 8px;">
                                    <post :post="posts" />
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="profile?.menus[1]?.value">
                            <replies />
                        </v-window-item>

                        <v-window-item :value="profile?.menus[2]?.value">
                            <media />
                        </v-window-item>

                        <v-window-item :value="profile?.menus[3]?.value">
                            <likes />
                        </v-window-item>

                        <v-window-item :value="profile?.menus[4]?.value">
                            <v-row style="padding-top: 15px;">
                                <v-col cols="4" v-for="(shorts, index) in myvibez" :key="index">
                                    <shorts :short="shorts" />
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="profile?.menus[5]?.value">
                            <archives />
                        </v-window-item>

                        <v-window-item :value="profile?.submenus[2]?.value">
                            <settings />
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import followButton from '~/components/partials/cms/followButton.vue'
    import post from '~/components/feeds/posts.vue'
    import shorts from '~/components/vibez/shorts.vue'
    import replies from '~/components/pages/profile/replies.vue'
    import media from '~/components/pages/profile/media.vue'
    import likes from '~/components/pages/profile/likes.vue'
    import archives from '~/components/pages/profile/archives.vue'
    import settings from '~/components/account/settings.vue'
    import OnlineStatus from '~/components/partials/cms/onlineStatus.vue'
    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const {
        $directus,
        $readItem,
        $readItems
    } = useNuxtApp()

    const userDisplayName = computed(() => {
        return userStore.name || userStore.username || 'User'
    })

    const user = ref(null); // User being viewed
    const loggedInUserId = ref(null); // Logged-in user ID from Firebase Auth
    const tab = ref(null);
    const route = useRoute()

    const {
        data: profile
    } = await useAsyncData('profile', () => {
        return $directus.request($readItem('navigation', '36', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: myvibez
    } = await useAsyncData('myvibez', () => {
        return $directus.request($readItems('shorts', {
            filter: {
                creator: {
                    _eq: `${userStore.user.displayName}`
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: myposts
    } = await useAsyncData('myposts', () => {
        return $directus.request($readItems('posts', {
            filter: {
                username: {
                    _eq: `${userStore.user.displayName}`
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    // Get the logged-in user's ID
    onMounted(() => {
        const currentUser = $firebaseAuth.currentUser;
        if (currentUser) {
            loggedInUserId.value = currentUser.uid;
        }
    });

    useHead({
        title: userStore?.user?.displayName || 'User Profile',
    })

    definePageMeta({
        auth: false,
        middleware: ['authenticated'],
        layout: "nolive",
    });
</script>