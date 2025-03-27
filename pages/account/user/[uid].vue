<template>
    <div>
        <!--<LowerBar /> -->
        <div v-if="user" class="accountPage">
            <section data-bs-version="5.1" class="people3 cid-u1nMLE9Ke9 mbr-fullscreen mbr-parallax-background"
                id="apeople3-6r">

                <div class="mbr-overlay" style="opacity: 0; background-color: rgb(255, 255, 255);">
                </div>
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-12">
                            <div class="content-container" v-if="user.isLoggedIn">
                                <div class="img-wrap">
                                    <div class="item-img">
                                        <NuxtImg class="userProfileAvatar" loading="lazy" :src="`${user?.picture}`"
                                            :alt="user?.username" />
                                    </div>
                                </div>
                                <div class="text-wrap align-left">
                                    <h4 class="mbr-text-name mbr-fonts-style display-5">
                                        <strong>@{{ user?.username }}</strong>
                                    </h4>
                                    <h4 class="mbr-text mbr-fonts-style display-7">
                                        <v-list
                                            style="background: transparent; color: white; left: -15px; position: relative;">
                                            <v-list-item>
                                                <OnlineStatus :show-text="false" />
                                            </v-list-item>
                                            <v-list-item title="Member Since">{{ user?.created_at }}</v-list-item>
                                        </v-list>
                                    </h4>

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